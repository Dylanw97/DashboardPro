using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DashboardPro
{
    public class dataModel : PageModel
    {
        public void OnGet()
        {

        }

        public static string datapull(string firstname, string lastname)
        {
            firstname = "it";
            lastname = " worked";

            return firstname + " " + lastname;
        }
    }
}