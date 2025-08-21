import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Shopping at NextCart was a breeze! My order arrived faster than I expected, and the quality of the camera is outstanding. I'll definitely be back for more.",
      name: "Sarah L.",
      title: "Verified Buyer",
      imageUrl: "/assets/avatars/sarah.jpg", // Replace with your image path
    },
    {
      quote: "The customer support is top-notch. I had a question about my watch, and the team responded within minutes. Fantastic service and a beautiful product!",
      name: "Michael B.",
      title: "Tech Enthusiast",
      imageUrl: "/assets/avatars/michael.jpg", // Replace with your image path
    },
    {
      quote: "I'm so impressed with the curated selection. I found the perfect vintage-style camera that I couldn't find anywhere else. The entire process was seamless.",
      name: "Emily C.",
      title: "Photography Lover",
      imageUrl: "/assets/avatars/emily.jpg", // Replace with your image path
    },
  ];

  return (
    <section className="bg-base-200 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            What Our Customers Say
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Real stories from our satisfied shoppers.
          </p>
          <div className="divider w-24 mx-auto mt-4"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card bg-base-100 dark:bg-gray-900 shadow-xl p-8"
            >
              <figure className="mb-4">
                <FaQuoteLeft className="text-4xl text-primary" />
              </figure>
              <div className="card-body p-0">
                <p className="text-base-content/80 mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="avatar mr-4">
                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <Image 
                        src={testimonial.imageUrl} 
                        alt={testimonial.name} 
                        width={56} 
                        height={56} 
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                    <div className="text-yellow-400 text-lg">★★★★★</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}