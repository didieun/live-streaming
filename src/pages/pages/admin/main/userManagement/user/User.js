import React from 'react';
import {AlignCenter, Container, JustifySpace, TextStyle, FormControlBox} from "./styles/UserStyle";
import {ReactComponent as AdminUserIcon} from "../../../../common/images/AdminUserIcon.svg";
import {ReactComponent as UnRadioIcon} from "../../../../common/images/UnRadioIcon.svg";
import {ReactComponent as RadioIcon} from "../../../../common/images/RadioIcon.svg";
import AdminSearch from "../../common/search/AdminSearch";
import UserTable from "./table/UserTable";
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";

function UserManagement(props) {

    return (
        <Container>
            <JustifySpace>
                <AlignCenter>
                    <AdminUserIcon/>
                    <TextStyle>
                        <span>123 </span> Users
                    </TextStyle>
                </AlignCenter>

                <AlignCenter>
                    <FormControlBox>
                        <RadioGroup
                            row
                            defaultValue="All Roles"
                        >
                            <FormControlLabel
                                value="All Roles"
                                control={<Radio  icon={<UnRadioIcon />} checkedIcon={<RadioIcon />} disableRipple/>}
                                label="All Roles"
                            />
                            <FormControlLabel
                                value="Channel Owner"
                                control={<Radio  icon={<UnRadioIcon />} checkedIcon={<RadioIcon />} disableRipple/>}
                                label="Channel Owner"
                            />
                            <FormControlLabel
                                value="Streamer"
                                control={<Radio  icon={<UnRadioIcon />} checkedIcon={<RadioIcon />} disableRipple/>}
                                label="Streamer"
                            />
                        </RadioGroup>
                    </FormControlBox>
                    <AdminSearch width={280} placeholder={'Search for user name, nickname'}/>
                </AlignCenter>
            </JustifySpace>

            <UserTable/>
        </Container>
    );

}

export default UserManagement;