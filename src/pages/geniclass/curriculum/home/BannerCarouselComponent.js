import React from 'react';
import styled from '@emotion/styled/macro';
import {Box } from '@mui/material';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {CarouselProvider, DotGroup, Slide, Slider} from 'pure-react-carousel';
import HomeBannerImg1 from '../../../../assets/newImages/HomeBannerImg1.jpg';
import HomeBannerImg2 from '../../../../assets/newImages/HomeBannerImg2.jpg';

const Root = styled(Box)(({ theme }) => ({
    position:'relative',
    width: '100%',
    marginTop:30,
    boxSizing: 'border-box',
    '& img':{
        display:'flex',
        margin:'0 auto',
    },
    '& .carousel__inner-slide img':{
        width:'100%',
        objectFit:'cover',
    },
}));

const DotGroupStyle = styled(DotGroup)(({ theme }) => ({
    position:'absolute',
    left:'50%',
    bottom:30,
    display: 'flex',
    justifyContent: 'center',
    gap:4,
    '&>button': {
        backgroundColor: '#C5C6D0',
        width: 8,
        height: 8,
        border:'0 none',
        borderRadius: 8,
        padding: 0,
    },
    '&>button.carousel__dot--selected': {
        backgroundColor: '#F2C336'
    },
}));

function BannerCarouselComponent(props) {
    return (
        <Root>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={20}
                totalSlides={2}
            >
                <Slider>
                    <Slide index={0}><img src={HomeBannerImg2} alt={"banner1"}/></Slide>
                    <Slide index={1}><img src={HomeBannerImg1} alt={"banner1"}/></Slide>
                </Slider>
                <DotGroupStyle />
            </CarouselProvider>
        </Root>
    );
}

export default BannerCarouselComponent;
