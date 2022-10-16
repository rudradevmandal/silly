import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import ExamplesContent from './ExamplesContent'

const Examples = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="NCERT Examples" />
        <ExamplesContent />
        <Next LeftLink={"/resources/activities"} LeftText={"NCERT Activities"} RightLink={"/resources/intextqna"} RightText={"NCERT In-Text Q&A"}/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default Examples