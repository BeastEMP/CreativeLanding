import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Feature = {
  icon: string;
  iconClass: string;
  title: string;
  description: string;
};

export default function Features() {
  useScrollAnimation();

  const features: Feature[] = [
    {
      icon: "fas fa-rocket",
      iconClass: "text-primary",
      title: "Accelerated Growth",
      description: "Leverage powerful analytics and insights to identify growth opportunities and capitalize on emerging trends."
    },
    {
      icon: "fas fa-cogs",
      iconClass: "text-secondary",
      title: "Workflow Automation",
      description: "Streamline operations with intelligent automation that eliminates repetitive tasks and boosts team productivity."
    },
    {
      icon: "fas fa-chart-pie",
      iconClass: "text-accent",
      title: "Real-time Analytics",
      description: "Make data-driven decisions with comprehensive dashboards and reports that update in real-time."
    },
    {
      icon: "fas fa-shield-alt",
      iconClass: "text-primary",
      title: "Enterprise Security",
      description: "Protect your valuable data with industry-leading security protocols and compliance measures."
    },
    {
      icon: "fas fa-users",
      iconClass: "text-secondary",
      title: "Team Collaboration",
      description: "Foster seamless teamwork with integrated communication and project management tools."
    },
    {
      icon: "fas fa-sync-alt",
      iconClass: "text-accent",
      title: "Seamless Integration",
      description: "Connect with your favorite tools and services through our extensive API and integration ecosystem."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="text-primary font-semibold">Powerful Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Everything you need to succeed</h2>
          <p className="text-gray-600">Our comprehensive suite of tools and features is designed to help your business thrive in today's competitive landscape.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow animate-on-scroll">
              <div className={`${feature.iconClass} text-3xl mb-4`}>
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
