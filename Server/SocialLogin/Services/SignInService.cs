using System.Collections.Generic;
using System.Threading.Tasks;
using SocialLogin.Interfaces;
using SocialLogin.Models.Login;

namespace SocialLogin.Services
{
    public class SignInService : ISignInService
    {
        public async Task<SignInContent> GetSignInContent()
        {
            // mock up the return

            return new SignInContent
            {
                //AuthToken = "h9sCuBrQQYKRqxwbz",
                SignInOption = new List<string> { "MyTicketek", "Facebook", "Google" },
                SignIn = new SignIn
                {
                    SectionTitle = "Verification",
                    Intro = "Let\u0027s verify who you are?",
                    SubIntro = "Sign in with",
                    Help = "some help on signing in",
                    Labels = new Labels
                    {
                        Email = "Email *",
                        EmailPrompt = "Enter email",
                        Password = "Password* ",
                        PasswordPrompt = "Enter password",
                        PasswordReveal = "SHOW",
                        SignInButton = "Verify",
                        ForgotPassword = "Forgot password?",
                        CreateProfile = "Don\u0027t have an account?"
                    }
                },
                Footer = new Footer
                {
                    Purchase = "Secure Checkout\u003cbr /\u003e2017 ticketek.com.au",
                    TermsAndCondition = null,
                    Privacy = new Privacy
                    {
                        Link = new Link
                        {
                            Text = "Privacy",
                            Href = "http=//premier.ticketek.com.au/Content/buyers/privacy.aspx"
                        }
                    }
                },
                Images = new Images
                {
                    LogoMain = "/images/ticketekMain.jpg"
                },
                Icons = new Icons
                {
                    Ticket = "/images/ticket.jpg",
                    Secure = "/images/padlock.jpg",
                    Help = "/images/questionmark.jpg",
                    NumberOne = "/images/numberOne.jpg",
                    NumberTwo = "/images/numberTwo.jpg"
                }
            };
        }
    }
}
