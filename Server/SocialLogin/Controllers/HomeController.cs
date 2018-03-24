using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using SocialLogin.Interfaces;
using System.Threading.Tasks;

namespace SocialLogin.Controllers
{
    public class HomeController : Controller
    {
        private readonly ISignInService _signInService;

        public HomeController(ISignInService signInService)
        {
            _signInService = signInService;
        }

        public async Task<IActionResult> Index()
        {
            ViewBag.SignInContent = JsonConvert.SerializeObject(await _signInService.GetSignInContent(), new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            });
            return View();
        }
    }
}
