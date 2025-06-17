
import React, { useState } from 'react';
import { Code, Palette, Smartphone, ArrowRight, Palette as LogoIcon } from 'lucide-react';
import ServiceModal from './ServiceModal';

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies. From responsive websites to complex web platforms, we deliver robust, scalable, and high-performance solutions.",
      features: ["React & Next.js", "Node.js & Express", "Database Integration", "API Development", "E-commerce Solutions"],
      color: "blue",
      detailedInfo: {
        overview: "Our web development services encompass the entire spectrum of creating powerful, scalable web applications. We specialize in modern JavaScript frameworks and cutting-edge technologies to deliver solutions that not only meet your current needs but are built to grow with your business.",
        process: [
          "Requirements Analysis & Planning",
          "UI/UX Design & Prototyping",
          "Frontend Development with React/Next.js",
          "Backend API Development",
          "Database Design & Integration",
          "Testing & Quality Assurance",
          "Deployment & Launch",
          "Ongoing Support & Maintenance"
        ],
        benefits: [
          "Lightning-fast loading times",
          "SEO-optimized architecture",
          "Mobile-responsive design",
          "Scalable infrastructure",
          "Secure & reliable",
          "Easy content management"
        ],
        technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL", "AWS", "Vercel"],
        pricing: "Starting from $2,500 for basic websites. Complex web applications range from $5,000 to $25,000+ depending on features and complexity. Contact us for a detailed quote based on your specific requirements."
      }
    },
    {
      icon: Palette,
      title: "Web Designing",
      description: "Visually stunning and user-friendly websites that capture your brand essence. We create designs that not only look great but also convert visitors into customers.",
      features: ["Responsive Design", "Brand Identity", "Visual Hierarchy", "Cross-browser Compatibility", "Performance Optimization"],
      color: "purple",
      detailedInfo: {
        overview: "Our web design services focus on creating visually compelling and strategically designed websites that tell your brand story effectively. We combine aesthetic excellence with functional design principles to create websites that engage users and drive conversions.",
        process: [
          "Brand Discovery & Research",
          "Competitive Analysis",
          "Wireframing & Information Architecture",
          "Visual Design & Mockups",
          "Interactive Prototyping",
          "Design System Creation",
          "Responsive Design Implementation",
          "Final Design Delivery & Handoff"
        ],
        benefits: [
          "Increased user engagement",
          "Higher conversion rates",
          "Professional brand image",
          "Improved user experience",
          "Mobile-optimized design",
          "Fast loading graphics"
        ],
        technologies: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Principle", "Zeplin", "HTML5", "CSS3", "SASS"],
        pricing: "Design packages start from $1,500 for basic websites. Comprehensive design systems and complex interfaces range from $3,000 to $15,000. Includes multiple revisions and design assets."
      }
    },
    {
      icon: Smartphone,
      title: "UI/UX Designing",
      description: "Intuitive user interfaces and seamless user experiences that delight your audience. We focus on user research, prototyping, and testing to ensure optimal usability.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Design Systems"],
      color: "indigo",
      detailedInfo: {
        overview: "Our UI/UX design services are rooted in deep user research and data-driven design decisions. We create intuitive interfaces that provide exceptional user experiences, leading to higher engagement, better conversion rates, and increased customer satisfaction.",
        process: [
          "User Research & Personas",
          "Journey Mapping & User Flows",
          "Information Architecture",
          "Low-fidelity Wireframing",
          "Interactive Prototyping",
          "Usability Testing & Iteration",
          "High-fidelity UI Design",
          "Design System Documentation"
        ],
        benefits: [
          "Reduced user confusion",
          "Increased task completion rates",
          "Lower bounce rates",
          "Higher customer satisfaction",
          "Improved accessibility",
          "Data-driven design decisions"
        ],
        technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Marvel", "Hotjar", "Google Analytics", "Maze", "UserTesting"],
        pricing: "UX research and design projects start from $2,000. Complete UI/UX overhauls range from $4,000 to $20,000. Includes user research, testing, and comprehensive design documentation."
      }
    },
    {
      icon: LogoIcon,
      title: "Logo Designing",
      description: "Memorable and impactful logos that represent your brand's unique identity. We create distinctive visual marks that communicate your values and make lasting impressions.",
      features: ["Brand Strategy", "Logo Concepts", "Typography Design", "Icon Creation", "Brand Guidelines"],
      color: "emerald",
      detailedInfo: {
        overview: "Our logo design service goes beyond creating beautiful visuals. We develop comprehensive brand identities that capture the essence of your business and resonate with your target audience. Each logo is crafted to be timeless, versatile, and memorable.",
        process: [
          "Brand Discovery Workshop",
          "Market & Competitor Research",
          "Concept Development & Sketching",
          "Digital Logo Creation",
          "Color Palette Development",
          "Typography Selection",
          "Logo Variations & Applications",
          "Brand Guidelines Creation"
        ],
        benefits: [
          "Strong brand recognition",
          "Professional credibility",
          "Memorable visual identity",
          "Versatile across all media",
          "Timeless design approach",
          "Complete brand consistency"
        ],
        technologies: ["Adobe Illustrator", "Adobe Photoshop", "CorelDRAW", "Sketch", "Figma", "Adobe InDesign"],
        pricing: "Logo design packages start from $500 for basic logos. Comprehensive brand identity packages range from $1,200 to $5,000, including multiple concepts, revisions, and brand guidelines."
      }
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

  const handleLearnMore = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
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
                <button 
                  onClick={() => handleLearnMore(service)}
                  className={`w-full bg-gradient-to-r ${colors.button} text-white py-3 px-6 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105`}
                >
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

      {/* Service Modal */}
      <ServiceModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        service={selectedService}
      />
    </section>
  );
};

export default Services;
