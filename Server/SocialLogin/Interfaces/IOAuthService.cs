using SocialLogin.Models.OAuthDb;
using SocialLogin.Models.Requests;
using System.Threading.Tasks;

namespace SocialLogin.Interfaces
{
    public interface IOAuthService
    {
        Task<Client> GetDetails(SearchDetailsRequest request);
        Task UpdateOAuthDb(OAuthDbUpdateRequest request);
    }
}
