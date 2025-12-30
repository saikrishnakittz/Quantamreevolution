import Healing from "../assets/healing.svg";
import ArrowRight from "../assets/feature-icon.png";

export default function WhatIsQH() {
  const rightPoints = [
    "Inspired by Heisenberg, Schrödinger",
    "Backed by Vedantic Teachings",
    "Rooted in Consciousness",
    "Connected through Morphic Fields",
  ];

  return (
    <section className="py-16 md:py-32 bg-black relative overflow-hidden">
      <div className="text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl leading-[1.4] tracking-[0.006em] font-medium mb-4">
            What is Quantum Healing?
          </h2>
          <p className="font-poppins text-sm md:text-base text-gray-400 leading-relaxed tracking-[0.006em]">
            Where ancient wisdom meets modern physics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-8 mb-16 md:mb-20">
        
          <div className="font-poppins text-[16px] leading-[24px] tracking-[0.006em] text-gray-400 text-base leading-relaxed space-y-4 max-w-sm mx-auto lg:text-left">
            <p>
              Quantum Healing is a holistic method that uses energy,
              consciousness, and principles of quantum physics to promote deep
              healing of the mind, body, and spirit. It helps release blockages,
              restore balance, and activate the body's natural healing
              abilities.
            </p>
          </div>

 
          <div className="relative flex justify-center order-first lg:order-none">
            <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[450px] md:h-[450px]">
              <img
                src={Healing}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>


          <div className="space-y-8 max-w-sm mx-auto">
            {rightPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-6 group cursor-default"
              >
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-[#00C2CB] group-hover:text-[#00C2CB] transition-all">
                  <img src={ArrowRight} alt="" />
                </div>
                <span className="text-gray-400 text-lg font-light group-hover:text-white transition-colors">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

  
        <div className="space-y-4 text-center mt-12 md:mt-20">
          <p className="font-poppins text-sm md:text-base leading-relaxed tracking-[0.006em] text-gray-400 max-w-2xl mx-auto italic">
            "All happenings are played out in one universal consciousness"
          </p>

          <p className="font-poppins text-xs md:text-sm leading-relaxed tracking-[0.006em] text-gray-500 uppercase">
            – Erwin Schrödinger –
          </p>
        </div>
      </div>
    </section>
  );
}
