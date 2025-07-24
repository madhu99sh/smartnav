import Image from "next/image";
import droneImg from "../../public/images/droneImg.png"; // Save your drone image here

export default function Home() {
  const scrollToQuoteForm = () => {
    const quoteForm = document.getElementById("quote-form");
    if (quoteForm) {
      quoteForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between pt-8 bg-black">
      <div className="md:w-1/2 space-y-6 text-center md:text-left p-6 md:p-10 md:ml-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-header leading-[1.6]">
          SMART INSIGHTS <br /> FROM ABOVE
        </h1>
        <p className="text-gray-300 text-base text-md md:text-lg leading-loose oswald-text">
          A single drone software platform with AI-driven data processing,
          real-time analytics, and cloud connectivity that can revolutionize
          multiple industries.
        </p>
        <button
          onClick={scrollToQuoteForm}
          className="bg-color text-white px-8 py-6 rounded-bl-2xl rounded-tr-2xl font-bold transition hover:bg-opacity-90"
        >
          GET IN TOUCH
        </button>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0">
        <div className="overflow-hidden w-full h-full rounded-top-left-ellipse">
          <Image
            src={droneImg}
            alt="Drone in sky"
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
