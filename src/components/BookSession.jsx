export default function BookSession() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00C2CB]/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Start Your{" "}
                <span className="text-[#00C2CB]">Transformation?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Book a personalized 1-on-1 session with our world-class healers
                and start your journey towards quantum alignment today.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 rounded-full bg-[#00C2CB]/20 flex items-center justify-center text-[#00C2CB]">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span>60-Minute Personalized Sessions</span>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 rounded-full bg-[#00C2CB]/20 flex items-center justify-center text-[#00C2CB]">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <span>Deep Energetic Mapping</span>
                </div>
              </div>

              <button className="bg-[#00C2CB] hover:bg-[#00A0A8] text-black font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(0,194,203,0.3)]">
                Book My Session Now
              </button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-black/40 border border-white/10 p-2">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#00C2CB]/20 to-transparent flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-[#00C2CB]/5 group-hover:bg-[#00C2CB]/10 transition-colors duration-500"></div>
                  <svg
                    className="w-32 h-32 text-[#00C2CB] opacity-30 animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="absolute bottom-12 text-white/50 text-sm font-medium">
                    Calendar Integration Loading...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
