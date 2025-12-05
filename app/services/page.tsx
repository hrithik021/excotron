'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function ServicesPage(): React.ReactElement {
  const [activeService, setActiveService] = useState<number>(0);

  const services = [
    {
      title: 'Cloud Solutions',
      icon: (
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
      ),
      description: 'Transform your infrastructure with scalable, secure cloud solutions',
      features: [
        'Cloud Migration & Strategy',
        'Multi-Cloud Management',
        'Cloud Security & Compliance',
        'Infrastructure as Code (IaC)',
        'Cost Optimization',
        'Disaster Recovery'
      ],
      benefits: [
        'Reduce IT costs by up to 40%',
        '99.99% uptime guarantee',
        'Scalable on demand',
        'Enterprise-grade security'
      ]
    },
    {
      title: 'Cybersecurity',
      icon: (
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      ),
      description: 'Protect your business with comprehensive cybersecurity solutions',
      features: [
        'Threat Detection & Response',
        'Penetration Testing',
        'Security Audits',
        'Identity & Access Management',
        'Data Encryption',
        'Security Training'
      ],
      benefits: [
        'ISO 27001 certified processes',
        '24/7 security monitoring',
        'Zero-trust architecture',
        'Compliance ready'
      ]
    },
    {
      title: 'Digital Transformation',
      icon: (
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      description: 'Modernize your business with cutting-edge digital solutions',
      features: [
        'Process Automation',
        'Digital Strategy Consulting',
        'Legacy System Modernization',
        'API Integration',
        'Workflow Optimization',
        'Change Management'
      ],
      benefits: [
        'Increase efficiency by 60%',
        'Faster time to market',
        'Enhanced customer experience',
        'Data-driven insights'
      ]
    },
    {
      title: 'Data Analytics',
      icon: (
        <path d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" />
      ),
      description: 'Turn data into actionable insights with advanced analytics',
      features: [
        'Business Intelligence',
        'Predictive Analytics',
        'Data Warehousing',
        'Real-time Dashboards',
        'Machine Learning Models',
        'Big Data Processing'
      ],
      benefits: [
        'Better decision making',
        'Identify hidden patterns',
        'Forecast trends accurately',
        'Maximize ROI'
      ]
    },
    {
      title: 'Software Development',
      icon: (
        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      ),
      description: 'Custom software solutions tailored to your business needs',
      features: [
        'Web Application Development',
        'Mobile App Development',
        'Enterprise Software',
        'API Development',
        'DevOps & CI/CD',
        'Quality Assurance'
      ],
      benefits: [
        'Agile methodology',
        'Scalable architecture',
        'Clean, maintainable code',
        'Ongoing support'
      ]
    },
    {
      title: 'IT Support & Maintenance',
      icon: (
        <path fillRule="evenodd" d="M11.49 3.017c-.32-1.021-1.65-1.021-1.97 0l-.291.912a1.5 1.5 0 01-.949.949l-.912.291c-1.021.32-1.021 1.65 0 1.97l.912.291a1.5 1.5 0 01.949.949l.291.912c.32 1.021 1.65 1.021 1.97 0l.291-.912a1.5 1.5 0 01.949-.949l.912-.291c1.021-.32 1.021-1.65 0-1.97l-.912-.291a1.5 1.5 0 01-.949-.949l-.291-.912zM6 10a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm-3 3a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm2 5a2 2 0 012-2h6a2 2 0 012 2v1H5v-1z" clipRule="evenodd" />
      ),
      description: '24/7 technical support to keep your systems running smoothly',
      features: [
        'Helpdesk Services',
        'System Monitoring',
        'Patch Management',
        'Hardware Support',
        'Network Management',
        'Backup & Recovery'
      ],
      benefits: [
        '99.9% uptime SLA',
        'Quick response times',
        'Proactive maintenance',
        'Cost-effective plans'
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ top: '10%', left: '5%' }}></div>
            <div className="absolute w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ top: '20%', right: '5%', animationDelay: '2s' }}></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to accelerate your digital transformation journey
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-teal-500"
                onClick={() => setActiveService(index)}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    {service.icon}
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service View */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      {services[activeService].icon}
                    </svg>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{services[activeService].title}</h2>
                </div>
                <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">{services[activeService].description}</p>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {services[activeService].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-teal-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-base sm:text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 sm:p-8 rounded-2xl border border-teal-100">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Benefits</h3>
                  <div className="space-y-4">
                    {services[activeService].benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-teal-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg">{benefit}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-teal-200">
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-4">Ready to get started?</h4>
                    <a
                      href="/contact"
                      className="block text-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-sm sm:text-base font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                      Request a Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mx-auto mb-4"></div>
            <p className="text-lg sm:text-xl text-gray-600 px-4">A proven approach to delivering exceptional results</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We analyze your needs and challenges' },
              { step: '02', title: 'Strategy', description: 'We design the optimal solution' },
              { step: '03', title: 'Implementation', description: 'We deploy with precision' },
              { step: '04', title: 'Support', description: 'We ensure ongoing success' }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl sm:text-5xl font-bold text-teal-500 mb-4 opacity-20">{phase.step}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{phase.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg className="w-8 h-8 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">Let's Build Something Great Together</h2>
          <p className="text-base sm:text-xl text-teal-50 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Our team of experts is ready to help you transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
              href="/contact"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-600 text-sm sm:text-base font-semibold rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Schedule a Consultation
            </a>
            <a
              href="/about"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white text-sm sm:text-base font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
