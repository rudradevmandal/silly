import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import Exp1 from './Exp1'

const ExpDensity = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="Lesson 21: Experiments on Density" />
        <Exp1 />
        <Next LeftLink={"/lessons/buoyancy"} LeftText={"Lesson 20"} RightLink={"/lessons/density"} RightText={"Lesson 22"}/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default ExpDensity