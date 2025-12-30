import heroSphere from "../assets/hero-sphere.svg";
import greenImageBg from "../assets/greenBg.png";
import yellowImageBg from "../assets/yellowBg.png";

export default function Home({ onStartJourney }) {
  return (
    <section className="relative min-h-screen bg-black flex items-center pt-24 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-[#00C2CB]/10 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-12 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="absolute top-0 left-0 md:left-[250px] pointer-events-none -z-10 opacity-30 md:opacity-100">
            <img src={yellowImageBg} alt="" className="w-64 md:w-auto" />
          </div>

          <div className="flex flex-col space-y-6 md:space-y-10 max-w-2xl text-center lg:text-left">
            <h1 className="text-white font-poppins font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-[1px]">
              Unlock the Power of <br className="hidden sm:block" />
              Quantum Healing
            </h1>

            <p className="text-white font-roboto font-light text-base md:text-lg leading-relaxed tracking-[0.6px] opacity-80">
              Discover a revolutionary healing path that blends science, spirit
              & ancient wisdom to transform your life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onStartJourney}
                className="cursor-pointer bg-[#09AF9B] hover:bg-[#09AF9B] text-black font-extrabold px-8 md:px-10 py-4 md:py-5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(0,194,203,0.3)]"
              >
                <span className="text-white font-roboto font-bold text-base md:text-lg tracking-[0.6px]">
                  Start our healing journey
                </span>
              </button>
            </div>
            <div className="absolute top-[250px] left-0 pointer-events-none -z-10 opacity-30 md:opacity-100">
              <img src={greenImageBg} alt="" className="w-64 md:w-auto" />
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
              <img
                src={heroSphere}
                alt="Quantum Particle Sphere"
                className="w-full h-full object-contain animate-sphere-float"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00C2CB]/20 to-transparent blur-[60px] md:blur-[100px] rounded-full -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes sphere-float {
          0%, 100% { transform: scale(0.6) rotate(0deg); opacity: 0.9; }
          50% { transform: scale(1) rotate(180deg); opacity: 1; }
        }
        .animate-float { animation: float 6s infinite ease-in-out; }
        .animate-float-delayed { animation: float 6s infinite ease-in-out -3s; }
        .animate-sphere-float { animation: sphere-float 12s infinite ease-in-out; }
      `}</style>
    </section>
  );
}
