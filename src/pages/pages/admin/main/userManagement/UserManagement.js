import React from 'react';
import {AbsoluteButton, BoxPosition, TitleText} from "../styles/AdminMainStyle";
import Tabs from "../common/tabs/Tabs";
import User from "./user/User";
import Administrator from "./administrator/Administrator";
import WithdrawalUser from "./withdrawal/WithdrawalUser";

function UserManagement(props) {
    const {handleClickAddANewAdministratorDialog, handleClickAdministratorInfoDialog} = props;
    const [tabValue, setTabValue] = React.useState('user');
    const valueList =
        [
            {
                label: 'User',
                value: 'user'
            },
            {
                label: 'Administrator',
                value: 'administrator'
            },
            {
                label: 'Withdrawal User',
                value: 'withdrawal'
            },
        ]

    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div>
            <TitleText>User Management</TitleText>
            <BoxPosition>
                <Tabs
                    tabValue={tabValue}
                    handleChangeTab={handleChangeTab}
                    valueList={valueList}
                />
                {tabValue === 'administrator' &&
                    <AbsoluteButton onClick={handleClickAddANewAdministratorDialog} disableRipple>
                        Add a New Administrator
                    </AbsoluteButton>
                }
            </BoxPosition>
            {tabValue === 'user' &&
                <User/>
            }

            {tabValue === 'administrator' &&
                <Administrator
                    handleClickAdministratorInfoDialog={handleClickAdministratorInfoDialog}
                />
            }

            {tabValue === 'withdrawal' &&
                <WithdrawalUser/>
            }

        </div>
    );

}

export default UserManagement;