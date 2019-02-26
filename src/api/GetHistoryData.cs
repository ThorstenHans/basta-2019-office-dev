using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace Thinktecture.OfficeAddIns {
    public static class GetHistoryData {
        [FunctionName ("GetHistoryData")]
        public static async Task<IActionResult> Run (
            [HttpTrigger (AuthorizationLevel.Anonymous, "get", Route = "history")] HttpRequest req,
            ILogger log) {
            var history = HistoryDataStore.GetStore ();
            return new OkObjectResult (history);
        }
    }
}
