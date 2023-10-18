import React from 'react';
import {
    ChangeStreamerContainer, NickNameListBox,
    TabBox, FormControlBox, SubText, NickNameListBoxWidth, SubTextColor, TitleText, TextStyle, StyledTextarea
} from './styles/ChangeStreamerStyle'
import {ReactComponent as UnRadioIcon} from "../../../../common/images/UnRadioIcon.svg";
import {ReactComponent as RadioIcon} from "../../../../common/images/RadioIcon.svg";
import {FormControlLabel, Radio, RadioGroup, Tab} from "@mui/material";
import Search from "../../../search/Search";

function ChangeStreamer(props) {
    const {handleChangeTab, tabValue} = props;
    const nickNameList =
        [
            {value:0, name: '{user nickname}'},
            {value:1, name: '{user nickname}'},
            {value:2, name: '{user nickname}'},
            {value:3, name: '{user nickname}'},
            {value:4, name: '{user nickname}'},
            {value:4, name: '{user nickname}'},
            {value:4, name: '{user nickname}'},
            {value:4, name: '{user nickname}'},
            {value:4, name: '{user nickname}'},
            {value:4, name: '{user nickname}'},
            {value:4, name: '{user nickname}'},
        ]

    return (
        <ChangeStreamerContainer>
            <TabBox
                value={tabValue}
                onChange={handleChangeTab}
                aria-label="wrapped label tabs example"
            >
                <Tab value="inviteNow" label={'Invite Now'} disableRipple/>
                <Tab value="invited" label={'Invited'} disableRipple/>
            </TabBox>

            <Search  width={'478px'} placeholder={'Search for nickname'}/>

            {tabValue === 'inviteNow' &&
                <>
                    <NickNameListBoxWidth>
                        <FormControlBox>
                            <RadioGroup defaultValue="">
                                {nickNameList.map((list, i) => (
                                    <FormControlLabel
                                        value={list.value}
                                        control={<Radio  icon={<UnRadioIcon />} checkedIcon={<RadioIcon />} disableRipple/>}
                                        label={list.name}
                                        key={i}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControlBox>
                    </NickNameListBoxWidth>

                    <TitleText>Message</TitleText>
                    <StyledTextarea
                        minRows={6}
                        maxRows={6}
                        placeholder="We are looking for streamers to broadcast live on various topics on the {Channel Id} channel. Please accept the invitation."
                    />

                    <SubText>
                        * You can explain the purpose of the invitation, such as introduction and &nbsp;&nbsp;&nbsp;live broadcasting.<br/>
                        &nbsp;&nbsp;&nbsp;The message will be visible to the invitee.
                    </SubText>
                    <SubTextColor>
                        &nbsp;&nbsp;&nbsp;Once the invitee accepts, it is ready to go live.
                    </SubTextColor>
                </>
            }

            {tabValue === 'invited' &&
                <>
                    <NickNameListBox>
                        <FormControlBox>
                            <RadioGroup defaultValue="">
                                {nickNameList.map((list, i) => (
                                    <FormControlLabel
                                        value={list.value}
                                        control={<Radio  icon={<UnRadioIcon />} checkedIcon={<RadioIcon />} disableRipple/>}
                                        label={list.name}
                                        key={i}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControlBox>
                    </NickNameListBox>

                    <SubText>
                        * The above are users who have already agreed to host a live broadcast.<br/>
                        &nbsp;&nbsp;&nbsp;The selected users will be notified that you are ready to go live.<br/>
                    </SubText>
                </>
            }

        </ChangeStreamerContainer>
    );
}

export default ChangeStreamer;