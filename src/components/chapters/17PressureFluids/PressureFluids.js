import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import PressureFluidsContent from './PressureFluidsContent'

const PressureFluids = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="Lesson 17: Pressure in Fluids" />
        <PressureFluidsContent />
        <Next LeftLink={"/lessons/thrustpressure"} LeftText={"Lesson 16"} RightLink={"/lessons/expbuoyancy"} RightText={"Lesson 18"}/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default PressureFluids