import React from 'react'

import styled from 'styled-components';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import animationData from '../../../assets/LottieJson/12ExpFreefall4.json'
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

const title = `
Experiment 4: Freefalling Waterbottle
`
const steps = [
    {
        label: 'Take a water bottle and punch a few holes in it at the bottom.',
        description: ``,
    },
    {
        label: 'Fill it with water and let it out the holes.',
        description:
            '',
    },
    {
        label: 'Leave the bottle from a height and see the water does not come out during free fall.',
        description: ``,
    },
];
const comment = `
Gravity doesn’t work under freefall, which means while freefalling, you’ll feel the same weightlessness as you’d feel in outer space in the absence of gravity.This consequence led to Einstein’s formulation of general relativity.
`

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
margin-bottom: -6%;
margin-top: -6%;

@media (max-width: 900px) {
    margin-bottom: 0%;
    margin-top: 0%;
}
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
/* margin-top: -10%; */
z-index: -1;

@media (max-width: 900px) {
    width:100%;
}
@media (max-width: 600px) {
    width:120%;
    margin-top: -30%;
    margin-bottom: -20%;
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
The goal of the experiments is to introduce the concept of freefall. This does not explain freefall but lays out its consequences. Most of these can be done at home or demonstrated to get more clarity.
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
                        <LottieAnimation animationData={animationData} id="ExpFreefall4"></LottieAnimation>
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

export default Exp4