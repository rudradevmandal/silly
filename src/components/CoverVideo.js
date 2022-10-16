import React from "react";
import styled from 'styled-components'
import animationData from "../assets/LottieJson/cover.json";
import LottieAnimation from "../lottieScripts/LottieAnimation";


const VideoContainer = styled.div`
width: 80%;

@media (max-width: 64em) {
  min-width: 27vh;
}
@media (max-width: 48em) {
  min-width: 24vh;
}
@media (max-width: 40em) {
  min-width: 18vh;
}
`

const CoverVideo = () => {
  return (
    <VideoContainer>
        <LottieAnimation animationData={animationData} id="cover"></LottieAnimation>
    </VideoContainer>
    
   
  )
}

export default CoverVideo
  