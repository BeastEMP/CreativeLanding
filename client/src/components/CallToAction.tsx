import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CallToAction() {
  useScrollAnimation();

  return (
    <section className="py-20 bg-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-xl mb-8">Join thousands of companies that are growing faster with Horizon.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contact">
              <Button 
                variant="secondary" 
                className="px-8 py-4 rounded-lg bg-white text-primary hover:bg-gray-100 transition-colors shadow-lg h-auto"
              >
                Start Your Free Trial
              </Button>
            </a>
            <a href="#">
              <Button 
                variant="outline" 
                className="px-8 py-4 rounded-lg border-2 border-white text-white hover:bg-white/10 transition-colors h-auto"
              >
                Schedule a Demo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
