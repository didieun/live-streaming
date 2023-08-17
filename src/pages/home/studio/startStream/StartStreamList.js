import React from 'react';
import {
    StartStreamContainer,
    AlignCenter, ButtonStyle,
    ChannelBox,
    InfoBox,
    LiveBox,
    TagBox, TextStyle,
    TitleText,
    VideoBox, ViewersBox, RedButtonStyle,
    PopoverBox, JustifySpace, ButtonIcon
} from "./styles/StartStreamStyle"
import TestVideoImage from "../../../common/images/TestVideoImage.jpg";
import {List, ListItem, Typography} from "@mui/material";
import {ReactComponent as LiveIcon} from "../../../common/images/LiveIcon.svg";
import {ReactComponent as ViewersUserIcon} from "../../../common/images/ViewersUserIcon.svg";
import {ReactComponent as LinkExternalIcon} from "../../../common/images/LinkExternalIcon.svg";
import {ReactComponent as ListEditIcon} from "../../../common/images/ListEditIcon.svg";

function StartStream(props) {
    const { handleClickEditStreamInfoDialog, handleClickEditPopoverOpen, handleCloseEditPopover, editOpen, editId, editAnchorEl } = props;

    const videoList =
        [
            {
                value: 0,
                channel: 'eSports TV',
                number: '100',
                image: TestVideoImage,
                live: true,
                tagList: [
                    {tag: 'tag123'},
                    {tag: 'tag123'},
                    {tag: 'tag123'},
                ]
            },
            {
                value: 0,
                channel: 'Channel Title',
                number: '5.5',
                image: null,
                live: false,
                tagList: [
                    {tag: 'tag123'},
                    {tag: 'tag123'},
                    {tag: 'tag123'},
                ]
            },
            {
                value: 0,
                channel: 'Channel Title',
                number: '5.5',
                image: null,
                live: false,
                tagList: [
                    {tag: 'tag123'},
                    {tag: 'tag123'},
                    {tag: 'tag123'},
                ]
            },
            {
                value: 0,
                channel: 'Channel Title',
                number: '5.5',
                image: null,
                live: false,
                tagList: [
                    {tag: 'tag123'},
                    {tag: 'tag123'},
                    {tag: 'tag123'},
                ]
            },
        ]

    return (
        <StartStreamContainer>
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


                        <JustifySpace>
                            <ViewersBox>
                                <ViewersUserIcon/>
                                <TextStyle><span>{list.number}K</span> viewers</TextStyle>
                            </ViewersBox>

                            <ButtonIcon aria-describedby={editId} onClick={handleClickEditPopoverOpen} disableRipple>
                                <ListEditIcon/>
                            </ButtonIcon>
                        </JustifySpace>

                        <PopoverBox
                            id="simple-popper"
                            open={Boolean(editOpen)}
                            anchorEl={editAnchorEl}
                            onClose={handleCloseEditPopover}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right'
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                        >
                            <List>
                                <ListItem onClick={handleCloseEditPopover}>Edit Channel Info</ListItem>
                                <ListItem onClick={handleClickEditStreamInfoDialog}>Edit Stream Info</ListItem>
                            </List>
                        </PopoverBox>

                        {list.live ?
                            <RedButtonStyle disableRipple>
                                <LinkExternalIcon/>
                                <Typography>Live Streaming</Typography>
                            </RedButtonStyle>
                            :
                            <ButtonStyle disabled={true} disableRipple>
                                <LinkExternalIcon/>
                                <Typography>Go Live</Typography>
                            </ButtonStyle>
                        }
                    </InfoBox>
                </ChannelBox>
            ))}


        </StartStreamContainer>
    );
}

export default StartStream;