using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SocialLogin.Interfaces;
using SocialLogin.Models.Requests;

namespace SocialLogin.Controllers
{
    [Route("api/[controller]")]
    public class OAuthController : Controller
    {
        private readonly IOAuthService oAuthService;

        public OAuthController(IOAuthService oAuthService)
        {
            this.oAuthService = oAuthService;
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Save([FromBody]OAuthDbUpdateRequest request)
        {
            if (ModelState.IsValid)
            {
                await oAuthService.UpdateOAuthDb(request);
                return Ok();
            }
            else
            {
                return BadRequest("asdasd");
            }
        }
    }
}
