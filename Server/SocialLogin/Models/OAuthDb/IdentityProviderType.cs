using System;
using System.Collections.Generic;

namespace SocialLogin.Models.OAuthDb
{
    public partial class IdentityProviderType
    {
        public int IdentityProviderTypeId { get; set; }
        public string Name { get; set; }
    }
}
