import * as React from 'react';
import {
    BoxStyle,
    Container,
    FlexMarginBottom,
    Flex,
    BoxText,
    AlignCenter, StyledInput, SubText, FlexEnd, SwitchStyle, FormControlLabelBox,
    StyledTextarea, NumberText, StyledInput3, InputBox, ImageBox, ContainerIn, ButtonStyle, ControlButton, ActionBox
} from "./styles/ProductStyle";
import {ReactComponent as AveragePriceIcon} from "../../common/images/AveragePriceIcon.svg";
import {ReactComponent as AddImagePlusIcon} from "../../common/images/AddImagePlusIcon.svg";
import {InputAdornment, Typography} from "@mui/material";

function AddANewPointProduct(props) {
    const {handleCloseDialog} = props;
    const [value, setValue] = React.useState(false);

    const handleChangeSwitch = (event) => {
        setValue((prev) => !prev);
    };

    return (
        <Container>
            <ContainerIn>
                <BoxStyle>
                    <FlexMarginBottom>
                        <BoxText>Display<br/>Product Name</BoxText>
                        <div>
                            <AlignCenter>
                                <StyledInput
                                    label=""
                                    variant="outlined"
                                    fullWidth
                                    placeholder="Enter max 50 characters"
                                />
                                {/*<ButtonStyle disableRipple>Duplicate Check</ButtonStyle>*/}
                            </AlignCenter>
                            <FlexEnd>
                                <NumberText>
                                    0 / 50
                                </NumberText>
                            </FlexEnd>

                            <SubText>
                                * Enter max 50 characters using English letters, numbers, Special<br/>
                                &nbsp;&nbsp;&nbsp;characters, and spaces. (case sensitivity)<br/>
                                <span>
                                * Product name information exposed to users. You must enter a<br/>
                                    &nbsp;&nbsp;&nbsp;name intended for actual sales.
                            </span>
                            </SubText>
                        </div>
                    </FlexMarginBottom>

                    <FlexMarginBottom>
                        <BoxText>Admin<br/>Product Name</BoxText>
                        <div>
                            <AlignCenter>
                                <StyledInput
                                    label=""
                                    variant="outlined"
                                    fullWidth
                                    placeholder="Enter max 50 characters"
                                />
                            </AlignCenter>
                            <FlexEnd>
                                <NumberText>
                                    0 / 50
                                </NumberText>
                            </FlexEnd>

                            <SubText>
                                * Enter max 50 characters using English letters, numbers, special<br/>
                                &nbsp;&nbsp;&nbsp;characters, and spaces. (case sensitivity)<br/>
                                * This is the administrative product name for internal<br/>
                                &nbsp;&nbsp;&nbsp;management. This information is not exposed to the outside<br/>
                                world and is only displayed on the administrator page.
                            </SubText>
                        </div>
                    </FlexMarginBottom>

                    <FlexMarginBottom>
                        <BoxText>Product Price</BoxText>
                        <div>
                            <AlignCenter>
                                <StyledInput3
                                    type='number'
                                    label=""
                                    variant="outlined"
                                    fullWidth
                                    placeholder="Enter only numbers"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Typography>﹩</Typography>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <AveragePriceIcon style={{marginLeft: 8}}/>
                            </AlignCenter>
                        </div>
                    </FlexMarginBottom>

                    <FlexMarginBottom>
                        <BoxText>Product Image</BoxText>
                        <div>
                            <InputBox
                                accept=".jpg, .gif, .bmp, .png"
                                id="contained-button-file"
                                multiple
                                type="file"
                            />

                            <label htmlFor="contained-button-file">
                                <ImageBox>
                                    <AddImagePlusIcon/>
                                </ImageBox>
                            </label>
                            <SubText>
                                * Make sure your image size is a minimum of 640 pixels wide.<br/>
                                &nbsp;&nbsp;&nbsp;(an aspect ratio of 1:1).<br/>
                                * Formats is JPG, GIF, BMP, or PNG.<br/>
                                * Thumbnail size must be under the 2MB limit.
                            </SubText>
                        </div>
                    </FlexMarginBottom>

                    <FlexMarginBottom>
                        <BoxText>Display</BoxText>
                        <div>
                            <FormControlLabelBox
                                control={<SwitchStyle checked={value} onChange={handleChangeSwitch} sx={{ m: 1 }} disableRipple/>}
                                label={value ? 'Yes':'No'}
                            />
                            <SubText>
                                * This product is only exposed to administrators.
                            </SubText>
                        </div>
                    </FlexMarginBottom>

                    <Flex>
                        <BoxText>Notes</BoxText>
                        <div>
                            <div>
                                <StyledTextarea
                                    minRows={3}
                                    maxRows={3}
                                    placeholder="There are no notes."
                                />
                                <FlexEnd>
                                    <NumberText>
                                        0 / 5,000
                                    </NumberText>
                                </FlexEnd>
                            </div>
                            <SubText>
                                * This memo is only visible to administrators to manage channel<br/>
                                &nbsp;&nbsp;&nbsp;product history.
                            </SubText>
                        </div>
                    </Flex>
                </BoxStyle>
            </ContainerIn>

            <ActionBox>
                <ButtonStyle onClick={handleCloseDialog} disableRipple>
                    Cancel
                </ButtonStyle>

                <ControlButton disableRipple>
                    Add a New Point Product
                </ControlButton>
            </ActionBox>

        </Container>
    );
}

export default AddANewPointProduct;