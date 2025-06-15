
import React from 'react';
import { Code, Palette, Smartphone, ArrowRight, Palette as LogoIcon } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies. From responsive websites to complex web platforms, we deliver robust, scalable, and high-performance solutions.",
      features: ["React & Next.js", "Node.js & Express", "Database Integration", "API Development", "E-commerce Solutions"],
      color: "blue"
    },
    {
      icon: Palette,
      title: "Web Designing",
      description: "Visually stunning and user-friendly websites that capture your brand essence. We create designs that not only look great but also convert visitors into customers.",
      features: ["Responsive Design", "Brand Identity", "Visual Hierarchy", "Cross-browser Compatibility", "Performance Optimization"],
      color: "purple"
    },
    {
      icon: Smartphone,
      title: "UI/UX Designing",
      description: "Intuitive user interfaces and seamless user experiences that delight your audience. We focus on user research, prototyping, and testing to ensure optimal usability.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Design Systems"],
      color: "indigo"
    },
    {
      icon: LogoIcon,
      title: "Logo Designing",
      description: "Memorable and impactful logos that represent your brand's unique identity. We create distinctive visual marks that communicate your values and make lasting impressions.",
      features: ["Brand Strategy", "Logo Concepts", "Typography Design", "Icon Creation", "Brand Guidelines"],
      color: "emerald"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-50",
        icon: "text-blue-600",
        iconBg: "bg-blue-100",
        button: "from-blue-600 to-blue-700",
        border: "border-blue-200"
      },
      purple: {
        bg: "bg-purple-50",
        icon: "text-purple-600",
        iconBg: "bg-purple-100",
        button: "from-purple-600 to-purple-700",
        border: "border-purple-200"
      },
      indigo: {
        bg: "bg-indigo-50",
        icon: "text-indigo-600",
        iconBg: "bg-indigo-100",
        button: "from-indigo-600 to-indigo-700",
        border: "border-indigo-200"
      },
      emerald: {
        bg: "bg-emerald-50",
        icon: "text-emerald-600",
        iconBg: "bg-emerald-100",
        button: "from-emerald-600 to-emerald-700",
        border: "border-emerald-200"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in creating digital experiences that drive results. From concept to launch, 
            we're your trusted partner in digital transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            const Icon = service.icon;
            
            return (
              <div 
                key={index}
                className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}
              >
                {/* Icon */}
                <div className={`${colors.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${colors.icon}`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className={`w-2 h-2 rounded-full ${colors.iconBg} mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full bg-gradient-to-r ${colors.button} text-white py-3 px-6 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105`}>
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to bring your vision to life?
          </p>
          <a 
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center space-x-2"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
