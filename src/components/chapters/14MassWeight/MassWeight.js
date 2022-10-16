import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import MassWeightContent from './MassWeightContent'
import Disclaimer from '../../Disclaimer'

const MassWeight = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="Lesson 14: Mass Vs Weight" />
        <MassWeightContent />
        <Next LeftLink={"/lessons/freefall"} LeftText={"Lesson 13"} RightLink={"/lessons/weightdiffplanets"} RightText={"Lesson 15"}/>
        <Disclaimer />
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default MassWeight