import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full bg-white bg-opacity-95 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="flex items-center space-x-2">
            <div className="text-primary text-2xl">
              <i className="fas fa-layer-group"></i>
            </div>
            <span className="font-bold text-xl text-dark">Horizon</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-dark hover:text-primary font-medium transition-colors">Features</a>
            <a href="#how-it-works" className="text-dark hover:text-primary font-medium transition-colors">How It Works</a>
            <a href="#testimonials" className="text-dark hover:text-primary font-medium transition-colors">Testimonials</a>
            <a href="#pricing" className="text-dark hover:text-primary font-medium transition-colors">Pricing</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#contact">
              <Button className="bg-primary hover:bg-primary/90 text-white">Get Started</Button>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-dark hover:text-primary" 
            aria-label="Menu"
            onClick={toggleMobileMenu}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden pb-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-3">
            <a 
              href="#features" 
              className="text-dark hover:text-primary font-medium transition-colors"
              onClick={closeMobileMenu}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-dark hover:text-primary font-medium transition-colors"
              onClick={closeMobileMenu}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="text-dark hover:text-primary font-medium transition-colors"
              onClick={closeMobileMenu}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="text-dark hover:text-primary font-medium transition-colors"
              onClick={closeMobileMenu}
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="px-5 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors text-center mt-2"
              onClick={closeMobileMenu}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
