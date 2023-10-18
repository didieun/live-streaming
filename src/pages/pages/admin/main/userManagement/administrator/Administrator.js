import React from 'react';
import {AlignCenter, Container, JustifySpace, TextStyle} from "./styles/AdministratorStyle";
import {ReactComponent as AdminUserIcon} from "../../../../common/images/AdminUserIcon.svg";
import AdminSearch from "../../common/search/AdminSearch";
import AdministratorTable from "./table/AdministratorTable";

function UserManagement(props) {
    const {handleClickAdministratorInfoDialog} = props;
    return (
        <Container>
            <JustifySpace>
                <AlignCenter>
                    <AdminUserIcon/>
                    <TextStyle>
                        Administrator <span>5</span>
                    </TextStyle>
                </AlignCenter>

                <AlignCenter>
                    <AdminSearch width={280} placeholder={'Search for user name'}/>
                </AlignCenter>
            </JustifySpace>

            <AdministratorTable handleClickAdministratorInfoDialog={handleClickAdministratorInfoDialog}/>
        </Container>
    );

}

export default UserManagement;