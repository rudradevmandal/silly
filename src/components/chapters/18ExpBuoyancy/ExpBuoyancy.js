import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import Exp1 from './Exp1'
import Exp2 from './Exp2'
import Exp3 from './Exp3'

const ExpBuoyancy = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="Lesson 18: Experiments on Buoyancy" />
        <Exp1 />
        <Exp2 />
        <Exp3 />
        <Next LeftLink={"/lessons/pressurefluids"} LeftText={"Lesson 17"} RightLink={"/lessons/buoyancy"} RightText={"Lesson 19"}/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default ExpBuoyancy