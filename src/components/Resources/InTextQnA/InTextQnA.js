import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import InTextQnAContent from './InTextQnAContent'

const InTextQnA = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="NCERT In-Text Questions and Answers" />
        <InTextQnAContent />
        <Next LeftLink={"/resources/examples"} LeftText={"NCERT Examples"} RightLink={"/resources/exercises"} RightText={"NCERT Exercises"}/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default InTextQnA