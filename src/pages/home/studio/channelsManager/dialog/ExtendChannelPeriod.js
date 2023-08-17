import React from 'react';
import {
    AlignCenter,
    EditContainer,
    TitleText,
    TextStyle,
    FlexMarginBottom,
    Flex,
    ToChangeBox,
    ToChangeTitle,
    ToChangeText,
    ToChangeText2,
    ToChangeButton,
    ButtonBoldText,
    ButtonText, RadioBox, NotesTitle,
} from './styles/ExtendChannelPeriodStyle'
import {ReactComponent as CalendarIcon} from "../../../../common/images/CalendarIcon.svg";
import {ReactComponent as RadioIcon} from "../../../../common/images/RadioIcon.svg";
import {ReactComponent as UnRadioIcon} from "../../../../common/images/UnRadioIcon.svg";
import DialogChat from "../../chat/DialogChat";

function ExtendChannelPeriod(props) {
    const [pricePlan, setPricePlan] = React.useState('');

    const pricePlanList =
        [
            {value: '1', money: '2,300'},
            {value: '3', money: '6,900'},
            {value: '6', money: '13,900'},
            {value: '12', money: '27,900'},
        ]

    const handleClickPricePlanRadio = (event) => {
        setPricePlan(event.target.value)
    };

    const handleClickPricePlanButton = (value) => {
        setPricePlan(value)
    };

    const controlProps = (item) => ({
        checked: pricePlan === item,
        onChange: handleClickPricePlanRadio,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    return (
        <EditContainer>
            <FlexMarginBottom>
                <TitleText>Channel ID</TitleText>
                <div>
                    <TextStyle>abc-12345678</TextStyle>
                </div>
            </FlexMarginBottom>

            <FlexMarginBottom>
                <TitleText>Current Price Plan</TitleText>
                <div>
                    <TextStyle>Basic 1 month</TextStyle>
                </div>
            </FlexMarginBottom>

            <FlexMarginBottom>
                <TitleText>Expiration Date</TitleText>
                <AlignCenter>
                    <CalendarIcon style={{width: 18, height: 18, marginRight: 8}}/>
                    <TextStyle>2023. 06. 08 ~ 2024. 06. 08</TextStyle>
                </AlignCenter>
            </FlexMarginBottom>

            <Flex>
                <TitleText>Remaining Period</TitleText>
                <div>
                    <TextStyle>D-36</TextStyle>
                </div>
            </Flex>

            <ToChangeBox>
                <ToChangeTitle>To Change</ToChangeTitle>
                <FlexMarginBottom>
                    <ToChangeText>Price Plan</ToChangeText>

                    <div>
                        {pricePlanList.map((list, i) => (
                            <ToChangeButton key={i} onClick={() => handleClickPricePlanButton(list.value)}>
                                <Flex>
                                    <RadioBox {...controlProps(list.value)} icon={<UnRadioIcon />} checkedIcon={<RadioIcon />} disableRipple/>
                                    <div>
                                        <ButtonBoldText>Basic {list.value} month</ButtonBoldText>
                                        <ButtonText>Channel {list.value} month available</ButtonText>
                                    </div>
                                </Flex>
                                <ButtonBoldText>$ {list.money}</ButtonBoldText>
                            </ToChangeButton>
                        ))}
                    </div>

                </FlexMarginBottom>
                <Flex>
                    <ToChangeText>Extended Period</ToChangeText>
                    <Flex>
                        <CalendarIcon style={{width: 18, height: 18, marginRight: 8}}/>
                        <ToChangeText2>It will automatically show up when you select a price plan.</ToChangeText2>
                        {/*<TextStyle>2023. 06. 08 ~ 2024. 06. 08</TextStyle>*/}
                    </Flex>
                </Flex>
            </ToChangeBox>

            <Flex>
                <NotesTitle>Notes</NotesTitle>
                <DialogChat
                    width={600}
                    placeholder={'Send a message'}
                />
            </Flex>

        </EditContainer>
    );
}

export default ExtendChannelPeriod;