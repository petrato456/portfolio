import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

import * as Styles from './styles'
import Link from 'next/link'

export default function Hero() {
   return (
      <Styles.WrapperHero>
         <h1>Meus Projetos</h1>
         <p>
            Aqui você poderá ver alguns dos trabalhos que eu
            desenvolvi. Navegue à vontade e explore os projetos para
            ver como foram criados, as tecnologias utilizadas e as
            funcionalidades implementadas.
         </p>

         <Link href="/">
            <div className="return">
               <HiOutlineArrowNarrowLeft className="icon" />
               <span>Voltar para home</span>
            </div>
         </Link>
      </Styles.WrapperHero>
   )
}
