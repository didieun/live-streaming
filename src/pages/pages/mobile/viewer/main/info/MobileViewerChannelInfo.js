import React from 'react';
import {
    ButtonStyle,
    ContentsBox, FlexColumn,
    TopBox, ButtonIcon, TextStyle, TitleText, MarginBottom, TagBox, TagsBox, FormControlBox, ImageText, NoImageBox,
    ImageBox,
} from "./styles/MobileViewerChannelInfoStyle";
import {Dialog, FormControlLabel, Radio, RadioGroup, Slide, Typography} from "@mui/material";
import {ReactComponent as MobileCloseIcon} from "../../../../common/images/MobileCloseIcon.svg";
import {ReactComponent as StreamingUnRadioIcon} from "../../../../common/images/StreamingUnRadioIcon.svg";
import {ReactComponent as RadioIcon} from "../../../../common/images/RadioIcon.svg";
import {ReactComponent as PreviewImageIcon} from "../../../../common/images/PreviewImageIcon.svg";
import TestVideoImage from "../../../../common/images/TestVideoImage.jpg";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function MobileViewerChannelInfo(props) {
    const { open, handleClose } = props;

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <TopBox>
                <ButtonIcon onClick={handleClose} disableRipple>
                    <MobileCloseIcon/>
                </ButtonIcon>
                <Typography>Channel Info</Typography>
            </TopBox>

            <FlexColumn>
                <ContentsBox>
                    <MarginBottom>
                        <TitleText>Title</TitleText>
                        <TextStyle>
                            abc-12345678
                        </TextStyle>
                    </MarginBottom>

                    <MarginBottom>
                        <TitleText>Description</TitleText>
                        <TextStyle>
                            This is the content of the stream.
                            This is the content of the stream.
                            This is the content of the stream.
                            This is the content of the stream.
                            This is the content of the stream.
                            This is the content of the stream.
                            This is the content of the stream.
                            This is the content of the stream.
                            This is the content of the stream.
                            This is the content of the stream.
                            This is the content of the stream.
                        </TextStyle>
                    </MarginBottom>

                    <MarginBottom>
                        <TitleText>Tags</TitleText>
                        <TagsBox>
                            <TagBox>
                                <Typography>game</Typography>
                            </TagBox>
                        </TagsBox>
                    </MarginBottom>

                    <MarginBottom>
                        <TitleText>Appear in search results</TitleText>
                        <FormControlBox>
                            <RadioGroup
                                row
                                defaultValue="yes"
                            >
                                <FormControlLabel
                                    value="yes"
                                    control={<Radio  icon={<StreamingUnRadioIcon />} checkedIcon={<RadioIcon />} disableRipple/>}
                                    label="Yes"
                                />
                                <FormControlLabel
                                    value="no"
                                    control={<Radio  icon={<StreamingUnRadioIcon />} checkedIcon={<RadioIcon />} disableRipple/>}
                                    label="No"
                                />
                            </RadioGroup>
                        </FormControlBox>
                    </MarginBottom>

                    <TitleText>Banner Image</TitleText>

                    <NoImageBox>
                        <PreviewImageIcon/>
                        <ImageText>
                            The stream preview image is<br/>
                            When the live show starts<br/>
                            It is automatically<br/>
                            extracted and exposed.
                        </ImageText>
                    </NoImageBox>


                    {/*이미지 있는 경우*/}
                    {/*<ImageBox>*/}
                    {/*    <img src={TestVideoImage} alt='image'/>*/}
                    {/*</ImageBox>*/}
                </ContentsBox>


                <ButtonStyle onClick={handleClose} disableRipple>
                    OK
                </ButtonStyle>

            </FlexColumn>


        </Dialog>
    );
}

export default MobileViewerChannelInfo;
