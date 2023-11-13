"use client"
import Image from "next/image";
import Modal from "../modal/Modal";
import { useState } from "react";


export default function Catalog({ data }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleOrderClick = title => {
    setSelectedProduct(title);
    document.getElementById("my_modal_3").showModal();
  };
  const closeModal = () => {
    document.getElementById("my_modal_3").close();
  };


  return (
    <>
      <section className='py-8 md:py-12 sd:mt-16 xz:mt-10' id="catalog">
        <div className='container mx-auto'>
          <h2 className='uppercase sd:text-3xl xz:text-xl text-center'>
            {data.title.h2}
          </h2>
          <p className='mt-5 text-center'>
            {data.title.p}
          </p>

          <div className='flex flex-wrap justify-center mt-16'>

            {
              data.data.map(el => {
                return (
                  <div key={el.id} className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10 sd:mx-2 xz:mx-0">
                    <figure className="bg-white">
                      <Image src={el.img} alt={el.alt} width={480} height={480} />
                    </figure>
                    <div className="card-body">
                      <h3 className="card-title">
                        {el.h3}
                      </h3>
                      <p>
                        {el.p}
                      </p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => handleOrderClick(el.alt)}>
                          Заказать
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

   
      <Modal
        selectedProduct={selectedProduct}
        closeModal={closeModal}
        isFormSubmitted={isFormSubmitted}
        setIsFormSubmitted={setIsFormSubmitted}
      />
    </>
  )
}