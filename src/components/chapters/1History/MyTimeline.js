import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { createTheme, ThemeProvider, Typography } from '@mui/material';
import LottieAnimation from '../../../lottieScripts/LottieAnimation';
import styled from 'styled-components';
import { Box } from '@mui/system';

import historyanimationData1 from "../../../assets/LottieJson/history/history1.json";
import historyanimationData2 from "../../../assets/LottieJson/history/history2.json";
import historyanimationData3 from "../../../assets/LottieJson/history/history3.json";
import historyanimationData4 from "../../../assets/LottieJson/history/history4.json";
import historyanimationData5 from "../../../assets/LottieJson/history/history5.json";
import historyanimationData6 from "../../../assets/LottieJson/history/history6.json";
import historyanimationData7 from "../../../assets/LottieJson/history/history7.json";
import Note from '../../Note';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif'
    ].join(','),
  }
});

theme.typography.h5 = {
  fontSize: '1em',
  [theme.breakpoints.up('lg')]: {
    fontSize: '1em',
    width: '21vw'
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '1em',
    width: '24vw'
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1em',
    width: '27vw'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875em',
    width: '30vw'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.75em',
    width: '33vw'
  },
};

const VideoContainerLeft = styled.div`
width: 24vw;
float: right;

@media (max-width: 70em) {
  width: 30vw;
}
@media (max-width: 48em) {
  width: 34vw;
}
`

const VideoContainerRight = styled.div`
width: 24vw;
float: left;

@media (max-width: 70em) {
  width: 30vw;
}
@media (max-width: 48em) {
  width: 34vw;
}
`
const NoteSection = styled.section`
width: 100%;
display: flex;
align-self: center;
align-items: center;
flex-direction: column;
justify-content:left;
text-align: justify;
line-height: 1.5;
`
const NoteContainer = styled.div`
width: 50%;
display: flex;
align-self: center;
align-items: center;
flex-direction: column;
justify-content:left;
text-align: justify;
line-height: 1.5;

@media (max-width: 900px) {
    width:80%;
}
`

theme.TimelineOppositeContent = {
  zIndex: '-1'
}
const MyTimeline = () => {
  return (
    <ThemeProvider theme={theme}>

      <Timeline position="alternate" id="mySection">
        <TimelineItem>
          <TimelineOppositeContent sx={{ zIndex: '-1' }}>
            <VideoContainerLeft>
              <Box sx={{ mt: '-7vw', mb: '-7vw' }}><LottieAnimation animationData={historyanimationData1} id="history1"></LottieAnimation></Box>
            </VideoContainerLeft>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent variant="h5"> <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>4th Century BC, Greece
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'light', color: 'text.secondary', textAlign: 'justify' }}>
              <br></br>
              The first description of bodies falling downwards towards the centre was related to their nature was documented by the Greek philosopher Aristotle. This nature of objects getting attracted was due to their gravitas or heaviness.
            </Typography>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
          <VideoContainerRight>
              <Box sx={{ mt: '-7vw', mb: '-7vw' }}><LottieAnimation animationData={historyanimationData2} id="history2"></LottieAnimation></Box>
            </VideoContainerRight>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent variant="h5" sx={{ float: 'right' }}><Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', float: 'right' }}>3rd Century BC, Greece

            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'light', color: 'text.secondary', textAlign: 'justify' }}>
              <br></br>
              Archimedes discovered the centre of mass of a triangle and postulated the centre of mass of 2 equal weighing objects.
            </Typography>
          </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
          <VideoContainerLeft>
              <Box sx={{ mt: '-7vw', mb: '-7vw' }}><LottieAnimation animationData={historyanimationData3} id="history3"></LottieAnimation></Box>
            </VideoContainerLeft>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent variant="h5"> <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>7th century AD, India
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'light', color: 'text.secondary', textAlign: 'justify' }}>
              <br></br>
              Brahmagupta called this invisible force of attraction<em>“gurutvaakarshan”.</em>
            </Typography>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
          <VideoContainerRight>
              <Box sx={{ mt: '-7vw', mb: '-7vw' }}><LottieAnimation animationData={historyanimationData4} id="history4"></LottieAnimation></Box>
            </VideoContainerRight>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent variant="h5" sx={{ float: 'right' }}><Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', float: 'right' }}>1589 - 1592 AD, Italy

            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'light', color: 'text.secondary', textAlign: 'justify' }}>
              <br></br>
              Galileo Galilei showed that gravitational acceleration is the same for all falling objects. In short, all objects would fall at the same rate, if not for air resistance. He did that by dropping balls from the leaning Tower of Pisa.
            </Typography>
          </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
          <VideoContainerLeft>
              <Box sx={{ mt: '-7vw', mb: '-7vw' }}><LottieAnimation animationData={historyanimationData5} id="history5"></LottieAnimation></Box>
            </VideoContainerLeft>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent variant="h5"> <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>1687 AD, England
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'light', color: 'text.secondary', textAlign: 'justify' }}>
              <br></br>
              Sir Isaac Newton derived the Universal Law of Gravitation in <em>“Principia”.</em>
            </Typography>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
          <VideoContainerRight>
              <Box sx={{ mt: '-7vw', mb: '-7vw' }}><LottieAnimation animationData={historyanimationData6} id="history6"></LottieAnimation></Box>
            </VideoContainerRight>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent variant="h5" sx={{ float: 'right' }}><Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', float: 'right' }}>1915 AD, Germany

            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'light', color: 'text.secondary', textAlign: 'justify' }}>
              <br></br>
              Albert Einstien used the equivalence principle to develop the General Theory of Relativity, which remains the most extraordinary feat of human thinking about nature as summarised by Max Born.
            </Typography>
          </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
          <VideoContainerLeft>
              <Box sx={{ mt: '-7vw', mb: '-7vw' }}><LottieAnimation animationData={historyanimationData7} id="history7"></LottieAnimation></Box>
            </VideoContainerLeft>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent variant="h5"> <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>Unknown, Unknown
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'light', color: 'text.secondary', textAlign: 'justify' }}>
              <br></br>
              Integration of Quantum Mechanics and General Relativity to form the Theory of Everything.
            </Typography>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent variant="h5"></TimelineContent>
        </TimelineItem>
      </Timeline>
      <NoteSection>
      <NoteContainer>
        <Note text={"The text is aims to inform the vibrant and active history of gravitation. Although, the events listed here are limited, the teacher can give information about other important scientists such as Nicolaus Copernicus or Tycho Brahe. This lesson is intended to give an overview of the past and can be used as a great tool to instill enthusiasm in the students."}/>
    </NoteContainer></NoteSection>
      </ThemeProvider>
  )
}

export default MyTimeline