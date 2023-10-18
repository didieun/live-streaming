import * as React from 'react';
import {
    BoxStyle,
    BoxTitle,
    Container,
    FlexMarginBottom,
    Flex,
    BoxText,
    BoxText3,
    BoxStyle2,
    SubText,
    LineStyle,
    CheckBoxTex,
    FormGroupBox,
    PointText,
    ContainerIn,
    WarningButton,
    ControlButton,
    ActionBoxSpace
} from "./styles/RequestStyle";
import {FormControlLabel, Checkbox} from "@mui/material";
import {ReactComponent as UnChecked} from "../../common/images/UnChecked.svg";
import {ReactComponent as Checked} from "../../common/images/Checked.svg";

function ExchangeCheckpointBeforeApproval(props) {
    const {handleClickAlertDialog} = props;

    return (
        <Container>
            <ContainerIn>
                <BoxStyle>
                    <BoxTitle>User's Approval Request Information</BoxTitle>
                    <FlexMarginBottom>
                        <BoxText>User Name</BoxText>
                        <BoxText3>User Name</BoxText3>
                    </FlexMarginBottom>

                    <Flex>
                        <BoxText>Points Requested<br/> for Exchange</BoxText>
                        <PointText>
                            <span>10</span> point
                        </PointText>
                    </Flex>
                </BoxStyle>

                <BoxStyle2>
                    <FlexMarginBottom>
                        <BoxText>Exchange<br/> Money</BoxText>
                        <div>
                            <BoxText3>$ 2,300</BoxText3>
                            <SubText>
                                * This amount, which you have recorded, is the transfer amount<br/>
                                &nbsp;&nbsp;&nbsp;you need to send to the user.<br/>
                                <span>* Buyers cannot see this price, so enter with confidence.</span>
                            </SubText>
                        </div>
                    </FlexMarginBottom>

                    <LineStyle/>

                    <CheckBoxTex>
                        Please check all reviews below, before approving and <br/>
                        transferring the exchange amount to <span>user name</span>'s channel.
                    </CheckBoxTex>
                    <FormGroupBox>
                        <FormControlLabel control={<Checkbox checkedIcon={<Checked />} icon={<UnChecked />}/>} label="1. Have you checked the exchange basic information (user ID, points requested for exchange)?" />
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

export default ExchangeCheckpointBeforeApproval;