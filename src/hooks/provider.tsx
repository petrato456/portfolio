'use client'

import React from 'react'
import StyledComponentsRegistry from '../app/lib/registry'
import { GlobalStyle } from '@/app/styles/globals'
import { ThemeProvider } from 'styled-components'
import { Theme } from '@/app/styles/theme'

export default function Providers({children} : {children: React.ReactNode}) {
   return (
      <>
         <StyledComponentsRegistry>
            <ThemeProvider theme={Theme}>
               <GlobalStyle />
               {children}
            </ThemeProvider>
         </StyledComponentsRegistry>
      </>
   )
}
