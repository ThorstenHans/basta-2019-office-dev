using System;
using System.Collections.Generic;

namespace Thinktecture.OfficeAddIns {

    public class HistoryDataStore {
        public static IEnumerable<HistoryDataModel> GetStore () {
            return new List<HistoryDataModel> {
                new HistoryDataModel { FullName = "Thorsten Hans", Initials = "ThH", Topic = "Azure", Year = 2019, Count = 3 },
                new HistoryDataModel { FullName = "Thorsten Hans", Initials = "ThH", Topic = "Azure", Year = 2018, Count = 6 },
                new HistoryDataModel { FullName = "Thorsten Hans", Initials = "ThH", Topic = "Electron", Year = 2019, Count = 3 },
                new HistoryDataModel { FullName = "Thorsten Hans", Initials = "ThH", Topic = "Electron", Year = 2018, Count = 7 },
                new HistoryDataModel { FullName = "Thorsten Hans", Initials = "ThH", Topic = "Electron", Year = 2017, Count = 12 },
                new HistoryDataModel { FullName = "Thorsten Hans", Initials = "ThH", Topic = "Electron", Year = 2016, Count = 9 },
                new HistoryDataModel { FullName = "Christian Weyer", Initials = "CW", Topic = "Serverless", Year = 2019, Count = 3 },
                new HistoryDataModel { FullName = "Christian Weyer", Initials = "CW", Topic = "Serverless", Year = 2018, Count = 11 },
                new HistoryDataModel { FullName = "Christian Weyer", Initials = "CW", Topic = "Microservices", Year = 2019, Count = 3 },
                new HistoryDataModel { FullName = "Christian Weyer", Initials = "CW", Topic = "Microservices", Year = 2018, Count = 7 },
                new HistoryDataModel { FullName = "Christian Weyer", Initials = "CW", Topic = "Microservices", Year = 2017, Count = 6 },
                new HistoryDataModel { FullName = "Christian Weyer", Initials = "CW", Topic = "Microservices", Year = 2016, Count = 9 },
                new HistoryDataModel { FullName = "Manuel Rauber", Initials = "MR", Topic = "ASP.NET Core Web API", Year = 2019, Count = 1 },
                new HistoryDataModel { FullName = "Manuel Rauber", Initials = "MR", Topic = "ASP.NET Core Web API", Year = 2018, Count = 3 },
                new HistoryDataModel { FullName = "Manuel Rauber", Initials = "MR", Topic = "Blockchain", Year = 2019, Count = 2 },
                new HistoryDataModel { FullName = "Manuel Rauber", Initials = "MR", Topic = "Blockchain", Year = 2018, Count = 8 },
                new HistoryDataModel { FullName = "Manuel Rauber", Initials = "MR", Topic = "Node.JS", Year = 2017, Count = 9 },
                new HistoryDataModel { FullName = "Manuel Rauber", Initials = "MR", Topic = "Node.JS", Year = 2016, Count = 13 },
            };
        }
    }
}
