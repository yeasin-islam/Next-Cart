import Image from "next/image";

export default function Hero() {
  return (
    <div className="container mx-auto mt-4 md:mt-4 relative overflow-hidden rounded-lg shadow-sm ">
      <Image
        width={1200}
        height={600}
        src="/assets/banners/banner1.png"
        alt="Hero Banner"
        className="w-full h-auto object-cover rounded-lg shadow-lg"/>
    </div>
  );
};
