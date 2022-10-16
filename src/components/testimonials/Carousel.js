import React from 'react'
import styled from 'styled-components'
import Quote from '../testimonials/Quote'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";


const Container = styled.div`
width: 60vw;
height:30vh;

.swiper{
    width: 100%;
    height: 100%;

@media (max-width: 40em) {
  height:33vh;
}

}
.swiper-slide{
    background-color: ${props => props.theme.carouselColor};
    border-radius: 20px;
    display:flex;
    justify-content: center;
    align-items: center;
}
.swiper-button-next{
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;

@media (max-width: 70em) {
display: none;
}
}
.swiper-button-prev{
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;

@media (max-width: 70em) {
display: none;
}
}
`


const Carousel = () => {
  return (
    <Container>
        
      <Swiper
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        scrollbar={{
            draggable: true
        }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><Quote text={"The content that they provided helped me to teach the students difficult concepts, which usually takes a lot of time and effort, in a clear, simple and fun way! Will recommend to all!"} author={"- Sumit, Teacher"}/></SwiperSlide>
        <SwiperSlide><Quote text={"They use practical and common day to day examples to present complicated formulas and makes it easier for the students to understand."} author={"- Mehek, School Teacher"}/></SwiperSlide>
        <SwiperSlide><Quote text={"A friend of mine had suggested me to refer to this content from this website as I was finding it really hard to grasp the concepts of gravity. They really simplified the concepts and explained it in a detailed yet fun manner."} author={"- Suman, Student"}/></SwiperSlide>
        <SwiperSlide><Quote text={"Their comprehensive exercises and unique way of presenting concepts helped me to score full marks on my gravitation test."} author={"- Himanshu, Student"}/></SwiperSlide>
        <SwiperSlide><Quote text={"Great course material! Innovative way of studying. Recommend it to all."} author={"- Ved, Student"}/></SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carousel