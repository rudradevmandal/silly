import React from 'react'

import styled from 'styled-components';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import animationData from '../../../assets/LottieJson/12ExpFreefall2.json'
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

const title = `
Experiment 2: Falling Paper And Stone
`

const steps = [
    {
        label: 'Take a sheet of paper and a stone.',
        description: ``,
    },
    {
        label: 'Drop them simultaneously from the first floor of a building.',
        description:
            '',
    },
    {
        label: 'Observe whether both of them reach the ground simultaneously.',
        description: ``,
    },
];
const comment = `
We see that paper reaches the ground a little later than the stone. This happens because of air resistance. The air offers resistance due to friction to the motion of the falling objects. The resistance offered by air to the paper is more than that provided to the stone. If we do the experiment in a glass jar from which air has been sucked out, the paper and the stone would fall at the same rate.
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
margin-bottom: 5%;

@media (max-width: 900px) {
    margin-bottom: 0%;
}
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
margin-bottom: -3%;

@media (max-width: 1200px) {
    margin-bottom: 0%;
}
@media (max-width: 900px) {
    margin-bottom: 0%;
}
@media (max-width: 600px) {
    flex-direction: column-reverse;
    margin-bottom: 0%;
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
margin-bottom: -30%;
}
`
const Exp2 = () => {
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
                    <LottieAnimation animationData={animationData} id="ExpFreefall2"></LottieAnimation>
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

export default Exp2