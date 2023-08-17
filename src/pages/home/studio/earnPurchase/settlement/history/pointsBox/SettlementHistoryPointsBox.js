import React from 'react';
import {ReactComponent as EarnedIcon} from "../../../../../../common/images/EarnedIcon.svg";
import {ReactComponent as DeductedIcon} from "../../../../../../common/images/DeductedIcon.svg";
import {ReactComponent as InfoIcon} from "../../../../../../common/images/InfoIcon.svg";
import {ReactComponent as SettingDialogCloseIcon} from "../../../../../../common/images/SettingDialogCloseIcon.svg";

//공통 css
import {
    AlignCenter,
    BoxStyle,
    ButtonIcon,
    IconMargin,
    JustifyCenter,
    IconTitleBlue,
    PointsTextBlue,
    LineStyle,
    IconTitle,
    PointsText,
    TextStyle,
    ContentsIn,
} from "../../../styles/PointsBoxStyle";
import TooltipArrowBlue from "../../../../../../common/images/TooltipArrowBlue.svg";
import {ArrowTooltipStyle, ArrowTooltipStyleGray} from "../../../../../main/styles/MainStyle";
import {Typography} from "@mui/material";
import TooltipArrowGray from "../../../../../../common/images/TooltipArrowGray.svg";


const receivedInfoMessage = (
    <React.Fragment>
        <div style={{marginLeft: 10}}>
            <Typography><b>Received</b></Typography>
            <Typography>
                "Points" received by streamers on your channel from<br/> viewers.
            </Typography>
        </div>
    </React.Fragment>
);

const settledInfoMessage = (
    <React.Fragment>
        <div style={{marginLeft: 10}}>
            <Typography><b>Settled</b></Typography>
            <Typography>
                "Points” settled to a streamer belonging to my<br/> channel.
            </Typography>
        </div>
    </React.Fragment>
);


function SettlementHistoryPointsBox(props) {
    const [receivedInfo, setReceivedInfo] = React.useState(false);
    const [settledInfo, setSettledInfo] = React.useState(false);

    const handleClickReceivedInfo = () => {
        setReceivedInfo(true);
    };

    const handleClickSettledInfo = () => {
        setSettledInfo(true);
    };

    const handleCloseInfo = () => {
        setReceivedInfo(false);
        setSettledInfo(false);
    };

    return (
        <JustifyCenter>
            <ContentsIn>
                <BoxStyle>
                    <AlignCenter>
                        <EarnedIcon/>

                        <IconMargin>
                            <AlignCenter>
                                <IconTitleBlue>Received</IconTitleBlue>
                                <ArrowTooltipStyle
                                    open={receivedInfo}
                                    title={
                                        <div>
                                            {receivedInfoMessage}
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
                                <ButtonIcon onClick={handleClickReceivedInfo} disableRipple>
                                    <InfoIcon/>
                                </ButtonIcon>
                                </ArrowTooltipStyle>
                            </AlignCenter>

                            <ArrowTooltipStyleGray
                                title={
                                    <div>
                                        <Typography>98,710 points</Typography>
                                    </div>
                                }
                                placement="bottom"
                                top={'-19px'}
                                left={'52%'}
                                triangle={TooltipArrowGray}
                            >
                                <PointsTextBlue>
                                    <span>98,710</span> points
                                </PointsTextBlue>
                            </ArrowTooltipStyleGray>
                        </IconMargin>
                    </AlignCenter>

                    <LineStyle/>

                    <AlignCenter>

                        <DeductedIcon/>
                        <IconMargin>
                            <AlignCenter>
                                <IconTitle>Settled</IconTitle>
                                <ArrowTooltipStyle
                                    open={settledInfo}
                                    title={
                                        <div>
                                            {settledInfoMessage}
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
                                    <ButtonIcon onClick={handleClickSettledInfo} disableRipple>
                                        <InfoIcon/>
                                    </ButtonIcon>
                                </ArrowTooltipStyle>
                            </AlignCenter>

                            <ArrowTooltipStyleGray
                                title={
                                    <div>
                                        <Typography>24,880 points</Typography>
                                    </div>
                                }
                                placement="bottom"
                                top={'-19px'}
                                left={'52%'}
                                triangle={TooltipArrowGray}
                            >
                                <PointsText>
                                    <span>24,880</span> points
                                </PointsText>
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

export default SettlementHistoryPointsBox;