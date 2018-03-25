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
                MobileConfigUrl = "https://ignition.qa.ticketek.net/config",
                CustomerListId = 2,
                SignIn = new SignIn
                {
                    SectionTitle = "Verification",
                    Intro = "Let\u0027s verify who you are?",
                    SubIntro = "Sign in with",
                    Help = "some help on signing in",
                    Labels = new Labels
                    {
                        Email = "Email",
                        EmailPrompt = "Enter email",
                        Password = "Password",
                        PasswordPrompt = "Enter password",
                        PasswordReveal = "SHOW",
                        SignInButton = "Verify",

                        // !!!! forgot password url
                        ForgotPassword = "Forgot password?",

                        // ??? already have an account
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

        public async Task<SignUpContent> GetSignUpContent()
        {
            return new SignUpContent
            {
                SignInAuthenticators = new List<string> { "MyTicketek", "Facebook", "Google" },
                CustomerOptInItems = new List<CustomerOptInItem>
                {
                    new CustomerOptInItem
                    {
                        Id = 1,
                        Label = "Yes, tell me about pre-sales, discounts, offers, and the latest event news.",
                        DefaultValue = false
                    },
                    new CustomerOptInItem
                    {
                        Id = 2,
                        Label = "Yes, I would like to receive mobile alerts and special offers from Ticketek.",
                        DefaultValue = false
                    },
                    new CustomerOptInItem
                    {
                        Id = 3,
                        Label = "Yes! I want to join Purkle to earn eVouchers when responding to surveys, and receive special offers by email. Collection Statement, Terms And Conditions, Privacy Policy.",
                        DefaultValue = false
                    }
                },
                CustomerConsentItems = new List<CustomerConsentItem>
                {
                    new CustomerConsentItem
                    {
                        Id = 1,
                        Label = "I have read and accept the terms of Ticketek's privacy policy and Collection Statement.",
                        DefaultValue = false
                    }
                }
            };
        }
    }
}
