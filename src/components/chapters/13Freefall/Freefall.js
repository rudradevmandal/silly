import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import FreefallContent from './FreefallContent'
import Disclaimer from '../../Disclaimer'

const Freefall = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="Lesson 13: Understanding Freefall" />
        <FreefallContent />
        <Next LeftLink={"/lessons/expfreefall"} LeftText={"Lesson 12"} RightLink={"/lessons/massweight"} RightText={"Lesson 14"}/>
        <Disclaimer />
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default Freefall