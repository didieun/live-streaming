import React from 'react';
import {
    AlignCenter,
    ButtonIcon,
    ChannelImageBox,
    Container,
    ProfileButton,
    TitleText,
    AvatarBox, ArrowButtonIcon, FlexColumn, ButtonStyle, ButtonStyleOn, TextStyle,
} from "./styles/WatchingHeaderStyle";
import {ReactComponent as StreamingArrowIcon} from "../../../common/images/StreamingArrowIcon.svg";
import {ReactComponent as StreamingBellIcon} from "../../../common/images/StreamingBellIcon.svg";
import ChannelTestImage from "../../../common/images/ChannelTestImage.png";
import { ReactComponent as ProfileUserIcon } from "../../../common/images/ProfileUserIcon.svg";
import { ReactComponent as HeartIcon } from "../../../common/images/HeartIcon.svg";
import { ReactComponent as FillHeartIcon } from "../../../common/images/FillHeartIcon.svg";
import TestProfileImage from "../../../common/images/TestProfileImage.jpeg";

function WatchingHeader() {
    const [favorite, setFavorite] = React.useState(false);

    const handleClickFavorite = () => {
        setFavorite(!favorite);
    };

    return (
        <Container>
            <AlignCenter>
                <ChannelImageBox>
                    <img src={ChannelTestImage} alt='channel image'/>
                </ChannelImageBox>
                <FlexColumn>
                    {favorite ?
                        <ButtonStyleOn onClick={handleClickFavorite} disableRipple>Favorite</ButtonStyleOn>
                        :
                        <ButtonStyle onClick={handleClickFavorite} disableRipple>Favorite</ButtonStyle>
                    }

                    <AlignCenter>
                        {favorite ?
                            <FillHeartIcon/>
                            :
                            <HeartIcon/>
                        }
                        <TextStyle>14.1M</TextStyle>
                    </AlignCenter>
                </FlexColumn>

            </AlignCenter>

            <AlignCenter>
                <TitleText>
                    NBC Golf ChannelNBC Golf Channel NBC Golf ChannelNBC Golf Channel
                </TitleText>
                <ArrowButtonIcon disableRipple>
                    <StreamingArrowIcon />
                </ArrowButtonIcon>
            </AlignCenter>

            <AlignCenter>
                <ButtonIcon>
                    <StreamingBellIcon/>
                </ButtonIcon>

                <ProfileButton disableRipple>
                    <AvatarBox>
                        <img src={TestProfileImage} alt='image'/>

                        {/* 프로필 없을경우 */}
                        {/*<ProfileUserIcon />*/}
                    </AvatarBox>
                    <StreamingArrowIcon />
                </ProfileButton>
            </AlignCenter>
        </Container>
    );
}

export default WatchingHeader;