import Catalog from "@/components/Catalog/Catalog";
import CTA from "@/components/SectionsMainPage/CTA/CTA";
import { dataMobil } from "@/constans/smazochnye-materialy/MobilConst";

export const metadata = {
	title: 'Купить оптом масло Mobil с доставкой по Беларуси',
	description: 'Моторное масло Mobil по оптовым ценам с доставкой по всей Беларуси. Выгодные предложения для оптовых покупателей. Качественное моторное масло для оптовой цене.',
	alternates: {
		canonical: ''
	}
};


const MasloNSL = () => {
	return (
		<main className='pb-20'>
			<div className='container mx-auto'>
				<section
					className="hero h-auto"
					style={{ backgroundImage: 'url("/pages/mobil/mobil.webp")' }}>
					<div className="hero-overlay bg-opacity-60" />
					<div className="hero-content text-center text-neutral-content py-16">
						<div className="max-w-md">
							<h1 className="mb-12 sd:text-7xl xz:text-4xl font-bold">
								Масло Mobil
							</h1>
							<p className="mb-12 sd:text-xl xz:text-base">
								Инновационное масло Mobil от первого поставщика по оптовым ценам, с оперативной доставкой по всей территории Беларуси. Заказав масло у ООО "Резонанс Групп" вы получаете гарантированно высокое качество и выгодные цены для оптовых клиентов.
							</p>
							<button className="btn btn-primary">Позвонить</button>
						</div>
					</div>
				</section>


				<Catalog data={dataMobil} />

				<CTA />

				<article className='mt-20'>
					<h4 className='uppercase text-xl font-semibold'>
						Как Отличить Подлинное Моторное Масло Mobil от Подделки: Руководство для Защиты Вашего Двигателя
					</h4>
					<p className='mt-3 text-justify'>
						В мире, где автолюбители и профессиональные автомастера стремятся обеспечить оптимальную работу своих двигателей, выбор качественного моторного масла становится фундаментальным вопросом. Бренд Mobil, с его богатым наследием и репутацией, часто подвергается подделкам. В этом руководстве мы рассмотрим, как различить подлинное моторное масло Mobil от потенциально опасных подделок.
					</p>
					<ul className='mt-5'>
						<li className='mb-4'>
							<h4 className='font-semibold mb-2'>
								1. Официальные Точки Продаж:
							</h4>
							<p className='text-justify'>
								Первый и наиболее надежный способ приобретения подлинного масла Mobil - это покупка в официальных точках продаж. Это могут быть официальные дилеры, первые поставщики моторного масла. Помните, что несанкционированные точки продаж часто являются источником поддельных продуктов.
							</p>
						</li>
						<li className='mb-4'>
							<h4 className='font-semibold mb-2'>
								2. Проверка Упаковки:
							</h4>
							<p className='text-justify'>
								Подделки часто пытаются имитировать оригинальную упаковку, но внимательное рассмотрение может выявить различия. Проверьте логотип, шрифты, цвета и общий дизайн упаковки. Официальные продукты Mobil имеют характерные черты, которые сложно точно воссоздать подделке.
							</p>
						</li>
						<li className='mb-4'>
							<h4 className='font-semibold mb-2'>
								3. Серийные Номера и Штрих-Коды:
							</h4>
							<p className=''>
								Подлинные продукты Mobil обычно имеют уникальные серийные номера и штрих-коды, которые могут быть проверены на сайте производителя. Если возможно, сканируйте штрих-код или введите серийный номер для проверки подлинности продукта.
							</p>
						</li>
						<li className='mb-4'>
							<h4 className='font-semibold mb-2'>
								4. Проверка Спецификаций:
							</h4>
							<p className='text-justify'>
								Масла Mobil часто имеют определенные спецификации, соответствующие стандартам качества и требованиям автопроизводителей. Подделки могут не соответствовать этим стандартам. Проверьте, соответствует ли продукт указанным спецификациям, которые обычно указываются на упаковке.
							</p>
						</li>
						<li className='mb-4'>
							<h4 className='font-semibold mb-2'>
								5. Цена и Предложения:
							</h4>
							<p className='text-justify'>
								Если цена предложения кажется слишком низкой, это может быть признаком подделки. Подделщики часто используют соблазнительные цены, чтобы привлечь покупателей. Однако качественные продукты имеют свою стоимость, и слишком низкая цена может быть сигналом тревоги.
							</p>
						</li>
						<li className='mb-4'>
							<h4 className='font-semibold mb-2'>
								6. Производство в Странах-Лидерах:
							</h4>
							<p className='text-justify'>
								Mobil производит свои продукты в странах с высокими стандартами качества и технологическим уровнем. Подделки, как правило, производятся в странах с менее строгими нормами. Исследуйте происхождение продукта и, если производство не соответствует ожидаемому, будьте осторожны.
							</p>
						</li>
						<li className='mb-4'>
							<h4 className='font-semibold mb-2'>
								7. Обратите Внимание на Консистенцию:
							</h4>
							<p className='text-justify'>
								Подлинные масла Mobil обычно имеют консистенцию и цвет, соответствующие их типу и классу вязкости. Если продукт отличается от ожидаемого цвета или текстуры, это может быть признаком подделки.
							</p>
						</li>
						<li className='mb-4'>
							<h4 className='font-semibold mb-2'>
								8. Поиск Помощи Профессионалов:
							</h4>
							<p className='text-justify'>
								Если у вас есть сомнения относительно подлинности продукта, обратитесь за помощью к профессионалам. Официальные представители Mobil и сертифицированные автомастерские могут помочь вам удостовериться в подлинности приобретенного вами масла.
							</p>
						</li>

						<li className=''>
							<h4 className='font-semibold mb-2'>
								Заключение:
							</h4>
							<p className='text-justify'>
								Всегда помните, что подделка масла Mobil не только подрывает эффективность вашего двигателя, но также может привести к серьезным повреждениям. Следуйте нашим рекомендациям, будьте внимательны и выбирайте продукты у надежных поставщиков, чтобы обеспечить оптимальную работу вашего автомобиля.
							</p>
						</li>
					</ul>
				</article>

			</div>
		</main>
	)
}

export default MasloNSL;