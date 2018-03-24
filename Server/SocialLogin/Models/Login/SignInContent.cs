using System.Collections.Generic;


namespace SocialLogin.Models.Login
{
    public class SignInContent
    {
        //public string AuthToken { get; set; }
        public List<string> SignInOption { get; set; }
        public string MobileConfigUrl { get; set; }
        public int CustomerListId { get; set; }
        public SignIn SignIn { get; set; }
        public Footer Footer { get; set; }
        public Images Images { get; set; }
        public Icons Icons { get; set; }
    }
}
