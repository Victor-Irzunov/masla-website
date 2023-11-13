import Catalog from "@/components/Catalog/Catalog";
import CTA from "@/components/SectionsMainPage/CTA/CTA";
import { dataTosol } from "@/constans/ohlozhdayushie-zhidkosti/TosolConst";

export const metadata = {
	title: 'Тосол для грузовой и сельхозтехники с доставкой по Беларуси',
	description: 'Тосола по оптовым ценам для грузовой и сельскохозяйственной техники от первого поставщика. Позвоните для заказа!',
	alternates: {
		canonical: ''
	}
};

const Tosol = () => {
	return (
		<main className='pb-20'>
			<div className='container mx-auto'>
				<section
					className="hero h-auto"
					style={{ backgroundImage: 'url("/pages/tosol/tosol.webp")' }}>
					<div className="hero-overlay bg-opacity-60" />
					<div className="hero-content text-center text-neutral-content py-16">
						<div className="max-w-md">
							<h1 className="mb-12 sd:text-7xl xz:text-4xl font-bold uppercase text-center">
								Тосол
							</h1>
							<h2 className="mb-12 sd:text-xl xz:text-base">
								Тосол от первого поставщика по оптовым ценам для грузовой и сельскохозяйственной техники с оперативной доставкой по в РБ
							</h2>
							<button className="btn btn-primary">Позвонить</button>
						</div>
					</div>
				</section>


				<Catalog data={dataTosol} />

				<CTA />

				<article className='mt-20'>
					<h4 className='uppercase text-xl font-bold'>
						Тосол и Антифриз: Их Применение и Отличия
					</h4>
					<p className='mt-3 text-justify'>
						Тосол и антифриз – два термина, часто используемых в автомобильной индустрии в контексте системы охлаждения двигателя. Несмотря на то, что они оба предназначены для предотвращения замерзания и перегрева, у них есть существенные отличия. Давайте ближе рассмотрим, где применяется тосол, в чем различия между тосолом и антифризом, и почему правильный выбор важен для здоровья вашего автомобиля.
					</p>

					<ul className='mt-5'>
						<h5 className='font-bold'>
							Применение тосола:
						</h5>
						<p className='my-3'>
							Тосол представляет собой охлаждающую жидкость, которая используется в системе охлаждения двигателя автомобиля. Его основной целью является предотвращение замерзания жидкости в системе охлаждения при низких температурах. Тосол обладает химическими свойствами, которые позволяют поддерживать температуру охлаждающей системы в пределах безопасных значений как в холодные, так и в жаркие периоды.
						</p>
						<li className='mb-4'>
							<h5 className='font-bold mb-2'>
								<span className="font-semibold">
									Отличия между тосолом и антифризом:
								</span>{' '}
							</h5>
							<ul className=''>
								<li className=''>
									<p className='font-semibold'>
										Состав:
									</p>
									<ul className=''>
										<li className=''>
											<p className=''>
												<span className="">
													Тосол
												</span>{' '}
												Обычно тосол основан на этиленгликоле или пропиленгликоле, которые являются химическими соединениями, предотвращающими замерзание и перегрев двигателя.
											</p>
										</li>
										<li className=''>
											<p className=''>
												<span className="">
													Антифриз
												</span>{' '}
												Основными компонентами антифриза, обычно, являются этиленгликоль или пропиленгликоль, которые добавляются к воде для предотвращения замерзания и перегрева двигателя.
											</p>
										</li>
									</ul>
								</li>
								<li className=''>
									<p className='font-semibold'>
										Применение:
									</p>
									<ul className=''>
										<li className=''>
											<p className=''>
												<span className="">
													Тосол:
												</span>{' '}
												Применяется в системе охлаждения двигателя для предотвращения замерзания и перегрева. Используется круглый год, а не только в холодные месяцы.
											</p>
										</li>
										<li className=''>
											<p className=''>
												<span className="">
													Антифриз:
												</span>{' '}
												Применяется в системе охлаждения двигателя для предотвращения замерзания в холодное время года и перегрева в жаркое. Антифриз также содержит добавки для предотвращения коррозии и обеспечения дополнительной защиты.
											</p>
										</li>
									</ul>
								</li>
								<li className=''>
									<p className='font-semibold'>
										Цвет
									</p>
									<ul className=''>
										<li className=''>
											<p className=''>
												<span className="">
													Тосол:
												</span>{' '}
												Обычно имеет яркий цвет, часто синий, чтобы легко определить его наличие в бачке омывания.
											</p>
										</li>
										<li className=''>
											<p className=''>
												<span className="">
													Антифриз:
												</span>{' '}
												Может иметь различные цвета в зависимости от производителя. Традиционно, антифриз на основе этиленгликоля окрашен в синий или зеленый, а на основе пропиленгликоля – в розовый или оранжевый.
											</p>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
					<p className='mt-4'>
						Тосол и антифриз – это ключевые компоненты системы охлаждения, обеспечивающие нормальную работу двигателя в различных условиях. При выборе и использовании этих жидкостей важно соблюдать рекомендации производителя автомобиля и учитывать климатические особенности региона эксплуатации.
					</p>
				</article>

			</div>
		</main>
	)
}

export default Tosol;