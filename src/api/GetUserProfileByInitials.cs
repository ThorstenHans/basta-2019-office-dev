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
    public static class GetUserProfileByInitials {
        [FunctionName ("GetUserProfileByInitials")]
        public static async Task<IActionResult> Run (
            [HttpTrigger (AuthorizationLevel.Anonymous, "get", Route = "profiles/{initials}")] HttpRequest req,
            string initials,
            ILogger log) {
            log.LogInformation ("C# HTTP trigger function processed a request.");

            if (string.IsNullOrWhiteSpace (initials)) {
                return new BadRequestResult ();
            }

            var profile = UserProfileStore
                .GetStore ()
                .FirstOrDefault (up => up.Initials.Equals (initials, StringComparison.InvariantCultureIgnoreCase));

            if (profile == null) {
                return new NotFoundResult ();
            }
            return new OkObjectResult (profile);
        }
    }
}
