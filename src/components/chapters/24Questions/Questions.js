import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import QuestionsContent from './QuestionsContent'

const Questions = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="Questions" />
        <QuestionsContent />
        <Next LeftLink={"/lessons/summary"} LeftText={"Summary"} RightLink={"/lessons"} RightText={"All Lessons"}/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default Questions