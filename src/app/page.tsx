'use client'

import { useEffect, useState } from 'react'

import { getData } from '@/services/getData'

import Main from '@/components/Home/Main'
import Projects from '@/components/Home/Projects'
import Experience from '@/components/Home/Experience'
import Header from '@/components/Shared/Header'
import Footer from '@/components/Shared/Footer'
import Loading from '@/components/Shared/Loading'

import { PortfolioProps } from '@/types'

import { Grid } from '../styles/grid'
import * as Styles from '../styles/home'

export default function Home() {
   const [response, setResponse] = useState<PortfolioProps>()

   useEffect(() => {
      getData().then((res) => setResponse(res.home))
   }, [])

   if (!response) return <Loading />

   return (
      <Styles.Wrapper>
         <Grid>
            <Header page='home' />
            <Main
               subtitle={response.subtitle}
               technologies={response.technologies}
            />
         </Grid>
         <Projects projects={response.projectsId} />
         <Experience companies={response.companiesId} />
         <Footer />
      </Styles.Wrapper>
   )
}
