import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ imageUrl, category, title, description, link }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative h-56">
      <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
    </div>
    <div className="p-6">
      <span className={`inline-block bg-gray-200 text-gray-700 text-xs font-semibold rounded-full px-3 py-1 mb-2`}>{category}</span>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      
    </div>
  </div>
);

export default function LatestBlog() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Latest Blog</h2>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlogCard
            imageUrl="https://i.ibb.co/RT3W32Jh/download-8.jpg"
            category="Vlogging Tips"
            title="Choosing the Right Camera for Your Vlogs"
            description="Learn about the key features to look for when selecting a camera to start or upgrade your vlogging setup."
            link="/blog/vlogging-camera-guide"
          />
          <BlogCard
            imageUrl="https://i.ibb.co/dsK4KHVc/images-1.jpg"
            category="Filmmaking"
            title="Exploring the Power of Digital Cinema Cameras"
            description="Discover the capabilities and advantages of using professional digital cinema cameras for your film projects."
            link="/blog/digital-cinema-cameras"
          />
          <BlogCard
            imageUrl="https://i.ibb.co/Myq7myLh/images-30.jpg"
            category="Camera Reviews"
            title="Hands-on Review: The New Ultra-Compact Mirrorless"
            description="Our in-depth review of the latest compact mirrorless camera, highlighting its performance and portability."
            link="/blog/compact-mirrorless-review"
          />
        </div>
      </div>
    </div>
  );
}