using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System;

namespace WidgetNas.Pages.Components
{
    public class DateShowModel : PageModel
    {
        public DateShowModel()
        {

        }
        public void OnGet()
        {
            System.Threading.Thread.CurrentThread.CurrentCulture = new System.Globalization.CultureInfo("en-US");
            System.Threading.Thread.CurrentThread.CurrentUICulture = new System.Globalization.CultureInfo("en-US");
            ViewData["CurrentDate"] = DateTime.Now.ToString();
        }
    }
}
