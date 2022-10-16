import React from 'react'
import Navigation from '../../Navigation'
import Footer from '../../sections/Footer'
import GlobalStyles from '../../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from '../../../styles/Themes'
import Next from '../../Next'
import Topic from '../../Topic'
import ArchimedesPrincipleContent from './ArchimedesPrincipleContent'

const ArchimedesPrinciple = () => {
  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={light}>
        <Navigation/>
        <Topic text="Lesson 20: Archimedes' Principle" />
        <ArchimedesPrincipleContent />
        <Next LeftLink={"/lessons/buoyancy"} LeftText={"Lesson 19"} RightLink={"/lessons/expdensity"} RightText={"Lesson 21"}/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default ArchimedesPrinciple