import React from 'react';
import {BlurBox, BlurText, Container, ContentsBox, TextStyle, TitleText} from "./styles/DashboardStyle";


function Dashboard(props) {

    return (
        <Container>
            <TitleText>Dashboard</TitleText>
            <TextStyle>Start streaming with <span>Pickl Studio</span></TextStyle>
            <ContentsBox>
                <BlurBox>
                    <BlurText>The dashboard is in preparation.</BlurText>
                </BlurBox>
            </ContentsBox>
        </Container>
    );
}

export default Dashboard;