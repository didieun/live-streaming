import * as React from 'react';
import {
    BoxStyle,
    BoxTitle,
    Container,
    FlexMarginBottom,
    Flex,
    BoxText,
    PurchasedPricePlan,
    PurchasedPricePlanBoldText,
    PurchasedPricePlanText,
    RadioBox,
    BoxText2,
    AlignCenter,
    BoxText3,
    TagBox,
    TagBoxIn,
    BoxStyle2,
    SubText,
    RedText,
    LineStyle,
    CheckBoxTex,
    FormGroupBox,
    ContainerIn,
    ControlButton,
    ActionBoxSpace,
    WarningButton
} from "./styles/RequestStyle";
import {ReactComponent as UnRadioIcon} from "../../common/images/UnRadioIcon.svg";
import {ReactComponent as RadioIcon} from "../../common/images/RadioIcon.svg";
import {ReactComponent as CalendarIcon} from "../../common/images/CalendarIcon.svg";
import {FormControlLabel, Typography, Checkbox} from "@mui/material";
import {ReactComponent as UnChecked} from "../../common/images/UnChecked.svg";
import {ReactComponent as Checked} from "../../common/images/Checked.svg";

function ChannelCheckpointBeforeApproval(props) {
    const {handleClickAlertDialog} = props;
    const [selectedValue, setSelectedValue] = React.useState('true');

    return (
        <Container>
            <ContainerIn>
                <BoxStyle>
                    <BoxTitle>Buyer's Approval Request Channel Information</BoxTitle>
                    <FlexMarginBottom>
                        <BoxText>Buyer</BoxText>
                        <BoxText3>User Name</BoxText3>
                    </FlexMarginBottom>

                    <FlexMarginBottom>
                        <BoxText>Channel ID</BoxText>
                        <BoxText3>abc-12345678</BoxText3>
                    </FlexMarginBottom>

                    <FlexMarginBottom>
                        <BoxText>Purchased<br/>Price Plan</BoxText>

                        <div>
                            <BoxText2>This is the channel product that the user requested to purchase.</BoxText2>
                            <PurchasedPricePlan>
                                <Flex>
                                    <RadioBox checked={selectedValue === 'true'} value={'true'} icon={<UnRadioIcon />} checkedIcon={<RadioIcon />} disableRipple/>
                                    <div>
                                        <PurchasedPricePlanBoldText>Basic 1 month</PurchasedPricePlanBoldText>
                                        <PurchasedPricePlanText>Channel 1 month available</PurchasedPricePlanText>
                                    </div>
                                </Flex>
                                <PurchasedPricePlanBoldText>$ 2,300</PurchasedPricePlanBoldText>
                            </PurchasedPricePlan>
                        </div>

                    </FlexMarginBottom>
                    <FlexMarginBottom>
                        <BoxText>Extended Period</BoxText>
                        <AlignCenter>
                            <CalendarIcon style={{width: 18, height: 18, marginRight: 8}}/>
                            <BoxText2>2023. 06. 08 ~ 2024. 06. 08</BoxText2>
                        </AlignCenter>
                    </FlexMarginBottom>

                    <Flex>
                        <BoxText>Tags</BoxText>
                        <TagBox>
                            <TagBoxIn disableRipple>
                                <Typography>#tag123</Typography>
                            </TagBoxIn>

                            <TagBoxIn disableRipple>
                                <Typography>#tag123</Typography>
                            </TagBoxIn>

                            <TagBoxIn disableRipple>
                                <Typography>#tag123</Typography>
                            </TagBoxIn>
                        </TagBox>
                    </Flex>
                </BoxStyle>

                <BoxStyle2>
                    <FlexMarginBottom>
                        <BoxText>Market Price</BoxText>
                        <div>
                            <BoxText3>$ 2,300</BoxText3>
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
                                <span>
                                    * Buyers can temporarily own the channel ID for 7 days from the<br/>
                                    &nbsp;&nbsp;&nbsp;date of the channel purchase request. In the meantime, please<br/>
                                    &nbsp;&nbsp;&nbsp;negotiate the actual transaction price with the buyer and process<br/>
                                    &nbsp;&nbsp;&nbsp;approval.<br/>
                                </span>
                                * After payment expires, channel purchase request information<br/>
                                &nbsp;&nbsp;&nbsp;can only be verified.
                            </SubText>
                        </div>
                    </FlexMarginBottom>

                    <LineStyle/>

                    <CheckBoxTex>
                        Please check all reviews below<br/>
                        before approving the use of <span>Buyer’s user name'</span>s channel.
                    </CheckBoxTex>
                    <FormGroupBox>
                        <FormControlLabel control={<Checkbox checkedIcon={<Checked />} icon={<UnChecked />}/>} label=" 1. Have you checked the channel's basic information (channel ID, usage period, tags)?" />
                        <FormControlLabel control={<Checkbox checkedIcon={<Checked />} icon={<UnChecked />}/>} label=" 2. Have you checked the price plan and actual transaction price?" />
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

export default ChannelCheckpointBeforeApproval;