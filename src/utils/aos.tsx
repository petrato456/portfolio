'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const AOSInit = () => {
   useEffect(() => {
      AOS.init({
         once: true,
         easing: 'ease-out-quad',
         duration: 500,
      })
   }, [])

   return null
}
