import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import WeightDiffPlanetsContent from './WeightDiffPlanetsContent'
import Disclaimer from '../../Disclaimer'

const WeightDiffPlanets = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="Lesson 15: Weight on other planets" />
        <WeightDiffPlanetsContent />
        <Next LeftLink={"/lessons/massweight"} LeftText={"Lesson 14"} RightLink={"/lessons/thrustpressure"} RightText={"Lesson 16"}/>
        <Disclaimer />
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default WeightDiffPlanets