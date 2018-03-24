
namespace SocialLogin.Models.Login
{
    public class Labels
    {
        public string Email { get; set; }
        public string EmailPrompt { get; set; }
        public string Password { get; set; }
        public string PasswordPrompt { get; set; }
        public string PasswordReveal { get; set; }
        public string SignInButton { get; set; }
        public string ForgotPassword { get; set; }
        public string CreateProfile { get; set; }
    }

    public class SignIn
    {
        public string SectionTitle { get; set; }
        public string Intro { get; set; }
        public string SubIntro { get; set; }
        public string Help { get; set; }
        public Labels Labels { get; set; }
    }

    public class Link
    {
        public string Text { get; set; }
        public string Href { get; set; }
    }

    public class Privacy
    {
        public Link Link { get; set; }
    }

    public class Footer
    {
        public string Purchase { get; set; }
        public object TermsAndCondition { get; set; }
        public Privacy Privacy { get; set; }
    }

    public class Images
    {
        public string LogoMain { get; set; }
    }

    public class Icons
    {
        public string Ticket { get; set; }
        public string Secure { get; set; }
        public string Help { get; set; }
        public string NumberOne { get; set; }
        public string NumberTwo { get; set; }
    }
}
