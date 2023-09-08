import React from 'react';
import {
    AlignCenter,
    Container,
    TitleText,
    Flex,
    MarginBottom30,
    PointsText,
} from './styles/ExchangeSettlementDialogStyle'
import {ReactComponent as CoinIcon2} from "../../../../../common/images/CoinIcon2.svg";
import DialogNotes from "../../../chat/DialogNotes";

function ExchangeSettlementDialog(props) {

    return (
        <Container>
            <MarginBottom30>
                <AlignCenter>
                    <TitleText>Points to Exchange</TitleText>
                    <AlignCenter>
                        <CoinIcon2/>
                        <PointsText><span>510</span> points</PointsText>
                    </AlignCenter>

                </AlignCenter>
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

export default ExchangeSettlementDialog;