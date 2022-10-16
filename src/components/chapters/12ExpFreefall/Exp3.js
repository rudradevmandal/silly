import React from 'react'

import styled from 'styled-components';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import animationData from '../../../assets/LottieJson/12ExpFreefall3.json'
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
Experiment 3: Freefalling Coins
`

const steps = [
    {
        label: 'Take a square bell jar and evacuate it.',
        description: ``,
    },
    {
        label: 'Hold two iron coins (or any iron metal) of different weight and size with an electromagnet.',
        description:
            '',
    },
    {
        label: 'As you switch off the magnet, let them fall on two switches, lighting two bulbs of different colours.',
        description: ``,
    },
    {
        label: 'They should glow at the same instant.',
        description: ``,
    },
    {
        label: 'Do the experiment with air, and they should fall at different rates due to air drag.',
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
/* margin-top: -10%; */
z-index: -1;

@media (max-width: 900px) {
    width:100%;
}
@media (max-width: 600px) {
    width:120%;
margin-bottom: -30%;
}
`

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
                        <LottieAnimation animationData={animationData} id="ExpFreefall3"></LottieAnimation>
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

export default Exp3