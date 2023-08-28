import React from 'react';
import {
    AlignCenter,
    Container,
    ContainerIn,
    TimeText,
    LiveBox,
    DotStyle,
    IconColorSize,
    ViewersText,
    ShareButton,
    CoinButton,
    FlexColumn,
    PopoverMoneyText,
    ButtonIcon,
    CountBoxIn,
    InputBox,
    PointsBoxText,
    CountBox,
    ButtonStyle,
    AlignCenterMarginTop,
    LineStyle,
    Points,
    BuyPointsButton,
    PointsButton,
    FlexColumnStart
} from "./styles/WatchingInfoStyle";
import {ReactComponent as LiveIcon} from "../../../common/images/LiveIcon.svg";
import {ReactComponent as ViewersUserIcon} from "../../../common/images/ViewersUserIcon.svg";
import {ReactComponent as MinusIcon} from "../../../common/images/MinusIcon.svg";
import {ReactComponent as PlusIcon} from "../../../common/images/PlusIcon.svg";
import {ReactComponent as ShareIcon} from "../../../common/images/ShareIcon.svg";
import {ReactComponent as CoinHandIcon} from "../../../common/images/CoinHandIcon.svg";
import {ReactComponent as BuyPointsArrow} from "../../../common/images/BuyPointsArrow.svg";
import Coin10 from "../../../common/images/Coin10.png";
import Coin30 from "../../../common/images/Coin30.png";
import Coin50 from "../../../common/images/Coin50.png";
import Coin100 from "../../../common/images/Coin100.png";
import Coin500 from "../../../common/images/Coin500.png";
import PopoverCoin10 from "../../../common/images/PopoverCoin10.png";
import PopoverCoin30 from "../../../common/images/PopoverCoin30.png";
import PopoverCoin50 from "../../../common/images/PopoverCoin50.png";
import PopoverCoin100 from "../../../common/images/PopoverCoin100.png";
import PopoverCoin500 from "../../../common/images/PopoverCoin500.png";
import {Typography} from "@mui/material";
import {ArrowTooltipStyle} from "../styles/WatchingStyle";
import WatchingShare from "../../dialog/WatchingShare";
import ViewerCommonDialog from "../../dialog/ViewerCommonDialog";
import ViewerAlertDialog from "../../dialog/ViewerAlertDialog";
import BuyPoints from "../../../home/studio/earnPurchase/points/dialog/BuyPoints";
import TooltipBottomArrowBlue from "../../../common/images/TooltipBottomArrowBlue.svg";
import WatchingBuyPoints from "../../dialog/WatchingBuyPoints";

function WatchingInfo(props) {
    const [count10, setCount10] = React.useState(0);
    const [count30, setCount30] = React.useState(0);
    const [count50, setCount50] = React.useState(0);
    const [count100, setCount100] = React.useState(0);
    const [count500, setCount500] = React.useState(0);

    const [shareDialog, setShareDialog] = React.useState(false);
    const [alertDialog, setAlertDialog] = React.useState(false);
    const [buyPointsDialog, setBuyPointsDialog] = React.useState(false);

    const handleClickShareDialog = () => {
        setShareDialog(true)
    };

    const handleClickAlertDialog = () => {
        setAlertDialog(true)
    };

    const handleClickBuyPointsDialog = () => {
        setBuyPointsDialog(true)
    };

    const handleCloseDialog = () => {
        setShareDialog(false)
        setAlertDialog(false)
        setBuyPointsDialog(false)
    };

    const handleClickPlus10 = () => {
        setCount10(count10 + 1)
    };

    const handleClickPlus30= () => {
        setCount30(count30 + 1)
    };

    const handleClickPlus50 = () => {
        setCount50(count50 + 1)
    };

    const handleClickPlus100 = () => {
        setCount100(count100 + 1)
    };

    const handleClickPlus500 = () => {
        setCount500(count500 + 1)
    };

    const handleClickMinus10 = () => {
        setCount10(count10 - 1)
    };

    const handleClickMinus30 = () => {
        setCount30(count30 - 1)
    };

    const handleClickMinus50 = () => {
        setCount50(count50 - 1)
    };

    const handleClickMinus100 = () => {
        setCount100(count100 - 1)
    };

    const handleClickMinus500 = () => {
        setCount500(count500 - 1)
    };

    const coin10 = (
        <React.Fragment>
            <FlexColumn >
                <img src={PopoverCoin10} alt='coin10'/>
                <PopoverMoneyText>10 P</PopoverMoneyText>
                <CountBox>
                    <PointsBoxText>Quantity</PointsBoxText>
                    <AlignCenter>
                        <CountBoxIn>
                            <ButtonIcon onClick={handleClickMinus10} disabled={count10 <= 0} disableRipple><MinusIcon/></ButtonIcon>
                            <InputBox
                                value={count10}
                            />
                            <ButtonIcon onClick={handleClickPlus10}  disableRipple><PlusIcon/></ButtonIcon>
                        </CountBoxIn>
                    </AlignCenter>
                </CountBox>

                <ButtonStyle onClick={handleClickAlertDialog} disableRipple>
                    <Typography>Send for <span>0 P</span></Typography>
                </ButtonStyle>
            </FlexColumn>
        </React.Fragment>
    );

    const coin30 = (
        <React.Fragment>
            <FlexColumn >
                <img src={PopoverCoin30} alt='coin10'/>
                <PopoverMoneyText>30 P</PopoverMoneyText>
                <CountBox>
                    <PointsBoxText>Quantity</PointsBoxText>
                    <AlignCenter>
                        <CountBoxIn>
                            <ButtonIcon onClick={handleClickMinus30} disabled={count30 <= 0} disableRipple><MinusIcon/></ButtonIcon>
                            <InputBox
                                value={count30}
                            />
                            <ButtonIcon onClick={handleClickPlus30}  disableRipple><PlusIcon/></ButtonIcon>
                        </CountBoxIn>
                    </AlignCenter>
                </CountBox>

                <ButtonStyle  onClick={handleClickAlertDialog} disableRipple>
                    <Typography>Send for <span>0 P</span></Typography>
                </ButtonStyle>
            </FlexColumn>
        </React.Fragment>
    );

    const coin50 = (
        <React.Fragment>
            <FlexColumn >
                <img src={PopoverCoin50} alt='coin10'/>
                <PopoverMoneyText>50 P</PopoverMoneyText>
                <CountBox>
                    <PointsBoxText>Quantity</PointsBoxText>
                    <AlignCenter>
                        <CountBoxIn>
                            <ButtonIcon onClick={handleClickMinus50} disabled={count50 <= 0} disableRipple><MinusIcon/></ButtonIcon>
                            <InputBox
                                value={count50}
                            />
                            <ButtonIcon onClick={handleClickPlus50}  disableRipple><PlusIcon/></ButtonIcon>
                        </CountBoxIn>
                    </AlignCenter>
                </CountBox>

                <ButtonStyle onClick={handleClickAlertDialog} disableRipple>
                    <Typography>Send for <span>0 P</span></Typography>
                </ButtonStyle>
            </FlexColumn>
        </React.Fragment>
    );

    const coin100 = (
        <React.Fragment>
            <FlexColumn >
                <img src={PopoverCoin100} alt='coin10'/>
                <PopoverMoneyText>100 P</PopoverMoneyText>
                <CountBox>
                    <PointsBoxText>Quantity</PointsBoxText>
                    <AlignCenter>
                        <CountBoxIn>
                            <ButtonIcon onClick={handleClickMinus100} disabled={count100 <= 0} disableRipple><MinusIcon/></ButtonIcon>
                            <InputBox
                                value={count100}
                            />
                            <ButtonIcon onClick={handleClickPlus100}  disableRipple><PlusIcon/></ButtonIcon>
                        </CountBoxIn>
                    </AlignCenter>
                </CountBox>

                <ButtonStyle onClick={handleClickAlertDialog} disableRipple>
                    <Typography>Send for <span>0 P</span></Typography>
                </ButtonStyle>
            </FlexColumn>
        </React.Fragment>
    );

    const coin500 = (
        <React.Fragment>
            <FlexColumn >
                <img src={PopoverCoin500} alt='coin10'/>
                <PopoverMoneyText>500 P</PopoverMoneyText>
                <CountBox>
                    <PointsBoxText>Quantity</PointsBoxText>
                    <AlignCenter>
                        <CountBoxIn>
                            <ButtonIcon onClick={handleClickMinus500} disabled={count500 <= 0} disableRipple><MinusIcon/></ButtonIcon>
                            <InputBox
                                value={count500}
                            />
                            <ButtonIcon onClick={handleClickPlus500}  disableRipple><PlusIcon/></ButtonIcon>
                        </CountBoxIn>
                    </AlignCenter>
                </CountBox>

                <ButtonStyle onClick={handleClickAlertDialog} disableRipple>
                    <Typography>Send for <span>0 P</span></Typography>
                </ButtonStyle>
            </FlexColumn>
        </React.Fragment>
    );

    return (
        <Container>
            <ContainerIn>
                <div>
                    <AlignCenter>
                        <LiveBox>
                            <LiveIcon/>
                            <Typography>LIVE</Typography>
                        </LiveBox>
                        <TimeText>0:00:10</TimeText>
                    </AlignCenter>

                    <AlignCenterMarginTop>
                        <ShareButton onClick={handleClickShareDialog} disableRipple>
                            <ShareIcon/>
                            <Typography>Share</Typography>
                        </ShareButton>

                        <DotStyle/>

                        <IconColorSize>
                            <ViewersUserIcon/>
                        </IconColorSize>

                        <ViewersText><span>5.5K</span> views</ViewersText>
                    </AlignCenterMarginTop>
                </div>


                <AlignCenter>
                    <ArrowTooltipStyle
                        title={<div>{coin10}</div>}
                        placement="top"
                    >
                        <CoinButton disableRipple>
                            <img src={Coin10} alt='coin10'/>
                        </CoinButton>
                    </ArrowTooltipStyle>

                    <ArrowTooltipStyle
                        title={<div>{coin30}</div>}
                        placement="top"
                    >
                        <CoinButton disableRipple>
                            <img src={Coin30} alt='coin30'/>
                        </CoinButton>
                    </ArrowTooltipStyle>

                    <ArrowTooltipStyle
                        title={<div>{coin50}</div>}
                        placement="top"
                    >
                        <CoinButton disableRipple>
                            <img src={Coin50} alt='coin50'/>
                        </CoinButton>
                    </ArrowTooltipStyle>

                    <ArrowTooltipStyle
                        title={<div>{coin100}</div>}
                        placement="top"
                    >
                        <CoinButton disableRipple>
                            <img src={Coin100} alt='coin100'/>
                        </CoinButton>
                    </ArrowTooltipStyle>

                    <ArrowTooltipStyle
                        title={<div>{coin500}</div>}
                        placement="top"
                    >
                        <CoinButton disableRipple>
                            <img src={Coin500} alt='coin500'/>
                        </CoinButton>
                    </ArrowTooltipStyle>

                    <LineStyle/>

                    <FlexColumnStart>
                        <PointsButton disableRipple>
                            <CoinHandIcon/>
                            <Points>
                                <span>10K</span><br/>
                                points
                            </Points>
                        </PointsButton>

                        <BuyPointsButton disableRipple>
                            <Typography>Buy Points</Typography>
                            <BuyPointsArrow/>
                        </BuyPointsButton>
                    </FlexColumnStart>
                </AlignCenter>
            </ContainerIn>

            <ViewerCommonDialog
                open={shareDialog}
                onClose={handleCloseDialog}
                title={'URL Share'}
                actionBtn={false}
                children={<WatchingShare onClose={handleCloseDialog}/>}
            />

            <ViewerCommonDialog
                open={alertDialog}
                actionBtn={false}
                onClose={handleCloseDialog}
                title={''}
                children={
                    <ViewerAlertDialog
                        children={<Typography>You don't have enough points. Would you like to charge?</Typography>}
                        submitText={'Buy Points'}
                        actionCancel={true}
                        onClose={handleCloseDialog}
                        onClick={handleClickBuyPointsDialog}
                    />
                }
            />

            <ViewerCommonDialog
                open={buyPointsDialog}
                title={'Buy Points'}
                submitText={'Request a Purchase'}
                onClose={handleCloseDialog}
                children={<WatchingBuyPoints/>}
                tooltipOpen={true}
                tooltipChildren={
                    <Typography>
                        Payments are valid for <span>7</span> days<br/> and will be automatically<br/> canceled if not paid.
                    </Typography>
                }
                tooltipBottom={'-33px'}
                tooltipRight={'10px'}
                triangle={TooltipBottomArrowBlue}
                tooltipPlacement={'top-end'}
            />

        </Container>
    );
}

export default WatchingInfo;