import featureIcon from "../assets/feature-icon.png";

export default function WhyChoose({ onStartJourney }) {
  const features = [
    {
      icon: featureIcon,
      title: "Heal deep-rooted life patterns and traumas",
    },
    {
      icon: featureIcon,
      title: "Reprogram with Quantum Transformation",
    },
    {
      icon: featureIcon,
      title: "Become a healer / Help yourself & your family",
    },
    {
      icon: featureIcon,
      title: "Open Up Potential for Transformation",
    },
    {
      icon: featureIcon,
      title: "Successfully transition to a heart-led life",
    },
    {
      icon: featureIcon,
      title: "Experience Profound Health & Vitality",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          <div className="hidden lg:block"></div>
          <div className="max-w-xl mx-auto lg:mx-0">
            <h2 className="text-white font-poppins font-normal text-2xl sm:text-3xl md:text-4xl leading-[1.4] tracking-[1px]">
              Why Choose Quantum <br className="hidden sm:block" />
              (R) Evolution?
            </h2>

            <div className="space-y-4 md:space-y-6 mt-8 md:mt-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 text-gray-300 group transition-all"
                >
                  <img
                    src={feature.icon}
                    alt=""
                    className="w-5 h-5 md:w-6 md:h-6 shrink-0"
                  />
                  <span className="font-roboto font-light text-sm md:text-base leading-relaxed tracking-[0.006em] text-left">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={onStartJourney}
              className="mt-10 md:mt-12 bg-[#09AF9B] hover:bg-[#00A0A8] text-white font-bold px-8 md:px-10 py-3.5 md:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(0,194,203,0.3)] w-full sm:w-auto"
            >
              <span className="font-roboto font-bold text-base md:text-lg tracking-[0.6px]">
                Start our healing journey
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
