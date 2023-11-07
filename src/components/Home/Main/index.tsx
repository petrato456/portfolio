'use client'

import { AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai'
import { BiLogoInstagram } from 'react-icons/bi'
import Link from 'next/link'
import Lottie from 'lottie-react'

import Button from '../../Shared/Button'
import Technology from '../../Shared/Technology'

import Animation from '../../../json/web-development.json'

import { Technologies } from '@/types'

import * as Styles from './styles'

type MainProps = {
   subtitle: string
   technologies: Technologies[]
}

export default function Main({ subtitle, technologies }: MainProps) {
   return (
      <Styles.Main id="home">
         <div className="animation">
            <Lottie animationData={Animation} loop />
         </div>
         <Styles.Title>
            <div className="title">Olá, meu nome é</div>
            <h1>
               <span>Matheus</span>
            </h1>
            <p data-aos="fade-up">{subtitle}</p>
            <Styles.Technologies>
               {technologies &&
                  technologies.map((technology, index) => (
                     <Technology name={technology.name} key={index} />
                  ))}

               <footer>
                  <Link
                     href="https://api.whatsapp.com/send?phone=5521990247972"
                     target="_blank"
                  >
                     <Button data-aos="fade-bottom">
                        Entre em contato
                     </Button>
                  </Link>
                  <li data-aos="fade-left">
                     <Link href="https://www.linkedin.com/in/matheus-petrato-9a44b0205/">
                        <AiFillLinkedin className="icon" />
                     </Link>
                     <Link href="https://www.instagram.com/petrato_matheus/">
                        <BiLogoInstagram className="icon" />
                     </Link>
                     <Link
                        href="https://api.whatsapp.com/send?phone=5521990247972"
                        target="_blank"
                     >
                        <AiOutlineWhatsApp className="icon" />
                     </Link>
                  </li>
               </footer>
            </Styles.Technologies>
         </Styles.Title>
      </Styles.Main>
   )
}
