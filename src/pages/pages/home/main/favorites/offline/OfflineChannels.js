import React, {Component} from 'react';
import {
    AlignCenter, ButtonOnStyle, ButtonStyle,
    ChannelBox,
    Container,
    InfoBox,
    TagBox,
    TextStyle,
    TitleText,
    VideoBox,
    ViewersBox,
    LiveBox
} from "./styles/OfflineChannelsStyle";
import {Typography} from "@mui/material";
import {ReactComponent as HeartIcon} from "../../../../common/images/HeartIcon.svg";
import {ReactComponent as ViewersUserIcon} from "../../../../common/images/ViewersUserIcon.svg";
import {ReactComponent as LiveIcon} from "../../../../common/images/LiveIcon.svg";
import TestVideoImage from "../../../../common/images/TestVideoImage.jpg";

function OfflineChannels(props) {
    const [favoriteButton, setFavoriteButton] = React.useState(false);
    const videoList= [
        {
            value: 0,
            channel: 'MBC',
            number: '500',
            image: TestVideoImage,
            live: false,
            tagList: [
                {tag: 'tag123'},
                {tag: 'tag123'},
                {tag: 'tag123'},
            ]
        },
        {
            value:1,
            channel: 'MBC',
            number: '500',
            image: null,
            live: true,
            tagList: [
                {tag: 'tag123'},
                {tag: 'tag123'},
                {tag: 'tag123'},
            ]
        },
        {
            value: 2,
            channel: 'MBC',
            number: '500',
            image: null,
            live: false,
            tagList: [
                {tag: 'tag123'},
                {tag: 'tag123'},
                {tag: 'tag123'},
            ]
        },
        {
            value: 3,
            channel: 'MBC',
            number: '500',
            image: null,
            live: false,
            tagList: [
                {tag: 'tag123'},
                {tag: 'tag123'},
                {tag: 'tag123'},
            ]
        },
        {
            channel: 'MBC',
            number: '500',
            image: null,
            live: false,
            tagList: [
                {tag: 'tag123'},
                {tag: 'tag123'},
                {tag: 'tag123'},
            ]
        },
        {
            channel: 'MBC',
            number: '500',
            image: null,
            live: false,
            tagList: [
                {tag: 'tag123'},
                {tag: 'tag123'},
                {tag: 'tag123'},
            ]
        },
        {
            channel: 'MBC',
            number: '500',
            image: null,
            live: false,
            tagList: [
                {tag: 'tag123'},
                {tag: 'tag123'},
                {tag: 'tag123'},
            ]
        },
        {
            channel: 'MBC',
            number: '500',
            image: null,
            live: false,
            tagList: [
                {tag: 'tag123'},
                {tag: 'tag123'},
                {tag: 'tag123'},
            ]
        },
        {
            channel: 'MBC',
            number: '500',
            image: null,
            live: false,
            tagList: [
                {tag: 'tag123'},
                {tag: 'tag123'},
                {tag: 'tag123'},
            ]
        },
        {
            channel: 'MBC',
            number: '500',
            image: null,
            live: false,
            tagList: [
                {tag: 'tag123'},
                {tag: 'tag123'},
                {tag: 'tag123'},
            ]
        },
        {
            channel: 'MBC',
            number: '500',
            image: null,
            live: false,
            tagList: [
                {tag: 'tag123'},
                {tag: 'tag123'},
                {tag: 'tag123'},
            ]
        },
    ]

    const handleClickFollow = () => {
        setFavoriteButton(!favoriteButton);
    };


    return (
        <Container>
            {videoList.map((list, i) => (
                <ChannelBox key={i}>
                    <VideoBox>
                        {list.live &&
                            <LiveBox>
                                <LiveIcon/>
                                <Typography>LIVE</Typography>
                            </LiveBox>
                        }

                        {list.image === null ?
                            null
                            :
                            <img src={list.image} alt='image'/>
                        }
                    </VideoBox>
                    <InfoBox>
                        <TitleText>{list.channel}</TitleText>
                        <AlignCenter>
                            {list.tagList.map((tag, i) => (
                                <TagBox key={i} disableRipple>
                                    <Typography>#{tag.tag}</Typography>
                                </TagBox>
                            ))}
                        </AlignCenter>
                        <ViewersBox>
                            <ViewersUserIcon/>
                            <TextStyle><span>{list.number}</span> viewers</TextStyle>
                        </ViewersBox>
                        {favoriteButton ?
                            <ButtonOnStyle onClick={handleClickFollow} disableRipple>
                                <HeartIcon/>
                                <Typography>Followed</Typography>
                            </ButtonOnStyle>
                            :
                            <ButtonStyle onClick={handleClickFollow} disableRipple>
                                <HeartIcon/>
                                <Typography>Favorite</Typography>
                            </ButtonStyle>
                        }

                    </InfoBox>
                </ChannelBox>
            ))}
        </Container>
    );
}

export default OfflineChannels;