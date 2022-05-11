using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Web;

namespace WidgetNas.Pages.Components
{
    [Route("api/[controller]")]
    public class FileListController : Controller
    {
        private string BasePath;
        public FileListController(IWebHostEnvironment webHostEnvironment)
        {
            string contentRootPath = webHostEnvironment.ContentRootPath;

            BasePath = Path.Combine(contentRootPath, "wwwroot", "TempFiles");

        }

        [HttpPost]
        public object Post([FromBody] Dictionary<string, string> cmd)
        {
            try
            {
                if (cmd.ContainsKey("command"))
                    if (cmd["command"].Equals("getfolders", StringComparison.OrdinalIgnoreCase))
                        return GetFolders(cmd["path"]);
                    else if (cmd["command"].Equals("getfiles", StringComparison.OrdinalIgnoreCase))
                        return GetFiles(cmd["path"]);
                    else if (cmd["command"].Equals("createfolder", StringComparison.OrdinalIgnoreCase))
                        return CreateFolder(cmd["path"]);
                    else if (cmd["command"].Equals("rename", StringComparison.OrdinalIgnoreCase))
                        return Rename(cmd["source"], cmd["destination"]);
                    else if (cmd["command"].Equals("delete", StringComparison.OrdinalIgnoreCase))
                        return Delete(cmd["source"]);
                    else if (cmd["command"].Equals("copy", StringComparison.OrdinalIgnoreCase))
                        return CopyMove(cmd["source"], cmd["destination"], true);
                    else if (cmd["command"].Equals("move", StringComparison.OrdinalIgnoreCase))
                        return CopyMove(cmd["source"], cmd["destination"], false);
                    else if (cmd["command"].Equals("compress", StringComparison.OrdinalIgnoreCase))
                        return Compress(cmd["sourcepath"], cmd["source"], cmd["destination"]);
                    else if (cmd["command"].Equals("decompress", StringComparison.OrdinalIgnoreCase))
                        return Decompress(cmd["source"]);

            }
            catch (Exception)
            {
            }
            return null;
        }

        [HttpPut]
        public bool Put([FromForm] IFormCollection formData)
        {
            
            if (formData.Files.Count > 0)
            {
                var destination = (formData.ContainsKey("destination") ? formData["destination"].ToString() : "").Trim('\\');
                return Upload(destination, formData.Files);
            }
            return false;
        }

        [HttpGet]
        public void Get()
        {
            //--------------------------
            //Check User Access Control
            //--------------------------

            var cmd = HttpUtility.UrlDecode(HttpContext.Request.QueryString.ToString()).Substring(1).Trim('"');

            try
            {

                var data = Path.Combine(BasePath, cmd).Replace("\\\\","\\");
                HttpContext.Response.ContentType = "application/octet-stream";
                HttpContext.Response.Headers.Add("Content-Disposition", "attachment;filename=" + new FileInfo(data).Name);
                using (var f = System.IO.File.OpenRead(data))
                {
                    int KB = 1024 * 4;
                    while (true)
                    {
                        byte[] b;
                        if (f.Length - f.Position > KB)
                            b = new byte[KB];
                        else
                            b = new byte[f.Length - f.Position];
                        f.Read(b, 0, b.Length);
                        HttpContext.Response.Body.WriteAsync(b);
                        if (b.Length != KB)
                            break;
                    }
                }
                HttpContext.Response.Body.Flush();
            }
            catch (Exception)
            {
            }
        }

        private string[] GetFolders(string path)
        {
            //--------------------------
            //Check User Access Control
            //--------------------------

            path = path.Trim('\\');
            try
            {
                var d = Directory.GetDirectories(Path.Combine(BasePath, path ?? ""), "*.*", SearchOption.AllDirectories);
                for (int i = 0; i < d.Length; i++)
                    d[i] = d[i].Substring(BasePath.Length + 1);
                return d.OrderBy(x => x).ToArray();

            }
            catch (Exception)
            {
            }
            return null;
        }
        private object GetFiles(string path)
        {
            //--------------------------
            //Check User Access Control
            //--------------------------

            try
            {
                path = path.Trim('\\');
                var d = Directory.GetFiles(Path.Combine(BasePath, path ?? ""));
                List<SendFileInfo> ret = new List<SendFileInfo>();
                for (int i = 0; i < d.Length; i++)
                {
                    FileInfo f = new FileInfo(d[i]);
                    ret.Add(new SendFileInfo()
                    {
                        filename = f.Name,
                        ext = f.Extension,
                        date = f.LastWriteTime.ToUniversalTime().ToString(),
                        size = GetSize(f.Length)
                    });
                }
                return ret;

            }
            catch (Exception)
            {
            }
            return null;
        }

        private string GetSize(long length)
        {
            if (length <= 1024)
                return length.ToString() + "B";
            else if (length <= 1024 * 1024)
                return (length / 1024).ToString() + "KB";
            else if (length <= 1024 * 1024 * 1024)
                return (length / 1024 / 1024).ToString() + "MB";
            else if (length <= 1024L * 1024 * 1024 * 1024)
                return (length / 1024 / 1024 / 1024).ToString() + "GB";
            return length.ToString();
        }

        private class SendFileInfo
        {
            public string filename { get; set; }
            public string ext { get; set; }
            public string size { get; set; }
            public string date { get; set; }
        }

        private bool CreateFolder(string path)
        {
            //--------------------------
            //Check User Access Control
            //--------------------------

            path = Path.Combine(BasePath, path.Trim().Trim('\\').Trim());
            if (Directory.Exists(path))
                return false;
            try
            {
                Directory.CreateDirectory(path);
                return true;
            }
            catch (Exception)
            {
            }
            return false;
        }
        private bool Rename(string source, string destination)
        {
            //--------------------------
            //Check User Access Control
            //--------------------------

            source = source.Replace("\r", "");
            destination = destination.Replace("\r", "");
            var src = source.Split('\n');
            var dst = destination.Split('\n');
            bool HaveError = false;
            for (int i = 0; i < src.Length; i++)
            {
                src[i] = Path.Combine(BasePath, src[i]);
                dst[i] = Path.Combine(BasePath, dst[i]);
                try
                {
                    if (Directory.Exists(src[i]))
                    {
                        Directory.Move(src[i], dst[i]);
                    }
                    else if (System.IO.File.Exists(src[i]))
                    {
                        System.IO.File.Move(src[i], dst[i]);
                    }
                }
                catch (Exception)
                {
                    HaveError = true;
                }
            }
            return !HaveError;
        }
        private bool CopyMove(string source, string destination, bool Copy)
        {
            //--------------------------
            //Check User Access Control
            //--------------------------

            source = source.Replace("\r", "");
            var src = source.Split('\n');
            var dst = Path.Combine(BasePath, destination.Trim('\\'));
            bool ret = true;
            for (int i = 0; i < src.Length; i++)
            {
                src[i] = Path.Combine(BasePath, src[i]);
                try
                {
                    if (Directory.Exists(src[i]))
                    {
                        var dir = new DirectoryInfo(src[i]);
                        ret |= CopyMoveDirectory(src[i], Path.Combine(dst, dir.Name), Copy);
                        if (!Copy)
                        {
                            if (Directory.GetFiles(dir.FullName).Length == 0 && Directory.GetDirectories(dir.FullName).Length == 0)
                                Directory.Delete(dir.FullName);
                        }
                    }
                    else if (System.IO.File.Exists(src[i]))
                    {
                        var f = new FileInfo(src[i]);
                        if (Copy)
                            System.IO.File.Copy(src[i], Path.Combine(dst, f.Name), true);
                        else
                            System.IO.File.Move(src[i], Path.Combine(dst, f.Name));
                    }
                }
                catch (Exception)
                {
                    ret = false;
                }
            }
            return ret;
        }
        private bool CopyMoveDirectory(string sourceDir, string destinationDir, bool Copy)
        {
            var dir = new DirectoryInfo(sourceDir);

            if (!dir.Exists)
                return false;

            try
            {
                DirectoryInfo[] dirs = dir.GetDirectories();

                Directory.CreateDirectory(destinationDir);

                foreach (FileInfo file in dir.GetFiles())
                {
                    string targetFilePath = Path.Combine(destinationDir, file.Name);
                    if (Copy)
                        file.CopyTo(targetFilePath, true);
                    else
                    {
                        if (System.IO.File.Exists(targetFilePath)) System.IO.File.Delete(targetFilePath);
                        file.MoveTo(targetFilePath);
                    }
                }

                foreach (DirectoryInfo subDir in dirs)
                {
                    string newDestinationDir = Path.Combine(destinationDir, subDir.Name);
                    if (!CopyMoveDirectory(subDir.FullName, newDestinationDir, Copy))
                        return false;
                    if (!Copy)
                    {
                        if (Directory.GetFiles(subDir.FullName).Length == 0 && Directory.GetDirectories(subDir.FullName).Length == 0)
                            Directory.Delete(subDir.FullName);
                    }
                }



            }
            catch (Exception)
            {
                return false;
            }
            return true;
        }
        private bool Delete(string source)
        {
            //--------------------------
            //Check User Access Control
            //--------------------------

            source = source.Replace("\r", "");
            var src = source.Split('\n');
            bool HaveError = false;
            for (int i = 0; i < src.Length; i++)
            {
                src[i] = Path.Combine(BasePath, src[i]);
                try
                {
                    if (Directory.Exists(src[i]))
                    {
                        Directory.Delete(src[i], true);
                    }
                    else if (System.IO.File.Exists(src[i]))
                    {
                        System.IO.File.Delete(src[i]);
                    }
                }
                catch (Exception)
                {
                    HaveError = true;
                }
            }
            return !HaveError;
        }
        private bool Upload(string Destination, IFormFileCollection Files)
        {
            //--------------------------
            //Check User Access Control
            //--------------------------

            var path = Path.Combine(BasePath, Destination);
            bool ret = true;
            for (int i = 0; i < Files.Count; i++)
            {
                try
                {
                    var file = Files[i];
                    var st = System.IO.File.Create(Path.Combine(path, file.FileName));
                    file.CopyTo(st);
                    st.Close();
                }
                catch (Exception)
                {
                    ret = false;
                }
            }
            return ret;
        }
        private bool Compress(string sourcepath, string source, string destination)
        {
            //--------------------------
            //Check User Access Control
            //--------------------------

            try
            {
                if (!destination.ToLower().EndsWith(".zip"))
                    destination += ".zip";
                destination = Path.Combine(BasePath, sourcepath, destination);
                if (System.IO.File.Exists(destination))
                    System.IO.File.Delete(destination);

                source = source.Replace("\r", "");
                var src = source.Split('\n');

                using (FileStream zipToOpen = new FileStream(destination, FileMode.OpenOrCreate))
                {
                    using (ZipArchive archive = new ZipArchive(zipToOpen, ZipArchiveMode.Update))
                    {
                        for (int i = 0; i < src.Length; i++)
                        {
                            src[i] = Path.Combine(BasePath, sourcepath, src[i]);
                            FileInfo fileToCompress = new FileInfo(src[i]);

                            ZipArchiveEntry readmeEntry = archive.CreateEntry(fileToCompress.Name);

                            using (var s = fileToCompress.OpenRead())
                            using (var o = readmeEntry.Open())
                            {
                                s.CopyTo(o);
                            }
                        }
                    }
                }
            }
            catch (Exception)
            {
                return false;
            }

            return true;
        }
        private bool Decompress(string source)
        {
            //--------------------------
            //Check User Access Control
            //--------------------------

            try
            {
                source = source.Replace("\r", "");
                var src = source.Split('\n');

                for (int i = 0; i < src.Length; i++)
                {
                    src[i] = Path.Combine(BasePath, src[i]);
                    if (System.IO.File.Exists(src[i]))
                    {
                        string destination = new FileInfo(src[i]).DirectoryName;
                        using (ZipArchive archive = ZipFile.Open(src[i], ZipArchiveMode.Update))
                            archive.ExtractToDirectory(destination);
                    }
                }
            }
            catch (Exception)
            {
                return false;
            }

            return true;
        }
    }
}

