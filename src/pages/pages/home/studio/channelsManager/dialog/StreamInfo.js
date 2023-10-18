import React from 'react';
import {
    AlignCenter,
    EditContainer,
    Flex,
    TitleText,
    FormControlBox,
    FlexMarginTop,
    ImageBox,
    ImageText,
    NoImageBox,TextStyle
} from './styles/StreamInfoStyle'
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {ReactComponent as UnRadioIcon} from "../../../../common/images/UnRadioIcon.svg";
import {ReactComponent as RadioIcon} from "../../../../common/images/RadioIcon.svg";
import {ReactComponent as PreviewImageIcon} from "../../../../common/images/PreviewImageIcon.svg";
import TestVideoImage from "../../../../common/images/TestVideoImage.jpg";

function StreamInfo(props) {

    return (
        <EditContainer>
            <Flex>
                <TitleText>Title</TitleText>
                <TextStyle>This is the stream title.</TextStyle>
            </Flex>

            <Flex>
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
            </Flex>

            <Flex>
                <TitleText>Live notification</TitleText>
                <TextStyle>nickname goes live!</TextStyle>
            </Flex>

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

                {/* 이미지 있는 경우 */}
                {/*<ImageBox>*/}
                {/*    <img src={TestVideoImage} alt='image'/>*/}
                {/*</ImageBox>*/}

            </FlexMarginTop>

        </EditContainer>
    );
}

export default StreamInfo;