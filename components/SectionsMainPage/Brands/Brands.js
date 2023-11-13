import Image from "next/image"


const Brands = () => {
	return (
		<section className="my-20">
			<h4 className='uppercase text-center font-semibold sd:text-3xl xz:text-xl'>
				Наши бренды
			</h4>

			<div className='mt-12'>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-6' style={{ justifyItems: 'center' }}>
					<Image src='/brands/mobil.webp' alt='Продажа моторного масла Mobil' width={150} height={150} />
					<Image src='/brands/shell.webp' alt='Продажа моторного масла Shell' width={180} height={180} />
					<Image src='/brands/donaldson.webp' alt='Продажа фильтров donaldson' width={200} height={200} />
					<Image src='/brands/lukoil.webp' alt='Продажа моторного масла Лукоил' width={220} height={220} />
					<Image src='/brands/nsl.webp' alt='Продажа моторного масла NSL' width={220} height={220} />
					<Image src='/brands/gazpromneft.webp' alt='Продажа моторного масла Газпроменфть' width={180} height={180} />
					<Image src='/brands/rosneft.webp' alt='Продажа моторного масла Роснефть' width={180} height={180} />
					<Image src='/brands/naftan.webp' alt='Продажа моторного масла Нафтан' width={150} height={150} />
					<Image src='/brands/hifi.webp' alt='Продажа моторного фильтров hifi' width={220} height={220} />
					<Image src='/brands/ferra.webp' alt='Продажа моторного фильтров ferra' width={220} height={220} />
					<Image src='/brands/hengst.webp' alt='Продажа моторного фильтров Hengst' width={180} height={180} />
				</div>
			</div>

		</section>
	)
}

export default Brands