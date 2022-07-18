using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Collections.Generic;
using System.Linq;

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
            Dictionary<string,string> result = new Dictionary<string, string>() {
                {"FirstName","First Name" },
                {"LastName","Last Name" },
                {"Company","Company" },
                {"Address","Address" },
                {"City","City" },
                {"Country","Country" },
                {"State","State/Province" },
                {"PostalCode","ZIP/Postal Code" },
                {"Phone1","Phone 1" },
                {"Phone2","Phone 2" },
                {"Email","Email" },
                {"Web","Web" }
            };
            return  new OkObjectResult(result.Where(x => x.Value.ToLower().Contains(Keywords)).ToDictionary(p => p.Key, p => p.Value));
        }
    }
}
