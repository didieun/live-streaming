import * as React from 'react';
import {
    AlignCenter,
    Container, ProfileBox, InputBox, LineButtonStyle,
    BoxText, BoxText3,
    ButtonStyle1,
    JustifyEnd,
    NumberText,
    StyledInput, SubText, FlexMargin, SubUnderlineText
} from "./styles/MobileProfileStyle";
import TestProfileImage from "../../../common/images/TestProfileImage.jpeg";
import {ReactComponent as ProfileUserIcon} from "../../../common/images/ProfileUserIcon.svg";

function MobileProfile(props) {
    const {edit} = props;

    return (
        <Container>
            <AlignCenter>
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
            </AlignCenter>

            <FlexMargin>
                <BoxText>User Name</BoxText>

                {edit ?
                    <div style={{width: 'calc(100% - 75px)'}}>
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
                    </div>
                    :
                    <BoxText3>
                        taeyeon
                    </BoxText3>
                }
            </FlexMargin>
            {edit &&
                <SubText>
                    * Enter max 50 characters using English letters, numbers, and underscores without case sensitivity.
                </SubText>
            }

            <FlexMargin>
                <BoxText>Nickname</BoxText>

                {edit ?
                    <div style={{width: 'calc(100% - 90px)'}}>
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
                    </div>
                    :
                    <BoxText3>
                        taeyeon
                    </BoxText3>
                }
            </FlexMargin>

            {edit &&
                <SubUnderlineText>
                    * Enter max 50 characters using English letters, numbers, and underscores without case sensitivity.<br/>
                    * People can find or see your nickname.<br/>
                    * You can only change your nickname twice within 14 days.<br/>
                    * Please be careful as your account may be permanently suspended if your nickname violates the<br/>
                    &nbsp;&nbsp;&nbsp;service <span>terms of use.</span>
                </SubUnderlineText>
            }

        </Container>
    );
}

export default MobileProfile;