"use client";

import Image from "next/image";
import Link from "next/link";
import GridGuard from "../../public/images/gridguard.png";
import Wildfire from "../../public/images/wildfire.png";
import Infratrack from "../../public/images/infratrack.png";
import Research from "../../public/images/research.png";

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen w-full">
      {/* Hero Section */}
      <section
        className="relative flex flex-col justify-center items-center md:items-start min-h-[626px] w-full pt-24 pb-12 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/hero.png")' }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 flex flex-col items-center md:items-start w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16 mx-auto md:mx-0 md:ml-16">
          <div className="w-full max-w-7xl">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight 3xl:leading-[105px] text-center md:text-left">
              Unlocking Autonomous Flight in Hazardous Environments
            </h1>
          </div>
          <p className="text-gray-200 text-base sm:text-lg md:text-xl text-center md:text-left mt-6 sm:mt-8 mb-8 sm:mb-10 md:mb-12 max-w-4xl">
            Our ARGUS platform provides a new level of AI-driven resilience for
            unmanned systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center md:items-start">
            <button className="h-12 sm:h-14 w-full sm:w-auto min-w-[200px] sm:max-w-[480px] px-5 bg-orange-500 hover:bg-orange-600 rounded-xl flex justify-center items-center text-white text-sm sm:text-base font-bold font-['Space_Grotesk'] leading-normal transition-colors">
              Explore Our Technology
            </button>
            <button className="h-12 sm:h-14 w-full sm:w-auto min-w-[200px] sm:w-48 sm:max-w-[480px] px-5 bg-black hover:bg-gray-900 rounded-xl flex justify-center items-center text-white text-sm sm:text-base font-bold leading-normal transition-colors border border-gray-700">
              View Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Technology in Action Section */}
      <section className="w-full py-12 sm:py-16 bg-black">
        <div className="text-center mb-8 sm:mb-10 px-4">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Technology in Action
          </h2>
          <div className="w-48 sm:w-64 md:w-96 h-0 outline outline-2 outline-offset-[-1px] outline-orange-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Card 1 */}
          <div className="bg-zinc-900 rounded-lg overflow-hidden shadow w-full max-w-sm mx-auto">
            <div className="w-full h-40 sm:h-48 bg-gray-700 relative">
              <Image
                src={GridGuard}
                alt="GridGuard"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="text-orange-400 font-bold text-base sm:text-lg mb-2">
                GridGuard: AI-Powered Power Grid Inspection
              </h3>
              <p className="text-gray-200 text-sm">
                Automated inspection of power grids using AI-powered drones.
                Learn More.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-zinc-900 rounded-lg overflow-hidden shadow w-full max-w-sm mx-auto">
            <div className="w-full h-40 sm:h-48 bg-gray-700 relative">
              <Image
                src={Wildfire}
                alt="Wildfire Watch"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="text-orange-400 font-bold text-base sm:text-lg mb-2">
                Wildfire Watch: Real-Time Monitoring
              </h3>
              <p className="text-gray-200 text-sm">
                Real-time monitoring of wildfires using AI-powered drones. Learn
                More.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-zinc-900 rounded-lg overflow-hidden shadow w-full max-w-sm mx-auto sm:col-span-2 lg:col-span-1">
            <div className="w-full h-40 sm:h-48 bg-gray-700 relative">
              <Image
                src={Infratrack}
                alt="InfraTrack"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="text-orange-400 font-bold text-base sm:text-lg mb-2">
                InfraTrack: Wildlife Monitoring with IR
              </h3>
              <p className="text-gray-200 text-sm">
                Identifying and tracking animals in agricultural settings using
                infrared technology. Learn More.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-0 outline outline-2 outline-offset-[-1px] outline-orange-500 mx-auto"></div>

      {/* ARGUS Advantage Section */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6">
          The ARGUS Advantage
        </h2>
        <p className="text-gray-200 text-center max-w-3xl mx-auto mb-6 sm:mb-8 text-base sm:text-lg px-4">
          Our ARGUS platform leverages Physics-Based Digital Twins and Onboard
          Edge AI to provide unparalleled resilience for unmanned systems. These
          technologies enable our drones to navigate and operate safely in the
          most challenging environments.
        </p>
        <div className="flex justify-center px-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 sm:px-7 py-3 rounded-lg text-sm sm:text-base transition-colors w-full sm:w-auto max-w-xs sm:max-w-none">
            Dive Deeper into Our Tech
          </button>
        </div>
      </section>

      <div className="w-full h-0 outline outline-2 outline-offset-[-1px] outline-orange-500 mx-auto" />

      {/* Latest Insights Section */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-10">
          Latest Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-4 sm:mb-6">
          {/* Insight 1 */}
          <div className="bg-zinc-800 rounded-lg px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-center text-center">
            <span className="text-white font-semibold text-sm sm:text-base">
              Navigating Complex Environments with AI
            </span>
          </div>
          {/* Insight 2 */}
          <div className="bg-zinc-800 rounded-lg px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-center text-center">
            <span className="text-white font-semibold text-sm sm:text-base">
              The Future of Autonomous Systems
            </span>
          </div>
          {/* Insight 3 */}
          <div className="bg-zinc-800 rounded-lg px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-center text-center md:col-span-2 lg:col-span-1">
            <span className="text-white font-semibold text-sm sm:text-base">
              Enhancing Drone Safety with Edge AI
            </span>
          </div>
        </div>
        <div className="text-center mt-2">
          <Link href="#" className="text-orange-400 underline text-sm hover:text-orange-300 transition-colors">
            View all Posts
          </Link>
        </div>
      </section>

      {/* Our Research Section */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          Our Research
        </h2>
        <div className="w-48 sm:w-64 md:w-72 h-0 mb-12 sm:mb-16 md:mb-24 outline outline-2 outline-offset-[-1px] outline-orange-500 mx-auto" />
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 max-w-6xl mx-auto">
          <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-76 rounded-[10px] bg-gray-700">
              <Image
                src={Research}
                alt="Research"
                fill
                className="object-cover rounded-[10px]"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-6 text-center lg:text-left">
              From our AI Labs: We are dedicated to pushing the boundaries of AI
              and autonomous flight through rigorous research and development.
              Our team of experts is constantly exploring new frontiers to
              enhance the capabilities and safety of unmanned systems.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 sm:px-7 py-3 rounded-lg text-sm sm:text-base transition-colors w-full sm:w-auto max-w-xs sm:max-w-none">
                Explore Our Research
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}