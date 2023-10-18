import React from 'react';
import {ReactComponent as EarnedIcon} from "../../../../../../common/images/EarnedIcon.svg";
import {ReactComponent as InfoIcon} from "../../../../../../common/images/InfoIcon.svg";
import {ReactComponent as DeductedIcon} from "../../../../../../common/images/DeductedIcon.svg";
import {ReactComponent as CurrentIcon} from "../../../../../../common/images/CurrentIcon.svg";
import {ReactComponent as SettingDialogCloseIcon} from "../../../../../../common/images/SettingDialogCloseIcon.svg";

//공통 css
import {
    AlignCenter,
    BoxStyle, ButtonIcon, ContentsIn,
    IconMargin, IconTitle,
    IconTitleBlue, IconTitleGreen,
    JustifyCenter,
    LineStyle,
    PointsText, PointsTextBlue, PointsTextGreen, TextStyle
} from "../../../styles/PointsBoxStyle";
import {Typography} from "@mui/material";
import TooltipArrowBlue from "../../../../../../common/images/TooltipArrowBlue.svg";
import {ArrowTooltipStyle, ArrowTooltipStyleGray} from "../../../../../main/styles/MainStyle";
import TooltipArrowGray from "../../../../../../common/images/TooltipArrowGray.svg";

const earnedInfoMessage = (
    <React.Fragment>
        <div style={{marginLeft: 10}}>
            <br/>
            <Typography><b>Earned</b></Typography>
            <Typography>These are the points you have earned and are<br/> classified as follows based on your user role.</Typography>
            <br/>
            <Typography><b>(1) As a channel owner</b></Typography>
            <Typography>
                <b>• Points Received</b>
                : "Points" received by streamers<br/> &nbsp;&nbsp;&nbsp;on your channel from viewers.<br/>
                <b>• Points Charged</b>
                : Points that you have charged.
            </Typography>
            <br/>
            <Typography><b>(2) As a streamer</b></Typography>
            <Typography>
                <b>• Settlement Received</b>
                : Points you received from<br/> &nbsp;&nbsp;&nbsp;the channel owner based on the points you<br/> &nbsp;&nbsp;&nbsp;received for your broadcast.<br/>
                <b>• Points Charged</b>
                : Points charged by you.
            </Typography>
            <br/>
            <Typography><b>(3) As a viewer</b></Typography>
            <Typography>
                <b>• Points Charged</b>
                : Points charged by you.
            </Typography>
            <br/>
        </div>
    </React.Fragment>
);

const deductedInfoMessage = (
    <React.Fragment>
        <div style={{marginLeft: 10}}>
            <br/>
            <Typography><b>Deducted</b></Typography>
            <Typography>
                These are the points deducted and are classified as<br/> follows based on your user role.<br/>
                Points pending a cash payment will also be deducted<br/> until the exchange is approved.
            </Typography>
            <br/>
            <Typography><b>(1) As a channel owner</b></Typography>
            <Typography>
                <b>• Points Settled</b>
                : Points settled to a streamer<br/> &nbsp;&nbsp;&nbsp;belonging to my channel.<br/>
                <b>• Points Sent</b>
                : Points I gave as a gift to streamers<br/> &nbsp;&nbsp;&nbsp;belonging to my channel and other channels<br/> &nbsp;&nbsp;&nbsp;through a stream as a viewer.<br/>
                <b>• Cash Exchanged</b>
                : Exchange my points for cash.
            </Typography>
            <br/>
            <Typography><b>(2) As a streamer</b></Typography>
            <Typography>
                <b>• Points Sent</b>
                : Points I gifted to other streamers<br/> &nbsp;&nbsp;&nbsp;through stream as viewers.<br/>
                <b>• Cash Exchanged</b>
                : Exchange my points for cash.
            </Typography>
            <br/>
            <Typography><b>(3) As a viewer</b></Typography>
            <Typography>
                <b>• Points Sent</b>
                : Points given as a gift to the streamer.<br/>
                <b>• Cash Exchanged</b>
                : Exchange my points for cash.
            </Typography>
            <br/>
        </div>
    </React.Fragment>
);

const currentPointsInfoMessage = (
    <React.Fragment>
        <div style={{marginLeft: 10}}>
            <br/>
            <Typography><b>Current Points</b></Typography>
            <Typography>
                Current points are minus points earned minus points<br/> deducted.<br/>
                Points pending a cash payment will also be deducted<br/> until the exchange is approved.
            </Typography>
            <br/>
        </div>
    </React.Fragment>
);

function PointsBox(props) {
    const [earnedInfo, setEarnedInfo] = React.useState(false);
    const [deductedInfo, setDeductedInfo] = React.useState(false);
    const [currentPointsInfo, setCurrentPointsInfo] = React.useState(false);

    const handleClickEarnedInfo = () => {
        setEarnedInfo(true);
    };

    const handleClickDeductedInfo = () => {
        setDeductedInfo(true);
    };

    const handleClickCurrentPointsInfo = () => {
        setCurrentPointsInfo(true);
    };

    const handleCloseInfo = () => {
        setEarnedInfo(false);
        setDeductedInfo(false);
        setCurrentPointsInfo(false);
    };

    return (
        <JustifyCenter>
            <ContentsIn>
                <BoxStyle>
                    <AlignCenter>
                        <EarnedIcon/>

                        <IconMargin>
                            <AlignCenter>
                                <IconTitleBlue>Earned</IconTitleBlue>
                                <ArrowTooltipStyle
                                    open={earnedInfo}
                                    title={
                                        <div>
                                            {earnedInfoMessage}
                                            <ButtonIcon onClick={handleCloseInfo} disableRipple>
                                                <SettingDialogCloseIcon style={{width: 16, height: 16}}/>
                                            </ButtonIcon>
                                        </div>
                                    }
                                    placement="bottom"
                                    top={'-25px'}
                                    left={'50%'}
                                    triangle={TooltipArrowBlue}
                                >
                                    <ButtonIcon onClick={handleClickEarnedInfo} disableRipple>
                                        <InfoIcon/>
                                    </ButtonIcon>
                                </ArrowTooltipStyle>
                            </AlignCenter>

                            <ArrowTooltipStyleGray
                                title={
                                    <div>
                                        <Typography>98,000 points</Typography>
                                    </div>
                                }
                                placement="bottom"
                                top={'-19px'}
                                left={'52%'}
                                triangle={TooltipArrowGray}
                            >
                                <PointsTextBlue>
                                    <span>98K</span> points
                                </PointsTextBlue>
                            </ArrowTooltipStyleGray>
                        </IconMargin>
                    </AlignCenter>

                    <LineStyle/>

                    <AlignCenter>
                        <DeductedIcon/>
                        <IconMargin>
                            <AlignCenter>
                                <IconTitle>Deducted</IconTitle>
                                <ArrowTooltipStyle
                                    open={deductedInfo}
                                    title={
                                        <div>
                                            {deductedInfoMessage}
                                            <ButtonIcon onClick={handleCloseInfo} disableRipple>
                                                <SettingDialogCloseIcon style={{width: 16, height: 16}}/>
                                            </ButtonIcon>
                                        </div>
                                    }
                                    placement="bottom"
                                    top={'-25px'}
                                    left={'50%'}
                                    triangle={TooltipArrowBlue}
                                >
                                    <ButtonIcon onClick={handleClickDeductedInfo} disableRipple>
                                        <InfoIcon/>
                                    </ButtonIcon>
                                </ArrowTooltipStyle>
                            </AlignCenter>

                            <ArrowTooltipStyleGray
                                title={
                                    <div>
                                        <Typography>24,000 points</Typography>
                                    </div>
                                }
                                placement="bottom"
                                top={'-19px'}
                                left={'52%'}
                                triangle={TooltipArrowGray}
                            >
                                <PointsText>
                                    <span>24K</span> points
                                </PointsText>
                            </ArrowTooltipStyleGray>
                        </IconMargin>
                    </AlignCenter>

                    <LineStyle/>

                    <AlignCenter>
                        <CurrentIcon/>
                        <IconMargin>
                            <AlignCenter>
                                <IconTitleGreen>Current Points</IconTitleGreen>
                                <ArrowTooltipStyle
                                    open={currentPointsInfo}
                                    title={
                                        <div>
                                            {currentPointsInfoMessage}
                                            <ButtonIcon onClick={handleCloseInfo} disableRipple>
                                                <SettingDialogCloseIcon style={{width: 16, height: 16}}/>
                                            </ButtonIcon>
                                        </div>
                                    }
                                    placement="bottom"
                                    top={'-25px'}
                                    left={'50%'}
                                    triangle={TooltipArrowBlue}
                                >
                                    <ButtonIcon onClick={handleClickCurrentPointsInfo} disableRipple>
                                        <InfoIcon/>
                                    </ButtonIcon>
                                </ArrowTooltipStyle>
                            </AlignCenter>

                            <ArrowTooltipStyleGray
                                title={
                                    <div>
                                        <Typography>95,650 points</Typography>
                                    </div>
                                }
                                placement="bottom"
                                top={'-19px'}
                                left={'52%'}
                                triangle={TooltipArrowGray}
                            >
                                <PointsTextGreen>
                                    <span>95.6K</span> points
                                </PointsTextGreen>
                            </ArrowTooltipStyleGray>
                        </IconMargin>
                    </AlignCenter>
                </BoxStyle>

                <TextStyle>
                    데이터 생성 시작일: YYYY. MM. DD. ~ 현재일: YYYY. MM. DD.
                </TextStyle>
            </ContentsIn>
        </JustifyCenter>
    );
}

export default PointsBox;