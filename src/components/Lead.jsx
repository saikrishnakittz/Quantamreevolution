import { useState } from "react";

export default function Lead() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "" });
    }, 1500);
  };

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Get Your Free <span className="text-[#00C2CB]">Quantum Mapping</span>
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          Join thousands who have started their journey. Enter your details
          below and receive our exclusive mapping guide.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00C2CB] transition-colors md:w-64"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#00C2CB] transition-colors md:w-80"
          />
          <button
            type="submit"
            disabled={status === "submitting" || status === "success"}
            className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
              status === "success"
                ? "bg-green-500 text-white"
                : "bg-[#00C2CB] text-black hover:bg-[#00A0A8]"
            }`}
          >
            {status === "idle" && "Get Free Access"}
            {status === "submitting" && "Processing..."}
            {status === "success" && "Access Sent!"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-green-500 font-medium animate-bounce">
            Check your email for the mapping guide!
          </p>
        )}
      </div>
    </section>
  );
}
