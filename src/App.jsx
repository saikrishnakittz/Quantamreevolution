import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import WhyChoose from "./components/WhyChoose";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import Founders from "./components/Founders";
import WhatIsQH from "./components/WhatIsQH";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import Stars from "./components/Stars";
import Flower from "./components/FLower";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-[#000000] overflow-hidden selection:bg-[#00C2CB]/30 selection:text-white">
      <Header />
      <main>
        <Home onStartJourney={openModal} />
        <Stars />
        <WhyChoose onStartJourney={openModal} />
        <Flower />
        <Courses />
        <Testimonials />
        <Founders />
        <WhatIsQH />
        <Contact />
      </main>
      <Footer />

      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
