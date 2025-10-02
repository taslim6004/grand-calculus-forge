import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <SEO
        title="Privacy Policy"
        description="Read the Privacy Policy for UltimateCalcHub.com. Learn how we protect your data and respect your privacy."
        keywords="privacy policy, data protection, privacy, user data"
      />
      
      <Header />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <article className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text leading-[1.15] pb-1">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">UltimateCalcHub.com</p>
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 space-y-8 animate-fade-in">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                UltimateCalcHub.com is designed with your privacy in mind. We do not collect personal information unless you voluntarily provide it. When you use our calculators, we may collect anonymous usage data to improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Any information we collect is used solely to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                <li>Improve the functionality and user experience of our website</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide better calculator tools and features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">3. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may use cookies and similar tracking technologies to enhance your experience. These help us remember your preferences, such as Dark/Light mode settings. You can control cookie settings through your browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">4. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                UltimateCalcHub.com may use third-party services such as Google AdSense for advertisements. These services may collect data according to their own privacy policies. We recommend reviewing their policies separately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We take reasonable measures to protect your data. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but strive to use industry-standard practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, correct, or delete any personal information we may have. Since we collect minimal data, most usage is anonymous and does not require an account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">7. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website is intended for general audiences and does not knowingly collect information from children under 13 years of age.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">8. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page, and continued use of the website constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">9. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us through our website.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
