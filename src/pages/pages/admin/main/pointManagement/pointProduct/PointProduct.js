import React from 'react';
import {
    AlignCenter,
    Container,
    JustifySpace,
    TextStyle,
    FormControlLabelBox,
} from "./styles/PointProductStyle";
import {ReactComponent as AdminPointIcon} from "../../../../common/images/AdminPointIcon.svg";
import {ReactComponent as UnChecked} from "../../../../common/images/UnChecked.svg";
import {ReactComponent as Checked} from "../../../../common/images/Checked.svg";
import AdminSearch from "../../common/search/AdminSearch";
import {Checkbox} from "@mui/material";
import PointProductTable from "./table/PointProductTable";

function PointProduct(props) {
    const {handleClickPointProductDialog} = props;

    return (
        <Container>
            <JustifySpace>
                <AlignCenter>
                    <AdminPointIcon/>
                    <TextStyle>
                        Point Gift <span>5</span>
                    </TextStyle>
                </AlignCenter>

                <AlignCenter>
                    <FormControlLabelBox control={<Checkbox checkedIcon={<Checked />} icon={<UnChecked />}/>} label="Only products on display" />
                    <AdminSearch width={280} placeholder={'Search for product name'}/>
                </AlignCenter>
            </JustifySpace>

            <PointProductTable handleClickPointProductDialog={handleClickPointProductDialog}/>
        </Container>
    );

}

export default PointProduct;