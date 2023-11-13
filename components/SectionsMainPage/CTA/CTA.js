"use client"
import Modal2 from "@/components/modal/Modal2";
import { useState } from "react";

export default function CTA() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleOrderClick2 = (title) => {
    setSelectedProduct(title)
    document.getElementById("my_modal_4").showModal();
  };
  const closeModal = () => {
    document.getElementById("my_modal_4").close();
  };
  return (
    <section className='py-12 md:py-24' id="dostavka">
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-start'>
          <span className='flex-grow text-4xl md:text-5xl 2xl:text-6xl font-bold text-primary'>Доставка товара осуществляется по всей Беларуси</span>
          <button
            className='btn btn-secondary rounded-full sm:btn-lg'
            onClick={() => handleOrderClick2("Заказать доставку")}>
            Заказать доставку
          </button>
        </div>
      </div>

      <Modal2
        selectedProduct={selectedProduct}
        closeModal={closeModal}
        isFormSubmitted={isFormSubmitted}
        setIsFormSubmitted={setIsFormSubmitted}
      />
    </section>
  )
}