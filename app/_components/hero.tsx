import ConsultationForm from "./consultation-form";

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] pt-20">
      {/* Background image with blur */}
      <div
        className="absolute inset-0 z-0 min-h-screen"
        style={{
          backgroundImage: "url(/imgs/bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      </div>

      {/* Main hero content */}
      <div className="container mx-auto px-4 py-12 md:py-5 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Natural Healing <br />
              for Skin, Hair <br /> & Beyond
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Specialized Homeopathic Solutions for Your Wellbeing
            </p>
            <p className="text-md text-gray-500 mb-8">
              Experience gentle yet effective homeopathic treatment for skin
              conditions, hair loss, and chronic ailments. Our holistic approach
              treats the root cause, ensuring lasting results without side
              effects.
            </p>
            <a
              href="tel:+91-9460661374"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors"
            >
              Book a Consultation
            </a>
          </div>

          <ConsultationForm />
        </div>
      </div>
    </div>
  );
};
