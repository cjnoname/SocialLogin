using System.Collections.Generic;

namespace SocialLogin.Models.Login
{
    public class SignUpContent
    {
        public List<CustomerOptInItem> CustomerOptInItems { get; set; }
        public List<CustomerConsentItem> CustomerConsentItems { get; set; }
        public List<string> SignInAuthenticators { get; set; }
    }

    public class CustomerOptInItem
    {
        public int Id { get; set; }
        public string Label { get; set; }
        public bool DefaultValue { get; set; }
    }

    public class CustomerConsentItem
    {
        public int Id { get; set; }
        public string Label { get; set; }
        public bool DefaultValue { get; set; }
    }
}
