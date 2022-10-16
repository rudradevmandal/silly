import React from 'react'
import styled from 'styled-components'
import MyCard from '../lessons/MyCard'
import activity from '../../assets/Resources/activity.png'
import examples from '../../assets/Resources/examples.png'
import exercises from '../../assets/Resources/exercises.png'
import exemplar from '../../assets/Resources/exemplar.png'
import inTextQuestions from '../../assets/Resources/inTextQuestions.png'
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


const ResourceTopics = () => {
  return (
    <>
    <Section>
        <CardContainer>
            <Grid container spacing={3}>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={activity} alt={"1"} text={"NCERT Activities"} link={"/resources/activities"} /></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={examples} alt={"2"} text={"NCERT Examples"} link={"/resources/examples"} /></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={inTextQuestions} alt={"3"} text={"NCERT In-Text Questions and Answers"} link={"/resources/intextqna"} /></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={exercises} alt={"4"} text={"NCERT Excercise Questions and Answers"} link={"/resources/exercises"} /></Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}><MyCard img={exemplar} alt={"5"} text={"NCERT Exemplar Problems and Solutions"} link={"/resources/exemplar"} /></Grid>
            </Grid>
        </CardContainer>
    </Section>
    </>
  )
}

export default ResourceTopics