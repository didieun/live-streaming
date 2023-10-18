import * as React from 'react';
import {
    BoxStyle,
    BoxTitle,
    Container,
    FlexMarginBottom,
    Flex,
    BoxText,
    BoxText2, AlignCenter, BoxText3,
    BoxStyle2, StyledInput, SubText, RedText,
    CountBoxIn, PointsBoxIn,
    PointsBoxMoney,
    PointsBoxText, PointsBoxTextColor,
    PointsBoxTitle, ContainerIn, ActionBox, ButtonStyle, ControlButton
} from "./styles/RequestStyle";
import {InputAdornment, Typography} from "@mui/material";
import AdminDialogNotes from "./chat/AdminDialogNotes";
import PopoverCoin10 from "../../common/images/PopoverCoin10.png";
import PopoverCoin30 from "../../common/images/PopoverCoin30.png";
import PopoverCoin50 from "../../common/images/PopoverCoin50.png";
import PopoverCoin100 from "../../common/images/PopoverCoin100.png";
import PopoverCoin500 from "../../common/images/PopoverCoin500.png";

function PointPurchaseRequest(props) {
    const {handleCloseDialog} = props;

    return (
        <Container>
            <ContainerIn>
                <BoxStyle>
                    <BoxTitle>Buyer's Approval Request Point Information</BoxTitle>
                    <FlexMarginBottom>
                        <BoxText>Buyer</BoxText>
                        <BoxText3>User Name</BoxText3>
                    </FlexMarginBottom>

                    <Flex>
                        <BoxText>Purchased<br/>Price Plan</BoxText>

                        <div>
                            <BoxText2>This is the point product that the user requested to purchase.</BoxText2>
                            <PointsBoxIn>
                                <img src={PopoverCoin10} alt={'coin image'}/>
                                <PointsBoxTitle>10 P</PointsBoxTitle>
                                <PointsBoxMoney>$ 7.9</PointsBoxMoney>
                                <AlignCenter>
                                    <PointsBoxText>Quantity</PointsBoxText>
                                    <AlignCenter>
                                        <CountBoxIn>
                                            <Typography>2</Typography>
                                        </CountBoxIn>
                                    </AlignCenter>
                                </AlignCenter>

                                <AlignCenter>
                                    <PointsBoxTextColor>
                                        <span>20 P</span>
                                        $ 16.00
                                    </PointsBoxTextColor>
                                </AlignCenter>
                            </PointsBoxIn>
                        </div>
                    </Flex>
                </BoxStyle>

                <BoxStyle2>
                    <FlexMarginBottom>
                        <BoxText>Market Price</BoxText>
                        <div>
                            <StyledInput
                                type='number'
                                label=""
                                variant="outlined"
                                fullWidth
                                placeholder="16.00"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Typography>﹩</Typography>
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <SubText>
                                * The market price is the actual transaction price, so you don't<br/>
                                &nbsp;&nbsp;&nbsp;have to manually enter or enter anything.<br/>
                                <span>* Buyers cannot see this price, so enter with confidence.</span>
                            </SubText>
                        </div>
                    </FlexMarginBottom>

                    <FlexMarginBottom>
                        <BoxText>Payment validity<br/> period</BoxText>
                        <div>
                            <RedText>D-7</RedText>
                            <SubText>
                                * After payment expires, point purchase request information can<br/>
                                &nbsp;&nbsp;&nbsp;only be verified.
                            </SubText>
                        </div>
                    </FlexMarginBottom>

                    <Flex>
                        <BoxText>Notes</BoxText>
                        <AdminDialogNotes
                            width={450}
                            placeholder={'Leave a message'}
                            tooltipMessage={
                                <Typography>
                                    Enter a message to send to the buyer,<br/>
                                    including the actual transaction price and<br/>
                                    the account to receive the deposit.
                                </Typography>
                            }
                        />
                    </Flex>
                </BoxStyle2>
            </ContainerIn>
            <ActionBox>
                <ButtonStyle onClick={handleCloseDialog} disableRipple>
                    Cancel
                </ButtonStyle>

                <ControlButton disableRipple>
                    Confirm and Send Message
                </ControlButton>
            </ActionBox>
        </Container>
    );
}

export default PointPurchaseRequest;