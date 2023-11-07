import { RiHashtag } from 'react-icons/ri'
import Link from 'next/link'

import * as Styles from './styles'

export default function Header() {
   return (
      <Styles.Header>
         <nav>
            <Link className='feature' href='/'>
               <RiHashtag className="icon" />
               <p>Home</p>
            </Link>
            <Link className='feature' href='/projects'>
               <RiHashtag className="icon" />
               <p>Projects</p>
            </Link>
         </nav>
      </Styles.Header>
   )
}
