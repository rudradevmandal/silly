import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import FormOrbitContent from './FormOrbitContent'

const FormOrbit = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="Lesson 4: Formation of Orbits" />
        <FormOrbitContent />
        <Next LeftLink={"/lessons/indvnh"} LeftText={"Lesson 3"} RightLink={"/lessons/centripetalforce"} RightText={"Lesson 5"}/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default FormOrbit