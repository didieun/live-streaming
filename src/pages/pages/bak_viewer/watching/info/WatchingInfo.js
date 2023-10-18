import React from 'react';
import {
    AlignCenter,
    Container,
    ContainerIn,
    JustifyColumn,
    TimeText,
    LiveBox,
    DotStyle, IconColorSize, AlignStart, ViewersText, ShareButton, MarginLeft, TextStyle, LeftBox, TagBox, TagBoxIn
} from "./styles/WatchingInfoStyle";
import {ReactComponent as LiveIcon} from "../../../common/images/LiveIcon.svg";
import {ReactComponent as ViewersUserIcon} from "../../../common/images/ViewersUserIcon.svg";
import {ReactComponent as ShareIcon} from "../../../common/images/ShareIcon.svg";
import {Typography} from "@mui/material";

function WatchingInfo(props) {
    const tagList =
        [
            {tag: 'tag1'},
            {tag: 'tag2'},
            {tag: 'tag3'},
        ]

    return (
        <Container>
            <ContainerIn>
                <LeftBox>
                    <TagBox>
                        {tagList.map((tag, i) => (
                            <TagBoxIn key={i}>
                                <Typography>#{tag.tag}</Typography>
                            </TagBoxIn>
                        ))}
                    </TagBox>
                    <TextStyle>
                        OF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI UBG MOBILE LIVEOF SOLO VS SQUAD | BGMI
                    </TextStyle>
                </LeftBox>

                <AlignStart>
                    <JustifyColumn>
                        <TimeText>0:00:10</TimeText>
                        <LiveBox>
                            <LiveIcon/>
                            <Typography>LIVE</Typography>
                        </LiveBox>
                    </JustifyColumn>

                    <MarginLeft>
                        <AlignCenter>
                            <DotStyle/>
                            <IconColorSize>
                                <ViewersUserIcon/>
                            </IconColorSize>
                            <ViewersText><span>5.5K</span> views</ViewersText>
                        </AlignCenter>

                        <ShareButton disableRipple>
                            <ShareIcon/>
                            <Typography>Share</Typography>
                        </ShareButton>
                    </MarginLeft>
                </AlignStart>
            </ContainerIn>
        </Container>
    );
}

export default WatchingInfo;