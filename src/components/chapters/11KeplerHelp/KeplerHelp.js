import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import KeplerHelpContent from './KeplerHelpContent'

const KeplerHelp = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="Lesson 10: A Little Help from Kepler" />
        <KeplerHelpContent />
        <Next LeftLink={"/lessons/gravconst"} LeftText={"Lesson 10"} RightLink={"/lessons/expfreefall"} RightText={"Lesson 12"}/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default KeplerHelp