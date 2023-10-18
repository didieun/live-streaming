import React from 'react';
import {AlignCenter, Container, JustifySpace, TextStyle, FormControlLabelBox} from "./styles/ChannelProductsStyles";
import {ReactComponent as AdminVideoPlayListIcon} from "../../../../common/images/AdminVideoPlayListIcon.svg";
import {ReactComponent as UnChecked} from "../../../../common/images/UnChecked.svg";
import {ReactComponent as Checked} from "../../../../common/images/Checked.svg";
import AdminSearch from "../../common/search/AdminSearch";
import {Checkbox} from "@mui/material";
import ChannelProductsTable from "./table/ChannelProductsTable";

function ChannelProducts(props) {
    const {handleClickChannelProductDialog} = props;

    return (
        <Container>
            <JustifySpace>
                <AlignCenter>
                    <AdminVideoPlayListIcon/>
                    <TextStyle>
                        Channel Products <span>5</span>
                    </TextStyle>
                </AlignCenter>

                <AlignCenter>
                    <FormControlLabelBox control={<Checkbox checkedIcon={<Checked />} icon={<UnChecked />}/>} label="Only products on display" />
                    <AdminSearch width={280} placeholder={'Search for product name'}/>
                </AlignCenter>
            </JustifySpace>

            <ChannelProductsTable handleClickChannelProductDialog={handleClickChannelProductDialog}/>
        </Container>
    );

}

export default ChannelProducts;