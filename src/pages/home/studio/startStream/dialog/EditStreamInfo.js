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
    JustifyEnd
} from './styles/EditStreamInfoStyle'
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {ReactComponent as UnRadioIcon} from "../../../../common/images/UnRadioIcon.svg";
import {ReactComponent as RadioIcon} from "../../../../common/images/RadioIcon.svg";
import {ReactComponent as PreviewImageIcon} from "../../../../common/images/PreviewImageIcon.svg";
import TestVideoImage from "../../../../common/images/TestVideoImage.jpg";

function EditStreamInfo(props) {

    return (
        <EditContainer>
            <Flex>
                <TitleText>Title</TitleText>
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
                    {/*    <ErrorText>Please enter a title.</ErrorText>*/}
                    {/*    <NumberText>0 / 140</NumberText>*/}
                    {/*</JustifySpace>*/}
                </div>

            </Flex>

            <Flex>
                <TitleText>Description</TitleText>
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
            </Flex>

            <Flex>
                <TitleText>Live notification</TitleText>
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
            </Flex>
            <SubText>
                * If you do not enter anything in the Go Live Notification field, a default text will <br/>
                &nbsp;&nbsp;&nbsp;be sent to your views.
            </SubText>

            <AlignCenter>
                <TitleText>Log-in to watch</TitleText>
                <FormControlBox>
                    <RadioGroup
                        row
                        defaultValue="yes"
                    >
                        <FormControlLabel
                            value="yes"
                            control={<Radio  icon={<UnRadioIcon />} checkedIcon={<RadioIcon />} disableRipple/>}
                            label="Yes"
                        />
                        <FormControlLabel
                            value="no"
                            control={<Radio  icon={<UnRadioIcon />} checkedIcon={<RadioIcon />} disableRipple/>}
                            label="No"
                        />
                    </RadioGroup>
                </FormControlBox>
            </AlignCenter>
            <SubText>
                * Choose whether viewers need to log in to watch your stream.
            </SubText>

            <FlexMarginTop>
                <TitleText>Preview Image</TitleText>

                <NoImageBox>
                    <PreviewImageIcon/>
                    <ImageText>
                        The stream preview image is<br/>
                        When the live show starts<br/>
                        It is automatically<br/>
                        extracted and exposed.
                    </ImageText>
                </NoImageBox>

                {/* 이미지 있는경우 */}
                {/*<ImageBox>*/}
                {/*    <img src={TestVideoImage} alt='image'/>*/}
                {/*</ImageBox>*/}


            </FlexMarginTop>

        </EditContainer>
    );
}

export default EditStreamInfo;