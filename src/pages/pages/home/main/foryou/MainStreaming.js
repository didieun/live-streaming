import React, {Component} from 'react';
import {
    Container,
    SliderBox,
    SliderBoxIn,
    VideoBox,
    LiveBox,
    ViewersBox,
    TitleText, TextStyle, InfoBox, AvatarBox, InfoText
} from "./styles/MainStreamingStyle";
import {Typography} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ReactComponent as LiveIcon} from "../../../common/images/LiveIcon.svg";
import {ReactComponent as ViewersUserIcon} from "../../../common/images/ViewersUserIcon.svg";
import {ReactComponent as SliderArrowIcon} from "../../../common/images/SliderArrowIcon.svg";
import TestVideoImage from "../../../common/images/TestVideoImage.jpg";
import TestProfileImage from "../../../common/images/TestProfileImage.jpeg";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style}}
            onClick={onClick}
        >
            <SliderArrowIcon style={{transform: 'scaleX(-1)'}}/>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style}}
            onClick={onClick}
        >
            <SliderArrowIcon/>
        </div>
    );
}

class MainStreaming extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoList:[
                {
                    title: 'DROPS GAMING! CORRUPTEDS/MISTS DROPS GAMING! CORRUPTEDS/MISTS DROPS GAMING! CORRUPTEDS/MISTS',
                    nickname: 'cheomyeom12',
                    image: TestVideoImage,
                },
                {
                    title: 'DROPS GAMING! ',
                    nickname: 'cheomyeom12',
                    image: null,
                },
                {
                    title: 'DROPS GAMING! CORRUPTEDS/MISTS',
                    nickname: 'cheomyeom12',
                    image: null,
                },
                {
                    title: 'DROPS GAMING! ',
                    nickname: 'cheomyeom12',
                    image: null,
                },
                {
                    title: 'DROPS GAMING! CORRUPTEDS/MISTS',
                    nickname: 'cheomyeom12',
                    image: null,
                },
            ],
        };
    }

    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 2100,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 1380,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
            ]
        };

        return (
            <Container>
                <SliderBox {...settings}>
                    {this.state.videoList.map((list, i) => (
                        <SliderBoxIn key={i}>
                            <VideoBox>
                                <LiveBox>
                                    <LiveIcon/>
                                    <Typography>LIVE</Typography>
                                </LiveBox>
                                {list.image === null ?
                                    null
                                    :
                                    <img src={list.image} alt='image'/>
                                }

                                <ViewersBox>
                                    <ViewersUserIcon/>
                                    <Typography>1,234</Typography>
                                </ViewersBox>
                            </VideoBox>
                            <InfoBox>
                                <AvatarBox>
                                    <img src={TestProfileImage} alt='image'/>

                                    {/* 프로필 없을경우 */}
                                    {/*<ProfileUserIcon />*/}
                                </AvatarBox>
                                <InfoText>
                                    <TitleText>{list.title}</TitleText>
                                    <TextStyle>{list.nickname}</TextStyle>
                                </InfoText>
                            </InfoBox>
                        </SliderBoxIn>
                    ))}
                </SliderBox>
            </Container>
        );
    }
}

export default MainStreaming;