import React from 'react';
import {
    AlignCenter,
    ButtonIcon, ButtonStyle,
    ChannelImageBox,
    Container, MarginRight,
    NumberText, ProfileButton,
    TextStyle,
    TitleText,
    AvatarBox, ArrowButtonIcon,
    LogoBox
} from "./styles/StreamingHeaderStyle";
import {ReactComponent as StreamingArrowIcon} from "../../../common/images/StreamingArrowIcon.svg";
import {ReactComponent as JoinMeIcon} from "../../../common/images/JoinMeIcon.svg";
import {ReactComponent as StreamingStudioIcon} from "../../../common/images/StreamingStudioIcon.svg";
import {ReactComponent as StreamingBellIcon} from "../../../common/images/StreamingBellIcon.svg";
import ChannelTestImage from "../../../common/images/ChannelTestImage.png";
import { ReactComponent as ProfileUserIcon } from "../../../common/images/ProfileUserIcon.svg";
import {Typography} from "@mui/material";
import TestProfileImage from "../../../common/images/TestProfileImage.jpeg";

function StreamingHeader({standby, handleClickJoinMeDialogOpen}) {

    return (
        <Container>
            {standby &&
                <LogoBox>
                    <Typography>Logo Area</Typography>
                </LogoBox>
            }

            {!standby &&
                <AlignCenter>
                    <ChannelImageBox>
                        <img src={ChannelTestImage} alt='channel image'/>
                    </ChannelImageBox>
                    <AlignCenter>
                        <TitleText>
                            NBC Golf ChannelNBC Golf Channel NBC Golf ChannelNBC Golf Channel
                        </TitleText>
                        <ArrowButtonIcon disableRipple>
                            <StreamingArrowIcon />
                        </ArrowButtonIcon>
                    </AlignCenter>
                </AlignCenter>
            }


            {!standby &&
                <AlignCenter>
                    <MarginRight>
                        <TextStyle>Session</TextStyle>
                        <NumberText>0:00:00</NumberText>
                    </MarginRight>

                    <div>
                        <TextStyle>Viewers</TextStyle>
                        <NumberText>0</NumberText>
                    </div>
                </AlignCenter>
            }

            <AlignCenter>
                {!standby &&
                    <ButtonStyle onClick={handleClickJoinMeDialogOpen} disableRipple>
                        <JoinMeIcon/>
                        <Typography>Join Me</Typography>
                    </ButtonStyle>
                }
                {!standby &&
                    <ButtonStyle disableRipple>
                        <StreamingStudioIcon/>
                        <Typography>Studio</Typography>
                    </ButtonStyle>
                }

                <ButtonIcon disableRipple>
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

export default StreamingHeader;