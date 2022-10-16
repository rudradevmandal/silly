import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'
import { light } from '../styles/Themes'
import AboutText from './about/AboutText'
import Navigation from './Navigation'
import Footer from './sections/Footer'

const About = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <AboutText />
        <Footer/>

      </ThemeProvider>
    </>
  )
}

export default About