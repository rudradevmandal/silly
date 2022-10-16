import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'
import { light } from '../styles/Themes'
import Topics from './lessons/Topics'
import Navigation from './Navigation'
import Footer from './sections/Footer'

const lessons = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topics />
        <Footer/>

      </ThemeProvider>
    </>
  )
}

export default lessons