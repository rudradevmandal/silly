import React from 'react'

import styled from 'styled-components';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import animationData from '../../../assets/LottieJson/8_4CFExp.json'
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ExtStepper from '../../ExpStepper'
import Note from '../../Note';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Poppins',
            'sans-serif'
        ].join(','),
    }
});
theme.typography.h4 = {
    fontSize: '1.5em',
    [theme.breakpoints.up('lg')]: {
        fontSize: '1.5em'
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '1.5em'
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '1em'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.875em'
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: '0.75em'
    },
};

const title = `
Experiment 4: Marble Gravitron
`
// 4. MARBLE GRAVITRON


// Take a marble and place it inside a wine glass.
// Swiftly whirl the wine glass so that the marble starts rolling.
// Whirl it fast enough, and you can invert the glass without letting the marble fall.


const steps = [
    {
        label: 'Take a marble and place it inside a wine glass.',
    },
    {
        label: 'Swiftly whirl the wine glass so that the marble starts rolling.',
    },
    {
        label: 'Whirl it fast enough, and you can invert the glass without letting the marble fall.',
    },
];

const TitleSection = styled.section`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
line-height: 1.5;
`
const TextContainer = styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const ExpSection = styled.section`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
line-height: 1.5;

@media (max-width: 600px) {
    flex-direction: column-reverse;
}
`

const VideoContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media (max-width: 600px) {
    width: 80%;
}
`
const StepContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: flex-end;

@media (max-width: 600px) {
    width: 80%;
}
`
const SteperContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: right;

@media (max-width: 900px) {
    width:80%;
}
@media (max-width: 600px) {
    width:90%;
}
`
const AnimatedContainer = styled.div`
width: 100%;
margin-top: -10%;
margin-bottom: -15%;
z-index: -1;

@media (max-width: 900px) {
    width:120%;
}
@media (max-width: 600px) {
    width:150%;
margin-top: -20%;
margin-bottom: -25%;
}
`
const NoteContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content:left;
text-align: justify;
line-height: 1.5;

@media (max-width: 900px) {
    width:80%;
}
`
const NoteSection = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 2%;
`
const note = `
The aim of the experiments is to understand centripetal force in a more practical manner. This will give a break from the myriad theoretical reading and create curiosity about the application of the previously studied lessons.
`;

const Exp4 = () => {
  return (
    <>
        <TitleSection>
            <TextContainer>
            <ThemeProvider theme={theme}><Typography gutterBottom variant="h4" component="div" align="right" sx={{ fontWeight: 'bold' }}>{title}</Typography></ThemeProvider>
            </TextContainer>
        </TitleSection>
        <ExpSection>
            <StepContainer>
                <SteperContainer><ExtStepper steps={steps} /></SteperContainer>
            </StepContainer>
            <VideoContainer>
                <AnimatedContainer>
                    <LottieAnimation animationData={animationData} id="CFExp4"></LottieAnimation>
                </AnimatedContainer>
            </VideoContainer>
        </ExpSection>
        <NoteSection><NoteContainer><Note text={note} /></NoteContainer></NoteSection>
    </>
  )
}

export default Exp4