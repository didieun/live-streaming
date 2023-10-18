import * as React from 'react';
import {
    BoxStyle,
    Container,
    FlexMarginBottom,
    Flex,
    BoxText,
    AlignCenter, SubText, FlexEnd, BoxText2, SwitchStyle, FormControlLabelBox,
    NumberText, BoxText3,
    SubTextMargin, StyledTextareaBox,
    CountBoxIn,
    PointsBoxIn,
    PointsBoxMoney,
    PointsBoxText,
    PointsBoxTextColor,
    PointsBoxTitle,
    ButtonIcon, InputBox2, PointsBox, ContainerIn, ActionBox, ButtonStyle,
} from "./styles/ProductStyle";
import {ReactComponent as AveragePriceIcon} from "../../common/images/AveragePriceIcon.svg";
import {ReactComponent as MinusIcon} from "../../common/images/MinusIcon.svg";
import {ReactComponent as PlusIcon} from "../../common/images/PlusIcon.svg";
import {Typography} from "@mui/material";
import PopoverCoin10 from "../../common/images/PopoverCoin10.png";
import PopoverCoin30 from "../../common/images/PopoverCoin30.png";
import PopoverCoin50 from "../../common/images/PopoverCoin50.png";
import PopoverCoin100 from "../../common/images/PopoverCoin100.png";
import PopoverCoin500 from "../../common/images/PopoverCoin500.png";

function ChannelProduct(props) {
    const {handleCloseDialog} = props;
    const [value, setValue] = React.useState(true);
    const [count, setCount] = React.useState(0);

    const handleChangeSwitch = (event) => {
        setValue((prev) => !prev);
    };

    const handleClickPlus = () => {
        setCount(count + 1)
    };

    const handleClickMinus = () => {
        setCount(count - 1)
    };

    return (
        <Container>
            <ContainerIn>
                <BoxStyle>
                    <FlexMarginBottom>
                        <BoxText>Display<br/>Product Name</BoxText>

                        <BoxText3>
                            10P
                        </BoxText3>
                    </FlexMarginBottom>

                    <FlexMarginBottom>
                        <BoxText>Admin<br/>Product Name</BoxText>
                        <BoxText3>
                            10P
                        </BoxText3>
                    </FlexMarginBottom>

                    <FlexMarginBottom>
                        <BoxText>Product Price</BoxText>

                        <div>
                            <AlignCenter>
                                <AveragePriceIcon style={{marginRight: 8}}/>
                                <BoxText2>
                                    $ <b>7.90</b>
                                </BoxText2>
                            </AlignCenter>
                            <SubTextMargin>
                                * The price plan displayed to the user.
                            </SubTextMargin>
                            <PointsBox>
                                <PointsBoxIn>
                                    <img src={PopoverCoin10} alt={'coin image'}/>
                                    <PointsBoxTitle>10 P</PointsBoxTitle>
                                    <PointsBoxMoney>$ 7.9</PointsBoxMoney>
                                    <AlignCenter>
                                        <PointsBoxText>Quantity</PointsBoxText>
                                        <AlignCenter>
                                            <CountBoxIn>
                                                <ButtonIcon onClick={handleClickMinus} disabled={count <= 0} disableRipple><MinusIcon/></ButtonIcon>
                                                <InputBox2
                                                    value={count}
                                                />
                                                <ButtonIcon onClick={handleClickPlus}  disableRipple><PlusIcon/></ButtonIcon>
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
                            </PointsBox>
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