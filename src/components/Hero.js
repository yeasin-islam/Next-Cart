import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-base-200 dark:bg-gray-900 overflow-hidden">
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          {/* Left Side: Image */}
          <div className="relative lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <div className="absolute rounded-full bg-blue-500 w-64 h-64 lg:w-80 lg:h-80 -ml-16 lg:-ml-24 -mt-8 lg:-mt-12"></div>
            <div className="relative z-10  rounded-md overflow-hidden">
              <Image
              width={500 }
              height={500 }
                src="https://i.ibb.co.com/8nVDnWNm/images-3-removebg-preview.png"
                alt="DSLR Camera"
                className="object-cover max-w-full h-auto"
              />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="lg:w-1/2 lg:pl-16 text-center lg:text-left">
            <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
              SHOP TO GET WHAT YOU LOVE
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3 leading-tight">
              Ready To Spoil <br />
              Every Moment
            </h1>
            <p className="text-lg text-gray-600 mt-6 max-w-md lg:max-w-lg mx-auto lg:mx-0">
              Discover the latest cameras, lenses, and gear designed for creators and storytellers. Whether you’re a beginner or a pro, our collection helps you turn moments into memories with clarity, precision, and style.
            </p>
            <button className="border border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-md mt-8 hover:bg-gray-200 transition-colors duration-300">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
