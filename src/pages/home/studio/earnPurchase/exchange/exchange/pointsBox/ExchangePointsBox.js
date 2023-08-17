import React from 'react';
import {ReactComponent as PointsIcon3} from "../../../../../../common/images/PointsIcon3.svg";
import {ReactComponent as RefreshIcon} from "../../../../../../common/images/RefreshIcon.svg";
import {ReactComponent as SettingDialogCloseIcon} from "../../../../../../common/images/SettingDialogCloseIcon.svg";
import {ReactComponent as InfoIcon} from "../../../../../../common/images/InfoIcon.svg";

//공통 css
import {
    AlignCenter, AlignEnd,
    ExchangeButton, FontSize18, FontSize20,
    IconMargin,
    JustifyCenter, BoxStyle,
    PointsTextGreen, RefreshButtonMargin, SearchBox, SubText,
    ContentsIn, ButtonIcon, IconInfoBox
} from "../../../styles/PointsBoxStyle";
import {OutlinedInput, Typography} from "@mui/material";
import TooltipArrowBlue from "../../../../../../common/images/TooltipArrowBlue.svg";
import {ArrowTooltipStyle} from "../../../../../main/styles/MainStyle";

const infoMessage = (
    <React.Fragment>
        <div style={{marginLeft: 10}}>
            <br/>
            <Typography><b>Cash Exchange Available Points </b></Typography>
            <Typography>
                Exchange is possible from the points I have earned.
            </Typography>
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

function ExchangePointsBox(props) {
    const {handleClickExchangeSettlementDialogOpen} = props;
    const [info, setInfo] = React.useState(false);

    const handleClickInfo = () => {
        setInfo(true);
    };

    const handleCloseInfo = () => {
        setInfo(false);
    };

    return (
        <JustifyCenter>
            <ContentsIn>
                <BoxStyle>
                    <div>
                        <AlignCenter>
                            <PointsIcon3/>

                            <IconMargin>
                                <IconInfoBox>
                                    <SubText>Cash Exchange Available Points </SubText>
                                    <ArrowTooltipStyle
                                        open={info}
                                        title={
                                            <div>
                                                {infoMessage}
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
                                        <ButtonIcon onClick={handleClickInfo} disableRipple>
                                            <InfoIcon/>
                                        </ButtonIcon>
                                    </ArrowTooltipStyle>
                                </IconInfoBox>
                                <PointsTextGreen style={{height: 54}}>
                                    <span>95.6K</span> points
                                </PointsTextGreen>
                            </IconMargin>

                            <RefreshButtonMargin disableRipple>
                                <RefreshIcon/>
                            </RefreshButtonMargin>

                            <AlignEnd>
                                <div>
                                    <SubText>Points to Exchange</SubText>
                                    <SearchBox variant="outlined">
                                        <OutlinedInput
                                            placeholder={'Enter Points'}
                                        />
                                    </SearchBox>
                                </div>

                                <FontSize20>points</FontSize20>
                            </AlignEnd>
                            <ExchangeButton onClick={handleClickExchangeSettlementDialogOpen} disableRipple>Request a Exchange</ExchangeButton>
                        </AlignCenter>

                        <JustifyCenter style={{marginTop: 40}}>
                            <FontSize18>
                                * You must have at least <span>10</span> redeemable points to apply for a exchange.<br/>
                                * We only provide the exchange request, the actual exchange is done offline.
                            </FontSize18>
                        </JustifyCenter>

                    </div>
                </BoxStyle>
            </ContentsIn>
        </JustifyCenter>
    );
}

export default ExchangePointsBox;