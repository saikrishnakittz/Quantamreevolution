import { submitToGoogleSheets } from "../utils/googleSheets";
import { X } from "lucide-react";
import { useState } from "react";

export default function BookingModal({ isOpen, onClose }) {
  const [status, setStatus] = useState("idle");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.target);
    const data = {
      formType: "Booking Inquiry",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      await submitToGoogleSheets(data);
      setStatus("success");
      setTimeout(() => {
        onClose();
        setStatus("idle");
      }, 2000);
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-lg bg-[#0A0A0A] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-400 hover:text-white transition-colors p-2"
        >
          <X size={20} md:size={24} />
        </button>

        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-3 md:mb-4">
            Start Your <span className="text-[#09AF9B]">Healing Journey</span>
          </h2>
          <p className="text-gray-500 text-xs md:text-sm leading-relaxed px-2 md:px-4 opacity-80">
            Fill in your details and we'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            required
            className="w-full px-5 md:px-6 py-3.5 md:py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00C2CB]/50 transition-all placeholder:text-gray-500 text-sm"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            required
            className="w-full px-5 md:px-6 py-3.5 md:py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00C2CB]/50 transition-all placeholder:text-gray-500 text-sm"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (Optional)"
            className="w-full px-5 md:px-6 py-3.5 md:py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00C2CB]/50 transition-all placeholder:text-gray-500 text-sm"
          />

          <textarea
            name="message"
            placeholder="Tell us about your healing goals..."
            rows="3"
            className="w-full px-5 md:px-6 py-3.5 md:py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00C2CB]/50 transition-all resize-none placeholder:text-gray-500 text-sm"
          ></textarea>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3.5 md:py-4 mt-2 md:mt-4 rounded-xl bg-[#09AF9B] hover:bg-[#00ACAF] text-white font-bold text-base transition-all transform hover:scale-[1.02] shadow-[0_4px_20px_rgba(0,194,203,0.2)]"
          >
            {status === "idle" && "Submit Inquiry"}
            {status === "submitting" && "Sending..."}
            {status === "success" && "Inquiry Sent!"}
            {status === "error" && "Error - Try Again"}
          </button>
        </form>

        <p className="mt-6 md:mt-8 text-center text-gray-600 text-[10px] md:text-xs">
          Your information is safe with us. We never share your data.
        </p>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-[#00C2CB]/5 blur-[80px] -z-10 rounded-full"></div>
      </div>
    </div>
  );
}
