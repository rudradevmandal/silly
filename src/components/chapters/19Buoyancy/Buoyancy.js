import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import BuoyancyContent from './BuoyancyContent'

const Buoyancy = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="Lesson 19: Buoyancy" />
        <BuoyancyContent />
        <Next LeftLink={"/lessons/expbuoyancy"} LeftText={"Lesson 18"} RightLink={"/lessons/archimedesprinciple"} RightText={"Lesson 20"}/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default Buoyancy