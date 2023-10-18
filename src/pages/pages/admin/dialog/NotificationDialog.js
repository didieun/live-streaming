import * as React from 'react';
import {
    BoxStyle,
    Container,
    FlexMarginBottom,
    BoxText,
    FlexEnd,
    SwitchStyle,
    FormControlLabelBox,
    StyledTextarea,
    NumberText,
    BoxText3,
    ContainerIn,
    AlignCenter,
    ButtonStyle,
    ActionBoxSpace,
    ControlButton,
    WarningButton,
    FormControlLabelCheckBox, SubText2, FormControlBox, SubText
} from "./styles/SupportDialogStyle";
import {Checkbox, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {ReactComponent as Checked} from "../../common/images/Checked.svg";
import {ReactComponent as UnChecked} from "../../common/images/UnChecked.svg";
import {ReactComponent as UnRadioIcon} from "../../common/images/UnRadioIcon.svg";
import {ReactComponent as RadioIcon} from "../../common/images/RadioIcon.svg";

function NotificationDialog(props) {
    const {edit, handleClickNotificationEdit, handleCloseNotificationEdit, handleCloseDialog} = props;
    const [value, setValue] = React.useState(false);
    const [publicValue, setPublicValue] = React.useState('Audience');

    const handleChangeSwitch = (event) => {
        setValue((prev) => !prev);
    };

    const handleChangePublicValue = (event) => {
        setPublicValue(event.target.value);
    };

    return (
        <Container>
            <ContainerIn>
                <BoxStyle>
                    <div>
                        <FormControlLabelCheckBox
                            control={<Checkbox checkedIcon={<Checked />} icon={<UnChecked />}/>}
                            label="Excluding displayed Noti."
                            style={edit ? {} : {marginBottom: 30}}
                        />
                        {edit &&
                            <SubText2>
                                * If checked, the message will be displayed fixedly at the top of the user's screen.
                            </SubText2>
                        }
                    </div>
                    <FlexMarginBottom>
                        <BoxText>Display</BoxText>
                        <FormControlLabelBox
                            control={<SwitchStyle checked={value} onChange={handleChangeSwitch} sx={{ m: 1 }} disableRipple/>}
                            label={value ? 'Yes':'No'}
                        />
                    </FlexMarginBottom>

                    <FlexMarginBottom>
                        <BoxText>Public</BoxText>

                        <div>
                            <FormControlBox>
                                <RadioGroup
                                    row
                                    value={publicValue}
                                    onChange={handleChangePublicValue}
                                >
                                    <FormControlLabel
                                        value="Audience"
                                        control={<Radio  icon={<UnRadioIcon />} checkedIcon={<RadioIcon />} disableRipple/>}
                                        label="Audience"
                                    />
                                    <FormControlLabel
                                        value="Streamer"
                                        control={<Radio  icon={<UnRadioIcon />} checkedIcon={<RadioIcon />} disableRipple/>}
                                        label="Streamer"
                                    />
                                    <FormControlLabel
                                        value="Channel Owner"
                                        control={<Radio  icon={<UnRadioIcon />} checkedIcon={<RadioIcon />} disableRipple/>}
                                        label="Channel Owner"
                                    />
                                </RadioGroup>
                            </FormControlBox>
                            {publicValue === 'Audience' ?
                                <SubText>
                                    * It is visible to all users.
                                </SubText>
                                :
                                publicValue === 'Streamer' ?
                                    <SubText>
                                        * Only visible to users with stream permissions.
                                    </SubText>
                                    :
                                    <SubText>
                                        * Only visible to channel owners.
                                    </SubText>
                            }

                        </div>
                    </FlexMarginBottom>

                    <FlexMarginBottom>
                        <BoxText>Title</BoxText>
                        {edit ?
                            <div>
                                <StyledTextarea
                                    minRows={3}
                                    maxRows={3}
                                    placeholder="Enter a question."
                                />
                                <FlexEnd>
                                    <NumberText>
                                        0 / 140
                                    </NumberText>
                                </FlexEnd>
                            </div>
                            :
                            <BoxText3>
                                This is a title.
                            </BoxText3>
                        }
                    </FlexMarginBottom>

                    <FlexMarginBottom>
                        <BoxText>Message</BoxText>
                        {edit ?
                            <div>
                                <StyledTextarea
                                    minRows={3}
                                    maxRows={3}
                                    placeholder="Enter a answer."
                                />
                                <FlexEnd>
                                    <NumberText>
                                        0 / 10,000
                                    </NumberText>
                                </FlexEnd>
                            </div>
                            :
                            <BoxText3>
                                This is a title.This is a title.This is a title.This is a title.This is a title.This is a title.This is a title.This is a title.This is a title.This is a title.This is a title.This is a title.This is a title.This is a title.This is a title.This is a title.
                            </BoxText3>
                        }
                    </FlexMarginBottom>

                </BoxStyle>
            </ContainerIn>
            <ActionBoxSpace>
                <div>
                    {!edit &&
                        <WarningButton disableRipple>
                            Delete
                        </WarningButton>
                    }
                </div>

                <AlignCenter>
                    <ButtonStyle onClick={edit ? handleCloseNotificationEdit : handleCloseDialog} disableRipple>
                        Cancel
                    </ButtonStyle>

                    <ControlButton onClick={edit? null : handleClickNotificationEdit} disableRipple>
                        {edit ?
                            'Save'
                            :
                            'Edit'
                        }
                    </ControlButton>
                </AlignCenter>

            </ActionBoxSpace>

        </Container>
    );
}

export default NotificationDialog;