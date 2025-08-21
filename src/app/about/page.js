import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// --- Team Member Data ---
// You can move this to a separate file later
const teamMembers = [
  {
    name: 'Md. Yeasin Islam',
    role: 'Founder & CEO',
    bio: 'The visionary behind NextCart, passionate about creating seamless online shopping experiences.',
    imageUrl: '/assets/team/yeasin.jpg', // Replace with your image path
    socials: {
      linkedin: 'https://linkedin.com/in/yeasin-islam10',
      github: 'https://github.com/yeasin-islam',
      twitter: 'https://x.com/yeasin_islam75',
    },
  },
  {
    name: 'Jane Doe',
    role: 'Head of Marketing',
    bio: 'Spreading the word about NextCart and connecting with our amazing community.',
    imageUrl: '/assets/team/jane.jpg', // Replace with an image path
    socials: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
  {
    name: 'John Smith',
    role: 'Lead Developer',
    bio: 'The architect of our platform, ensuring everything runs smoothly and securely.',
    imageUrl: '/assets/team/john.jpg', // Replace with an image path
    socials: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
];

// --- The Main About Page Component ---
export default function AboutPage() {
  return (
    <div className="bg-base-200 dark:bg-gray-900">
      {/* 1. Hero Section */}
      <div className="hero min-h-[50vh] bg-cover bg-center" style={{ backgroundImage: 'url(/assets/banners/about-hero.jpg)' }}>
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About NextCart</h1>
            <p className="mb-5 text-lg">
              We are on a mission to revolutionize online shopping with cutting-edge technology and a passion for customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* 2. Our Story Section */}
        <section className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Our Story</h2>
          <div className="divider w-24 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-base-content/80 text-lg leading-relaxed">
            NextCart started in a small dorm room in 2024 with a simple idea: to make online shopping faster, more secure, and more enjoyable for everyone. Frustrated with slow, clunky e-commerce sites, our founder, Md. Yeasin Islam, set out to build a platform using the power of Next.js. Today, we are a growing team dedicated to that original vision, serving thousands of happy customers.
          </p>
        </section>

        {/* 3. Our Values Section */}
        <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">What We Stand For</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="card bg-base-100 shadow-lg p-8">
                    <h3 className="text-2xl font-semibold mb-2">Quality First</h3>
                    <p>We source only the best products, ensuring every item you purchase meets our high standards.</p>
                </div>
                <div className="card bg-base-100 shadow-lg p-8">
                    <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
                    <p>Using the latest technology to build a fast, secure, and user-friendly shopping platform.</p>
                </div>
                <div className="card bg-base-100 shadow-lg p-8">
                    <h3 className="text-2xl font-semibold mb-2">Customer Happiness</h3>
                    <p>Your satisfaction is our top priority. Our support team is always here to help.</p>
                </div>
            </div>
        </section>


        {/* 4. Meet The Team Section */}
        <section className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member) => (
              <div key={member.name} className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <div className="avatar">
                    <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <Image src={member.imageUrl} alt={member.name} width={128} height={128} />
                    </div>
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-2xl">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                  <p className="my-2">{member.bio}</p>
                  <div className="card-actions">
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle"><FaLinkedin className="text-xl" /></a>
                    <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle"><FaGithub className="text-xl" /></a>
                    <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle"><FaTwitter className="text-xl" /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Call to Action Section */}
        <section className="text-center bg-base-100 p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
            <p className="max-w-xl mx-auto mb-6">Explore our curated collection of products and find something you will love.</p>
            <Link href="/products">
                <button className="btn btn-primary btn-lg">Browse All Products</button>
            </Link>
        </section>
      </div>
    </div>
  );
}