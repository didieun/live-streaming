import React from 'react';
import {
    ButtonStyle,
    ContentsBox,
    FlexColumn,
    TopBox,
    ButtonIcon,
    ButtonBox,
    CurrentPointsBox,
    TitleText,
    CurrentPointsText,
    PointsBox,
    JustifySpace,
    AlignCenter,
    TextStyle,
    TableContainerBox, PointsList,
    CountBoxIn, InputBox, PointsBoxIn,
    PointsBoxMoney,
    PointsBoxTextColor,
    PointsBoxTitle, ColumnBox,
    TotalBox,
    TotalBoxText,
    TotalBoxTitle,
    PointsBoxText, TotalBoxSpace, NotesBox
} from "./styles/MobileViewerBuyPointsStyle";
import {Box, Dialog, Paper, Slide, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {ReactComponent as MobileCloseIcon} from "../../../common/images/MobileCloseIcon.svg";
import {ReactComponent as SettingDialogCloseIcon} from "../../../common/images/SettingDialogCloseIcon.svg";
import {ReactComponent as InfoIcon} from "../../../common/images/InfoIcon.svg";
import {ReactComponent as PlusIcon} from "../../../common/images/PlusIcon.svg";
import {ReactComponent as MinusIcon} from "../../../common/images/MinusIcon.svg";
import {ReactComponent as CoinIcon} from "../../../common/images/CoinIcon.svg";
import {ReactComponent as CoinIcon2} from "../../../common/images/CoinIcon2.svg";
import TooltipArrowBlue from "../../../common/images/TooltipArrowBlue.svg";
import {ArrowTooltipStyle} from "../main/styles/MobileViewerMainStyle";
import PopoverCoin10 from "../../../common/images/PopoverCoin10.png";
import PopoverCoin30 from "../../../common/images/PopoverCoin30.png";
import PopoverCoin50 from "../../../common/images/PopoverCoin50.png";
import PopoverCoin100 from "../../../common/images/PopoverCoin100.png";
import PopoverCoin500 from "../../../common/images/PopoverCoin500.png";
import MobileViewerNotes from "../notes/MobileViewerNotes";
import TooltipBottomArrowBlue from "../../../common/images/TooltipBottomArrowBlue.svg";

const pointsInfoMessage = (
    <React.Fragment>
        <div>
            <TableContainerBox component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Point Items</TableCell>
                            <TableCell align="left">
                                Face Value<br/>
                                <span>(US $)</span>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="left">10 P</TableCell>
                            <TableCell align="left">$ 7.9</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">30 P</TableCell>
                            <TableCell align="left">$ 22.95</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">50 P</TableCell>
                            <TableCell align="left">$ 38.25</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">100 P</TableCell>
                            <TableCell align="left">$ 76.50</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">500 P</TableCell>
                            <TableCell align="left">$ 382.00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainerBox>
        </div>
    </React.Fragment>
);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function MobileViewerBuyPoints(props) {
    const { open, handleClose } = props;
    const [pointsBtn, setPointsBtn] = React.useState('');
    const [count, setCount] = React.useState(0);
    const [pointsInfo, setPointsInfo] = React.useState(false);

    const pointsList =
        [
            {image: PopoverCoin10, point: '10', money: '7.9'},
            {image: PopoverCoin30, point: '30', money: '22.95'},
            {image: PopoverCoin50, point: '50', money: '38.25'},
            {image: PopoverCoin100, point: '100', money: '76.50'},
            {image: PopoverCoin500, point: '500', money: '382.00'},
        ]

    const handleClickPointsBtn = (value) => {
        setPointsBtn(value)
    };

    const handleClickPlus = () => {
        setCount(count + 1)
    };

    const handleClickMinus = () => {
        setCount(count - 1)
    };

    const handleClickPointsInfo = () => {
        setPointsInfo(true)
    };

    const handleClosePointsInfo = () => {
        setPointsInfo(false)
    };

    const settings = {
        variableWidth: true,
        centerMode: false,
        dots: false,
        speed: 500,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

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
                <Typography>Buy Points</Typography>
            </TopBox>

            <FlexColumn>
                <ContentsBox>
                    <CurrentPointsBox>
                        <TitleText>Current Points</TitleText>
                        <CurrentPointsText><span>95,650</span> point</CurrentPointsText>
                    </CurrentPointsBox>

                    <PointsBox>
                        <JustifySpace>
                            <AlignCenter>
                                <TitleText>Points</TitleText>
                                <ArrowTooltipStyle
                                    open={pointsInfo}
                                    title={
                                        <Box display='flex' flexDirection='column'>
                                            <Box display='flex' justifyContent='space-between' alignItems='center' style={{width: '100%'}}>
                                                <Typography><b>Points Base Price</b></Typography>
                                                <ButtonIcon onClick={handleClosePointsInfo} disableRipple>
                                                    <SettingDialogCloseIcon style={{width: 16, height: 16}}/>
                                                </ButtonIcon>
                                            </Box>
                                            {pointsInfoMessage}
                                        </Box>
                                    }
                                    placement="bottom"
                                    top={'-25px'}
                                    left={'67px'}
                                    triangle={TooltipArrowBlue}
                                >
                                    <ButtonIcon onClick={handleClickPointsInfo} disableRipple>
                                        <InfoIcon/>
                                    </ButtonIcon>
                                </ArrowTooltipStyle>
                            </AlignCenter>
                            <TextStyle>
                                Choose below.
                            </TextStyle>
                        </JustifySpace>

                        <PointsList {...settings}>
                            {pointsList.map((list, i) => (
                                <PointsBoxIn key={i} onClick={() => handleClickPointsBtn(list.point)} select={pointsBtn === list.point}>
                                    <AlignCenter>
                                        <img src={list.image} alt={'coin image'}/>
                                        <ColumnBox>
                                            <PointsBoxTitle>{list.point} P</PointsBoxTitle>
                                            <PointsBoxMoney>$ {list.money}</PointsBoxMoney>
                                        </ColumnBox>

                                    </AlignCenter>

                                    <AlignCenter>
                                        <CountBoxIn>
                                            <ButtonIcon onClick={handleClickMinus} disabled={count <= 0} disableRipple><MinusIcon/></ButtonIcon>
                                            <InputBox
                                                value={count}
                                            />
                                            <ButtonIcon onClick={handleClickPlus}  disableRipple><PlusIcon/></ButtonIcon>
                                        </CountBoxIn>
                                    </AlignCenter>

                                    <AlignCenter>
                                        <PointsBoxTextColor>
                                            <span>0 P</span>
                                            $ 0
                                        </PointsBoxTextColor>
                                    </AlignCenter>
                                </PointsBoxIn>
                            ))}
                        </PointsList>

                        <TotalBox>
                            <TotalBoxTitle>Total Points to buy</TotalBoxTitle>
                            <TotalBoxSpace>
                                <CoinIcon/>
                                <TotalBoxText><span>510</span> point</TotalBoxText>
                            </TotalBoxSpace>

                            <TotalBoxTitle>Total Price to buy</TotalBoxTitle>
                            <TotalBoxSpace>
                                <CoinIcon2/>
                                <TotalBoxText>$ <span>7.66</span></TotalBoxText>
                            </TotalBoxSpace>
                        </TotalBox>

                        <TitleText>Notes</TitleText>
                        <NotesBox>
                            <MobileViewerNotes
                                width={'100%'}
                                placeholder={'Enter a message'}
                            />
                        </NotesBox>

                    </PointsBox>
                </ContentsBox>

                <ButtonBox>
                    <ArrowTooltipStyle
                        open={true}
                        title={
                            <div>
                                <Typography>
                                    Payments are valid for <span>7</span> days<br/> and will be automatically<br/> canceled if not paid.
                                </Typography>
                                <ButtonIcon disableRipple>
                                    <SettingDialogCloseIcon style={{width: 16, height: 16}}/>
                                </ButtonIcon>
                            </div>
                        }
                        placement={'top-end'}
                        bottom={'-33px'}
                        right={'10px'}
                        triangle={TooltipBottomArrowBlue}
                    >
                        <ButtonStyle disableRipple>
                            Request a Purchase
                        </ButtonStyle>
                    </ArrowTooltipStyle>
                </ButtonBox>
            </FlexColumn>
        </Dialog>
    );
}

export default MobileViewerBuyPoints;
