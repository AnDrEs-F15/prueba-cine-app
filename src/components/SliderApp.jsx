import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardMovie from './CardMovie';
import { Box } from '@mui/material';


const SliderApp = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <>
            <Box width={"80%"} margin={"auto"} > 
                <div className="slider-container">
                    <Slider {...settings}>
                        <CardMovie />
                        <CardMovie />
                        <CardMovie />
                        <CardMovie />
                        <CardMovie />
                        <CardMovie />
                        <CardMovie />
                    </Slider>
                </div>F
            </Box>
        </>
    )
}

export default SliderApp
