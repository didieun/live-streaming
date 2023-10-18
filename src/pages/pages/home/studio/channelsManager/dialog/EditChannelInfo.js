import React from 'react';
import {
    AlignCenter,
    EditContainer,
    Flex,
    TitleText,
    StyledTextarea,
    JustifyEnd,
    NumberText,
    SubText,
    FormControlBox,
    ImageBox,
    FlexMarginTop,
    ImageText,
    NoImageBox,
    TextStyle,
    FlexMarginBottom,
    SubTextMargin, InputBox, TagBox, ButtonIcon, TagsBox, AddTagButton,
} from './styles/EditChannelInfoStyle'
import {FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import {ReactComponent as UnRadioIcon} from "../../../../common/images/UnRadioIcon.svg";
import {ReactComponent as RadioIcon} from "../../../../common/images/RadioIcon.svg";
import {ReactComponent as TagCloseIcon} from "../../../../common/images/TagCloseIcon.svg";
import {ReactComponent as PreviewImageIcon} from "../../../../common/images/PreviewImageIcon.svg";
import TestVideoImage from "../../../../common/images/TestVideoImage.jpg";
import TagsSearch from "./TagsSearch";

function EditChannelInfo(props) {

    return (
        <EditContainer>
            <FlexMarginBottom>
                <TitleText>Title</TitleText>
                <div>
                    <TextStyle>abc-12345678</TextStyle>
                </div>
            </FlexMarginBottom>

            <Flex>
                <TitleText>Description</TitleText>
                <div>
                    <StyledTextarea
                        minRows={8}
                        maxRows={8}
                        placeholder="This is the content of the channel."
                    />
                    <JustifyEnd>
                        <NumberText>0 / 5,000</NumberText>
                    </JustifyEnd>
                </div>
            </Flex>

            <Flex>
                <TitleText>Tags</TitleText>
                <div>
                    <AlignCenter>
                        <div>
                            <TagsSearch width={411}/>

                            <JustifyEnd>
                                <NumberText>0 / 25</NumberText>
                            </JustifyEnd>
                        </div>
                        <AddTagButton disableRipple>
                            Add Tag
                        </AddTagButton>
                    </AlignCenter>

                    <TagsBox>
                        <TagBox>
                            <Typography>game</Typography>
                            <ButtonIcon disableRipple>
                                <TagCloseIcon/>
                            </ButtonIcon>
                        </TagBox>
                    </TagsBox>
                </div>
            </Flex>
            <SubText>
                * Add up to 3 tags. Each tag can be 25 characters long with no spaces or &nbsp;&nbsp;&nbsp;numbers.
            </SubText>

            <AlignCenter>
                <TitleText>Appear in<br/> search results</TitleText>
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
                * Choose whether to show search results.
            </SubText>

            <FlexMarginTop>
                <TitleText>Banner Image</TitleText>
                <InputBox
                    accept=".jpg, .gif, .bmp, .png"
                    id="contained-button-file"
                    multiple
                    type="file"
                />

                {/*<NoImageBox>*/}
                {/*    <PreviewImageIcon/>*/}
                {/*    <ImageText>*/}
                {/*        The stream preview image is<br/>*/}
                {/*        When the live show starts<br/>*/}
                {/*        It is automatically<br/>*/}
                {/*        extracted and exposed.*/}
                {/*    </ImageText>*/}
                {/*</NoImageBox>*/}

                {/*이미지 있는 경우*/}
                <label htmlFor="contained-button-file">
                    <ImageBox>
                        <img src={TestVideoImage} alt='image'/>
                    </ImageBox>
                </label>
            </FlexMarginTop>
            <SubTextMargin>
                * Make sure your image size is a minimum of 640 pixels wide.<br/>
                &nbsp;&nbsp;(an aspect ratio of 16:9).<br/>
            </SubTextMargin>
            <SubTextMargin>
                * Formats is JPG, GIF, BMP, or PNG.
            </SubTextMargin>
            <SubTextMargin>
                * Thumbnail size must be under the 2MB limit.
            </SubTextMargin>
        </EditContainer>
    );
}

export default EditChannelInfo;