import React from 'react';
import {
    AlignCenter,
    Container,
    ChannelImageBox,
    TitleText,
    ButtonLineStyle,
    FavoriteButton,
    ButtonIcon,
    TagBox, TagBoxIn
} from "./styles/MobileViewerInfoStyle";
import ChannelTestImage from "../../../../common/images/ChannelTestImage.png";
import {Typography} from "@mui/material";
import {ReactComponent as FillHeartIcon} from "../../../../common/images/FillHeartIcon.svg";
import {ReactComponent as HeartIcon} from "../../../../common/images/HeartIcon.svg";
import {ReactComponent as ShareIcon} from "../../../../common/images/ShareIcon.svg";

function MobileViewerInfo(props) {
    const {handleClickChannelInfoOpen, handleClickShareOpen} = props;
    const [favorite, setFavorite] = React.useState(false);
    const tagList =
        [
            {tag: 'tag1'},
            {tag: 'tag2'},
            {tag: 'tag3'},
        ]

    const handleClickFavorite = () => {
        setFavorite(!favorite);
    };

    return (
        <Container>
            <AlignCenter>
                <ChannelImageBox onClick={handleClickChannelInfoOpen}>
                    <img src={ChannelTestImage} alt='channel image'/>
                </ChannelImageBox>
                <TitleText onClick={handleClickChannelInfoOpen}>
                    aaaa123-0aaa
                </TitleText>
                <FavoriteButton onClick={handleClickFavorite} disableRipple>
                    {favorite ?
                        <FillHeartIcon/>
                        :
                        <HeartIcon/>
                    }
                    <Typography>Favorite</Typography>
                    <ButtonLineStyle/>
                    <Typography><span>14.1M</span></Typography>
                </FavoriteButton>

                <ButtonIcon onClick={handleClickShareOpen} disableRipple>
                    <ShareIcon/>
                </ButtonIcon>
            </AlignCenter>

            <TagBox>
                {tagList.map((tag, i) => (
                    <TagBoxIn key={i}>
                        <Typography>#{tag.tag}</Typography>
                    </TagBoxIn>
                ))}
            </TagBox>
        </Container>
    );
}

export default MobileViewerInfo;