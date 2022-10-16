import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import ExemplarContent from './ExemplarContent'


const Exemplar = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="NCERT Exemplar Problems and Solutions" />
        <ExemplarContent />
        <Next LeftLink={"/resources/exercises"} LeftText={"NCERT In-Text Q&A"} RightLink={"/resources"} RightText={"Resources"}/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default Exemplar