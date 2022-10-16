import React from 'react'
import Landing from './Landing'
import Navigation from '../Navigation'
import Details from './Details'
import Lenticular from './Lenticular'
import Testimonials from './Testimonials'
import Footer from './Footer'
import ScrollToTop from '../ScrollToTop'
import GlobalStyles from '../../styles/GlobalStyles'
import { light } from '../../styles/Themes'
import { ThemeProvider } from 'styled-components'

const Home = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Landing/>
        <Details/>
        <Lenticular/>
        <Testimonials/>
        <Footer/>
        <ScrollToTop />

      </ThemeProvider>
    </>
  )
}

export default Home