import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <SEO
        title="About Us - Our Story"
        description="Learn about UltimateCalcHub.com - your trusted platform for 500+ online calculators across finance, health, education, and more."
        keywords="about us, calculator platform, online tools, calculation tools"
      />
      
      <Header />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <article className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text leading-[1.15] pb-1">
              About Us – Our Story
            </h1>
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 space-y-6 text-lg leading-relaxed animate-fade-in">
            <p className="text-muted-foreground">
              It all started with one simple question:<br />
              <strong className="text-foreground">"Why do we need to visit so many different websites just to make small calculations?"</strong>
            </p>

            <p className="text-muted-foreground">
              We noticed that some people were searching for a loan calculator, others for a BMI calculator, and others for a GPA calculator. The problem was the same. Every time, you had to find a new site. It was time-consuming and frustrating.
            </p>

            <p className="text-muted-foreground">
              That made us think, what if all calculators could be found in one single place?<br />
              And that is how <strong className="text-foreground">UltimateCalcHub.com was born</strong> <Sparkles className="inline h-5 w-5 text-primary" />
            </p>

            <p className="text-muted-foreground">
              We wanted to create a platform where you can easily access <strong className="text-foreground">500+ calculators</strong>, neatly organized into categories such as finance, health, education, math, conversion, technology, and many more.
            </p>

            <p className="text-muted-foreground">
              Our goal was not only to build tools but also to create an experience. Each calculator is designed to feel premium, with 3D buttons, smooth visuals, and a Dark/Light mode to match your preference.
            </p>

            <p className="text-muted-foreground">
              We believe that calculations should be one of the easiest parts of your life. They should be fast, reliable, and always available at your fingertips.
            </p>

            <p className="text-foreground font-semibold">
              Our promise is simple. We will keep adding new calculators, listen to your feedback, and make UltimateCalcHub.com better every day so it becomes your trusted digital companion for every calculation you need.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default About;
