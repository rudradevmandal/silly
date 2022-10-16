import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'
import { light } from '../styles/Themes'
import Navigation from './Navigation'
import ResourceTopics from './Resources/ResourceTopics'
import Footer from './sections/Footer'

const Resources = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <ResourceTopics />
        <Footer/>

      </ThemeProvider>
    </>
  )
}

export default Resources