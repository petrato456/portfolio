import { Poppins, Inter } from "next/font/google";

export const poppins = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    preload: false,
 })