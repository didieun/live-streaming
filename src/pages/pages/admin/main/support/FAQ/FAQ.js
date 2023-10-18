import React from 'react';
import {AlignCenter, Container, JustifySpace, TextStyle, FormControlLabelBox} from "./styles/FAQStyle";
import {ReactComponent as FAQIcon} from "../../../../common/images/FAQIcon.svg";
import {ReactComponent as UnChecked} from "../../../../common/images/UnChecked.svg";
import {ReactComponent as Checked} from "../../../../common/images/Checked.svg";
import AdminCommonSelect from "../../common/select/AdminCommonSelect";
import AdminSearch from "../../common/search/AdminSearch";
import {Checkbox} from "@mui/material";
import FAQTable from "./table/FAQTable";

function FAQ(props) {
    const {handleClickFaqDialog} = props;
    const [filter, setFilter] = React.useState(0);
    const menuList = [
        {text: 'Topics'},
        {text: 'Account'},
        {text: 'Broadcasting'},
        {text: 'Channel'},
        {text: 'Point'},
        {text: 'Channel Owner'},
        {text: 'Streamer'},
        {text: 'Troubleshooting'},
    ]

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    return (
        <Container>
            <JustifySpace>
                <AlignCenter>
                    <FAQIcon/>
                    <TextStyle>
                        Displayed FAQ <span>12</span>
                    </TextStyle>
                </AlignCenter>

                <AlignCenter>
                    <FormControlLabelBox control={<Checkbox checkedIcon={<Checked />} icon={<UnChecked />}/>} label="Excluding displayed FAQs" />
                    <AdminCommonSelect
                        filter={filter}
                        handleChangeFilter={handleChangeFilter}
                        menuList={menuList}
                    />
                    <AdminSearch width={280} placeholder={'Search for question, answer'}/>
                </AlignCenter>
            </JustifySpace>

            <FAQTable handleClickFaqDialog={handleClickFaqDialog}/>
        </Container>
    );

}

export default FAQ;