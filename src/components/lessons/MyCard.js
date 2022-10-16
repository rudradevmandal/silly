import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

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
        height: '6vw'
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '1em',
        height: '6vw'
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '0.875em',
        height: '8vw'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.75em',
        height: '15vw'
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: '0.6em',
        height: '15vw'
    },
};

var cardMediaStyle = {
    height: '12vw',
    [theme.breakpoints.down('lg')]: {
        height: '15vw',
    },
    [theme.breakpoints.down('md')]: {
        height: '15vw',
    },
    [theme.breakpoints.down('sm')]: {
        height: '10vw',
    }
};

const MyCard = ({ img, alt, text, link }) => {
    return (
        <ThemeProvider theme={theme}>
            <Link underline='none' to={link}>
            <Card>
                <CardActionArea >
                    <CardMedia
                        style={cardMediaStyle}
                        component="img"
                        image={img}
                        alt={alt}
                        sx={{ objectFit: "contain" }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" align="center">
                            {text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
        </ThemeProvider>
    )
}

export default MyCard