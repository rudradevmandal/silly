import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import IndVnhContent from './IndVnhContent'


const IndVnH = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="Lesson 3: Independence of Horizontal and Vertical Velocity" />
        <IndVnhContent />
        <Next LeftLink={"/lessons/intro"} LeftText={"Lesson 2"} RightLink={"/lessons/formorbit"} RightText={"Lesson 4"}/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default IndVnH