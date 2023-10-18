import * as React from 'react';
import {
    BoxStyle,
    Container,
    FlexMarginBottom,
    Flex,
    BoxText,
    AlignCenter, SubText, FlexEnd, BoxText2, SwitchStyle, FormControlLabelBox,
    NumberText, BoxText3,
    PurchasedPricePlan,
    PurchasedPricePlanBoldText,
    PurchasedPricePlanText, SubTextMargin, StyledTextareaBox, ContainerIn, ActionBox, ButtonStyle
} from "./styles/ProductStyle";
import {ReactComponent as AveragePriceIcon} from "../../common/images/AveragePriceIcon.svg";
import {Typography} from "@mui/material";

function ChannelProduct(props) {
    const {handleCloseDialog} = props;
    const [value, setValue] = React.useState(true);

    const handleChangeSwitch = (event) => {
        setValue((prev) => !prev);
    };

    return (
        <Container>
            <ContainerIn>
                <BoxStyle>
                    <FlexMarginBottom>
                        <BoxText>Display<br/>Product Name</BoxText>

                        <BoxText3>
                            Basic 1 month
                        </BoxText3>
                    </FlexMarginBottom>

                    <FlexMarginBottom>
                        <BoxText>Admin<br/>Product Name</BoxText>
                        <BoxText3>
                            Basic 1 month
                        </BoxText3>
                    </FlexMarginBottom>

                    <FlexMarginBottom>
                        <BoxText>Period</BoxText>
                        <BoxText2>
                            <b>1</b> month(s)
                        </BoxText2>
                    </FlexMarginBottom>
                    <FlexMarginBottom>
                        <BoxText>Product Price</BoxText>

                        <div>
                            <AlignCenter>
                                <AveragePriceIcon style={{marginRight: 8}}/>
                                <BoxText2>
                                    $ <b>2,300</b>
                                </BoxText2>
                            </AlignCenter>
                            <SubTextMargin>
                                * The price plan displayed to the user.
                            </SubTextMargin>
                            <PurchasedPricePlan>
                                <Flex>
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
                        <BoxText>Display</BoxText>
                        <div>
                            <FormControlLabelBox
                                control={<SwitchStyle checked={value} onChange={handleChangeSwitch} sx={{ m: 1 }} disableRipple/>}
                                label={value ? 'Yes':'No'}
                            />

                            <SubText>
                                * This product is exposed to users.
                            </SubText>
                        </div>
                    </FlexMarginBottom>

                    <Flex>
                        <BoxText>Notes</BoxText>
                        <div>
                            <div>
                                <StyledTextareaBox>
                                    <Typography>
                                        • A meeting is required to determine whether to maintain or not.
                                    </Typography>
                                </StyledTextareaBox>

                                <FlexEnd>
                                    <NumberText>
                                        0 / 5,000
                                    </NumberText>
                                </FlexEnd>
                            </div>
                            <SubText>
                                * This memo is only visible to administrators to manage channel<br/>
                                &nbsp;&nbsp;&nbsp;product history.
                            </SubText>
                        </div>
                    </Flex>
                </BoxStyle>
            </ContainerIn>
            <ActionBox>
                <ButtonStyle onClick={handleCloseDialog} disableRipple>
                    Close
                </ButtonStyle>
            </ActionBox>
        </Container>
    );
}

export default ChannelProduct;