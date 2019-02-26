using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace Thinktecture.OfficeAddIns {
    public static class GetHistoryDataByYear {
        [FunctionName ("GetHistoryDataByYear")]
        public static async Task<IActionResult> Run (
            [HttpTrigger (AuthorizationLevel.Anonymous, "get", Route = "history/year/{year}")] HttpRequest req,
            int year,
            ILogger log) {
            if (year < 1990 || year > DateTime.Now.Year) {
                return new BadRequestResult ();
            }

            var history = HistoryDataStore.GetStore ().Where (h => h.Year == year);
            return new OkObjectResult (history);
        }
    }
}
