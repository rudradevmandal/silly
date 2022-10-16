import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import DensityContent from './DensityContent'
import Disclaimer from '../../Disclaimer'

const Density = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="Lesson 22: Density" />
        <DensityContent />
        <Next LeftLink={"/lessons/expdensity"} LeftText={"Lesson 21"} RightLink={"/lessons/summary"} RightText={"Summary"}/>
        <Disclaimer />
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default Density