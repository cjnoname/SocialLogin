using Microsoft.AspNetCore.Mvc;

namespace SocialLogin.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
