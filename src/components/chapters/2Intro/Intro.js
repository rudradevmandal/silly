import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import IntroContent from './IntroContent'

const Intro = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="Lesson 2: Introduction" />
        <IntroContent />
        <Next LeftLink={"/lessons/history"} LeftText={"Lesson 1"} RightLink={"/lessons/indvnh"} RightText={"Lesson 3"}/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default Intro