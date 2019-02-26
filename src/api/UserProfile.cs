using System;
using System.Collections.Generic;
namespace Thinktecture.OfficeAddIns {

    public class UserProfileListModel {
        public string Initials { get; set; }
        public string FullName { get; set; }
    }

    public class UserProfileDetailsModel : UserProfileListModel {

        public Guid Id { get; set; }
        public string Initials { get; set; }
        public string FullName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Blog { get; set; }
        public string Mail { get; set; }
        public string Twitter { get; set; }
    }
}
