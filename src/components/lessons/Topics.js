import React from 'react'
import styled from 'styled-components'
import MyCard from './MyCard'
import img1 from '../../assets/LessonTopics/1.png'
import img2 from '../../assets/LessonTopics/2.png'
import img3 from '../../assets/LessonTopics/3.png'
import img4 from '../../assets/LessonTopics/4.png'
import img5 from '../../assets/LessonTopics/5.png'
import img6 from '../../assets/LessonTopics/6.png'
import img7 from '../../assets/LessonTopics/7.png'
import img8 from '../../assets/LessonTopics/8.png'
import img9 from '../../assets/LessonTopics/9.png'
import img10 from '../../assets/LessonTopics/10.png'
import img11 from '../../assets/LessonTopics/11.png'
import img12 from '../../assets/LessonTopics/12.png'
import img13 from '../../assets/LessonTopics/13.png'
import img14 from '../../assets/LessonTopics/14.png'
import img15 from '../../assets/LessonTopics/15.png'
import img16 from '../../assets/LessonTopics/16.png'
import img17 from '../../assets/LessonTopics/17.png'
import img18 from '../../assets/LessonTopics/18.png'
import img19 from '../../assets/LessonTopics/19.png'
import img20 from '../../assets/LessonTopics/20.png'
import img21 from '../../assets/LessonTopics/21.png'
import img22 from '../../assets/LessonTopics/22.png'
import img23 from '../../assets/LessonTopics/23.png'
import img24 from '../../assets/LessonTopics/24.png'
import { Grid } from '@mui/material'

const Section = styled.section`
// min-height: 80vh;
width: 100%;
background-color: ${props => props.theme.body};
display: flex;
justify-content: center;
align-items: center;
position: relative;
flex-direction: column;
`
const CardContainer = styled.div`
width: 60%;
background-color: ${props => props.theme.body};
display: flex-start;
justify-content: center;
align-items: center;
position: relative;
padding: 3%;
`

const Topics = () => {

  return (
    <>
    <Section>
        <CardContainer>
            <Grid container spacing={3}>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={img1} alt={"1"} text={"A Brief History"} link={"/lessons/history"} /></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={img2} alt={"2"} text={"Introduction"} link={"/lessons/intro"} /></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={img3} alt={"3"} text={"Independence of Horizontal and Vertical Velocity"} link={"/lessons/indvnh"} /></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={img4} alt={"4"} text={"Formation of Orbits"} link={"/lessons/formorbit"} /></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={img5} alt={"5"} text={"Centripetal Force"} link={"/lessons/centripetalforce"} /></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={img6} alt={"6"} text={"What happens if there is no Centripetal Force?"} link={"/lessons/nocentripetalforce"} /></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={img7} alt={"7"} text={"The Barycentre"} link={"/lessons/barycenter"} /></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={img8} alt={"8"} text={"Experiments on Centripetal Force"} link={"/lessons/expcentripetalforce"} /></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={img9} alt={"9"} text={"Mathematical Formulation of Gravity"} link={"/lessons/mathgravity"} /></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={img10} alt={"10"} text={"How was the Universal Gravitation Constant Determined?"} link={"/lessons/gravconst"}/></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={img11} alt={"11"} text={"A Little Help from Kepler"} link={"/lessons/keplerhelp"}/></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={img12} alt={"12"} text={"Experiments on Freefall"} link={"/lessons/expfreefall"}/></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={img13} alt={"13"} text={"Understanding Freefall"} link={"/lessons/freefall"}/></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={img14} alt={"14"} text={"Mass vs Weight"} link={"/lessons/massweight"}/></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={img15} alt={"15"} text={"Weight on other planets"} link={"/lessons/weightdiffplanets"}/></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={img16} alt={"16"} text={"Thrust vs Pressure"} link={"/lessons/thrustpressure"}/></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={img17} alt={"17"} text={"Pressure in Fluids"} link={"/lessons/pressurefluids"}/></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={img18} alt={"18"} text={"Experiments on Buoyancy"} link={"/lessons/expbuoyancy"}/></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={img19} alt={"19"} text={"Buoyancy"} link={"/lessons/buoyancy"}/></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={img20} alt={"20"} text={"Archimedes' Principle"} link={"/lessons/archimedesprinciple"}/></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={img21} alt={"21"} text={"Experiment on Density"} link={"/lessons/expdensity"}/></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={img22} alt={"22"} text={"Density"} link={"/lessons/density"}/></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={img23} alt={"23"} text={"Summary"} link={"/lessons/summary"}/></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={img24} alt={"24"} text={"Questions"} link={"/lessons/questions"}/></Grid>
            </Grid>
        </CardContainer>
    </Section>
    </>
  )
}

export default Topics