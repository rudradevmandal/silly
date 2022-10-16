import React from 'react'

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Poppins',
            'sans-serif'
        ].join(','),
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'contained' &&
                        ownerState.color === 'primary' && {
                        backgroundColor: 'rgb(247, 147, 29)',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#FF931D',
                            color: '#fff',
                        },
                    }),
                    ...((ownerState.variant === 'back' || ownerState.variant === 'reset') &&
                        ownerState.color === 'primary' && {
                        backgroundColor: '#fff',
                        color: '#F7931D',
                        '&:hover': {
                            backgroundColor: 'rgba(247, 147, 29, 0.1)',
                            color: '#F7931D',
                        },
                    }),
                }),
            },
        },
        MuiStepper: {
            styleOverrides: {
                root: ({
                    "& .Mui-active .MuiStepIcon-root": { color: "#F7931D" },
                    "& .Mui-completed .MuiStepIcon-root": { color: "#F7931D" },
                    "& .Mui-disabled .MuiStepIcon-root": { color: "grey" },
                }),
            },
        },
    },
});
theme.components.MuiStepper.styleOverrides.root = {
    "& .Mui-active .MuiStepIcon-root": { color: "#F7931D" },
    "& .Mui-completed .MuiStepIcon-root": { color: "#F7931D" },
    "& .Mui-disabled .MuiStepIcon-root": { color: "grey" },
    "& .MuiStepLabel-iconContainer": { transform: "scale(1.2)" },
    [theme.breakpoints.up('lg')]: {
        "& .MuiStepLabel-iconContainer": { transform: "scale(1.2)" },
    },
    [theme.breakpoints.down('lg')]: {
        "& .MuiStepLabel-iconContainer": { transform: "scale(1)" },
    },
    [theme.breakpoints.down('md')]: {
        "& .MuiStepLabel-iconContainer": { transform: "scale(0.8)" },
    },
    [theme.breakpoints.down('sm')]: {
        "& .MuiStepLabel-iconContainer": { transform: "scale(0.8)" },
    },
}

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


const ExpStepper = ({ steps }) => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label} >
                            <StepLabel >
                                <Typography gutterBottom variant="h5" component="div" align="left" sx={{ fontWeight: 'bold'}}>{step.label}</Typography>
                            </StepLabel>
                            <StepContent>
                                <Box sx={{ mb: 0 }}>
                                    <div>
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 0.3, mr: 0.3 }}
                                        >
                                            <Typography gutterBottom variant="h5" component="div" align="left">{index === steps.length - 1 ? 'Finish' : 'Next'}</Typography>
                                        </Button>
                                        <Button
                                            variant="back"
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 0.3, mr: 0.3 }}
                                        >
                                            <Typography gutterBottom variant="h5" component="div" align="left">Back</Typography>
                                        </Button>
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 0.6 }}>
                        <Typography gutterBottom variant="h5" component="div" align="left">Wanna try again!</Typography>
                        <Button variant="reset" onClick={handleReset} sx={{ mt: 0.3, mr: 0.3 }}>
                            <Typography gutterBottom variant="h5" component="div" align="left">Reset</Typography>
                        </Button>
                    </Paper>
                )}
            </Box>
        </ThemeProvider>
    )
}

export default ExpStepper