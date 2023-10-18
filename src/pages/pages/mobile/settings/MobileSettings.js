import * as React from 'react';
import {
    Container,
    Contents,
    TitleText,
    TabBox,
    ButtonStyle,
    ContentsIn, CancelButton, SaveButton, JustifySpace, DeleteButton, PositionFixed, ContentsEmpty
} from "./styles/MobileSettingsStyle";
import MobileHeader from "../home/header/MobileHeader";
import {Tab} from "@mui/material";
import MobileProfile from "./profile/MobileProfile";
import MobileSecurityAndPrivacy from "./securityAndPrivacy/MobileSecurityAndPrivacy";
import MobileCommonDialog from "../dialog/MobileCommonDialog";
import MobileChangePasswordDialog from "../dialog/MobileChangePasswordDialog";
import MobileDeactivateAccountDialog from "../dialog/MobileDeactivateAccountDialog";
import MobileDeleteAccountDialog from "../dialog/MobileDeleteAccountDialog";
import MobileSettingsEmpty from "./empty/MobileSettingsEmpty";

function MobileSettings(props) {
    const [tabValue, setTabValue] = React.useState('Profile');
    const [edit, setEdit] = React.useState(false);
    const [changePassword, setChangePassword] = React.useState(false);
    const [deactivateAccount, setDeactivateAccount] = React.useState(false);
    const [deleteAccount, setDeleteAccount] = React.useState(false);

    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleClickEdit = () => {
        setEdit(true);
    };

    const handleClickCancel = () => {
        setEdit(false);
    };

    const handleClickChangePassword = () => {
        setChangePassword(true);
    };

    const handleClickDeactivateAccount = () => {
        setDeactivateAccount(true);
    };

    const handleClickDeleteAccount = () => {
        setDeleteAccount(true);
    };

    const handleCloseDialog = () => {
        setChangePassword(false);
        setDeactivateAccount(false);
        setDeleteAccount(false);
    };

    return (
        <Container>
            <MobileHeader/>
            <Contents>
                <TitleText>Settings</TitleText>

                <TabBox
                    value={tabValue}
                    onChange={handleChangeTab}
                    aria-label="wrapped label tabs example"
                >
                    <Tab value="Profile" label={'Profile'} disableRipple/>
                    <Tab value="Privacy" label={'Security and Privacy'} disableRipple/>
                </TabBox>

                <ContentsIn>
                    {tabValue === 'Profile' &&
                        <MobileProfile edit={edit}/>
                    }

                    {tabValue === 'Privacy' &&
                        <MobileSecurityAndPrivacy
                            handleClickChangePassword={handleClickChangePassword}
                            handleClickDeactivateAccount={handleClickDeactivateAccount}
                        />
                    }

                    {tabValue === 'Profile' &&
                        <>
                            {edit ?
                                <JustifySpace>
                                    <CancelButton onClick={handleClickCancel} disableRipple>
                                        Cancel
                                    </CancelButton>
                                    <SaveButton disableRipple>
                                        Save
                                    </SaveButton>
                                </JustifySpace>
                                :
                                <PositionFixed>
                                    <ButtonStyle onClick={handleClickEdit} disableRipple>
                                        Edit
                                    </ButtonStyle>
                                </PositionFixed>

                            }
                        </>
                    }

                    {tabValue === 'Privacy' &&
                        <PositionFixed>
                            <DeleteButton onClick={handleClickDeleteAccount} disableRipple>
                                Delete Account
                            </DeleteButton>
                        </PositionFixed>
                    }
                </ContentsIn>
            </Contents>

            {/* 계정 삭제한 뒤 */}
            {/*<ContentsEmpty>*/}
            {/*    <MobileSettingsEmpty/>*/}
            {/*</ContentsEmpty>*/}

            <MobileCommonDialog
                open={changePassword}
                title={'Change Password'}
                onClose={handleCloseDialog}
                children={<MobileChangePasswordDialog/>}
            />

            <MobileCommonDialog
                open={deactivateAccount}
                title={'Deactivate Account'}
                onClose={handleCloseDialog}
                children={<MobileDeactivateAccountDialog/>}
            />

            <MobileCommonDialog
                open={deleteAccount}
                title={'Delete Account'}
                onClose={handleCloseDialog}
                children={<MobileDeleteAccountDialog/>}
            />
        </Container>
    );
}

export default MobileSettings;