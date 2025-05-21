import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type PricingPlan = {
  title: string;
  description: string;
  price: string;
  features: string[];
  isPopular: boolean;
  buttonText: string;
  delay: string;
};

export default function Pricing() {
  useScrollAnimation();

  const pricingPlans: PricingPlan[] = [
    {
      title: "Starter",
      description: "Perfect for small businesses",
      price: "$29",
      features: [
        "Up to 5 team members",
        "Basic analytics",
        "5GB storage",
        "Email support"
      ],
      isPopular: false,
      buttonText: "Get Started",
      delay: "0s"
    },
    {
      title: "Professional",
      description: "Ideal for growing companies",
      price: "$79",
      features: [
        "Up to 20 team members",
        "Advanced analytics",
        "20GB storage",
        "Priority support",
        "Workflow automation"
      ],
      isPopular: true,
      buttonText: "Get Started",
      delay: "0.2s"
    },
    {
      title: "Enterprise",
      description: "For large organizations",
      price: "$199",
      features: [
        "Unlimited team members",
        "Custom analytics",
        "100GB storage",
        "24/7 dedicated support",
        "Advanced security",
        "Custom integrations"
      ],
      isPopular: false,
      buttonText: "Contact Sales",
      delay: "0.4s"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="text-primary font-semibold">Pricing Plans</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Choose the perfect plan for your business</h2>
          <p className="text-gray-600">All plans include a 14-day free trial with no credit card required. Cancel anytime.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`
                bg-white rounded-xl p-8 shadow-md 
                ${plan.isPopular ? 'shadow-xl border-2 border-primary' : 'border border-gray-100'} 
                relative animate-on-scroll
              `}
              style={{transitionDelay: plan.delay}}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-8 bg-primary text-white px-4 py-1 rounded-b-lg font-medium text-sm">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <i className="fas fa-check text-secondary mr-3"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className={`
                  block w-full py-3 px-4 font-medium rounded-lg text-center transition-colors
                  ${plan.isPopular 
                    ? 'bg-primary text-white hover:bg-primary/90 shadow-lg' 
                    : 'bg-white border-2 border-primary text-primary hover:bg-primary/5'
                  }
                `}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
