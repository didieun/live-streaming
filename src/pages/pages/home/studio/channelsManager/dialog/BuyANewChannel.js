import React from 'react';
import {
    AlignCenter,
    EditContainer,
    TitleText,
    TextStyle,
    Flex,
    ToChangeButton,
    ButtonBoldText,
    ButtonText,
    RadioBox,
    ChannelBox,
    DuplicateCheckButton,
    SubText,
    RedSubText,
    ChannelNumberBox,
    WarningBox,
    CheckBox,
    NumberText,
    BoldTextStyle,
    PricePlanBox,
    MarginBottom30,
    AddTagButton,
    ButtonIcon,
    JustifyEnd,
    TagBox,
    TagsBox,
    TagBoxWidth,
} from './styles/BuyANewChannelStyle'
import {ReactComponent as CalendarIcon} from "../../../../common/images/CalendarIcon.svg";
import {ReactComponent as RadioIcon} from "../../../../common/images/RadioIcon.svg";
import {ReactComponent as UnRadioIcon} from "../../../../common/images/UnRadioIcon.svg";
import {ReactComponent as InfoIcon} from "../../../../common/images/InfoIcon.svg";
import {ReactComponent as CheckBrokenIcon} from "../../../../common/images/CheckBrokenIcon.svg";
import {ReactComponent as TagCloseIcon} from "../../../../common/images/TagCloseIcon.svg";
import {OutlinedInput, Typography} from "@mui/material";
import TagsSearch from "./TagsSearch";
import DialogNotes from "../../chat/DialogNotes";

function BuyANewChannel(props) {
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
            <MarginBottom30>
                <AlignCenter>
                    <TitleText>Channel ID</TitleText>
                    <AlignCenter>
                        <ChannelBox variant="outlined" error={false}>
                            <OutlinedInput placeholder={'Enter 3 to 12 digits.'}/>
                        </ChannelBox>

                        <DuplicateCheckButton disableRipple>
                            Duplicate Check
                        </DuplicateCheckButton>
                    </AlignCenter>
                </AlignCenter>
                <ChannelNumberBox>
                    <div>
                        {/*<WarningBox>*/}
                        {/*    <InfoIcon/>*/}
                        {/*    <Typography>ID avThis ID is already in use.</Typography>*/}
                        {/*    /!*<Typography>Please enter at least 3 digits.</Typography>*!/*/}
                        {/*</WarningBox>*/}

                        <CheckBox>
                            <CheckBrokenIcon/>
                            <Typography>ID available</Typography>
                        </CheckBox>
                    </div>
                    <NumberText>0 / 12</NumberText>
                </ChannelNumberBox>
                <SubText>
                    * Enter 3 to 12 digits using English letters, numbers, and hyphens &nbsp;&nbsp;&nbsp;without case sensitivity.
                </SubText>
                <RedSubText>
                    * Channel ID cannot be modified after purchase approval.
                </RedSubText>
            </MarginBottom30>

            <MarginBottom30>
                <AlignCenter>
                    <TitleText>Price Plan</TitleText>

                    <TextStyle>Choose below.</TextStyle>
                </AlignCenter>

                <PricePlanBox>
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
                </PricePlanBox>
            </MarginBottom30>

            <MarginBottom30>
                <AlignCenter>
                    <TitleText>Expiration Date</TitleText>
                    <AlignCenter>
                        <CalendarIcon style={{width: 18, height: 18, marginRight: 8}}/>
                        <BoldTextStyle>2023. 06. 08 ~ 2024. 06. 08</BoldTextStyle>
                    </AlignCenter>
                </AlignCenter>
            </MarginBottom30>

            <MarginBottom30>
                <Flex>
                    <TitleText>Notes</TitleText>
                    <DialogNotes
                        width={450}
                        placeholder={'Leave a message'}
                    />
                </Flex>
            </MarginBottom30>

            <Flex>
                <TitleText>Tags</TitleText>
                <TagBoxWidth>
                    <AlignCenter>
                        <div>
                            <TagsSearch width={339}/>

                            <JustifyEnd>
                                <NumberText>0 / 25</NumberText>
                            </JustifyEnd>
                        </div>
                        <AddTagButton disableRipple>
                            Add Tag
                        </AddTagButton>
                    </AlignCenter>

                    <TagsBox>
                        <TagBox>
                            <Typography>game</Typography>
                            <ButtonIcon disableRipple>
                                <TagCloseIcon/>
                            </ButtonIcon>
                        </TagBox>
                    </TagsBox>
                </TagBoxWidth>
            </Flex>
            <SubText>
                * Add up to 3 tags. Each tag can be 25 characters long with no &nbsp;&nbsp;&nbsp;spaces or numbers.
            </SubText>
            <SubText>
                * Add at least one tag.
            </SubText>
            <SubText>
                * After purchasing the channel, it can be edited in Edit Channel.
            </SubText>
        </EditContainer>
    );
}

export default BuyANewChannel;