import Image from 'next/image';
import Link from 'next/link';

// You can expand this list with your actual categories
const categories = [
  {
    name: 'DSLR Cameras',
    imageSrc: 'https://i.ibb.co/zTvtBfYn/download-1.jpg',
    href: '/products?category=DSLR+Camera',
  },
  {
    name: 'Mirrorless Cameras',
    imageSrc: 'https://i.ibb.co/wF71ZJS9/download-2.jpg',
    href: '/products?category=Mirrorless+Camera',
  },
  {
    name: 'Action Cameras',
    imageSrc: 'https://i.ibb.co/7dbYg53H/download-6.jpg',
    href: '/products?category=Action+Camera',
  },
  {
    name: 'Lenses & Accessories',
    imageSrc: 'https://i.ibb.co/996xzJJh/images-2.jpg',
    href: '/products?category=Lenses+%26+Accessories',
  },
];

export default function CategoryBrowse() {
  return (
    <section className="bg-base-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Browse by Category
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Find the perfect gear for your needs.
          </p>
          <div className="divider w-24 mx-auto mt-4"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <div className="group relative h-64 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                {/* Background Image */}
                <Image
                  src={category.imageSrc}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay and Text */}
                <div className="absolute inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-60">
                  <h3 className="text-2xl font-bold text-white text-center p-4">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}