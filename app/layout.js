import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Оптовый склад моторных масел и фильтров для сельхозтехники',
  description: 'ООО "Резонанс Групп" - ваш надежный партнер в мире сельхозтехники. Мы предлагаем оптовые продажи моторных масел и фильтров, а также профессиональный ремонт двигателей сельхозтехники. Узнайте, как мы помогаем сельскохозяйственным предприятиям повышать эффективность и надежность своей техники.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="theme-color" content="#fff" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
