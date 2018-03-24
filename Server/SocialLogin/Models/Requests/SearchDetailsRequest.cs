
using System.ComponentModel.DataAnnotations;

namespace SocialLogin.Models.Requests
{
    public class SearchDetailsRequest
    {
        public string ClientId { get; set; }

        public string Token { get; set; }
    }
}
