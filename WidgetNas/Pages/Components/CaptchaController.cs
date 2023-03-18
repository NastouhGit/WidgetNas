using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Runtime.Versioning;
using System.Web;

namespace WidgetNas.Pages.Components
{
    [Route("api/[controller]")]
    public class CaptchaController : Controller
    {
        [HttpPost]
        [SupportedOSPlatform("windows")]
        [SupportedOSPlatform("linux")]
        public Dictionary<string, string> GetCaptcha([FromBody] Dictionary<string, object> Model)
        {
            Dictionary<string, string> Ret = new Dictionary<string, string>();
            var c = new Captcha();
            if (Model["Method"].ToString() == "Captcha")
            {
                if (Model.ContainsKey("Width") && Model.ContainsKey("Height"))
                    if (int.Parse(Model["Width"].ToString()) > 0 && int.Parse(Model["Height"].ToString()) > 0)
                    {
                        c.Width = int.Parse(Model["Width"].ToString());
                        c.Height = int.Parse(Model["Height"].ToString());
                    }
                if (Model.ContainsKey("Length") && int.Parse(Model["Length"].ToString()) > 4)
                    c.Length = int.Parse(Model["Length"].ToString());
                if (Model.ContainsKey("UniqeLetter"))
                    c.UniqeLetter = bool.Parse(Model["UniqeLetter"].ToString());

                c.GenerateValue();
                c.Draw();

                Ret.Add("Image", c.Image);
                Ret.Add("Key", c.Key);
            }
            else if (Model["Method"].ToString() == "Validate")
            {
                Ret.Add("Validate", c.Validate(Model["Key"].ToString(), Model["Value"].ToString()) ? "true" : "false");
            }
            return Ret;
        }
    }
}

