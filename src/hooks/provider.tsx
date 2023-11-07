'use client'

import React from 'react'

import StyledComponentsRegistry from '../utils/registry'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@/styles/globals'
import { Theme } from '@/styles/theme'

export default function Providers({ children }: { children: React.ReactNode }) {
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
