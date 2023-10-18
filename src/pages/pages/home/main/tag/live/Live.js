import React from 'react';
import {
    Container, Flex,
    AlignCenter, ButtonOnStyle, ButtonStyle, ChannelBox,
    InfoBox,
    LiveBox,
    TagBox, TextStyle,
    TitleText,
    VideoBox,
    ViewersBox, InfoBox2, ChannelText, DotStyle, AvatarBox, TextStyle2, AvatarCenter, TextStyle3
} from "./styles/LiveStyle";
import TestVideoImage from "../../../../common/images/TestVideoImage.jpg";
import {Typography} from "@mui/material";
import {ReactComponent as HeartIcon} from "../../../../common/images/HeartIcon.svg";
import {ReactComponent as LiveIcon} from "../../../../common/images/LiveIcon.svg";
import {ReactComponent as ViewersUserIcon} from "../../../../common/images/ViewersUserIcon.svg";
import {ReactComponent as ProfileUserIcon} from "../../../../common/images/ProfileUserIcon.svg";
import TestProfileImage from "../../../../common/images/TestProfileImage.jpeg";

function Live(props) {
    const [favoriteButton, setFavoriteButton] = React.useState(false);
    const videoList= [
        {
            value: 0,
            channel: 'MBC',
            title: '{방송명 - OF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI}',
            number: '500',
            image: TestVideoImage,
            profile: TestProfileImage,
            name: 'kingaaa',
            info: '{방송 소개글 - Hey Everyone 😇 Welcome To My Chennel Do Like, Share, Comment And Subscribe To My Chennel And Enjoy Stream {방송 소개글 - Hey Everyone 😇 Welcome To My Chennel Do Like, Share, Comment And Subscribe To My Chennel And Enjoy Stream{방송 소개글 - Hey Everyone 😇 Welcome To My Chennel Do Like, Share, Comment And Subscribe To My Chennel And Enjoy Stream',
            tagList: [
                {tag: 'tag123'},
                {tag: 'tag123'},
                {tag: 'tag123'},
            ]
        },
        {
            value: 0,
            channel: 'MBC',
            title: '{방송명 - OF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI}',
            number: '500',
            image: null,
            profile: '',
            name: 'kingaaa',
            info: '{방송 소개글 - Hey Everyone 😇 Welcome To My Chennel Do Like, Share, Comment And Subscribe To My Chennel And Enjoy Stream...',
            tagList: [
                {tag: 'tag123'},
                {tag: 'tag123'},
                {tag: 'tag123'},
            ]
        },
        {
            value: 0,
            channel: 'MBC',
            title: '{방송명 - OF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI}',
            number: '500',
            image: TestVideoImage,
            profile: TestProfileImage,
            name: 'kingaaa',
            info: '{방송 소개글 - Hey Everyone 😇 Welcome To My Chennel Do Like, Share, Comment And Subscribe To My Chennel And Enjoy Stream...',
            tagList: [
                {tag: 'tag123'},
                {tag: 'tag123'},
                {tag: 'tag123'},
            ]
        },
        {
            value: 0,
            channel: 'MBC',
            title: '{방송명 - OF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI}',
            number: '500',
            image: TestVideoImage,
            profile: TestProfileImage,
            name: 'kingaaa',
            info: '{방송 소개글 - Hey Everyone 😇 Welcome To My Chennel Do Like, Share, Comment And Subscribe To My Chennel And Enjoy Stream...',
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
               <Flex key={i}>
                   <ChannelBox >
                       <VideoBox>
                           {list.image === null ?
                               null
                               :
                               <img src={list.image} alt='image'/>
                           }
                       </VideoBox>
                       <InfoBox>
                           <ChannelText>{list.channel}</ChannelText>
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

                   <InfoBox2>
                       <LiveBox>
                           <LiveIcon/>
                           <Typography>LIVE</Typography>
                       </LiveBox>
                       <TitleText>{list.title}</TitleText>
                       <ViewersBox>
                           <ViewersUserIcon/>
                           <TextStyle><span>{list.number}</span> viewers</TextStyle>
                           <DotStyle/>
                           <TextStyle>Streamed 2 minutes ago</TextStyle>
                       </ViewersBox>
                       <AvatarCenter>
                           <AvatarBox>
                               {list.profile === '' ?
                                   <ProfileUserIcon />
                                   :
                                   <img src={list.profile} alt='image'/>
                               }
                           </AvatarBox>
                           <TextStyle2>
                               {list.name}
                           </TextStyle2>
                       </AvatarCenter>
                       <TextStyle3>{list.info}</TextStyle3>
                       <AlignCenter>
                           {list.tagList.map((tag, i) => (
                               <TagBox key={i} disableRipple>
                                   <Typography>#{tag.tag}</Typography>
                               </TagBox>
                           ))}
                       </AlignCenter>
                   </InfoBox2>

               </Flex>
           ))}


        </Container>
    );
}

export default Live;