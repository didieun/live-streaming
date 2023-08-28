import React from 'react';
import {
    Container,
    ContentsBox,
    EmptyBox,
    EmptyText,
    TitleText,
    Top,
    TextStyle,
    FlexRow,
} from "./styles/ActivityStyle";
import {ReactComponent as ActivityIcon} from "../../../../common/images/ActivityIcon.svg";
import {ReactComponent as BellRingingIcon} from "../../../../common/images/BellRingingIcon.svg";
import {ReactComponent as GiftIcon} from "../../../../common/images/GiftIcon.svg";
import {ReactComponent as FillHeartIcon} from "../../../../common/images/FillHeartIcon.svg";

function Activity(props) {
    const [empty, setEmpty] = React.useState(true);

    return (
        <Container>
            <Top>
                <ActivityIcon/>
                <TitleText>
                    Activity Feed
                </TitleText>
            </Top>

            <ContentsBox>
                {empty ?
                    <div>
                        {/* 선물 */}
                        <FlexRow>
                            <GiftIcon/>
                            <TextStyle>
                                <span>Chris</span> is sent a <span>30P</span> gift you<br/> <span>•</span> 2 hours ago
                            </TextStyle>
                        </FlexRow>
                        {/* 팔로잉 */}
                        <FlexRow>
                            <FillHeartIcon/>
                            <TextStyle>
                                <span>Chris</span> likes a channel<br/><span>•</span> 2 hours ago
                            </TextStyle>

                        </FlexRow>
                    </div>
                    :
                    <EmptyBox>
                        <BellRingingIcon/>
                        <EmptyText>
                            When someone sends you a gift,<br/>
                            it will appear here!
                        </EmptyText>
                    </EmptyBox>
                }
            </ContentsBox>
        </Container>
    );
}

export default Activity;