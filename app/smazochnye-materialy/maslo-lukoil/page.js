import Catalog from "@/components/Catalog/Catalog";
import CTA from "@/components/SectionsMainPage/CTA/CTA";
import { dataLukoil } from "@/constans/smazochnye-materialy/LukoilConst";

export const metadata = {
	title: 'Купить масло Лукойл оптом с доставкой по Беларуси',
	description: 'Моторное масло Лукойл по оптовым ценам с доставкой по всей Беларуси. Выгодные предложения для оптовых покупателей. Качественное моторное масло для оптовой цене.',
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
					style={{ backgroundImage: 'url("/pages/lukoil/lukoil.webp")' }}>
					<div className="hero-overlay bg-opacity-60" />
					<div className="hero-content text-center text-neutral-content py-16">
						<div className="max-w-md">
							<h1 className="mb-12 sd:text-7xl xz:text-4xl font-bold">
								Масло Лукойл
							</h1>
							<p className="mb-12 sd:text-xl xz:text-base">
								Качественное масло Лукойл от первого поставщика по оптовым ценам, с оперативной доставкой по всей территории Беларуси. Заказав масло у ООО "Резонанс Групп" вы получаете гарантированно высокое качество и выгодные цены для оптовых клиентов.
							</p>
							<button className="btn btn-primary">Позвонить</button>
						</div>
					</div>
				</section>


				<Catalog data={dataLukoil} />

				<CTA />

				<article className='mt-20'>
					<h4 className='uppercase text-xl font-semibold'>
						Преимущества Приобретения Масла Лукойл Оптом для Грузовой и Сельскохозяйственной Техники
					</h4>
					<p className='mt-3 text-justify'>
						В мире сельского и грузового транспорта надежность и эффективность двигателя - залог успешной эксплуатации. Выбор правильного моторного масла становится стратегическим шагом, и Масло Лукойл представляет собой не просто продукт, а надежного партнера для грузовых автомобилей и сельскохозяйственной техники. Рассмотрим, почему покупка масла Лукойл по оптовым ценам выгодна для владельцев таких техник.
					</p>
					<ul className='mt-5'>
						<li className='mb-4'>
							<h4 className='font-semibold mb-2'>
								1. Продукт С Перспективой:
							</h4>
							<p className='text-justify'>
								Масло Лукойл давно зарекомендовало себя как продукт с выдающимися техническими характеристиками. Благодаря тщательно разработанным формулам и инновационным технологиям, оно обеспечивает эффективное смазывание и защиту двигателя в самых тяжелых условиях эксплуатации.
							</p>
						</li>
						<li className='mb-4'>
							<h4 className='font-semibold mb-2'>
								2. Оптовые Цены:
							</h4>
							<p className='text-justify'>
								Одним из ключевых преимуществ покупки масла Лукойл оптом является доступность привлекательных цен. Оптовые тарифы обеспечивают владельцам грузовой и сельскохозяйственной техники значительные экономии, что становится существенным фактором в условиях постоянного роста затрат на обслуживание техники.
							</p>
						</li>
						<li className='mb-4'>
							<h4 className='font-semibold mb-2'>
								3. Адаптировано к Эксплуатационным Нагрузкам:
							</h4>
							<p className=''>
								Грузовые и сельскохозяйственные машины часто подвергаются высоким нагрузкам и различным климатическим условиям. Масло Лукойл адаптировано к таким эксплуатационным условиям, обеспечивая надежную работу двигателей и увеличивая их срок службы.
							</p>
						</li>
						<li className='mb-4'>
							<h4 className='font-semibold mb-2'>
								4. Универсальность Применения:
							</h4>
							<p className='text-justify'>
								Масло Лукойл подходит для различных типов двигателей, включая дизельные и бензиновые. Это придает ему универсальность применения, что делает его идеальным выбором для владельцев разнообразной сельскохозяйственной и грузовой техники.
							</p>
						</li>
						<li className='mb-4'>
							<h4 className='font-semibold mb-2'>
								5. Соответствие Стандартам и Спецификациям:
							</h4>
							<p className='text-justify'>
								Продукция Лукойл соответствует самым высоким мировым стандартам и спецификациям. Это гарантирует, что масло отвечает всем требованиям производителей автомобилей и сельскохозяйственной техники, что важно для поддержания гарантий и оптимальной производительности техники.
							</p>
						</li>
						<li className='mb-4'>
							<h4 className='font-semibold mb-2'>
								6. Защита От Износа и Коррозии:
							</h4>
							<p className='text-justify'>
								Масло Лукойл предоставляет надежную защиту от износа и коррозии двигателя. Это особенно важно для грузовых автомобилей и сельскохозяйственной техники, которые подвергаются интенсивной эксплуатации и требуют максимальной стойкости к износу.
							</p>
						</li>
						<li className='mb-4'>
							<h4 className='font-semibold mb-2'>
								7. Продукт Сертифицирован по ISO:
							</h4>
							<p className='text-justify'>
								Масло Лукойл производится с соблюдением высших стандартов качества и сертифицировано согласно стандартам ISO. Это подтверждает соответствие продукта строгим мировым нормам и обеспечивает потребителей доверием к качеству.
							</p>
						</li>
						<li className='mb-4'>
							<h4 className='font-semibold mb-2'>
								8. Экономия Топлива:
							</h4>
							<p className='text-justify'>
								Эффективные масла Лукойл способствуют снижению расхода топлива. Эта характеристика является важным фактором для владельцев грузовых автомобилей, которые стремятся сэкономить на эксплуатационных расходах.
							</p>
						</li>
						<li className='mb-4'>
							<h4 className='font-semibold mb-2'>
								9. Поддержка от Производителя:
							</h4>
							<p className='text-justify'>
								Оптовая покупка масла Лукойл также может включать в себя дополнительные бонусы, такие как техническая поддержка и консультации от производителя. Это особенно ценно для владельцев техники, которые могут столкнуться с особыми техническими вопросами.
							</p>
						</li>
						<li className='mb-4'>
							<h4 className='font-semibold mb-2'>
								10. Экологическая Совместимость:
							</h4>
							<p className='text-justify'>
								Продукция Лукойл отвечает современным экологическим стандартам, что важно для владельцев техники, ориентированных на устойчивость и соблюдение экологических норм.
							</p>
						</li>

						<li className=''>
							<h4 className='font-semibold mb-2'>
								Заключение:
							</h4>
							<p className='text-justify'>
								Выбор масла для грузовой и сельскохозяйственной техники - это инвестиция в долгосрочную эффективность и надежность двигателя. Масло Лукойл, предоставляя оптовые цены, отличные технические характеристики и поддержку производителя, становится логичным выбором для тех, кто стремится обеспечить надежную работу своей техники в любых условиях эксплуатации.
							</p>
						</li>
					</ul>
				</article>

			</div>
		</main>
	)
}

export default MasloNSL;