import React from 'react'
import lottie from "lottie-web";


const LottieAnimation = ({animationData, id, speed=1}) => {
    React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#"+id),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    }).setSpeed(speed);
  }, );
  return (
        <div id={id}></div>
  )
}

export default LottieAnimation