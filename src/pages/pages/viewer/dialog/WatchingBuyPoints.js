import React from 'react';
import {
    AlignCenter,
    EditContainer,
    TitleText,
    TextStyle,
    Flex,
    PricePlanBox,
    MarginBottom30,
    ButtonIcon,
    PointsText,
    PointsBox,
    PointsBoxIn,
    PointsBoxTitle,
    PointsBoxMoney,
    PointsBoxText,
    CountBoxIn,
    InputBox,
    PointsBoxTextColor,
    PointsTitleText,
    PointsTitleBox,
    TotalBox,
    TotalBoxTitle,
    TotalBoxText,
    TableContainerBox,
} from './styles/WatchingBuyPointsStyle'
import {ReactComponent as ChatSendIcon} from "../../common/images/ChatSendIcon.svg";
import {ReactComponent as InfoIcon} from "../../common/images/InfoIcon.svg";
import {ReactComponent as ProfileUserIcon} from "../../common/images/ProfileUserIcon.svg";
import PopoverCoin10 from "../../common/images/PopoverCoin10.png";
import PopoverCoin30 from "../../common/images/PopoverCoin30.png";
import PopoverCoin50 from "../../common/images/PopoverCoin50.png";
import PopoverCoin100 from "../../common/images/PopoverCoin100.png";
import PopoverCoin500 from "../../common/images/PopoverCoin500.png";

import {ReactComponent as PlusIcon} from "../../common/images/PlusIcon.svg";
import {ReactComponent as MinusIcon} from "../../common/images/MinusIcon.svg";
import {ReactComponent as CoinIcon} from "../../common/images/CoinIcon.svg";
import {ReactComponent as CoinIcon2} from "../../common/images/CoinIcon2.svg";
import {ReactComponent as SettingDialogCloseIcon} from "../../common/images/SettingDialogCloseIcon.svg";
import TestProfileImage from "../../common/images/TestProfileImage.jpeg";
import {Box, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import TooltipArrowBlue from "../../common/images/TooltipArrowBlue.svg";
import {DialogArrowTooltipStyle} from "../watching/styles/WatchingStyle";
import WatchingDialogNotes from "./WatchingDialogNotes";

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

function WatchingBuyPoints(props) {
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

    return (
        <EditContainer>
            <MarginBottom30>
                <AlignCenter>
                    <TitleText>Current Points</TitleText>
                    <PointsText><span>95,650</span> points</PointsText>
                </AlignCenter>
            </MarginBottom30>

            <MarginBottom30>
                <AlignCenter>
                    <PointsTitleBox>
                        <PointsTitleText>Points</PointsTitleText>
                        <DialogArrowTooltipStyle
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
                            left={'50%'}
                            triangle={TooltipArrowBlue}
                        >
                            <ButtonIcon onClick={handleClickPointsInfo} disableRipple>
                                <InfoIcon/>
                            </ButtonIcon>
                        </DialogArrowTooltipStyle>
                    </PointsTitleBox>

                    <TextStyle>Choose below.</TextStyle>
                </AlignCenter>

                <PricePlanBox>
                    <PointsBox>
                        {pointsList.map((list, i) => (
                            <PointsBoxIn key={i} onClick={() => handleClickPointsBtn(list.point)} select={pointsBtn === list.point}>
                                <img src={list.image} alt={'coin image'}/>
                                <PointsBoxTitle>{list.point} P</PointsBoxTitle>
                                <PointsBoxMoney>$ {list.money}</PointsBoxMoney>
                                <AlignCenter>
                                    <PointsBoxText>Quantity</PointsBoxText>
                                    <AlignCenter>
                                        <CountBoxIn>
                                            <ButtonIcon onClick={handleClickMinus} disabled={count <= 0} disableRipple><MinusIcon/></ButtonIcon>
                                            <InputBox
                                                value={count}
                                            />
                                            <ButtonIcon onClick={handleClickPlus}  disableRipple><PlusIcon/></ButtonIcon>
                                        </CountBoxIn>
                                    </AlignCenter>
                                </AlignCenter>

                                <AlignCenter>
                                    <PointsBoxTextColor>
                                        <span>0 P</span>
                                        $ 0
                                    </PointsBoxTextColor>
                                </AlignCenter>
                            </PointsBoxIn>
                        ))}
                    </PointsBox>

                    <TotalBox>
                        <AlignCenter>
                            <TotalBoxTitle>Total Points to buy</TotalBoxTitle>
                            <AlignCenter>
                                <CoinIcon/>
                                {/*<TotalBoxText>It's calculated automatically when you select points.</TotalBoxText>*/}
                                <TotalBoxText><span>510</span> point</TotalBoxText>
                            </AlignCenter>
                        </AlignCenter>
                        <AlignCenter>
                            <TotalBoxTitle>Total Price to buy</TotalBoxTitle>
                            <AlignCenter>
                                <CoinIcon2/>
                                {/*<TotalBoxText>It's calculated automatically when you select points.</TotalBoxText>*/}
                                <TotalBoxText>$ <span>7.66</span></TotalBoxText>
                            </AlignCenter>
                        </AlignCenter>
                    </TotalBox>

                </PricePlanBox>
            </MarginBottom30>

            <Flex>
                <TitleText>Notes</TitleText>
                <WatchingDialogNotes
                    width={475}
                    placeholder={'Leave a message'}
                />
            </Flex>

        </EditContainer>
    );
}

export default WatchingBuyPoints;