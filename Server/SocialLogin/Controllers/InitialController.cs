using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SocialLogin.Interfaces;
using SocialLogin.Models.Requests;

namespace SocialLogin.Controllers
{
    [Route("api/[controller]")]
    public class InitialController : Controller
    {
        private readonly ISignInService _signInService;

        public InitialController(ISignInService signInService)
        {
            _signInService = signInService;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetInitialValues()
        {
            var signInContent = await _signInService.GetSignInContent();
            var signUpContent = await _signInService.GetSignUpContent();
            var theme = await _signInService.GetTheme();

            return Ok(new
            {
                signInContent,
                signUpContent,
                theme
            });
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> SignIn([FromBody]SignInRequest signInRequest)
        {
            if (ModelState.IsValid)
            {
                // do something here
                string url = "http://localhost:3000";
                return Ok(url);
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
