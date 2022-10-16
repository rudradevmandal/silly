import React from 'react'

import styled from 'styled-components';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import animationData from '../../../assets/LottieJson/18ExpBuoyancy3.json'
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

theme.typography.h5 = {
    fontSize: '1em',
    [theme.breakpoints.up('lg')]: {
        fontSize: '1em'
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '1em'
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '0.875em'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.75em'
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: '0.6em'
    },
};
// 3. ARCHIMEDIS' PRINCIPLE


// Take a piece of stone and tie it to one end of a rubber string or a spring balance.
// Suspend the stone by holding the balance or the string, as shown in Figure I.
// Note the elongation of the string or the reading on the spring balance due to the weight of the stone.
// Now, slowly dip the stone in the water in a container, as shown in Figure II.
// Observe what happens to the elongation of the string or the reading on the balance.
// You will find that the elongation of the string or the reading of the balance decreases as the stone is gradually lowered in the water.
const title = `
Experiment 3: Archimedis' Principle
`

const steps = [
    {
        label: 'Take a piece of stone and tie it to one end of a rubber string or a spring balance.',
        description: ``,
    },
    {
        label: 'Suspend the stone by holding the balance or the string, as shown in Figure.',
        description:
            '',
    },
    {
        label: 'Note the elongation of the string or the reading on the spring balance due to the weight of the stone.',
        description: ``,
    },
    {
        label: 'Now, slowly dip the stone in the water in a container, as shown in Figure.',
        description: ``,
    },
    {
        label: 'Observe what happens to the elongation of the string or the reading on the balance.',
        description: ``,
    },
    {
        label: 'You will find that the elongation of the string or the reading of the balance decreases as the stone is gradually lowered in the water.',
        description: ``,
    },
];
const comment = ``

const TitleSection = styled.section`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
line-height: 1.5;
padding-top: 3%;
padding-bottom: 3%;
`
const TextContainer = styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const CommentSection = styled.section`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
line-height: 1.5;
`
const CommentContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content:left;
line-height: 1.5;

@media (max-width: 900px) {
    width:80%;
}
@media (max-width: 600px) {
    width:80%;
}
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
width: 70%;
margin-top: -10%;
z-index: -1;

@media (max-width: 900px) {
    width:100%;
}
@media (max-width: 600px) {
    width:120%;
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
The goal of the experiments/activities is to introduce the idea of buoyancy. The lesson takes a few real-world examples and attempts to illuminate the buoyant property of fluids.
`;

const Exp3 = () => {
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
                    <LottieAnimation animationData={animationData} id="ExpBuoyancy3"></LottieAnimation>
                </AnimatedContainer>
            </VideoContainer>
        </ExpSection>
            <CommentSection>
                <CommentContainer>
                    <ThemeProvider theme={theme}><Typography gutterBottom variant="h5" component="div" align="left">{comment}</Typography></ThemeProvider>
                </CommentContainer>
            </CommentSection>
            
        <NoteSection><NoteContainer><Note text={note} /></NoteContainer></NoteSection>
    </>
  )
}

export default Exp3