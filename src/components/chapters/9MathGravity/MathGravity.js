import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import MathGravityContent from './MathGravityContent'
import Disclaimer from '../../Disclaimer'


const MathGravity = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="Lesson 9: Mathematical Formulation of Gravity" />
        <MathGravityContent />
        <Next LeftLink={"/lessons/expcentripetalforce"} LeftText={"Lesson 8"} RightLink={"/lessons/gravconst"} RightText={"Lesson 10"}/>
        <Disclaimer />
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default MathGravity