import React from 'react';
import {
    ButtonOnStyle, ButtonStyle,
    ChannelBox,
    Container,
    InfoBox,
    TagBox,
    TextStyle,
    TitleText,
    VideoBox,
    ViewersBox,
    LiveBox, TitleTextBox, SliderBox, SliderBoxIn, ScrollBox, TagMargin
} from "./styles/MobileChannelsStyle";
import {Typography} from "@mui/material";
import {ReactComponent as HeartIcon} from "../../../../common/images/HeartIcon.svg";
import {ReactComponent as ViewersUserIcon} from "../../../../common/images/ViewersUserIcon.svg";
import {ReactComponent as LiveIcon} from "../../../../common/images/LiveIcon.svg";
import TestVideoImage from "../../../../common/images/TestVideoImage.jpg";

function MobileChannels(props) {
    const [followButton, setFollowButton] = React.useState(false);
    const videoList = [
        {
            value: 0,
            channel: 'MBCMBCMBCMBCMBCMBCMBCMBCMBCMBCMBCMBCMBCMBCMBCMBCMBCMBC',
            number: '500',
            image: TestVideoImage,
            live: false,
            tagList: [
                {tag: 'tag123'},
                {tag: 'tag123'},
                {tag: 'tag123tag123tag123tag123tag123'},
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
    ];

    const handleClickFollow = () => {
        setFollowButton(!followButton);
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
                        <TitleTextBox>
                            <TitleText noWrap>{list.channel}</TitleText>
                        </TitleTextBox>

                        <ScrollBox>
                            <SliderBox>
                                <SliderBoxIn>
                                    {list.tagList.map((tag, i) => (
                                        <TagMargin key={i}>
                                            <TagBox disableRipple>
                                                <Typography>#{tag.tag}</Typography>
                                            </TagBox>
                                        </TagMargin>
                                    ))}
                                </SliderBoxIn>
                            </SliderBox>
                        </ScrollBox>

                        <ViewersBox>
                            <ViewersUserIcon/>
                            <TextStyle><span>{list.number}</span> viewers</TextStyle>
                        </ViewersBox>
                        {followButton ?
                            <ButtonOnStyle onClick={handleClickFollow} disableRipple>
                                <HeartIcon/>
                                <Typography>Favorite</Typography>
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

export default MobileChannels;