import React from 'react';
import {
    AlignCenter,
    Container,
    ChannelImageBox,
    TitleText,
    ButtonLineStyle,
    FavoriteButton,
    ButtonIcon,
    TagBox, TagBoxIn, JustifySpace, AvatarBox, UserName, UserNumberBox, WidthBox, ChannelText
} from "./styles/MobileViewerLandscapeInfoStyle";
import ChannelTestImage from "../../../../../common/images/ChannelTestImage.png";
import {Typography} from "@mui/material";
import {ReactComponent as FillHeartIcon} from "../../../../../common/images/FillHeartIcon.svg";
import {ReactComponent as HeartIcon} from "../../../../../common/images/HeartIcon.svg";
import {ReactComponent as ShareIcon} from "../../../../../common/images/ShareIcon.svg";
import {ReactComponent as ViewersUserIcon} from "../../../../../common/images/ViewersUserIcon.svg";
import TestProfileImage from "../../../../../common/images/TestProfileImage.jpeg";

function MobileViewerLandscapeInfo(props) {
    const {handleClickChannelInfoOpen, handleClickShareOpen} = props;
    const [favorite, setFavorite] = React.useState(false);
    const tagList =
        [
            {tag: 'tag1'},
            {tag: 'tag2'},
            {tag: 'tag3'},
        ]

    const handleClickFavorite = () => {
        setFavorite(!favorite);
    };

    return (
        <Container>
            <JustifySpace>
                <AlignCenter>
                    <ChannelImageBox onClick={handleClickChannelInfoOpen}>
                        <img src={ChannelTestImage} alt='channel image'/>
                    </ChannelImageBox>
                    <ChannelText onClick={handleClickChannelInfoOpen}>
                        aaaa123-0aaa
                    </ChannelText>
                </AlignCenter>
                <AlignCenter>
                    <FavoriteButton onClick={handleClickFavorite} disableRipple>
                        {favorite ?
                            <FillHeartIcon/>
                            :
                            <HeartIcon/>
                        }
                        <Typography>Favorite</Typography>
                        <ButtonLineStyle/>
                        <Typography><span>14.1M</span></Typography>
                    </FavoriteButton>

                    <ButtonIcon onClick={handleClickShareOpen} disableRipple>
                        <ShareIcon/>
                    </ButtonIcon>
                </AlignCenter>
            </JustifySpace>


            <TagBox>
                {tagList.map((tag, i) => (
                    <TagBoxIn key={i}>
                        <Typography>#{tag.tag}</Typography>
                    </TagBoxIn>
                ))}
            </TagBox>

            <AlignCenter>
                <AvatarBox>
                    <img src={TestProfileImage} alt='image'/>

                    {/* 프로필 없을 경우 */}
                    {/*<ProfileUserIcon />*/}
                </AvatarBox>
                <WidthBox>
                    <UserName>kingaaa</UserName>

                    <UserNumberBox>
                        <ViewersUserIcon/>
                        <Typography>500</Typography>
                    </UserNumberBox>
                </WidthBox>
                <TitleText>
                    방송명 - OF SOLO VS SQUAD | BGMI UBG
                </TitleText>
            </AlignCenter>
        </Container>
    );
}

export default MobileViewerLandscapeInfo;