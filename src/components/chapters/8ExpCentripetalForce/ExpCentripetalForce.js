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
import Exp4 from './Exp4'

const ExpCentripetalForce = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="Lesson 8: Experiments on Centripetal Force" />
        <Exp1 />
        <Exp2 />
        <Exp3 />
        <Exp4 />
        <Next LeftLink={"/lessons/barycenter"} LeftText={"Lesson 7"} RightLink={"/lessons/mathgravity"} RightText={"Lesson 9"}/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default ExpCentripetalForce