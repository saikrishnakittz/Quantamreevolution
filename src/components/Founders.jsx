import { ArrowRight } from "lucide-react";
import EktaImg from "../assets/ekta.svg";
import FrancoisImg from "../assets/francois.svg";

export default function Founders() {
  const founders = [
    {
      name: "Ekta Bouderlique",
      description:
        "Heartfulness trainer, eco-leader, quantum visionary. From Indian roots to global",
      image: EktaImg,
    },
    {
      name: "François Bouderlique",
      description:
        "Former top-performing ESA consultant turned conscious economy expert",
      image: FrancoisImg,
    },
  ];

  return (
    <section className="py-20 md:py-32 text-white bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl leading-[1.4] tracking-[1px] mb-12 md:mb-20">
          Two Souls. One Mission. <br className="sm:hidden" /> Conscious
          Evolution.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 px-4 md:px-0 mb-16 md:mb-24">
          {founders.map((founder, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mb-8 md:mb-10 relative rounded-full overflow-hidden border-2 border-white/5 transition-all duration-500 shadow-2xl">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110"
                />
              </div>
              <h3 className="font-roboto font-semibold text-xl md:text-2xl leading-none tracking-[0.006em]">
                {founder.name}
              </h3>
              <p className="font-roboto font-light mt-4 md:mt-5 text-sm md:text-base leading-relaxed tracking-[0.006em] max-w-sm">
                {founder.description}
              </p>
            </div>
          ))}
        </div>

        <div className="font-roboto mb-8 md:mb-12 font-normal text-lg md:text-2xl leading-relaxed tracking-[0.006em] max-w-2xl mx-auto px-4 italic opacity-80">
          "Time is short. Opportunity is great. It is for all of us to evolve"
        </div>

        <div className="flex justify-center">
          <button
            onClick={() =>
              window.open(
                "https://www.quantum-r-evolution.com/about-4",
                "_blank"
              )
            }
            className="bg-[#09AF9B] hover:bg-[#00A0A8] text-white py-3.5 md:py-4 px-8 md:px-10 rounded-2xl flex items-center justify-center gap-4 transition-all transform hover:scale-[1.02] group w-full sm:w-auto"
          >
            <span className="font-bold text-base md:text-lg">
              Read Our Story
            </span>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/60 transition-colors">
              <ArrowRight size={18} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
