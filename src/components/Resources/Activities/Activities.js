import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import ActivitiesContent from './ActivitiesContent'

const Activities = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="NCERT Activities" />
        <ActivitiesContent />
        <Next LeftLink={"/resources"} LeftText={"Resources"} RightLink={"/resources/examples"} RightText={"NCERT Examples"}/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default Activities