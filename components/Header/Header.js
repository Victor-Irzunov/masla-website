"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const THEMES = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"];

export default function Header() {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
	}, [theme])

	const handleThemeChange = (e) => {
		const val = e.target.getAttribute('data-set-theme');
		setTheme(val)
	}
	return (
		<header className='bg-base-100 sticky top-0 z-50'>
			<div className='container mx-auto'>
				<div className="navbar px-0">
					<div className="navbar-start">
						<div className="dropdown">
							<label tabIndex={0} className="btn btn-circle lg:hidden mr-1">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
							</label>
							<ul
								tabIndex={0}
								className="dropdown-content overflow-y-scroll menu-sm mt-1 w-72  menu py-5 px-2 bg-base-200 shadow rounded-box"
							>
								<li>
									<Link
										className="cursor-pointer font-semibold text-lg"
										href={`${process.env.NEXT_PUBLIC_BASE_URL}/`}
									>
										Главная
									</Link>
								</li>
								<li>
									<details>
										<summary className='font-semibold text-lg'>
											Каталог
										</summary>
										<ul className="p-2 overflow-y-scroll">
											<li className='mb-3'>
												<Link href='' className='font-semibold'>
													Смазочные материалы
												</Link>
												<ul className='pl-5'>
													<li className=''>
														<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/smazochnye-materialy/maslo-shell`}>
															Масло Shell
														</Link>
													</li>
													<li className=''>
														<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/smazochnye-materialy/maslo-nsl`}>
															Масло NSL
														</Link>
													</li>
													<li className=''>
														<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/smazochnye-materialy/maslo-mobil`}>
															Масло Mobil
														</Link>
													</li>
													<li className=''>
														<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/smazochnye-materialy/maslo-lukoil`}>
															Масло Лукоил
														</Link>
													</li>
													<li className=''>
														<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/smazochnye-materialy/maslo-rosneft`}>
															Масло Роснефть
														</Link>
													</li>
													<li className=''>
														<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/smazochnye-materialy/maslo-gazpromneft`}>
															Масло Газпромнефть
														</Link>
													</li>
													<li className=''>
														<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/smazochnye-materialy/maslo-naftan`}>
															Масло Нафтан
														</Link>
													</li>
													<li className=''>
														<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/smazochnye-materialy/smazki`}>
															Смазки Литол, Солидол
														</Link>
													</li>
												</ul>
											</li>
											<li className='mb-3'>
												<p className='font-semibold cursor-none'>
													Фильтрующие элементы
												</p>
												<ul className='pl-5'>
													<li className='mb-2'>
														<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/filtra`} className=''>
															Фильтра
														</Link>
													</li>

												</ul>
											</li>
											<li className='mb-3'>
												<p className='font-semibold cursor-none'>
													Охлождающие жидкости
												</p>
												<ul className='pl-5'>
													<li className='mb-2'>
														<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/ohlozhdayushie-zhidkosti/antifriz`}>
															Антифризы G11, G12, G13
														</Link>
													</li>
													<li className=''>
														<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/ohlozhdayushie-zhidkosti/tosol`}>
															Тосол
														</Link>
													</li>
												</ul>
											</li>

										</ul>
									</details>
								</li>
								<li>
									<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/remont`} className='font-semibold text-lg'>
										Ремонт
									</Link>
								</li>

								<li>
									<Link
										className="cursor-pointer font-semibold text-lg"
										href={`${process.env.NEXT_PUBLIC_BASE_URL}/dostavka`}
									>
										Доставка
									</Link>
								</li>
								<li>
									<Link
										className="cursor-pointer font-semibold text-lg"
										href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontakty`}
									>
										Контакты
									</Link>
								</li>
							</ul>
						</div>
						<Link
							className="cursor-pointer"
							href={`${process.env.NEXT_PUBLIC_BASE_URL}/`}
						>
							<Image src='/logo/logo-black.webp' alt='логотип' width={200} height={46} />
						</Link>
					</div>

					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal p-0 font-light">
							<li>
								<Link
									className="cursor-pointer"
									href={`${process.env.NEXT_PUBLIC_BASE_URL}/`}
								>
									Главная
								</Link>
							</li>
							<li>
								<div className="dropdown dropdown-bottom">
									<label tabIndex={0} className="cursor-pointer">
										Каталог
									</label>
									<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-96">
										<li>
											<p className='uppercase text-xs font-semibold hover:bg-transparent'>
												Смазочные материалы
											</p>
											<ul className='pl-1'>
												<li className=''>
													<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/smazochnye-materialy/maslo-shell`}>
														Масло Shell
													</Link>
												</li>
												<li className=''>
													<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/smazochnye-materialy/maslo-nsl`}>
														Масло NSL
													</Link>
												</li>
												<li className=''>
													<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/smazochnye-materialy/maslo-mobil`}>
														Масло Mobil
													</Link>
												</li>
												<li className=''>
													<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/smazochnye-materialy/maslo-lukoil`}>
														Масло Лукоил
													</Link>
												</li>
												<li className=''>
													<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/smazochnye-materialy/maslo-rosneft`}>
														Масло Роснефть
													</Link>
												</li>
												<li className=''>
													<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/smazochnye-materialy/maslo-gazpromneft`}>
														Масло Газпромнефть
													</Link>
												</li>
												<li className=''>
													<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/smazochnye-materialy/maslo-naftan`}>
														Масло Нафтан
													</Link>
												</li>
												<li className=''>
													<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/smazochnye-materialy/smazki`}>
														Смазки Литол, Солидол
													</Link>
												</li>

											</ul>
										</li>
										<li>

											<p className='uppercase text-xs font-semibold hover:bg-transparent'>
												Фильтрующие элементы
											</p>
											<ul className='pl-1'>
												<li className='mb-2'>
													<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/filtra`} className=''>
														Фильтра
													</Link>
												</li>
											</ul>
										</li>
										<li>
											<p className='uppercase text-xs font-semibold hover:bg-transparent'>
												Охлождающие жидкости
											</p>
											<ul className='pl-1'>
												<li className='mb-2'>
													<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/ohlozhdayushie-zhidkosti/antifriz`}>
														Антифризы G11, G12, G13
													</Link>
												</li>
												<li className='mb-2'>
													<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/ohlozhdayushie-zhidkosti/tosol`}>
														Тосол
													</Link>
												</li>

											</ul>
										</li>

									</ul>
								</div>
							</li>

							<li>
								<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/remont`}>
									Ремонт
								</Link>
							</li>
							<li>
								<Link
									className="cursor-pointer"
									href={`${process.env.NEXT_PUBLIC_BASE_URL}/dostavka`}
								>
									Доставка
								</Link>
							</li>
							<li>
								<Link
									className="cursor-pointer"
									href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontakty`}
								>
									Контакты
								</Link>
							</li>
						</ul>
					</div>
					<div className="navbar-end">
						<div className="dropdown dropdown-end">
							<label tabIndex={0} className="btn">
								{THEMES.length} Themes
							</label>
							<ul tabIndex={0} className="dropdown-content mt-1 w-80 max-h-96 overflow-y-auto menu menu-compact p-2  bg-base-200 shadow rounded-box">
								{
									THEMES.map((theme, i) => <li key={theme + i}><button data-set-theme={theme} onClick={handleThemeChange} className="font-medium capitalize">{i + 1 + '. ' + theme}</button></li>)
								}
							</ul>
						</div>

						{/* <a href='tel:80295403540' className='btn'>
							8 029 640-35-40
						</a> */}
					</div>
				</div>
			</div>
		</header >
	)
}