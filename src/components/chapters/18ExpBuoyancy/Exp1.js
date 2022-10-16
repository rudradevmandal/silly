import React from 'react'

import styled from 'styled-components';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import animationData from '../../../assets/LottieJson/18ExpBuoyancy1.json'
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ExtStepper from '../../ExpStepper'

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
// FLOATING BOTTLE


// Take an empty plastic bottle. Close the mouth of the bottle with an airtight stopper. Put it in a bucket filled with water. You see that the bottle floats.
// Push the bottle into the water. You feel an upward push. Try to push it further down. You will find it challenging to push deeper and deeper. This indicates that water exerts a force on the bottle in the upward direction. The water’s upward force increases as the bottle are pushed deeper till it is completely immersed.
// Now, release the bottle. It bounces back to the surface.
// Does the force due to the gravitational attraction of the earth act on this bottle? If so, why doesn’t the bottle stay immersed in water after it is released? How can you immerse the bottle in water?

// Yes, gravitational force does work on the bottle, but the upward force on the bottle by the water is much more than the tiny ‘mg’ of the bottle. To immerse it, just increase the mass of the bottle, but putting some sones in it or filling it with water.



const title = `
Experiment 1: Floating Bottle
`

const steps = [
    {
        label: 'Take an empty plastic bottle. Close the mouth of the bottle with an airtight stopper. Put it in a bucket filled with water. You see that the bottle floats.',
        description: ``,
    },
    {
        label: 'Push the bottle into the water. You feel an upward push. Try to push it further down. You will find it challenging to push deeper and deeper. This indicates that water exerts a force on the bottle in an upward direction. The water’s upward force increases as the bottle are pushed deeper till it is completely immersed.',
        description:
            '',
    },
    {
        label: 'Now, release the bottle. It bounces back to the surface.',
        description: ``,
    },
    {
        label: 'Does the force due to the gravitational attraction of the earth act on this bottle? If so, why doesn’t the bottle stay immersed in water after it is released? How can you immerse the bottle in water?',
        description: ``,
    },
];
const comment = `Yes, gravitational force does work on the bottle, but the upward force on the bottle by the water is much more than the tiny ‘mg’ of the bottle. To immerse it, increase the mass of the bottle, like put some stones in it or fill it with water.`
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
                    <LottieAnimation animationData={animationData} id="ExpBuoyancy1"></LottieAnimation>
                </AnimatedContainer>
            </VideoContainer>
        </ExpSection>
            <CommentSection>
                <CommentContainer>
                    <ThemeProvider theme={theme}><Typography gutterBottom variant="h5" component="div" align="left">{comment}</Typography></ThemeProvider>
                </CommentContainer>
            </CommentSection>
    </>
  )
}

export default Exp1