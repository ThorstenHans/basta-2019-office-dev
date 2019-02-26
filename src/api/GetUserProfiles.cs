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
    public static class GetUserProfiles {
        [FunctionName ("GetUserProfiles")]
        public static async Task<IActionResult> Run (
            [HttpTrigger (AuthorizationLevel.Anonymous, "get", Route = "profiles")] HttpRequest req,
            ILogger log) {

            var profiles = UserProfileStore.GetStore ()
            .Select (up => {
            return new UserProfileListModel {
            Initials = up.Initials,
            FullName = up.FullName
                    };
                });

            return new OkObjectResult (profiles);
        }
    }
}
