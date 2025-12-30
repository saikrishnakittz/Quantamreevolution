import { useState } from "react";

export default function ReserveYourSpot() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[3rem] bg-gradient-to-r from-[#00C2CB]/20 to-transparent border border-white/10 p-12 md:p-20 overflow-hidden text-center md:text-left">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00C2CB]/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Reserve Your Spot in the{" "}
                <span className="text-[#00C2CB]">Next Cohort</span>
              </h2>
              <p className="text-gray-400 text-lg mb-0">
                Limited seats available for our upcoming Quantum Transformation
                intensive. Don't miss out on this life-altering experience.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-8 py-5 rounded-2xl bg-black/50 border border-white/20 text-white focus:outline-none focus:border-[#00C2CB] transition-all"
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="px-10 py-5 rounded-2xl bg-[#00C2CB] hover:bg-[#00A0A8] text-black font-bold whitespace-nowrap transition-all shadow-[0_0_30px_rgba(0,194,203,0.3)]"
                >
                  {status === "idle" ? "Reserve Now" : "Reserving..."}
                </button>
              </form>
              <p className="text-gray-500 text-sm italic text-center sm:text-left ml-2">
                * No commitment required. We'll just notify you when doors open.
              </p>
              {status === "success" && (
                <p className="text-green-500 font-medium ml-2">
                  Success! You're on the list.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
