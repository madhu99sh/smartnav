import Image from "next/image";

function AiLabsPage() {
  return (
    <main className="bg-black min-h-screen w-full pb-10">
      {/* Hero Section */}
      <section
        className="relative flex flex-col justify-center items-center h-[320px] sm:h-[400px] md:h-[480px] w-full pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/ai-labs.png")' }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 flex flex-col items-center w-full max-w-6xl px-2 gap-8 sm:gap-12 md:gap-16">
          <div className="justify-center text-white text-4xl sm:text-6xl md:text-8xl font-bold font-['Space_Grotesk'] ">
            Research & Innovation
          </div>
          <div className="text-center justify-start text-white text-base sm:text-xl md:text-2xl font-normal font-['Space_Grotesk'] ">
            At SmartNav, we're dedicated to tackling the core challenges in
            autonomous systems. Our research focuses on advancing the
            state-of-the-art in AI for flight, ensuring safety, efficiency, and
            adaptability in complex environments.
          </div>
        </div>
      </section>

      {/* Research Philosophy */}
      <section className="w-full max-w-7xl mx-auto px-2 py-10 sm:py-16">
        <h2 className="text-orange-500 text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-10">
          Our Research Philosophy
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10">
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg mb-6 md:mb-0 flex justify-center">
            <div className="relative w-full max-w-[400px] sm:max-w-[500px] md:w-[613px] h-56 sm:h-80 md:h-96 rounded-[10px] bg-gray-700">
              <Image
                src="/images/ai-labs-philosophy.png"
                alt="Research Philosophy"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <div className="h-auto md:h-72 justify-start text-white text-base sm:text-lg md:text-xl font-normal font-['Space_Grotesk'] leading-7 sm:leading-8">
              At SmartNav, our research is driven by a commitment to solving
              fundamental challenges in autonomy. We believe in a collaborative
              approach, working closely with industry partners and academic
              institutions to push the boundaries of what's possible in AI for
              flight. Our focus is on developing practical, real-world solutions
              that enhance safety, efficiency, and adaptability in complex
              environments.
            </div>
            <div className="w-36 sm:w-44 h-12 sm:h-14 max-w-[480px] min-w-20 px-5 bg-orange-500 hover:bg-orange-600 rounded-lg inline-flex justify-center items-center overflow-hidden mt-4 sm:mt-6 mx-auto md:mx-0">
              <div className="inline-flex flex-col justify-start items-center overflow-hidden">
                <div className="text-center justify-start text-white text-sm sm:text-base font-bold font-['Space_Grotesk'] leading-normal">
                  Partner With Us
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Publications & White Papers */}
      <section className="w-full max-w-7xl mx-auto px-2 py-6 sm:py-8">
        <h3 className="text-white text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
          Technical Publications & White Papers
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch">
          <div className="bg-zinc-800 rounded-lg px-4 sm:px-6 py-4 sm:py-5 flex-1 min-w-[180px] sm:min-w-[220px] max-w-xs mx-auto flex items-center text-white font-semibold text-sm sm:text-base gap-3 sm:gap-4">
            <img
              className="w-5 h-5 sm:w-6 sm:h-6"
              src="/images/file.svg"
              alt="file"
            />
            <div>Autonomous Flight Control Systems: A Comprehensive Review</div>
          </div>
          <div className="bg-zinc-800 rounded-lg px-4 sm:px-6 py-4 sm:py-5 flex-1 min-w-[180px] sm:min-w-[220px] max-w-xs mx-auto flex items-center text-white font-semibold text-sm sm:text-base gap-3 sm:gap-4">
            <img
              className="w-5 h-5 sm:w-6 sm:h-6"
              src="/images/file.svg"
              alt="file"
            />
            Safety-Critical AI in Aviation: Challenges and Solutions
          </div>
          <div className="bg-zinc-800 rounded-lg px-4 sm:px-6 py-4 sm:py-5 flex-1 min-w-[180px] sm:min-w-[220px] max-w-xs mx-auto flex items-center text-white font-semibold text-sm sm:text-base gap-3 sm:gap-4">
            <img
              className="w-5 h-5 sm:w-6 sm:h-6"
              src="/images/file.svg"
              alt="file"
            />
            Adaptive Path Planning for Unmanned Aerial Vehicles
          </div>
        </div>
      </section>

      <div className="w-full h-0 sm:mt-16 outline outline-2 outline-offset-[-1px] outline-orange-500" />

      {/* Featured Models */}
      <section className="w-full max-w-7xl mx-auto px-2 py-6 sm:py-8 mt-10 sm:mt-16">
        <h3 className="text-white text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
          Featured Models
        </h3>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Model 1 */}
          <div className="rounded-lg overflow-hidden shadow flex-1 max-w-xs sm:max-w-96 mx-auto flex flex-col mb-6 md:mb-0">
            <div className="w-full h-56 sm:h-72 relative rounded-[10px] bg-gray-700">
              <Image
                src="/images/ai-labs-model1.png"
                alt="Flight Control Model"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-5 flex-1 flex flex-col">
              <h4 className="text-orange-400 font-bold text-sm sm:text-md mb-1">
                SmartNav Flight Control Model
              </h4>
              <p className="text-gray-200 text-xs sm:text-sm mb-3 sm:mb-4 flex-1">
                An advanced model for precise and adaptive flight control in
                autonomous aircraft.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-colors w-fit mx-auto">
                Try Live Demo
              </button>
            </div>
          </div>
          {/* Model 2 */}
          <div className="rounded-lg overflow-hidden shadow flex-1 max-w-xs sm:max-w-96 mx-auto flex flex-col mb-6 md:mb-0">
            <div className="w-full h-56 sm:h-72 relative rounded-[10px] bg-gray-700">
              <Image
                src="/images/ai-labs-model2.png"
                alt="Path Planning Model"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-5 flex-1 flex flex-col">
              <h4 className="text-orange-400 font-bold text-sm sm:text-md mb-1">
                SmartNav Path Planning Model
              </h4>
              <p className="text-gray-200 text-xs sm:text-sm mb-3 sm:mb-4 flex-1">
                A sophisticated model for generating optimal flight paths in
                complex and dynamic environments.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-colors w-fit mx-auto">
                Explore on GitHub
              </button>
            </div>
          </div>
          {/* Model 3 */}
          <div className="rounded-lg overflow-hidden shadow flex-1 min-w-[180px] sm:min-w-[260px] max-w-xs sm:max-w-96 mx-auto flex flex-col">
            <div className="h-56 sm:h-72 relative rounded-[10px] bg-gray-700">
              <Image
                src="/images/ai-labs-model3.png"
                alt="Environmental Perception Model"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-5 flex-1 flex flex-col">
              <h4 className="text-orange-400 font-bold text-sm sm:text-md mb-1">
                SmartNav Environmental Perception Model
              </h4>
              <p className="text-gray-200 text-xs sm:text-sm mb-3 sm:mb-4 flex-1">
                A cutting-edge model for real-time environmental perception and
                understanding in autonomous flight.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-colors w-fit mx-auto">
                View on Hugging Face
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-0 ml-0 sm:ml-60 mt-10 sm:mt-16 outline outline-2 outline-offset-[-1px] outline-orange-500" />

      {/* Blog Section */}
      <section className="w-full mt-16 sm:mt-24 max-w-7xl mx-auto px-2 py-6 sm:py-8">
        <h3 className="text-white text-xl sm:text-2xl font-bold text-center mb-10 sm:mb-16">
          Blog
        </h3>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-stretch mb-4 sm:mb-6">
          {/* Blog 1 */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden shadow flex-1 min-w-[180px] sm:min-w-[260px] max-w-xs sm:max-w-96 mx-auto flex flex-col mb-6 sm:mb-0">
            <div className="h-56 sm:h-80 relative rounded-tl-[10px] rounded-tr-[10px] bg-gray-700">
              <Image
                src="/images/ai-labs-blog1.png"
                alt="AI in Aviation"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-5 flex-1 flex flex-col gap-2 sm:gap-4">
              <h4 className="text-white font-bold text-sm sm:text-md mb-1">
                AI in Aviation
              </h4>
              <p className="text-orange-500 font-semibold text-sm sm:text-md mb-1">
                Revolutionizing Air Traffic Management with AI
              </p>
              <p className="text-gray-200 text-xs sm:text-sm flex-1">
                Explore how SmartNav's AI is transforming air traffic control,
                enhancing safety and efficiency in airspace management.
              </p>
            </div>
          </div>
          {/* Blog 2 */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden shadow flex-1 min-w-[180px] sm:min-w-[260px] max-w-xs sm:max-w-96 mx-auto flex flex-col mb-6 sm:mb-0">
            <div className="h-56 sm:h-80 relative rounded-tl-[10px] rounded-tr-[10px] bg-gray-700">
              <Image
                src="/images/ai-labs-blog2.png"
                alt="Autonomous Flight"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-5 flex-1 flex flex-col gap-2 sm:gap-4">
              <h4 className="text-white font-bold text-sm sm:text-md mb-1">
                Autonomous Flight
              </h4>
              <p className="text-orange-500 font-semibold text-sm sm:text-md mb-1">
                The Future of Autonomous Flight: Navigating Complex Environments
              </p>
              <p className="text-gray-200 text-xs sm:text-sm flex-1">
                Discover how SmartNav's advanced AI algorithms enable autonomous
                aircraft to navigate and adapt to dynamic and challenging
                environments.
              </p>
            </div>
          </div>
          {/* Blog 3 */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden shadow flex-1 min-w-[180px] sm:min-w-[260px] max-w-xs sm:max-w-96 mx-auto flex flex-col">
            <div className="h-56 sm:h-80 w-full relative rounded-tl-[10px] rounded-tr-[10px] bg-gray-700">
              <Image
                src="/images/ai-labs-blog3.png"
                alt="AI Safety"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-5 flex-1 flex flex-col gap-2 sm:gap-4">
              <h4 className="text-white font-bold text-sm sm:text-md mb-1">
                AI Safety
              </h4>
              <p className="text-orange-500 font-semibold text-sm sm:text-md mb-1">
                Ensuring Safety in AI-Driven Autonomous Systems
              </p>
              <p className="text-gray-200 text-xs sm:text-sm flex-1">
                Learn about SmartNav's rigorous approach to safety in AI,
                including testing, validation, and certification for autonomous
                flight systems.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 sm:mt-8">
          <a href="#" className="text-orange-500 underline text-sm sm:text-md">
            See all posts
          </a>
        </div>
      </section>
    </main>
  );
}

export default AiLabsPage;
