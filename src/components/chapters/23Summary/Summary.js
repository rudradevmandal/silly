import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import SummaryContent from './SummaryContent'

const Summary = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="Summary" />
        <SummaryContent />
        <Next LeftLink={"/lessons/expdensity"} LeftText={"Lesson 21"} RightLink={"/lessons/questions"} RightText={"Questions"}/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default Summary