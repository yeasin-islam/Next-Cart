const FeatureCard = ({ title, subtitle, description, imageSrc, backgroundColor }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative">
      <div className={`absolute top-0 left-0 w-32 h-32 rounded-full transform -translate-x-1/4 -translate-y-1/4`} style={{ backgroundColor }}></div>
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full transform translate-x-1/4 -translate-y-1/4 opacity-50" style={{ backgroundColor }}></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full transform -translate-x-1/4 translate-y-1/4 opacity-50" style={{ backgroundColor }}></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full transform translate-x-1/4 translate-y-1/4 opacity-50" style={{ backgroundColor }}></div>
      <div className="relative p-6 flex justify-center items-center h-48">
        <img src={imageSrc} alt={title} layout="fill" objectFit="contain" className="absolute" />
      </div>
    </div>
    <div className="p-6 text-center">
      {title && <h3 className="text-sm text-gray-500 font-semibold tracking-wider uppercase mb-1">{title}</h3>}
      <h2 className="text-xl font-bold text-gray-800 mb-2">{subtitle}</h2>
      {description && <p className="text-gray-600 text-sm">{description}</p>}

    </div>
  </div>
);

export default function FeaturedSections() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          title="DISC UP TO 50%"
          subtitle="New Digital Camera With Tilt Lens"
          imageSrc="https://i.ibb.co.com/dsnRz5T1/download-8-removebg-preview.png" // Placeholder lens image
          backgroundColor="#FFD700" // Yellow
        />
        <FeatureCard
          title="WIDE CAMERA"
          subtitle="Photograph Camera For Professional"
          imageSrc="https://i.ibb.co.com/x8tS4W7m/images-34-removebg-preview.png" // Placeholder camera image
          backgroundColor="#FF69B4" // Pink
        />
        <FeatureCard
          title="REMOTE LENS"
          subtitle="New Lenses With A Million Effects"
          imageSrc="https://i.ibb.co.com/N6LbjdqX/images-8-removebg-preview.png" // Placeholder lens image
          backgroundColor="#A020F0" // Purple
        />
      </div>
    </div>
  );
}