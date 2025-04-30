import { Button } from "@/components/ui/button";

export default function CtaSection() {
  const scrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-primary-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Next Car?</h2>
          <p className="text-lg text-gray-900 font-bold mb-8 max-w-2xl mx-auto">
            Car Haven makes it easy to find your perfect vehicle. Browse thousands of listings, connect with sellers, and drive away happy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-white text-primary-800 hover:bg-gray-100"
              onClick={() => window.location.href = "/cars"}
            >
              Browse Cars
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10"
              onClick={scrollToHowItWorks}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
