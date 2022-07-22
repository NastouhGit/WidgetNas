using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Collections.Generic;
using System.Linq;

namespace WidgetNas.Pages.Components
{
    [IgnoreAntiforgeryToken]
    public class TreeModel : PageModel
    {
        public void OnGet()
        {
        }
        List<treeItem> data = new List<treeItem>() {
                new treeItem(){ index=1, parent=null, type="item", text="Level 1",  value="l1", image="/images/tools16.png"  },
                new treeItem(){ index=2, parent=null, type="item", text="Level 2",  value="l2", image="/images/tools16.png"  },
                new treeItem(){ index=3, parent=null, type="item", text="Level 3",  value="l3", image="/images/tools16.png"  },
                new treeItem(){ index=4, parent=null, type="item", text="Level 4",  value="l4", image="/images/tools16.png"  },

                new treeItem(){ index=5, parent=1, type="item", text="Sub 1",  value="s1", image=""  },
                new treeItem(){ index=6, parent=1, type="item", text="Sub 2",  value="s2", image=""  },
                new treeItem(){ index=7, parent=1, type="item", text="Sub 3",  value="s3", image=""  },
                new treeItem(){ index=8, parent=1, type="item", text="Sub 4",  value="s4", image=""  },

                new treeItem(){ index=9, parent=2, type="item", text="Sub 5",  value="s5", image=""  },
                new treeItem(){ index=10, parent=2, type="item", text="Sub 6",  value="s6", image=""  },
                new treeItem(){ index=11, parent=3, type="item", text="Sub 7",  value="s7", image=""  },
                new treeItem(){ index=12, parent=3, type="item", text="Sub 8",  value="s8", image=""  },
                new treeItem(){ index=13, parent=4, type="item", text="Sub 9",  value="s9", image=""  },

                new treeItem(){ index=14, parent=5, type="item", text="Sub 10",  value="s10", image=""  },
                new treeItem(){ index=15, parent=5, type="item", text="Sub 11",  value="s11", image=""  },
            };
        public IActionResult OnPost()
        {


            return new OkObjectResult(data);
        }

        public IActionResult OnPostFilter([FromBody] string Keywords)
        {
            Keywords = Keywords.ToLower();
            var dp = data.Where(x => x.text.ToLower().Contains(Keywords)).ToList();
            bool added = false;

            for (int i = 0; i < dp.Count; i++)
            {
                var item = dp[i];
                if (item.parent != null && dp.FirstOrDefault(x => x.index == item.parent) == null)
                {
                    dp.Add(data.First(x => x.index == item.parent));
                    added = true;
                }
            }

            return new OkObjectResult(dp.OrderBy(x => x.parent).ThenBy(x => x.text).ToList());
        }
        private class treeItem
        {
            public int index { get; set; }
            public int? parent { get; set; }
            public string type { get; set; }
            public string text { get; set; }
            public string value { get; set; }
            public string image { get; set; }
        }
    }
}
