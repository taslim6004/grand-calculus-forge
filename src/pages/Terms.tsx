import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <SEO
        title="Terms of Service"
        description="Read the Terms of Service for UltimateCalcHub.com. Understand your rights and responsibilities when using our 500+ online calculators."
        keywords="terms of service, user agreement, calculator terms, website policy"
      />
      
      <Header />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <article className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text leading-[1.15] pb-1">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">UltimateCalcHub.com</p>
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 space-y-8 animate-fade-in">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using UltimateCalcHub.com, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">2. Purpose of the Website</h2>
              <p className="text-muted-foreground leading-relaxed">
                UltimateCalcHub.com provides access to over 500 online calculators across various categories such as finance, health, education, math, and more. These tools are for informational and educational purposes only and should not be considered as professional advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">3. User Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                <li>You agree to use the website only for lawful purposes.</li>
                <li>You must not attempt to damage, disable, or interfere with the functionality of the website.</li>
                <li>You are responsible for ensuring that any information you input is accurate.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">4. No Professional Advice</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our calculators are designed to assist with everyday calculations, but they do not replace professional financial, medical, legal, or educational advice. For critical decisions, please consult a qualified professional.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">5. Privacy and Data Use</h2>
              <p className="text-muted-foreground leading-relaxed">
                We value your privacy. Please review our Privacy Policy to understand how we collect and use information when you interact with our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">6. Third-Party Ads and Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                UltimateCalcHub.com may display advertisements through Google AdSense or link to third-party websites. We are not responsible for the content, accuracy, or reliability of those third-party sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                UltimateCalcHub.com and its creators are not liable for any damages, losses, or errors that may result from the use of our calculators. All tools are provided "as is" without any warranties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">8. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update or modify these Terms of Service at any time. Continued use of the website after such changes means you accept the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">9. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions regarding these Terms of Service, please contact us through the contact page on our website.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
