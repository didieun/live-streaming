import React from 'react';
import {
    NoticeContainer,
    NoticeBox, TitleText, TextStyle, LineStyle, ButtonStyle, FlexCenter, ScrollBox
} from "./styles/NotificationsDialogStyle";
import {Typography} from "@mui/material";

function NotificationsDialog(props) {

    return (
        <NoticeContainer>
            <NoticeBox>
                <Typography>Notice</Typography>
            </NoticeBox>

            <TitleText>
                System Maintenance Notification
            </TitleText>

            <TextStyle>
                August 3, 2023 16:20
            </TextStyle>

            <LineStyle/>

            <ScrollBox>
                <TextStyle>
                    Due to system operations on August 3, 2023 from 00:00 to 30, streamers will be unable to broadcast formore than 30 minutes.
                </TextStyle>
            </ScrollBox>

            <FlexCenter>
                <ButtonStyle disableRipple>OK</ButtonStyle>
            </FlexCenter>

        </NoticeContainer>
    );
}

export default NotificationsDialog;
