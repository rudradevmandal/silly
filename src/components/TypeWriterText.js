import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from './Button';

const Title = styled.h2`
font-size: ${(props) => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${(props) => props.theme.text};
align-self: flex-start;
position: relative;

span {
    text-transform: capitalize;
    font-family: Poppins;
}
.text-1{
    color: ${(props) => props.theme.logoColor};
}
.text-2{
    color: ${(props) => props.theme.myBlue};
}
.text-3{
    color: ${(props) => props.theme.myGreen};
}

@media (max-width: 70em) {
    width: 90%;
font-size: ${(props) => props.theme.fontxl};
}
@media (max-width: 48em) {
font-size: ${(props) => props.theme.fontlg};
align-self: center;
text-align: center;
}
@media (max-width: 40em) {
    width: 90%;
}
`;

const SubTitle = styled.h3`
font-size:  ${(props) => props.theme.fontlg};
text-transform: capitalize;
color:  ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight: 600;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;
position: relative;

@media (max-width: 40em) {
font-size: ${(props) => props.theme.fontmd};
}
@media (max-width: 48em) {
    width: 93%;
align-self: center;
text-align: center;
}
`;


const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;
position: relative;

@media (max-width: 70em) {
    width: 90%;
}
@media (max-width: 48em) {
align-self: center;
text-align: center;
}
button{
    margin: 0 auto;
}
`;

const TypeWriterText = () => {
    return (
        <>
            <Title>
                Learning
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString(`<span class="text-1">Exemplified.</span>`)
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString(`<span class="text-2">Visualized.</span>`)
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString(`<span class="text-3">in a new way.</span>`)
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                    }}
                />
            </Title>
            <SubTitle><br></br>Dive into the wonderland of <br></br>curated examples.</SubTitle>
            <ButtonContainer>
                <Link to="/lessons"><Button text="Explore" /></Link>
            </ButtonContainer>

        </>

    );
};

export default TypeWriterText