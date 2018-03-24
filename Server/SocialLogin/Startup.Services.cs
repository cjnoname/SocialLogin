using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SocialLogin.Interfaces;
using SocialLogin.Services;

namespace SocialLogin
{
    public partial class Startup
    {
        private static void ConfigureServices(IServiceCollection services, IConfiguration configuration)
        {
            services.AddTransient(typeof(ISignInService), typeof(SignInService));
        }
    }
}
