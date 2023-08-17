import React from 'react';
import {ReactComponent as EarnedIcon} from "../../../../../../common/images/EarnedIcon.svg";

//공통 css
import {
    AlignCenter, BoxStyle,
    ContentsIn,
    IconMargin,
    IconTitleBlue,
    JustifyCenter,
    PointsTextBlue, TextStyle
} from "../../../styles/PointsBoxStyle";

function ExchangeHistoryPurchaseBox(props) {

    return (
        <JustifyCenter>
            <ContentsIn>
                <BoxStyle>
                    <AlignCenter>
                        <EarnedIcon/>

                        <IconMargin>
                            <IconTitleBlue>Accumulated Charged</IconTitleBlue>

                            <PointsTextBlue>
                                <span>12,340</span> points
                            </PointsTextBlue>
                        </IconMargin>
                    </AlignCenter>
                </BoxStyle>

                <TextStyle>
                    데이터 생성 시작일: YYYY. MM. DD. ~ 현재일: YYYY. MM. DD.
                </TextStyle>
            </ContentsIn>
        </JustifyCenter>
    );
}

export default ExchangeHistoryPurchaseBox;