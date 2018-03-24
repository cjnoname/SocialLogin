using System;
using System.Collections.Generic;

namespace SocialLogin.Models.OAuthDb
{
    public partial class RefreshToken
    {
        public string Token { get; set; }
        public string AccessToken { get; set; }
        public DateTime? Consumed { get; set; }

        public AccessToken AccessTokenNavigation { get; set; }
    }
}
