'use client'

import Image from 'next/image'
import * as Styles from './styles/home'
import Logo from '../../public/logo.png'
import MainImage from '../../public/header.png'
import Button from '@/components/Button'
import { Grid } from './styles/grid'
import { TbDeviceDesktopCode } from 'react-icons/tb'
import { BsArrowRight } from 'react-icons/bs'
import { AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai'
import { BiLogoInstagram } from 'react-icons/bi'
import {
   SiReact,
   SiNextdotjs,
   SiTailwindcss,
   SiStyledcomponents,
   SiGithub,
   SiJavascript,
   SiJest,
} from 'react-icons/si'
import { DiGit } from 'react-icons/di'

const dataFeatures = [
   {
      title: 'DT Money',
      description: 'Projeto para calcular custos e gastos mensais',
      id: 1,
   },
   {
      title: 'DT Money',
      description: 'Projeto para calcular custos e gastos mensais',
      id: 2,
   },
   {
      title: 'DT Money',
      description: 'Projeto para calcular custos e gastos mensais',
      id: 3,
   },
   {
      title: 'DT Money',
      description: 'Projeto para calcular custos e gastos mensais',
      id: 4,
   },
]

const dataTechnologies = [
   { name: 'React', icon: <SiReact />, id: 1 },
   { name: 'Next js', icon: <SiNextdotjs />, id: 2 },
   { name: 'Styled-components', icon: <SiStyledcomponents />, id: 3 },
   { name: 'Tailwind', icon: <SiTailwindcss />, id: 4 },
   { name: 'Github', icon: <SiGithub />, id: 5 },
   { name: 'Javascript', icon: <SiJavascript />, id: 6 },
   { name: 'Jest', icon: <SiJest />, id: 7 },
   { name: 'Git', icon: <DiGit />, id: 8 },
]

export default function Home() {
   return (
      <Styles.Wrapper>
         <Grid>
            <Styles.Header>
               <Image src={Logo} alt="logo" width={80} />
               <nav>
                  <p>Home</p>
                  <p>Features</p>
                  <p>About</p>
               </nav>
               <Button>Contate-me</Button>
            </Styles.Header>

            <Styles.Main>
               <div className="blur"></div>
               <Image
                  src={MainImage}
                  alt="image of boy coding"
                  className="image-boy"
               />
               <Styles.Title>
                  <h1>
                     Hi, i'm <span>Matheus</span>, Web Developer
                  </h1>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Ducimus, iste velit tempora culpa nemo voluptatibus, itaque
                     delectus eveniet blanditiis unde maxime sint quia quis
                     quibusdam, aliquid consequatur quas hic cupiditate!
                  </p>
               </Styles.Title>
            </Styles.Main>
            <Styles.GridTitle>
               <div className="blur" />
               <h1>Projetos</h1>
            </Styles.GridTitle>
            <Styles.Features>
               {dataFeatures.map((cardItem) => (
                  <Styles.Card key={cardItem.id}>
                     <header>
                        <h1>{cardItem.title}</h1>
                        <TbDeviceDesktopCode
                           className="icon"
                           title="Código do projeto"
                        />
                     </header>
                     <div className="description">{cardItem.description}</div>
                     <footer>
                        <p>Join Now</p>
                        <BsArrowRight className="arrow-icon" />
                     </footer>
                  </Styles.Card>
               ))}
            </Styles.Features>
            <Styles.GridTitle>
               <div className="blur" />

               <h1>Tecnologias</h1>
            </Styles.GridTitle>
            <Styles.Technologies>
               {dataTechnologies.map((technologies) => (
                  <div className="card-technologies" key={technologies.id}>
                     <h1>{technologies.name}</h1>
                     <div>{technologies.icon}</div>
                  </div>
               ))}
            </Styles.Technologies>
            <Styles.Footer>
               <Image src={Logo} alt="logo" width={80} />
               <li>
                  <AiFillLinkedin />
                  <BiLogoInstagram />
                  <AiOutlineWhatsApp />
               </li>
            </Styles.Footer>
         </Grid>
      </Styles.Wrapper>
   )
}
