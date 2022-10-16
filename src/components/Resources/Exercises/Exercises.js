import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import ExercisesContent from './ExercisesContent'

const Exercises = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="NCERT Exercises Questions and Answers" />
        <ExercisesContent />
        <Next LeftLink={"/resources/intextqna"} LeftText={"NCERT In-Text Q&A"} RightLink={"/resources/exemplar"} RightText={"NCERT Exemplar Q&A"}/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default Exercises