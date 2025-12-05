export default function Services() {
  const services = [
    {
      title: "Cloud Solutions",
      description: "Migrate and optimize your infrastructure with AWS, Azure, and Google Cloud platforms.",
      icon: "☁️"
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with comprehensive security audits and implementation.",
      icon: "🔒"
    },
    {
      title: "Digital Transformation",
      description: "Modernize your business processes with cutting-edge digital solutions.",
      icon: "🚀"
    },
    {
      title: "Data Analytics",
      description: "Turn your data into actionable insights with advanced analytics solutions.",
      icon: "📊"
    },
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your specific business needs.",
      icon: "💻"
    },
    {
      title: "IT Support",
      description: "24/7 technical support and maintenance for your IT infrastructure.",
      icon: "🛠️"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our IT Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}