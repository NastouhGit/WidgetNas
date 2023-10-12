using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Collections.Generic;
using System.Linq;

namespace WidgetNas.Pages.Components
{
    [IgnoreAntiforgeryToken]
    public class TreeModel : PageModel
    {
        readonly List<TreeItem> data = new();
        public TreeModel()
        {
            data.Add(new TreeItem() { Link = "", Html = "Level 1", Value = "l1", Image = "/images/tools16.png" });
            data.Add(new TreeItem() { Link = "", Html = "Level 2", Value = "l2", Image = "/images/tools16.png" });
            data.Add(new TreeItem() { Link = "", Html = "Level 3", Value = "l3", Image = "/images/tools16.png" });
            data.Add(new TreeItem() { Link = "", Html = "Level 4", Value = "l4", Image = "/images/tools16.png" });

            data[0].Children.Add(new TreeItem() { Link = "", Html = "Sub Level 1", Value = "s1", Image = "/images/tools16.png" });
            data[0].Children.Add(new TreeItem() { Link = "", Html = "Sub Level 2", Value = "s2", Image = "/images/tools16.png" });
            data[0].Children.Add(new TreeItem() { Link = "", Html = "Sub Level 3", Value = "s3", Image = "/images/tools16.png" });

            data[0].Children[0].Children.Add(new TreeItem() { Link = "", Html = "Sub 2 Level 1", Value = "s11", Image = "/images/tools16.png" });
            data[0].Children[0].Children.Add(new TreeItem() { Link = "", Html = "Sub 2 Level 2", Value = "s12", Image = "/images/tools16.png" });
            data[0].Children[0].Children.Add(new TreeItem() { Link = "", Html = "Sub 2 Level 3", Value = "s13", Image = "/images/tools16.png" });
            data[0].Children[0].Children.Add(new TreeItem() { Link = "", Html = "Sub 2 Level 4", Value = "s14", Image = "/images/tools16.png" });

        }
        public void OnGet()
        {
        }

        public IActionResult OnPost()
        {
            return new OkObjectResult(data);
        }

        public IActionResult OnPostFilter([FromBody] string Keywords)
        {
            Keywords = Keywords.ToLower();

            var dp = Filter(data, Keywords);
            return new OkObjectResult(dp);
        }

        private List<TreeItem> Filter(List<TreeItem> data, string keywords)
        {
            var dt = new List<TreeItem>();
            foreach (var item in data)
            {
                var t = Filter(item.Children, keywords);
                if (item.Html.Contains(keywords, StringComparison.OrdinalIgnoreCase) || t.Count>0)
                    dt.Add(item);
      
            }
            return dt;
        }

        private class TreeItem
        {
            public string Html { get; set; }
            public string Link { get; set; }
            public string Value { get; set; }
            public string Image { get; set; }
            public List<TreeItem> Children { get; set; } = new List<TreeItem>();

        }
    }
}
