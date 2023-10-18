import React from 'react';
import {
    ActionBox,
    EmptyButtonStyle,
    EmptySubText,
    EmptyTableBox,
    EmptyTitleText
} from "./styles/MobileSettingsEmptyStyle";
import {ReactComponent as EmptySettingIcon} from "../../../common/images/EmptySettingIcon.svg";

function MobileSettingsEmpty(props) {

    return (
        <div style={{width: '100%', height: 'calc(100vh - 90px)', background: '#fff'}}>
            <EmptyTableBox>
                <EmptySettingIcon style={{width: 100, height: 100}}/>
                <EmptyTitleText>
                    Account deletion has been completed.
                </EmptyTitleText>
                <EmptySubText>
                    <span>
                        Thank you for your support.<br/><br/>

                        Within 30 days of your request, Aimm tv will permanently erase all your content and close your account.<br/>
                        The deletion process will terminate if you log back into your account while we are still processing your deletion request.
                    </span>
                </EmptySubText>
                <ActionBox>
                    <EmptyButtonStyle disableRipple>
                        Go To Home
                    </EmptyButtonStyle>
                </ActionBox>
            </EmptyTableBox>
        </div>
    );
}


export default MobileSettingsEmpty;