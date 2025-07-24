import Image from "next/image";

export function TechnologyPage() {
  return (
    <main className="bg-black min-h-screen w-full pb-10">
      {/* Hero Section */}
      <section
        className="relative flex flex-col justify-center items-center h-[220px] sm:h-[400px] md:h-[626px] w-full pt-12 sm:pt-20 md:pt-24 pb-6 sm:pb-10 md:pb-12 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/technology.png")' }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 flex flex-col w-full max-w-7xl px-2 gap-8 sm:gap-12 md:gap-16 items-center justify-center text-center">
          <div className="justify-center flex flex-wrap items-center text-center w-full">
            <span className="text-white text-4xl sm:text-6xl md:text-8xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[74px]">
              Inside{" "}
            </span>
            <span className="text-orange-500 text-4xl sm:text-6xl md:text-8xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[74px]">
              ARGUS
            </span>
          </div>
          <div className="justify-center text-white text-xl sm:text-3xl md:text-5xl font-bold font-['Space_Grotesk'] leading-7 sm:leading-10 md:leading-[74px] w-full text-center">
            The Future of Autonomous Navigation
          </div>
        </div>
      </section>

      {/* The Training Environment */}
      <section className="w-full max-w-6xl mx-auto px-2 py-10 sm:py-14 md:py-16">
        <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-bold text-center mb-2 sm:mb-4">
          The Training Environment
        </h2>
        <div className="w-full max-w-xs sm:max-w-md md:max-w-xl h-0 outline outline-2 outline-offset-[-1px] outline-orange-500 mx-auto" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 px-2 mt-10 sm:mt-16 md:mt-24 text-center md:text-left">
          <div className="w-full md:w-1/2 flex flex-col justify-center mb-8 md:mb-0 gap-4 sm:gap-8 md:gap-10 items-center md:items-start text-center md:text-left">
            <div className="w-full max-w-xs sm:max-w-md md:w-[528px] justify-center text-white text-lg sm:text-2xl md:text-3xl font-bold font-['Space_Grotesk'] leading-6 sm:leading-7">
              Physics-Based Machine Learning
            </div>
            <div className="w-full max-w-xs sm:max-w-md md:w-[511px] justify-center text-orange-500 text-lg sm:text-2xl md:text-3xl font-bold font-['Space_Grotesk'] leading-7 sm:leading-9">
              The Onboard Brain: The ARGUS Inference Engine
            </div>
            <div className="w-full max-w-xs sm:max-w-md md:w-[507px] justify-center text-white text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed sm:leading-loose">
              ARGUS's core innovation lies in its physics-based machine learning
              approach. We train our models in a simulated environment that
              accurately replicates real-world physics, including aerodynamics,
              weather conditions, and sensor behavior. This allows our AI to
              learn complex flight dynamics and decision-making processes
              without the need for extensive real-world flight testing,
              significantly reducing development time and costs.
            </div>
          </div>
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
            <div className="relative w-full max-w-xs sm:max-w-md md:w-[623px] h-40 sm:h-64 md:h-[619px] bg-gray-700 rounded-[10px] mx-auto flex items-center justify-center">
              <Image
                src="/images/technology-training.png"
                alt="Training Environment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-0 mt-4 md:mt-0 outline outline-2 outline-offset-[-1px] outline-orange-500"></div>

      {/* The Workflow */}
      <section className="w-full max-w-6xl mx-auto px-2 py-10 sm:py-14 md:py-16">
        <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-bold text-center mb-2 sm:mb-4">
          The Workflow
        </h2>
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg h-0 outline outline-2 outline-offset-[-1px] outline-orange-500 mx-auto" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 px-2 mt-10 sm:mt-16 md:mt-24 text-center md:text-left">
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg flex items-center justify-center mb-8 md:mb-0">
            <div className="relative w-full max-w-xs sm:max-w-md md:w-[595px] h-40 sm:h-64 md:h-[544px] bg-gray-700 rounded-[10px] mx-auto flex items-center justify-center">
              <Image
                src="/images/technology-workflow.png"
                alt="Workflow"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 sm:gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
            <div className="w-full max-w-xs sm:max-w-md md:w-[458px] justify-center text-orange-500 text-lg sm:text-2xl md:text-3xl font-bold font-['Space_Grotesk'] leading-7 sm:leading-9">
              Offline Distillation, Real-Time <br />
              Execution
            </div>
            <p className="w-full max-w-xs sm:max-w-md md:w-[567px] justify-center text-white text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed sm:leading-loose">
              Our workflow combines offline distillation with real-time
              execution. Complex models trained in the simulated environment are
              distilled into smaller, more efficient models suitable for onboard
              processing. This distillation process retains the core knowledge
              of the larger models while reducing computational demands,
              ensuring seamless and safe autonomous flight operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
              <div className="h-12 sm:h-14 max-w-xs sm:max-w-[480px] min-w-20 px-4 bg-orange-500 hover:bg-orange-600 rounded-xl inline-flex justify-center items-center overflow-hidden mx-auto">
                <div className="inline-flex flex-col justify-start items-center overflow-hidden">
                  <div className="text-center justify-start text-white text-sm sm:text-base font-bold font-['Space_Grotesk'] leading-tight">
                    See Our Technology in Action
                  </div>
                </div>
              </div>
              <div className="h-12 sm:h-14 max-w-xs sm:max-w-[480px] min-w-20 px-4 bg-orange-500 hover:bg-orange-600 rounded-xl inline-flex justify-center items-center overflow-hidden mx-auto">
                <div className="inline-flex flex-col justify-start items-center overflow-hidden">
                  <div className="text-center justify-start text-white text-sm sm:text-base font-bold font-['Space_Grotesk'] leading-tight">
                    Explore Our Research
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TechnologyPage;
