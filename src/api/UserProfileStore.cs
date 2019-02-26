using System;
using System.Collections.Generic;

namespace Thinktecture.OfficeAddIns {

    public class UserProfileStore {
        public static IEnumerable<UserProfileDetailsModel> GetStore () {
            yield return new UserProfileDetailsModel {
                Id = Guid.NewGuid (),
                    FirstName = "Thorsten",
                    LastName = "Hans",
                    FullName = "Thorsten Hans",
                    Blog = "https://thorsten-hans.com",
                    Initials = "ThH",
                    Mail = "thorsten.hans@thinktecture.com",
                    Twitter = "ThorstenHans"
            };
            yield return new UserProfileDetailsModel {
                Id = Guid.NewGuid (),
                    FirstName = "Manuel",
                    LastName = "Rauber",
                    FullName = "Manuel Rauber",
                    Blog = "https://manuel-rauber.com/",
                    Initials = "MR",
                    Mail = "manuel.rauber@thinktecture.com",
                    Twitter = "ManuelRauber"
            };
            yield return new UserProfileDetailsModel {
                Id = Guid.NewGuid (),
                    FirstName = "Boris",
                    LastName = "Wilhelms",
                    FullName = "Boris Wilhelms",
                    Blog = "https://blog.wille-zone.de",
                    Initials = "BW",
                    Mail = "boris.wilhelms@thinktecture.com",
                    Twitter = "BorisWilhelms"
            };
            yield return new UserProfileDetailsModel {
                Id = Guid.NewGuid (),
                    FirstName = "Christian",
                    LastName = "Weyer",
                    FullName = "Christian Weyer",
                    Blog = "https://weblogs.thinktecture.com/cweyer/",
                    Initials = "CW",
                    Mail = "christian.weyer@thinktecture.com",
                    Twitter = "ChristianWeyer"
            };
        }
    }
}
