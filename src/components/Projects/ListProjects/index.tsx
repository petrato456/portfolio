import { ListProjectsProps } from '@/types'

import * as Styles from './styles'



export default function ListProjects({
   listProjects,
}: ListProjectsProps) {
   return (
      <Styles.WrapperListProjects>
         {listProjects.map((item, index) => (
            <Styles.Card key={index}>
               <div className="content">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <span>{item.tecnnologies}</span>
               </div>
            </Styles.Card>
         ))}
      </Styles.WrapperListProjects>
   )
}
