import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
  delay: string;
};

export default function Testimonials() {
  useScrollAnimation();

  const testimonials: Testimonial[] = [
    {
      quote: "Implementing Horizon has been a game-changer for our business. We've seen a 40% increase in productivity and our team collaboration has never been better.",
      name: "Sarah Johnson",
      title: "CEO",
      company: "TechNova",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      delay: "0s"
    },
    {
      quote: "The analytics and reporting features have transformed how we make decisions. We now have clear insights that drive our strategy and growth.",
      name: "David Chen",
      title: "Marketing Director",
      company: "GrowthFuel",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      delay: "0.2s"
    },
    {
      quote: "The automation capabilities have saved us countless hours of manual work. Our team can now focus on high-value tasks instead of repetitive processes.",
      name: "Emily Rodriguez",
      title: "Operations Manager",
      company: "StreamLine",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      delay: "0.4s"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="text-primary font-semibold">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What our customers say</h2>
          <p className="text-gray-600">Don't just take our word for it. Here's what businesses like yours have achieved with our platform.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-8 shadow-md animate-on-scroll" 
              style={{transitionDelay: testimonial.delay}}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className={`fas fa-star text-accent ${i > 0 ? 'ml-1' : ''}`}></i>
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4" 
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
