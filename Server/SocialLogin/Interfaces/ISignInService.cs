using SocialLogin.Models.Login;
using System.Threading.Tasks;

namespace SocialLogin.Interfaces
{
    public interface ISignInService
    {
        Task<SignInContent> GetSignInContent();
        Task<SignUpContent> GetSignUpContent();
    }
}
