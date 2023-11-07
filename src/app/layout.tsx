import { Metadata } from 'next'
import Providers from '@/hooks/provider'
import Favicon from '../../public/favicon.png'
import { poppins } from '@/fonts/font'
import { AOSInit } from '@/utils/aos'

export const metadata: Metadata = {
   title: 'Portfólio | Matheus Petrato',
   description: 'Portfólio Matheus Petrato',
   icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="pt-BR">
         <AOSInit />
         <body className={`${poppins.variable} antialiased`}>
            <Providers>{children}</Providers>
         </body>
      </html>
   )
}
