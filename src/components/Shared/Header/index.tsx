'use client'

import { RiHashtag } from 'react-icons/ri'
import Link from 'next/link'

import * as Styles from './styles'

export type HeaderProps = {
   page: "home" | "projects"
}

export default function Header({ page }:HeaderProps) {

   return (
      <Styles.Header page={page}>
         <nav>
            <Link className="feature" href="/">
               <RiHashtag className="icon" />
               <p className={page === 'home' ? "": "otherPage"}>Home</p>
            </Link>
            <Link className="feature" href="/projects">
               <RiHashtag className="icon" />
               <p className={page === 'projects' ? "" :"otherPage"}>Projects</p>
            </Link>
         </nav>
      </Styles.Header>
   )
}
