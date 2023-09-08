import React from 'react';
import {
    AlignCenter,
    Container,
    TitleText,
    Flex,
    MarginBottom30,
    PointsText,
    TextStyle
} from './styles/SettlementDialogStyle'
import {ReactComponent as CoinIcon2} from "../../../../../common/images/CoinIcon2.svg";
import {ReactComponent as CalendarIcon} from "../../../../../common/images/CalendarIcon.svg";
import DialogNotes from "../../../chat/DialogNotes";

function SettlementDialog(props) {

    return (
        <Container>
            <MarginBottom30>
                <Flex>
                    <TitleText>Channel ID</TitleText>
                    <div>
                        <TextStyle>abc-12345678</TextStyle>
                        <TextStyle>abc-12345678</TextStyle>
                        <TextStyle>abc-12345678</TextStyle>
                    </div>
                </Flex>
            </MarginBottom30>

            <MarginBottom30>
                <AlignCenter>
                    <TitleText>To Whom</TitleText>
                    <TextStyle>Chris</TextStyle>
                </AlignCenter>
            </MarginBottom30>

            <MarginBottom30>
                <AlignCenter>
                    <TitleText>Settlement period</TitleText>
                    <AlignCenter>
                        <CalendarIcon style={{width: 18, height: 18, marginRight: 8}}/>
                        <TextStyle>2023. 06. 08 ~ 2024. 06. 08</TextStyle>
                    </AlignCenter>
                </AlignCenter>
            </MarginBottom30>

            <MarginBottom30>
                <Flex>
                    <TitleText>The actual points
                        to send to the streamer.</TitleText>
                    <AlignCenter>
                        <CoinIcon2/>
                        <PointsText><span>510</span> points</PointsText>
                    </AlignCenter>
                </Flex>
            </MarginBottom30>

            <Flex>
                <TitleText>Notes</TitleText>
                <DialogNotes
                    width={450}
                    placeholder={'Leave a message'}
                />
            </Flex>

        </Container>
    );
}

export default SettlementDialog;