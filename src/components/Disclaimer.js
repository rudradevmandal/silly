import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import { Typography } from '@mui/material';
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

theme.typography.h5 = {
    fontSize: '0.6em',
    [theme.breakpoints.up('lg')]: {
        fontSize: '0.6em'
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '0.6em'
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '0.475em'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.375em'
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: '0.3em'
    },
};

const DisclaimerSection = styled.div`
width: 100%;
position: relative;
display: flex;
align-items: flex-start;
/* @media (max-width: 70em) {
  width: 30vw;
}
@media (max-width: 48em) {
  width: 34vw;
} */
`

const Disclaimer = () => {
    return (
        <ThemeProvider theme={theme}>
            <DisclaimerSection>
                <Typography gutterBottom variant="h5" component="div" align="left">
                    <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>*NCERT Example</Markdown>
                </Typography>
            </DisclaimerSection>
        </ThemeProvider>
    )
}

export default Disclaimer