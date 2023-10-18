import React from 'react';
import {Container, TabBox} from "./styles/TabsStyle";
import {Tab} from "@mui/material";

function Tabs(props) {
    const {tabValue, handleChangeTab, valueList} = props;

    return (
        <Container>
            <TabBox
                value={tabValue}
                onChange={handleChangeTab}
                aria-label="wrapped label tabs example"
            >
                {valueList.map((list, i) => (
                    <Tab key={i} value={list.value} label={list.label} disableRipple/>
                ))}
            </TabBox>
        </Container>
    );

}

export default Tabs;