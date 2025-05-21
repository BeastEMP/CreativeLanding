import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Step = {
  number: number;
  title: string;
  description: string;
  delay: string;
};

export default function HowItWorks() {
  useScrollAnimation();

  const steps: Step[] = [
    {
      number: 1,
      title: "Create Your Account",
      description: "Sign up in seconds and customize your workspace to match your business needs.",
      delay: "0s"
    },
    {
      number: 2,
      title: "Import Your Data",
      description: "Easily migrate your existing data or start fresh with our templates and examples.",
      delay: "0.2s"
    },
    {
      number: 3,
      title: "Watch Your Business Grow",
      description: "See immediate improvements as our platform optimizes your operations and drives results.",
      delay: "0.4s"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="text-primary font-semibold">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Simple process, powerful results</h2>
          <p className="text-gray-600">Get up and running in minutes with our intuitive platform designed for businesses of all sizes.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-on-scroll" style={{transitionDelay: step.delay}}>
              <div className="bg-white rounded-xl p-8 shadow-md relative z-10">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-16 h-1 bg-primary transform -translate-y-1/2 -translate-x-8 z-0"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <a href="#contact">
            <Button 
              className="inline-flex items-center px-8 py-4 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 duration-200 h-auto"
            >
              Get Started Now
              <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
