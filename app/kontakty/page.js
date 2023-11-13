export const metadata = {
	title: 'Контакты компании ООО "Резонанс Групп"',
	description: 'Свяжитесь с ООО "Резонанс Групп" для получения дополнительной информации о наших услугах и продукции. Мы готовы ответить на ваши вопросы и обеспечить необходимую поддержку.',
	alternates: {
		canonical: ''
	}
};


const Kontakty = () => {
	return (
		<main className=''>
			<div className='container mx-auto'>
				<div className="hero min-h-screen" style={{ backgroundImage: 'url("/pages/kontacty/kontakty.webp")' }}>
					<div className="hero-overlay bg-opacity-60"></div>
					<div className="hero-content text-center text-neutral-content">
						<div className="max-w-md">
							<h1 className="mb-5 sd:text-7xl xz:text-4xl font-bold uppercase">Контакты</h1>

							<div className='mt-2 text-xl'>
								<p className=''>
									Режим работы: 9:00-17:00
								</p>
								<p className='uppercase mt-2 text-sm'>
									Без обеда и выходных
								</p>
							</div>

							<address className="mt-5 mb-16">
								<p className=''>
									Юр.адрес: 220019 Минская обл., г. Минск ул. Монтажников д.23 офис 17
								</p>
								<p className=''>
									УНП 692224665
								</p>
								<p className=''>
									ЗАО "Альфа-Банк" БИК ALFABY2X р/с BY92ALFA30122D60990010270000
								</p>
							</address>

							<a href="tel:80296403540" className="btn btn-warning sm:btn-wide">Позвонить</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Kontakty;