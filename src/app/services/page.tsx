import Image from "next/image";

export function ServicesPage() {
  return (
    <main className="bg-black min-h-screen w-full pb-10">
      {/* Hero Section */}
      <section
        className="relative flex flex-col justify-center items-center min-h-[260px] sm:min-h-[360px] md:min-h-[485px] w-full pt-12 sm:pt-20 md:pt-24 pb-6 sm:pb-10 md:pb-12 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/services.png")' }}
      >
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className="relative z-10 flex flex-col items-center w-full max-w-4xl px-2 gap-8 sm:gap-12 md:gap-16">
          <div className="justify-start text-white text-4xl sm:text-6xl md:text-8xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[66px]">
            Our Services
          </div>
          <div className="justify-start text-white text-xl sm:text-2xl md:text-4xl font-bold font-['Space_Grotesk'] leading-7 sm:leading-9 md:leading-10">
            Powered by ARGUS Technology
          </div>
          <div className="w-full max-w-2xl text-center text-white text-base sm:text-lg md:text-2xl font-normal font-['Space_Grotesk'] leading-tight">
            Our core AI allows us to perform these services with greater safety
            and precision.
          </div>
        </div>
      </section>

      {/* Service 1 - Power Grid */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 max-w-6xl mx-auto px-2 sm:px-4 md:px-6 py-10 sm:py-16 md:py-20">
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-md md:w-[608px] h-48 sm:h-80 md:h-[472px] bg-gray-800">
            <Image
              src="/images/services-grid.png"
              alt="Power Grid Inspection"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center pl-0 md:pl-16 gap-4 sm:gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
          <h3 className="text-orange-400 text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 md:mb-6">
            Power Grid Inspection
          </h3>
          <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 md:mb-8 leading-relaxed">
            Comprehensive inspections of power grids to identify maintenance
            needs and ensure reliability.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base transition-all duration-300 w-fit shadow-lg hover:shadow-xl transform hover:-translate-y-1 mx-auto md:mx-0">
            Learn More & Request a Quote
          </button>
        </div>
      </section>

      <div className="w-full h-0 mt-4 md:mt-0 outline outline-2 outline-offset-[-1px] outline-orange-500"></div>

      {/* Service 2 - Wind Turbine */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 sm:gap-12 max-w-6xl mx-auto px-2 sm:px-4 md:px-6 py-10 sm:py-16 md:py-20">
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-md md:w-[608px] h-48 sm:h-80 md:h-[499px] bg-gray-800">
            <Image
              src="/images/services-wind.png"
              alt="Wind Turbine Inspection"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center pr-0 md:pr-16 gap-4 sm:gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
          <h3 className="text-orange-400 text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 md:mb-6">
            Wind Turbine Inspection
          </h3>
          <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 md:mb-8 leading-relaxed">
            Detailed inspections of wind turbines to optimize performance and
            prevent failures.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base transition-all duration-300 w-fit shadow-lg hover:shadow-xl transform hover:-translate-y-1 mx-auto md:mx-0">
            Learn More & Request a Quote
          </button>
        </div>
      </section>

      <div className="w-full h-0 mt-4 md:mt-0 ml-0 outline outline-2 outline-offset-[-1px] outline-orange-500" />

      {/* Service 3 - Solar Panel */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 max-w-6xl mx-auto px-2 sm:px-4 md:px-6 py-10 sm:py-16 md:py-20">
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-md md:w-[608px] h-48 sm:h-80 md:h-[491px] bg-gray-800">
            <Image
              src="/images/services-solar.png"
              alt="Solar Panel Inspection"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center pl-0 md:pl-16 gap-4 sm:gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
          <h3 className="text-orange-400 text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 md:mb-6">
            Solar Panel Inspection
          </h3>
          <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 md:mb-8 leading-relaxed">
            Thorough inspections of solar farms to maximize energy output and
            identify potential issues.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base transition-all duration-300 w-fit shadow-lg hover:shadow-xl transform hover:-translate-y-1 mx-auto md:mx-0">
            Learn More & Request a Quote
          </button>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;
