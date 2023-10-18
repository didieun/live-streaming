import React from 'react';
import {
    ButtonStyle,
    ContentsBox, FlexColumn,
    TopBox,
    NoticeBox, TitleText, DateText, TextStyle, ButtonIcon
} from "./styles/MobileNotificationsDetailStyle";
import {Dialog, Slide, Typography} from "@mui/material";
import {ReactComponent as MobileCloseIcon} from "../../../common/images/MobileCloseIcon.svg";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function MobileNotificationsDetail(props) {
    const { open, handleClose } = props;

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <TopBox>
                <ButtonIcon onClick={handleClose} disableRipple>
                    <MobileCloseIcon/>
                </ButtonIcon>
                <Typography>Notifications</Typography>
            </TopBox>

            <FlexColumn>
                <ContentsBox>
                    <NoticeBox>
                        <Typography>Notice</Typography>
                    </NoticeBox>

                    <TitleText>
                        System Maintenance Notification
                    </TitleText>
                    <DateText>
                        August 3, 2023 16:20
                    </DateText>
                    <TextStyle>
                        Due to system operations on August 3, 2023 from 00:00 to 30, streamers will be unable to broadcast formore than 30 minutes.
                    </TextStyle>

                </ContentsBox>

                <ButtonStyle onClick={handleClose} disableRipple>
                    OK
                </ButtonStyle>
            </FlexColumn>


        </Dialog>
    );
}

export default MobileNotificationsDetail;
