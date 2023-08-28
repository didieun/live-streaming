import React from 'react';
import {
    AlignCenter,
    EditContainer,
    Flex,
    TitleText,
    StyledTextarea,
    NumberText,
    SubText,
    FormControlBox,
    ImageBox,
    FlexMarginTop,
    ImageText,
    NoImageBox,
    JustifySpace,
    ErrorText,
    ErrorStyledTextarea,
    JustifyEnd,
    TextStyle
} from './styles/StreamInfoStyle'
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {ReactComponent as StreamingUnRadioIcon} from "../../common/images/StreamingUnRadioIcon.svg";
import {ReactComponent as RadioIcon} from "../../common/images/RadioIcon.svg";
import {ReactComponent as PreviewImageIcon} from "../../common/images/PreviewImageIcon.svg";
import {ReactComponent as StreamingErrorIcon} from "../../common/images/StreamingErrorIcon.svg";
import TestVideoImage from "../../common/images/TestVideoImage.jpg";

function StreamInfo(props) {
    const {edit} = props;

    return (
        <EditContainer>
            <Flex edit={edit}>
                <TitleText>Title</TitleText>
                {edit ?
                    <div>
                        <StyledTextarea
                            minRows={3}
                            maxRows={3}
                            placeholder="This is the stream title."
                        />
                        <JustifyEnd>
                            <NumberText>0 / 140</NumberText>
                        </JustifyEnd>


                        {/* 미입력 시*/}
                        {/*<ErrorStyledTextarea*/}
                        {/*    minRows={3}*/}
                        {/*    maxRows={3}*/}
                        {/*    placeholder="This is the stream title."*/}
                        {/*/>*/}
                        {/*<JustifySpace>*/}
                        {/*    <AlignCenter>*/}
                        {/*        <StreamingErrorIcon/>*/}
                        {/*        <ErrorText>Please enter a title.</ErrorText>*/}
                        {/*    </AlignCenter>*/}
                        {/*    <NumberText>0 / 140</NumberText>*/}
                        {/*</JustifySpace>*/}
                    </div>
                    :
                    <div>
                        <TextStyle>This is the stream title.</TextStyle>
                    </div>
                }

            </Flex>

            <Flex edit={edit}>
                <TitleText>Description</TitleText>
                {edit ?
                    <div>
                        <StyledTextarea
                            minRows={8}
                            maxRows={8}
                            placeholder="This is the content of the stream."
                        />
                        <JustifyEnd>
                            <NumberText>0 / 5,000</NumberText>
                        </JustifyEnd>
                    </div>
                    :
                    <div>
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
                    </div>
                }
            </Flex>

            <Flex edit={edit}>
                <TitleText>Live notification</TitleText>
                {edit ?
                    <div>
                        <StyledTextarea
                            minRows={3}
                            maxRows={3}
                            placeholder="{nickname} goes live!"
                        />
                        <JustifyEnd>
                            <NumberText>0 / 140</NumberText>
                        </JustifyEnd>
                    </div>
                    :
                    <div>
                        <TextStyle>Chris goes live!</TextStyle>
                    </div>
                }
            </Flex>
            {edit &&
                <SubText>
                    * If you do not enter anything in the Go Live Notification field, a default text will <br/>
                    &nbsp;&nbsp;&nbsp;be sent to your views.
                </SubText>
            }

            <AlignCenter>
                <TitleText>Log-in to watch</TitleText>
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
            </AlignCenter>
            {edit &&
                <SubText>
                    * Choose whether viewers need to log in to watch your stream.<br/>
                    * When not logged in, viewers cannot chat and send gifts.
                </SubText>
            }

            <FlexMarginTop>
                <TitleText>Preview Image</TitleText>

                {edit ?
                    <NoImageBox>
                        <PreviewImageIcon/>
                        <ImageText>
                            The stream preview image is<br/>
                            When the live show starts<br/>
                            It is automatically<br/>
                            extracted and exposed.
                        </ImageText>
                    </NoImageBox>
                    :
                    <ImageBox>
                        <PreviewImageIcon/>
                        <ImageText>
                            The stream preview image is<br/>
                            When the live show starts<br/>
                            It is automatically<br/>
                            extracted and exposed.
                        </ImageText>
                    </ImageBox>
                }


                {/* 이미지 있는 경우 */}
                {/*<ImageBox>*/}
                {/*    <img src={TestVideoImage} alt='image'/>*/}
                {/*</ImageBox>*/}
            </FlexMarginTop>

        </EditContainer>
    );
}

export default StreamInfo;