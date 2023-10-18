import * as React from 'react';
import {
    BoxStyle,
    Container,
    FlexMarginBottom,
    Flex,
    BoxText,
    StyledInput,
    SubText,
    ButtonStyle,
    FlexEnd,
    BoxText2,
    StyledTextarea,
    NumberText,
    ColumnCenter,
    ProfileBox,
    JustifySpace,
    FlexMarginTop,
    LineButtonStyle,
    InputBox,
    WarningBox,
    ContainerIn, ButtonStyle1
} from "./styles/AdministratorDialogStyle";
import {ReactComponent as ProfileUserIcon} from "../../common/images/ProfileUserIcon.svg";
import {ReactComponent as InfoIcon} from "../../common/images/InfoIcon.svg";
import TestProfileImage from "../../common/images/TestProfileImage.jpeg";
import {Typography} from "@mui/material";
import {ActionBox, ControlButton} from "./styles/ProductStyle";

function AddANewAdministrator(props) {
    const {handleCloseDialog} = props;
    return (
        <Container>
            <ContainerIn>
                <BoxStyle>
                    <Flex>
                        <ColumnCenter>
                            <ProfileBox>
                                <img src={TestProfileImage} alt='image'/>

                                {/* 프로필 없을 경우 */}
                                {/*<ProfileUserIcon />*/}
                            </ProfileBox>

                            <InputBox
                                accept=".jpg, .gif, .bmp, .png"
                                id="contained-button-file"
                                multiple
                                type="file"
                            />

                            <label htmlFor="contained-button-file">
                                <LineButtonStyle disableRipple>
                                    Edit Profile Image
                                </LineButtonStyle>
                            </label>
                        </ColumnCenter>
                        <div>
                            <FlexMarginBottom>
                                <BoxText>User Name</BoxText>
                                <div>
                                    <StyledInput
                                        // error
                                        label=""
                                        variant="outlined"
                                        fullWidth
                                        placeholder="Enter max 50 characters"
                                    />

                                    <JustifySpace>
                                        <div>
                                            <WarningBox>
                                                <InfoIcon/>
                                                <Typography>Please check for duplicates.</Typography>
                                                {/*<Typography>The same user name exists.</Typography>*/}
                                            </WarningBox>
                                        </div>
                                        <NumberText>
                                            0 / 50
                                        </NumberText>
                                    </JustifySpace>

                                    <ButtonStyle1 disableRipple>Duplicate Check</ButtonStyle1>

                                    <SubText>
                                        * Enter max 50 characters using English<br/>
                                        &nbsp;&nbsp;&nbsp;letters, numbers, and underscores without<br/>
                                        &nbsp;&nbsp;&nbsp;case sensitivity.
                                    </SubText>
                                </div>
                            </FlexMarginBottom>
                            <Flex>
                                <BoxText>Password</BoxText>
                                <BoxText2>
                                    * Initial password is the same as user name.<br/>
                                    * You can edit your password after logging in.
                                </BoxText2>
                            </Flex>
                        </div>
                    </Flex>

                    <FlexMarginTop>
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
                                * This note is visible to all administrators.
                            </SubText>
                        </div>
                    </FlexMarginTop>
                </BoxStyle>
            </ContainerIn>
            <ActionBox>
                <ButtonStyle onClick={handleCloseDialog} disableRipple>
                    Cancel
                </ButtonStyle>

                <ControlButton disableRipple>
                    Add a New Administrator
                </ControlButton>
            </ActionBox>
        </Container>
    );
}

export default AddANewAdministrator;