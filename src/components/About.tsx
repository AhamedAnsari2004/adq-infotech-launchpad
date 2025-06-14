
import React from 'react';
import { Users, Award, Clock, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with years of experience in web development and design"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Premium quality deliverables that exceed industry standards and client expectations"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Committed to meeting deadlines without compromising on quality or functionality"
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Focused on achieving your business objectives through strategic digital solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> ADQ INFOTECH</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At ADQ INFOTECH, we are passionate about transforming ideas into exceptional digital experiences. 
              Our team of dedicated professionals combines creativity with technical expertise to deliver 
              solutions that not only meet but exceed our clients' expectations.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded with a vision to bridge the gap between innovative design and robust development, 
              we have successfully delivered numerous projects across various industries. Our commitment 
              to excellence and customer satisfaction drives everything we do.
            </p>

            {/* Company Values */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-full mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Innovation First</h4>
                  <p className="text-gray-600">We leverage the latest technologies and design trends to create cutting-edge solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-2 rounded-full mt-1">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Client-Centric Approach</h4>
                  <p className="text-gray-600">Your success is our priority. We work closely with you throughout the entire process.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 p-2 rounded-full mt-1">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Continuous Growth</h4>
                  <p className="text-gray-600">We continuously evolve our skills and processes to stay ahead of industry trends.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
            To empower businesses with innovative digital solutions that drive growth, enhance user experiences, 
            and create lasting value in an ever-evolving digital landscape. We believe in turning your vision 
            into reality through strategic design and development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
