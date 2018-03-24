using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SocialLogin.Interfaces;
using SocialLogin.Models.Requests;

namespace SocialLogin.Controllers
{
    [Route("api/[controller]")]
    public class SignInController : Controller
    {
        private readonly ISignInService _signInService;

        public SignInController(ISignInService signInService)
        {
            _signInService = signInService;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetSignInContent()
        {
            return Ok(await _signInService.GetSignInContent());
        }
    }
}
