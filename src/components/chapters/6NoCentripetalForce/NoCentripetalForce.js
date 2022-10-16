import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import NoCentripetalForceContent from './NoCentripetalForceContent'

const NoCentripetalForce = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="Lesson 6: What happens if there is no Centripetal Force?" />
        <NoCentripetalForceContent />
        <Next LeftLink={"/lessons/formorbit"} LeftText={"Lesson 5"} RightLink={"/lessons/barycenter"} RightText={"Lesson 7"}/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default NoCentripetalForce