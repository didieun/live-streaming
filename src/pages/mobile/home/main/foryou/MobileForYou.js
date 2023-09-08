import React from 'react';
import {Container, TagBox, TagListBox, TitleText} from "./styles/MobileForYouStyle";
import {Typography} from "@mui/material";
import MobileMainStreaming from "./MobileMainStreaming";
import MobileChannels from "./MobileChannels";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MobileForYou() {
    const [tagSelect, setTagSelect] = React.useState(0);
    const tagList = [
        {tag: 'ALL'},
        {tag: 'tag1'},
        {tag: 'tag2'},
        {tag: 'tag3'},
        {tag: 'tag4'},
        {tag: 'tag5'},
        {tag: 'tag6'},
        {tag: 'tag7'},
        {tag: 'tag8'},
    ];

    const handleClickTag = (value) => {
        setTagSelect(value);
    };

    const settings = {
        variableWidth: true,
        dots: false,
        speed: 500,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
    };

    return (
        <Container>
            <MobileMainStreaming/>
            <TitleText>Recommended Channels</TitleText>

            <TagListBox {...settings}>
                {tagList.map((tag, i) => (
                    <TagBox
                        key={i}
                        onClick={() => handleClickTag(i)}
                        select={tagSelect === i}
                        disableRipple
                    >
                        <Typography>
                            {tag.tag === 'ALL' ?
                                ''
                                :
                                '#'
                            }
                            {tag.tag}
                        </Typography>
                    </TagBox>
                ))}
            </TagListBox>
            <MobileChannels/>
        </Container>
    );
}

export default MobileForYou;