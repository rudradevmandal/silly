import React from 'react'

import styled from 'styled-components';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import animationData from '../../../assets/LottieJson/21ExpDensity.json'
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
// 1. CORK AND NAIL OF SAME MASS


// Take a beaker filled with water.
// Take a piece of cork and an iron nail of equal mass.
// Place them on the surface of the water.
// Observe what happens.

// The cork floats while the nail sinks. This happens because of the difference in their densities. The density of cork is less than the density of water. This means that the upthrust of water on the cork is greater than the weight of the cork. So it floats (Figure). The density of an iron nail is more than the density of water. This means that the upthrust of water on the iron nail is less than the weight of the nail. So it sinks.

const title = `
Experiment 3: Cork And Nail Of Same Mass
`

const steps = [
    {
        label: 'Take a beaker filled with water.',
        description: ``,
    },
    {
        label: 'Take a piece of cork and an iron nail of equal mass.',
        description:
            '',
    },
    {
        label: 'Place them on the surface of the water.',
        description: ``,
    },
    {
        label: 'Observe what happens.',
        description: ``,
    },
];
const comment = `The cork floats while the nail sinks. This happens because of the difference in their densities. The density of cork is less than the density of water. This means that the upthrust of water on the cork is greater than the weight of the cork. So it floats (Figure). The density of an iron nail is more than the density of water. This means that the upthrust of water on the iron nail is less than the weight of the nail. So it sinks.`

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
margin-top: -20%;
margin-bottom: -20%;
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
The experiment listed introduces density. The goal is to understand that even if two objects have the same mass, the buoyant force experienced might be different, determining whether the object will float or sink.
`;

const Exp1 = () => {
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
                    <LottieAnimation animationData={animationData} id="ExpDensity1"></LottieAnimation>
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

export default Exp1