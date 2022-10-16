import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import ThrustPressureContent from './ThrustPressureContent'
import Disclaimer from '../../Disclaimer'

const ThrustPressure = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="Lesson 16: Thrust vs Pressure" />
        <ThrustPressureContent />
        <Next LeftLink={"/lessons/weightdiffplanets"} LeftText={"Lesson 15"} RightLink={"/lessons/pressurefluids"} RightText={"Lesson 17"}/>
        <Disclaimer />
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default ThrustPressure