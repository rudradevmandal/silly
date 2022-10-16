import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import { Typography } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Poppins',
            'sans-serif'
        ].join(','),
    }
});
theme.typography.h4 = {
    fontSize: '2em',
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
};

var noteStyle = {
    width: '100vw',
    // [theme.breakpoints.down('lg')]: {
    //     width: '15vw',
    // },
    // [theme.breakpoints.down('md')]: {
    //     width: '15vw',
    // },
    // [theme.breakpoints.down('sm')]: {
    //     width: '10vw',
    // }
};

const AlertContainer = styled.div`
width: 100%;
position: relative;
display: flex;
text-align: justify;
justify-content: center;
/* @media (max-width: 70em) {
  width: 30vw;
}
@media (max-width: 48em) {
  width: 34vw;
} */
`

const Note = ({ text }) => {
    return (
        <ThemeProvider theme={theme}>
            <AlertContainer>
                <Stack style={noteStyle}>
                    <Alert icon={false} severity="info">
                        <Typography gutterBottom variant="h4" component="div" align="left">
                            Note to Teacher
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" align="left" sx={{ textAlign: 'justify' }}>
                            {text}
                        </Typography>

                    </Alert>
                </Stack>
            </AlertContainer>
        </ThemeProvider>
    )
}

export default Note