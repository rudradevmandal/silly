import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";

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

theme.typography.srno = {
    fontSize: '1em',
    minWidth: '3%',
    maxWidth: '3%',
    [theme.breakpoints.up('lg')]: {
        fontSize: '1em',
        minWidth: '3%',
        maxWidth: '3%',
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '1em',
        minWidth: '4%',
        maxWidth: '4%',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '0.875em',
        minWidth: '5%',
        maxWidth: '5%',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.75em',
        minWidth: '6%',
        maxWidth: '6%',
    },
};

theme.typography.ans = {
    fontSize: '1em',
    marginLeft: '3%',
    [theme.breakpoints.up('lg')]: {
        fontSize: '1em',
        marginLeft: '3%',
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '1em',
        marginLeft: '4%',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '0.875em',
        marginLeft: '5%',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.75em',
        marginLeft: '6%',
    },
};

const AccordianDiv = styled.div`
padding: 1%;
`


const ExampleQnA = ({ srno, question, answer }) => {
  return (
    <AccordianDiv>
        <ThemeProvider theme={theme}>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography gutterBottom variant="srno" component="div" align="left" sx={{ fontWeight: 'bold', textAlign: 'justify'}}>{srno}.<br/></Typography>
                    <Typography gutterBottom variant="h5" component="div" align="left" sx={{ fontWeight: 'bold', textAlign: 'justify', marginRight: '3%' }}>
                    <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>{question}</Markdown>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography gutterBottom variant="ans" component="div" align="left" sx={{ textAlign: 'justify', marginRight: '3%', display:'flex', flexDirection:'row', alignItems: 'center' }}>
                    <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>{answer}</Markdown><ExpandMoreIcon fill='none' stroke='white' sx={{ color: 'white' }} />
                    
                    </Typography>
                    
                </AccordionDetails>
            </Accordion>
        </ThemeProvider>
    </AccordianDiv>
  )
}

export default ExampleQnA