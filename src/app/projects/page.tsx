'use client'

import { useEffect, useState } from 'react'

import Footer from '@/components/Shared/Footer'
import Header from '@/components/Shared/Header'
import Loading from '@/components/Shared/Loading'
import ListProjects from '@/components/Projects/ListProjects'
import Hero from '@/components/Projects/Hero'

import { getDataProjects } from '@/services/getDataProjects'

import * as Styles from './styles'
import { Grid } from '../../styles/grid'
import { ProjectsPageProps } from '@/types'

export default function Projects() {
   const [responseProjects, setResponseProjects] = useState<ProjectsPageProps>()

   useEffect(() => {
      getDataProjects().then((res) => setResponseProjects(res.projectspage))
   })

   if (!responseProjects) return <Loading />

   return (
      <Styles.WrapperProjects>
         <Grid>
            <Header />
            <Hero />
            <ListProjects
               listProjects={responseProjects.listprojectspageid}
            />
            <Footer />
         </Grid>
      </Styles.WrapperProjects>
   )
}
