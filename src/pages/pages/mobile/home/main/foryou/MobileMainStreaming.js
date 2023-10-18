import React from 'react';
import {
    Container,
    SliderBox,
    SliderBoxIn,
    VideoBox,
    LiveBox,
    ViewersBox,
    TitleText, TextStyle, InfoBox, AvatarBox, InfoText
} from "./styles/MobileMainStreamingStyle";
import {Typography} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ReactComponent as LiveIcon} from "../../../../common/images/LiveIcon.svg";
import {ReactComponent as ViewersUserIcon} from "../../../../common/images/ViewersUserIcon.svg";
import TestVideoImage from "../../../../common/images/TestVideoImage.jpg";
import TestProfileImage from "../../../../common/images/TestProfileImage.jpeg";

function MobileMainStreaming() {
    const videoList = [
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
    ];

    const settings = {
        dots: false,
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: false,
        prevArrow: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    return (
        <Container>
            <SliderBox {...settings}>
                {videoList.map((list, i) => (
                    <SliderBoxIn key={i}>
                        <VideoBox>
                            <LiveBox>
                                <LiveIcon width='18' height='18'/>
                                <Typography>LIVE</Typography>
                            </LiveBox>
                            {list.image === null ?
                                null
                                :
                                <img src={list.image} alt='image'/>
                            }

                            <ViewersBox>
                                <ViewersUserIcon width='18' height='18'/>
                                <Typography>1,234</Typography>
                            </ViewersBox>
                        </VideoBox>
                        <InfoBox>
                            <AvatarBox>
                                <img src={TestProfileImage} alt='image'/>

                                {/* 프로필 없을 경우 */}
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

export default MobileMainStreaming;