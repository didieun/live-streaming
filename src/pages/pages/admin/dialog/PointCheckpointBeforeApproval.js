import * as React from 'react';
import {
    BoxStyle,
    BoxTitle,
    Container,
    FlexMarginBottom,
    Flex,
    BoxText,
    BoxText2,
    AlignCenter,
    BoxText3,
    BoxStyle2,
    SubText,
    RedText,
    LineStyle,
    CheckBoxTex,
    FormGroupBox,
    PointsBoxIn,
    PointsBoxTitle,
    PointsBoxMoney,
    PointsBoxText,
    CountBoxIn,
    PointsBoxTextColor,
    ContainerIn,
    WarningButton,
    ControlButton,
    ActionBoxSpace
} from "./styles/RequestStyle";
import {FormControlLabel, Typography, Checkbox} from "@mui/material";
import {ReactComponent as UnChecked} from "../../common/images/UnChecked.svg";
import {ReactComponent as Checked} from "../../common/images/Checked.svg";
import PopoverCoin10 from "../../common/images/PopoverCoin10.png";
import PopoverCoin30 from "../../common/images/PopoverCoin30.png";
import PopoverCoin50 from "../../common/images/PopoverCoin50.png";
import PopoverCoin100 from "../../common/images/PopoverCoin100.png";
import PopoverCoin500 from "../../common/images/PopoverCoin500.png";

function PointCheckpointBeforeApproval(props) {
    const {handleClickAlertDialog} = props;

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
                            <BoxText3>$ 16.00</BoxText3>
                            <SubText>
                                * The market price is the actual transaction price.<br/>
                                <span>* Buyers cannot see this price, so enter with confidence.</span>
                            </SubText>
                        </div>
                    </FlexMarginBottom>

                    <FlexMarginBottom>
                        <BoxText>Payment validity<br/> period</BoxText>
                        <div>
                            <RedText>D-7</RedText>
                            <SubText>
                                * After payment expires, channel purchase request information<br/>
                                &nbsp;&nbsp;&nbsp;can only be verified.
                            </SubText>
                        </div>
                    </FlexMarginBottom>

                    <LineStyle/>

                    <CheckBoxTex>
                        Please check all reviews below,<br/>
                        before approving to issue points to <span>Buyer’s user name</span>.
                    </CheckBoxTex>
                    <FormGroupBox>
                        <FormControlLabel control={<Checkbox checkedIcon={<Checked />} icon={<UnChecked />}/>} label="1. Have you checked the basic information on issued points (Buyer ID, Purchased price plan)?" />
                        <FormControlLabel control={<Checkbox checkedIcon={<Checked />} icon={<UnChecked />}/>} label="2. Have you checked the face value and actual transaction price?" />
                    </FormGroupBox>
                </BoxStyle2>
            </ContainerIn>
            <ActionBoxSpace>
                <WarningButton disableRipple>
                    Reject
                </WarningButton>

                <ControlButton onClick={handleClickAlertDialog} disableRipple>
                    Approve
                </ControlButton>
            </ActionBoxSpace>
        </Container>
    );
}

export default PointCheckpointBeforeApproval;