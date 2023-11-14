import About from '@/components/SectionsMainPage/About/About'
import Brands from '@/components/SectionsMainPage/Brands/Brands'
import CTA from '@/components/SectionsMainPage/CTA/CTA'
import Preimushestva from '@/components/SectionsMainPage/Preimushestva/Preimushestva'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className='container mx-auto'>

        <section className="hero h-auto rounded-md overflow-hidden" id="main" style={{ backgroundImage: "url('/fon/fon.webp')" }}>
          <div className="hero-overlay bg-opacity-60 bg-secondary"></div>
          <div className="hero-content text-center text-secondary-content">
            <div className="max-w-lg">

              <h1 className="mb-5 sm:mb-7 text-2xl sm:text-4xl font-semibold uppercase">
                <span className='block sd:text-xl xz:text-sm mb-3 font-light'>
                  оптовый
                </span>
                <span className='block sd:text-7xl xz:text-4xl mb-3 font-bold'>
                  Склад
                </span>
                <span className="block mb-2">
                  смазочных материалов
                </span>
                <span className="block mb-2">
                   охлождающих жидкостей
                </span>
                <span className="block">
                  фильтров
                </span>
              </h1>
              <h2 className='text-xl uppercase mb-8'>
                Доставка по всей Беларуси
              </h2>
              <p className="mb-5 sm:mb-7 sm:text-sm">
                Первый поставщик моторных масел в РБ "Резонанс Групп", специализируется на оптовый продажах высококачественных масел и фильтров для сельхозтехники.
              </p>

              <a href="tel:" className="btn btn-warning sm:btn-wide">Позвонить</a>
            </div>
          </div>
        </section>


        <Preimushestva />

        <Brands />

        <About />

        <CTA />
      </div>
    </main>
  )
}
