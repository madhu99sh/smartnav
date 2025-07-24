import Image from 'next/image';

const howItWorksItems = [
  {
    title: "Data Capture and Transmission",
    description:
      "Our drones autonomously patrol target areas, using an array of sensors to monitor critical environmental factors and sending real-time sensor data to command centers.",
    image: "/images/how-it-works1.png", // update with your actual filename
    alt: "Drone Capturing Data",
  },
  {
    title: "Actionable Insights",
    description:
      "Our advanced analytics process incoming data, providing clear visual maps and alerts to help teams make informed decisions.",
    image: "/images/how-it-works2.png", // update with your actual filename
    alt: "Server and Analytics",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="px-6 md:px-28 bg-white text-black">
      <h2 className="text-3xl md:text-5xl font-bold text-orange-500 mb-24 text-center">How SmartNav Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-28">
        {howItWorksItems.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="w-full h-90 relative mb-14">
              <Image
                src={item.image}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">{item.title}</h3>
            <p className="text-gray-700 text-md md:text-xl max-w-md">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
