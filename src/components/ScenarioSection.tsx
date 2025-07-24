// components/ScenarioSection.tsx
import React from 'react';
import ScenarioCard from './ScenarioCard';


const scenarioData = [
  {
    title: 'Public Safety & Disaster Response: Rapid Assessment & Emergency Management',
    image: "/images/public-safety.png",
    howItWorks: `Drones deployed in emergency situations such as wildfires, floods, or search-and-rescue missions stream real-time data to command centers. SmartNav software uses artificial intelligence powered to assess risks, identify survivors, and guide response teams.`,
    alt: 'Drone in disaster zone',
    bg: 'bg-gray-100'
  },
  {
    title: 'Security & Surveillance: Smart Monitoring & Threat Detection',
    image: '/images/security.png',
    howItWorks: `Drones patrol large facilities, critical infrastructure, or borders, equipped with AI-powered object detection. SmartNav software analyzes footage in real-time, recognizing suspicious activity, and alerting security teams.`,
    alt: 'Surveillance drone',
    bg: 'bg-color-light',
  },
  {
    title: 'High-Voltage Powerline and Sewer Inspection Drones',
    image: '/images/voltage.png',
    howItWorks: `Inspecting power lines traditionally requires helicopters or human climbers, which is risky and expensive. Drones equipped with thermal and zoom cameras can inspect powerlines efficiently. Similarly, sewer systems are dangerous and difficult for human inspection due to toxic gases and confined spaces. Drones equipped with advanced sensors can navigate pipelines safely.`,
    alt: 'Tunnel drone',
    bg: 'bg-gray-100'
  },
  {
    title: 'Environmental Monitoring & Wildlife Conservation',
    image: '/images/environment-monitoring.png',
    howItWorks: `Drones collect environmental data, monitor wildlife populations, and track illegal deforestation. SmartNav software processes aerial imagery and detects changes in vegetation, water bodies, and ecosystems over time.`,
    alt: 'monitoring',
    bg: 'bg-color-light'
  },


];

const ScenarioSection: React.FC = () => {
  return (
    <section className="px-6 md:px-0 py-16 bg-white text-black">
      <div className="space-y-4 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center">
          One Software, <span className="text-header">Infinite Applications</span>
        </h2>

        <ol className="text-gray-900 text-xl md:text-2xl mt-16 leading-relaxed list-inside space-y-2 mx-auto text-center">
          <li>A scalable AI-driven drone software solution</li>
          <li>Integrates with various drone types</li>
          <li>Collects, analyzes, and visualizes aerial data in real time</li>
        </ol>

        <h3 className="text-2xl md:text-4xl font-semibold text-header mt-16 text-center">
             One versatile software fits multiple scenarios
        </h3>
      </div>


      <div className="mt-16 space-y-12">
        {scenarioData.map((card, index) => (
          <ScenarioCard key={index} index={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default ScenarioSection;
