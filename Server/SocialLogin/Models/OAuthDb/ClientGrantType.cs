using System;
using System.Collections.Generic;

namespace SocialLogin.Models.OAuthDb
{
    public partial class ClientGrantType
    {
        public int ClientGrantTypeId { get; set; }
        public string ClientId { get; set; }
        public string GrantType { get; set; }
    }
}
