import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif'
    ].join(','),
  }
});

theme.typography.h5 = {
  fontSize: '1.5em',
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.5em'
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

const EmptyContainer = styled.div`
width: 80vw;
display: flex;
margin: auto;
padding: 1.5%;
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width: 70em) {
  padding: 2%;
}
@media (max-width: 48em) {
  padding: 2.5%;
}
@media (max-width: 40em) {
  padding: 3%;
}
`

const Left = styled.div`
cursor: pointer;
display: flex;
transition: all 0.3s ease;
&:hover{
    transform: scale(1.2);
}
&:active{
    transform: scale(0.9);
}
`
const Right = styled.div`
cursor: pointer;
display: flex;
transition: all 0.3s ease;
&:hover{
    transform: scale(1.2);
}
&:active{
    transform: scale(0.9);
}
`

const Next = ({ LeftLink, LeftText, RightLink, RightText }) => {

  return (
    <ThemeProvider theme={theme}>
    <EmptyContainer>
      <Link underline='none' to={LeftLink}>
        <Left >
          <Alert icon={false} severity="info" variant="outlined">
            <Typography  variant="h5" component="div" align="center">
              {LeftText}
            </Typography>
          </Alert>
        </Left>
      </Link>
      <Link underline='none' to={RightLink}>
        <Right >
          <Alert icon={false} severity="info" variant="outlined"> 
            <Typography variant="h5" component="div" align="center">
              {RightText}
            </Typography>
          </Alert>
        </Right>
      </Link>
    </EmptyContainer>

    </ThemeProvider>
  )
}

export default Next