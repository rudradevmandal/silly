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

const ExpFreefall = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="Lesson 12: Experiments on Freefall" />
        <Exp1 />
        <Exp2 />
        <Exp3 />
        <Exp4 />
        <Next LeftLink={"/lessons/keplerhelp"} LeftText={"Lesson 11"} RightLink={"/lessons/freefall"} RightText={"Lesson 13"}/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default ExpFreefall