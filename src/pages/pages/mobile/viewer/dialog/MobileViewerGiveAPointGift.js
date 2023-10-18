import React from 'react';
import {
    Container,
    PointsList,
    PointsBoxIn,
    PointsBoxTitle,
    AlignCenter,
    ButtonIcon,
    CountBoxIn,
    InputBox,
    TextStyle, PointsText, ButtonStyle, ButtonBox,
} from "./styles/MobileViewerGiveAPointGiftStyle";
import PopoverCoin10 from "../../../common/images/PopoverCoin10.png";
import PopoverCoin30 from "../../../common/images/PopoverCoin30.png";
import PopoverCoin50 from "../../../common/images/PopoverCoin50.png";
import PopoverCoin100 from "../../../common/images/PopoverCoin100.png";
import PopoverCoin500 from "../../../common/images/PopoverCoin500.png";
import {ReactComponent as PlusIcon} from "../../../common/images/PlusIcon.svg";
import {ReactComponent as MinusIcon} from "../../../common/images/MinusIcon.svg";


function MobileViewerGiveAPointGift(props) {
    const [count, setCount] = React.useState(0);
    const pointsList =
        [
            {image: PopoverCoin10, point: '10'},
            {image: PopoverCoin30, point: '30'},
            {image: PopoverCoin50, point: '50'},
            {image: PopoverCoin100, point: '100'},
            {image: PopoverCoin500, point: '500'},
        ]

    const handleClickPlus = () => {
        setCount(count + 1)
    };

    const handleClickMinus = () => {
        setCount(count - 1)
    };

    const settings = {
        variableWidth: true,
        centerMode: false,
        dots: false,
        speed: 500,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <Container>
            <PointsList {...settings}>
                {pointsList.map((list, i) => (
                    <PointsBoxIn key={i} >
                        <img src={list.image} alt={'coin image'}/>
                        <PointsBoxTitle>{list.point} P</PointsBoxTitle>

                        <TextStyle>
                            Quantity
                        </TextStyle>
                        <AlignCenter>
                            <CountBoxIn>
                                <ButtonIcon onClick={handleClickMinus} disabled={count <= 0} disableRipple><MinusIcon/></ButtonIcon>
                                <InputBox
                                    value={count}
                                />
                                <ButtonIcon onClick={handleClickPlus}  disableRipple><PlusIcon/></ButtonIcon>
                            </CountBoxIn>
                        </AlignCenter>
                    </PointsBoxIn>
                ))}
            </PointsList>
            <TextStyle>
                My Points
            </TextStyle>
            <PointsText>
                <span>10,000</span> P
            </PointsText>

            <ButtonBox>
                <ButtonStyle disableRipple>
                    Send for <span>0</span> P
                </ButtonStyle>
            </ButtonBox>

        </Container>
    );
}

export default MobileViewerGiveAPointGift;