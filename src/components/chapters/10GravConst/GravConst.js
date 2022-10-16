import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import GravConstContent from './GravConstContent'

const GravConst = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="Lesson 10: How was the Universal Gravitation Constant Determined?" />
        <GravConstContent />
        <Next LeftLink={"/lessons/mathgravity"} LeftText={"Lesson 9"} RightLink={"/lessons/keplerhelp"} RightText={"Lesson 11"}/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default GravConst