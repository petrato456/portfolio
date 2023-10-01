import { Poppins } from 'next/font/google'
import { Metadata } from 'next'
import Providers from '@/hooks/provider'
import Favicon from "../../public/header.png";

const poppins = Poppins({
   subsets: ['latin'],
   display: 'swap',
   variable: '--font-poppins',
   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: "Portfólio | Matheus Petrato",
  description: "Portfólio Matheus Petrato",
  icons: [{ rel: "icon", url: Favicon.src }],
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="pt-BR">
         <body className={`${poppins.variable}`}>
            <Providers>{children}</Providers>
         </body>
      </html>
   )
}
