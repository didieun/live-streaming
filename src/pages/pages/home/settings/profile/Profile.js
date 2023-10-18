import React from 'react';
import {
    ColumnCenter, Container, Flex, ProfileBox, InputBox, LineButtonStyle,
    BoxText, BoxText3, ButtonStyle1, FlexMarginBottom,
    NumberText,
    StyledInput, SubText, AlignCenter, JustifyEnd, UnderlineText, SubUnderlineText,
} from "./styles/ProfileStyle";
import TestProfileImage from "../../../common/images/TestProfileImage.jpeg";
import {ReactComponent as ProfileUserIcon} from "../../../common/images/ProfileUserIcon.svg";

function Profile(props) {
    const {edit} = props;

    return (
        <Container>
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

                    {edit ?
                        <label htmlFor="contained-button-file">
                            <LineButtonStyle component="span" disableRipple>
                                Edit Profile Image
                            </LineButtonStyle>
                        </label>
                        :
                        ''
                    }
                </ColumnCenter>

                <div style={{marginTop: 70}}>
                    <FlexMarginBottom>
                        <BoxText>User Name</BoxText>
                        {edit ?
                            <div>
                                <AlignCenter>
                                    <StyledInput
                                        // error
                                        label=""
                                        variant="outlined"
                                        fullWidth
                                        placeholder=""
                                    />
                                    <ButtonStyle1 disableRipple>Duplicate Check</ButtonStyle1>
                                </AlignCenter>


                                <JustifyEnd>
                                    <NumberText>
                                        0 / 50
                                    </NumberText>
                                </JustifyEnd>

                                <SubText>
                                    * Enter max 50 characters using English letters, numbers, and underscores without case sensitivity.
                                </SubText>
                            </div>
                            :
                            <BoxText3>
                                taeyeon
                            </BoxText3>
                        }
                    </FlexMarginBottom>

                    <FlexMarginBottom>
                        <BoxText>Nickname</BoxText>
                        {edit ?
                            <div>
                                <AlignCenter>
                                    <StyledInput
                                        // error
                                        label=""
                                        variant="outlined"
                                        fullWidth
                                        placeholder=""
                                    />
                                </AlignCenter>


                                <JustifyEnd>
                                    <NumberText>
                                        0 / 50
                                    </NumberText>
                                </JustifyEnd>

                                <SubUnderlineText>
                                    * Enter max 50 characters using English letters, numbers, and underscores without case sensitivity.<br/>
                                    * People can find or see your nickname.<br/>
                                    * You can only change your nickname twice within 14 days.<br/>
                                    * Please be careful as your account may be permanently suspended if your nickname violates the<br/>
                                    &nbsp;&nbsp;&nbsp;service <span>terms of use.</span>
                                </SubUnderlineText>
                            </div>
                            :
                            <BoxText3>
                                Tengu
                            </BoxText3>
                        }
                    </FlexMarginBottom>
                </div>
            </Flex>

        </Container>
    );
}

export default Profile;