import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import BarycenterContent from './BarycenterContent'

const Barycenter = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="Lesson 7: The Barycenter" />
        <BarycenterContent />
        <Next LeftLink={"/lessons/formorbit"} LeftText={"Lesson 6"} RightLink={"/lessons/expcentripetalforce"} RightText={"Lesson 8"}/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default Barycenter