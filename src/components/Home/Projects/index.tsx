import Card from './Card'

import { ProjectsProps } from '@/types'

import { Grid } from '@/styles/grid'
import * as Styles from './styles'

type ProjectsComponentProps = {
   projects: ProjectsProps[]
}

export default function Projects({ projects }: ProjectsComponentProps) {
   return (
      <Styles.WrapperProjects id="projects">
         <Grid>
            <h1>Projetos em destaque</h1>
            {projects &&
               projects.map((project, index) => (
                  <div className="container" key={index}>
                     <Card project={project} />
                  </div>
               ))}
         </Grid>
      </Styles.WrapperProjects>
   )
}
