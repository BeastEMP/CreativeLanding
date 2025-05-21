import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CallToAction from "@/components/CallToAction";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Set the page title
    document.title = "Horizon - Transform Your Digital Experience";
  }, []);

  return (
    <div className="font-sans text-dark bg-light">
      <Header />
      <Hero />
      <Brands />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <ContactForm />
      <Footer />
    </div>
  );
}
