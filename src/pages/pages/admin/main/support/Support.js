import React from 'react';
import {AbsoluteButton, AbsoluteButton2, AlignCenter, BoxPosition, TitleText} from "../styles/AdminMainStyle";
import Tabs from "../common/tabs/Tabs";
import FAQ from "./FAQ/FAQ";
import Notifications from "./notifications/Notifications";

function Support(props) {
    const {handleClickAddANewFaqDialog, handleClickFaqDialog, handleClickAddANewNotificationDialog, handleClickNotificationDialog} = props;
    const [tabValue, setTabValue] = React.useState('FAQ');
    const valueList =
        [
            {
                label: 'FAQ Management',
                value: 'FAQ'
            },
            {
                label: 'Notifications',
                value: 'Notifications'
            },
        ]

    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div>
            <TitleText>Support</TitleText>
            <BoxPosition>
                <Tabs
                    tabValue={tabValue}
                    handleChangeTab={handleChangeTab}
                    valueList={valueList}
                />
                {tabValue === 'FAQ' &&
                    <AlignCenter>
                        <AbsoluteButton2 onClick={handleClickAddANewFaqDialog} disableRipple>
                            Add a New FAQ
                        </AbsoluteButton2>

                        <AbsoluteButton disableRipple>
                            Display Management
                        </AbsoluteButton>
                    </AlignCenter>
                }
                {tabValue === 'Notifications' &&
                    <AbsoluteButton onClick={handleClickAddANewNotificationDialog} disableRipple>
                        Add a New Notification
                    </AbsoluteButton>
                }
            </BoxPosition>

            {tabValue === 'FAQ' &&
                <FAQ handleClickFaqDialog={handleClickFaqDialog}/>
            }
            {tabValue === 'Notifications' &&
                <Notifications handleClickNotificationDialog={handleClickNotificationDialog}/>
            }
        </div>
    );

}

export default Support;