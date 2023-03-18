using System.IO;
using System.Security.Cryptography;
using System;
using System.Text;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Drawing;
using System.ComponentModel;
using System.Runtime.Versioning;

namespace WidgetNas.Pages.Components
{
    public class Captcha
    {
        private string Value = "";
        public string Key { get; set; }
        public string Image { get; set; }
        public string ValidChars { get; set; } = "123456789QWERTYUPASDFGHKZXCVBNMqeruadghb";

        public bool UniqeLetter { get; set; } = true;
        public bool IgnoreCase { get; set; } = true;
        public int Length { get; set; } = 4;

        public int Width { get; set; } = 200;
        public int Height { get; set; } = 80;
        public Captcha()
        {
        }

        [SupportedOSPlatform("windows")]
        [SupportedOSPlatform("linux")]

        public void Draw()
        {
            if (Width<180) Width=180;
            if (Height < 60) Height = 60;
            
            Bitmap b = new Bitmap(Width, Height, PixelFormat.Format24bppRgb);
            using (Graphics g = Graphics.FromImage(b))
            {
                g.Clear(Color.White);
                g.SmoothingMode = SmoothingMode.AntiAlias;
                g.InterpolationMode = InterpolationMode.HighQualityBicubic;
                g.PixelOffsetMode = PixelOffsetMode.HighQuality;

                int step = 10;
                var r = new Random();
                for (int i = 0; i < 30; i++)
                {
                    g.FillEllipse(
                        new SolidBrush(Color.FromArgb(64, r.Next(255), r.Next(255), r.Next(255))),
                        r.Next(step,b.Width- step), r.Next(step,b.Height- step), r.Next(step,  step*2), r.Next(step, step * 2));
                }

                for (int i = -step; i < b.Width; i += step)
                    g.DrawLine(Pens.LightGray, new Point(i + step, 0), new Point(i, b.Height));
                for (int i = -step; i < b.Height; i += step)
                    g.DrawLine(Pens.LightGray, new Point(0, i + step), new Point(b.Width, i));

                StringFormat sf = new StringFormat();
                sf.Alignment = StringAlignment.Center;
                sf.LineAlignment = StringAlignment.Center;
                GraphicsPath gp2 = new GraphicsPath();
                gp2.FillMode = FillMode.Alternate;
                var fnt = new Font(FontFamily.GenericSansSerif, (int)(b.Height * 0.70), FontStyle.Bold);
                while (g.MeasureString(Value, fnt).Width*1.3 >b.Width)
                    fnt = new Font(FontFamily.GenericSansSerif, fnt.Size*0.9f, FontStyle.Bold);

                int X = (Width - (int)(g.MeasureString(Value, fnt).Width*0.8)) / 2;
                float size = Height * 0.70f;

                for (int i = 0; i < Value.Length; i++)
                {
                    string t = Value[i].ToString();
                    var csize = g.MeasureString(t, fnt);
                    int y = b.Height / 2 - r.Next(-b.Height / 6, b.Height / 6);
                    if (y<b.Height-csize.Height) y = (int)(b.Height - csize.Height);
                    Point pt = new Point(X, y);
                    gp2.AddString(t, FontFamily.GenericSansSerif, (int)FontStyle.Bold, size, pt, sf);
                    X += (int)(csize.Width*0.8);
                }

                int warp = 20;
                PointF[] destPts = { new PointF(warp, 0), new PointF(Width + warp, 0), new PointF(-warp, Height), new PointF(Width - warp, Height) };
                gp2.Warp(destPts, new Rectangle(0, 0, Width, Height));

                g.DrawPath(new Pen(Color.FromArgb(160, 0x67, 0x63, 0x2c), 2), gp2);

                step = 8;
                for (int i = -step; i <= b.Width; i += step)
                    g.DrawLine(Pens.LightSteelBlue, new Point(i - step, 0), new Point(i, b.Height));
                for (int i = -step; i <= b.Height; i += step)
                    g.DrawLine(Pens.LightSteelBlue, new Point(0, i - step), new Point(b.Width, i));

               // g.DrawRectangle(Pens.Red, new Rectangle(0, 0, Width - 1, Height - 1));

                g.Flush();
            }
            MemoryStream ms = new MemoryStream();
            b.Save(ms, ImageFormat.Png);
            b.Dispose();
            ms.Seek(0, SeekOrigin.Begin);
            var ar = new byte[ms.Length];
            ms.Read(ar, 0, ar.Length);
            ms.Dispose();
            Image = "data:image/png;base64," + Convert.ToBase64String(ar);
        }

        public bool Validate(string key, string value)
        {
            if (string.IsNullOrEmpty(key) || string.IsNullOrEmpty(value)) return false;
            if (IgnoreCase)
                value = HashString(value.ToUpper());
            else
                value = HashString(value);

            return key == value;
        }
        public void GenerateValue()
        {
            string s = "";
            string chars = ValidChars;
            Random r = new Random();
            for (int i = 0; i < Length; i++)
            {
                int idx = r.Next(0, chars.Length - 1);
                s += chars[idx];
                if (UniqeLetter)
                    chars = chars.Replace(chars[idx].ToString(), "");
            }
            Value = s;
            if (IgnoreCase)
                Key = HashString(s.ToUpper());
            else
                Key = HashString(s);
        }

        private string HashString(string input)
        {
            MD5 md5Hasher = MD5.Create();
            byte[] data = md5Hasher.ComputeHash(Encoding.UTF8.GetBytes(input));
            return BitConverter.ToString(data).Replace("-", "");
        }

    }
}
