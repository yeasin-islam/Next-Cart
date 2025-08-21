import { FaShippingFast, FaShieldAlt, FaHeadset } from 'react-icons/fa';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaShippingFast className="h-10 w-10 text-primary" />,
      title: "Fast Shipping",
      description: "We process and ship your orders within 24 hours, ensuring you get your products as quickly as possible.",
    },
    {
      icon: <FaShieldAlt className="h-10 w-10 text-primary" />,
      title: "Quality Guarantee",
      description: "Every product is curated and quality-checked by our team to meet the highest standards of excellence.",
    },
    {
      icon: <FaHeadset className="h-10 w-10 text-primary" />,
      title: "24/7 Customer Support",
      description: "Our dedicated support team is available around the clock to help with any questions or concerns you may have.",
    },
  ];

  return (
    <section className="bg-base-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Why Choose Us?
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            We provide the best service and top-quality products.
          </p>
          <div className="divider w-24 mx-auto mt-4"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card bg-base-200 dark:bg-gray-800 shadow-lg text-center p-8 transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-base-content/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}