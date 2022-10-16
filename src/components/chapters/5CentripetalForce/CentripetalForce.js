import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import CentripetalForceContent from './CentripetalForceContent'

const CentripetalForce = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="Lesson 5: Centripetal Force" />
        <CentripetalForceContent />
        <Next LeftLink={"/lessons/formorbit"} LeftText={"Lesson 4"} RightLink={"/lessons/nocentripetalforce"} RightText={"Lesson 6"}/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default CentripetalForce