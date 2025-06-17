
import React from 'react';
import { X, CheckCircle } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    features: string[];
    detailedInfo: {
      overview: string;
      process: string[];
      benefits: string[];
      technologies: string[];
      pricing: string;
    };
  } | null;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Overview */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h3>
            <p className="text-gray-600 text-lg leading-relaxed">{service.detailedInfo.overview}</p>
          </div>

          {/* Process */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.detailedInfo.process.map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.detailedInfo.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technologies We Use</h3>
            <div className="flex flex-wrap gap-2">
              {service.detailedInfo.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl text-center">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Ready to Get Started?</h4>
            <p className="text-gray-600 mb-4">Let's discuss your project and create something amazing together.</p>
            <a 
              href="#contact"
              onClick={onClose}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 inline-block"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
