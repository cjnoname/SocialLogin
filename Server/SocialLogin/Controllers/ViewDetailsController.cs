using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SocialLogin.Interfaces;
using SocialLogin.Models.Requests;

namespace SocialLogin.Controllers
{
    [Route("api/[controller]")]
    public class ViewDetailsController : Controller
    {
        private readonly IOAuthService _oAuthService;

        public ViewDetailsController(IOAuthService oAuthService)
        {
            _oAuthService = oAuthService;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetDetails([FromQuery]SearchDetailsRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.ClientId) && string.IsNullOrWhiteSpace(request.Token))
            {
                return BadRequest("Request is null");
            }

            var res = await _oAuthService.GetDetails(request);

            return Ok(res);
        }
    }
}
