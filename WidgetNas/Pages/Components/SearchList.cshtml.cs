using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Razor.Language.Intermediate;
using SharpCompress.Common;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;

namespace WidgetNas.Pages.Components
{
    [IgnoreAntiforgeryToken]
    public class SearchListModel : PageModel
    {
        public void OnGet()
        {
        }

        public IActionResult OnPost([FromBody] string Keywords)
        {
            Keywords = Keywords.ToLower();

            var result = new ListItem[] {
                new ListItem(){value="FirstName", name = "First Name" },
                new ListItem(){value="LastName",name = "Last Name" },
                new ListItem(){value="Company",name = "Company" },
                new ListItem(){value="Address",name = "Address" },
                new ListItem(){value="City",name = "City" },
                new ListItem(){value="Country",name = "Country" },
                new ListItem(){value="State",name = "State/Province" },
                new ListItem(){value="PostalCode",name = "ZIP/Postal Code" },
                new ListItem(){value="Phone1",name = "Phone 1" },
                new ListItem(){value="Phone2",name = "Phone 2" },
                new ListItem(){value="Email",name = "Email" },
                new ListItem(){value="Web",name = "Web" }
            };
            return new OkObjectResult(result.Where(x => x.name.ToLower().Contains(Keywords)).ToArray());
        }

    }
    internal class ListItem
    {
        public string name { get; set; }
        public string value { get; set; }
    }
}
