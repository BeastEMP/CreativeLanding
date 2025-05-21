import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Hero() {
  useScrollAnimation();

  return (
    <section id="hero" className="pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your <span className="text-gradient">Digital Experience</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Empower your business with our cutting-edge platform that streamlines workflow, boosts productivity, and drives growth through intelligent solutions.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact">
                <Button 
                  className="px-8 py-6 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 duration-200 h-auto"
                >
                  Start Your Free Trial
                </Button>
              </a>
              <a href="#how-it-works">
                <Button 
                  variant="outline" 
                  className="px-8 py-6 rounded-lg border-2 border-primary text-primary hover:bg-primary/5 transition-colors h-auto"
                >
                  Learn More
                </Button>
              </a>
            </div>
            <div className="mt-8 flex items-center text-gray-500">
              <div className="flex -space-x-2 mr-3">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60" 
                  alt="User avatar" 
                  className="w-8 h-8 rounded-full border-2 border-white" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60" 
                  alt="User avatar" 
                  className="w-8 h-8 rounded-full border-2 border-white" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60" 
                  alt="User avatar" 
                  className="w-8 h-8 rounded-full border-2 border-white" 
                />
              </div>
              <span className="text-sm">Joined by 10,000+ professionals</span>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Dashboard interface with analytics" 
              className="rounded-xl shadow-2xl" 
            />
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg animate-on-scroll">
              <div className="flex items-center">
                <div className="text-accent mr-3">
                  <i className="fas fa-chart-line text-xl"></i>
                </div>
                <div>
                  <p className="font-bold">200% ROI</p>
                  <p className="text-sm text-gray-600">Average customer result</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg animate-on-scroll">
              <div className="flex items-center">
                <div className="text-secondary mr-3">
                  <i className="fas fa-users text-xl"></i>
                </div>
                <div>
                  <p className="font-bold">35% Growth</p>
                  <p className="text-sm text-gray-600">In team productivity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
