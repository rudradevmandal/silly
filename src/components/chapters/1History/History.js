import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import MyTimeline from './MyTimeline'
import Next from '../../Next'
import Topic from '../../Topic'

const History = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="Lesson 1: A Brief History" />
        <MyTimeline />
        <Next LeftLink={"/lessons"} LeftText={"All Lessons"} RightLink={"/lessons/intro"} RightText={"Lesson 2"}/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default History