import React from 'react';
import {AlignCenter, Container, JustifySpace, TextStyle, FormControlBox} from "./styles/WithdrawalUser";
import {ReactComponent as AdminUserIcon} from "../../../../common/images/AdminUserIcon.svg";
import {ReactComponent as UnRadioIcon} from "../../../../common/images/UnRadioIcon.svg";
import {ReactComponent as RadioIcon} from "../../../../common/images/RadioIcon.svg";
import AdminSearch from "../../common/search/AdminSearch";
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import WithdrawalUserTable from "./table/WithdrawalUserTable";

function WithdrawalUser(props) {

    return (
        <Container>
            <JustifySpace>
                <AlignCenter>
                    <AdminUserIcon/>
                    <TextStyle>
                        Withdrawal Users <span>123</span>
                    </TextStyle>
                </AlignCenter>

                <AlignCenter>
                    <AdminSearch width={280} placeholder={'Search for user name, nickname'}/>
                </AlignCenter>
            </JustifySpace>
            <WithdrawalUserTable/>
        </Container>
    );

}

export default WithdrawalUser;