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
    public static class GetHistoryDataByInitials {
        [FunctionName ("GetHistoryDataByInitials")]
        public static async Task<IActionResult> Run (
            [HttpTrigger (AuthorizationLevel.Anonymous, "get", Route = "history/{initials}")] HttpRequest req,
            string initials,
            ILogger log) {
            if (string.IsNullOrWhiteSpace (initials)) {
                return new BadRequestResult ();
            }
            var history = HistoryDataStore.GetStore ().Where (h => h.Initials.Equals (initials, StringComparison.InvariantCultureIgnoreCase));
            return new OkObjectResult (history);
        }
    }
}
