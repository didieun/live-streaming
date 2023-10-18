import React from 'react';
import {AbsoluteButton, AbsoluteButton2, AbsoluteButton3, AlignCenter} from "./styles/SettingsStyle";
import CommonTitle from "../studio/title/CommonTitle";
import {BoxStyle, TabBox} from "../main/styles/MainStyle";
import {Tab} from "@mui/material";
import Profile from "./profile/Profile";
import SecurityAndPrivacy from "./securityAndPrivacy/SecurityAndPrivacy";

function Settings(props) {
    const {handleClickChangePassword, handleClickDeactivateAccount, handleClickDeleteAccount} = props;
    const [tabValue, setTabValue] = React.useState('Profile');
    const [edit, setEdit] = React.useState(false);

    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleClickEdit = () => {
        setEdit(true);
    };

    const handleClickCancel = () => {
        setEdit(false);
    };

    return (
        <div>
            <CommonTitle
                title={'Settings'}
            />
            <BoxStyle>
                <TabBox
                    value={tabValue}
                    onChange={handleChangeTab}
                    aria-label="wrapped label tabs example"
                >
                    <Tab value="Profile" label={'Profile'} disableRipple/>
                    <Tab value="Privacy" label={'Security and Privacy'} disableRipple/>
                </TabBox>

                {tabValue === 'Profile' &&
                    <AlignCenter>
                        {edit &&
                            <AbsoluteButton2 onClick={handleClickCancel} disableRipple>
                                Cancel
                            </AbsoluteButton2>
                        }

                        <AbsoluteButton onClick={handleClickEdit} disableRipple>
                            {edit ?
                                'Save'
                                :
                                'Edit'
                            }
                        </AbsoluteButton>
                    </AlignCenter>
                }

                {tabValue === 'Privacy' &&
                    <AbsoluteButton3 onClick={handleClickDeleteAccount} disableRipple>
                        Delete Account
                    </AbsoluteButton3>
                }
            </BoxStyle>

            {tabValue === 'Profile' &&
                <Profile edit={edit}/>
            }

            {tabValue === 'Privacy' &&
                <SecurityAndPrivacy
                    handleClickChangePassword={handleClickChangePassword}
                    handleClickDeactivateAccount={handleClickDeactivateAccount}
                />
            }
        </div>
    );
}

export default Settings;