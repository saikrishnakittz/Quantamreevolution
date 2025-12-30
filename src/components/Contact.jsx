import { useState } from "react";
import greenImageBg from "../assets/greenBg2.png";
import { submitToGoogleSheets } from "../utils/googleSheets";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.target);
    const data = {
      formType: "Contact Form",
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      await submitToGoogleSheets(data);
      setStatus("success");
      e.target.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="py-10 md:pb-34 text-white bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[600px] h-[300px] md:h-[600px] bg-[#00C2CB]/10 blur-[100px] md:blur-[120px] rounded-full"></div>
      <div className="absolute top-[-10px] left-0 md:left-[300px] overflow-hidden opacity-30 md:opacity-100">
        <img src={greenImageBg} alt="" className="w-64 md:w-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl leading-[1.4] tracking-[0.006em] mb-8 md:mb-12">
          Contact Us
        </h2>

        <div className="bg-white/10 backdrop-blur-xl max-w-md mx-auto bg-[#1a1a1a]/80 border border-white/5 rounded-[2rem] p-6 sm:p-10 shadow-2xl relative">
          <h3 className="font-roboto font-medium mb-6 md:mb-8 text-sm md:text-base leading-relaxed tracking-[0.006em] text-center opacity-90">
            Transform Your Life. Let's Begin.
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4 text-center">
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              required
              className="w-full px-5 md:px-6 py-3.5 md:py-4 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-[#00C2CB]/50 transition-all placeholder:text-gray-500 text-sm"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter email id"
              required
              className="w-full px-5 md:px-6 py-3.5 md:py-4 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-[#00C2CB]/50 transition-all placeholder:text-gray-500 text-sm"
            />

            <textarea
              name="message"
              placeholder="Enter message"
              rows="4"
              required
              className="w-full px-5 md:px-6 py-3.5 md:py-4 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-[#00C2CB]/50 transition-all resize-none placeholder:text-gray-500 text-sm"
            ></textarea>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-3.5 md:py-4 rounded-xl bg-[#09AF9B] hover:bg-[#00ACAF] text-white font-bold text-base transition-all transform hover:scale-[1.02] shadow-[0_4px_20px_rgba(0,194,203,0.2)]"
            >
              {status === "idle" && "Book now"}
              {status === "submitting" && "Sending..."}
              {status === "success" && "Sent Successfully!"}
              {status === "error" && "Error - Try Again"}
            </button>
          </form>

          {status === "success" && (
            <div className="mt-6 p-3 rounded-lg bg-[#09AF9B]/10 border border-[#00C2CB]/20 animate-fade-in">
              <p className="text-[#09AF9B] text-xs font-bold">
                Successfully sent!
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
      `}</style>
    </section>
  );
}
