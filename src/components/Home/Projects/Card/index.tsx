// "use client"

import Link from 'next/link'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

import Technology from '@/components/Shared/Technology'

import { ProjectsProps } from '@/types'

import * as Styles from './styles'
import Image from 'next/image'

type CardProps = {
   project: ProjectsProps
}

export default function Card({ project }: CardProps) {
   return (
      <Styles.Card>
         <div className='container-card'>
            <Image
               className="image"
               alt=""
               src={project.projectimage?.url}
               width={320}
               height={320}
               loading="lazy"
            />
            <div className="descriptions">
               <header>
                  <div className="icon" />
                  <h2  data-aos="fade-up">{project.title}</h2>
               </header>
               <p  data-aos="fade-right">{project.description}</p>
               <div className="container-technology">
                  {project &&
                     project.listProjectsName.map((item) => (
                        <Technology
                           name={item.projectName}
                           key={item.id}
                        />
                     ))}
               </div>
               <Link href={project.url} target="_blank">
                  <span>
                     Ver projeto{' '}
                     <HiOutlineArrowNarrowRight className="icon" />
                  </span>
               </Link>
            </div>
         </div>
      </Styles.Card>
   )
}
