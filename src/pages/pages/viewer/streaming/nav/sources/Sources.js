import React from 'react';
import {
    Container,
    SourcesBox,
    SourcesButton,
    TitleBox,
    TitleText
} from "./styles/SourcesStyle";
import {Typography} from "@mui/material";
import {ReactComponent as StartIcon} from "../../../../common/images/StartIcon.svg";
import {ReactComponent as LayoutIcon} from "../../../../common/images/LayoutIcon.svg";
import {ReactComponent as FocusIcon} from "../../../../common/images/FocusIcon.svg";
import {ReactComponent as ChromecastIcon} from "../../../../common/images/ChromecastIcon.svg";
import {ReactComponent as TextIcon} from "../../../../common/images/TextIcon.svg";
import {ReactComponent as ImageAddIcon} from "../../../../common/images/ImageAddIcon.svg";

function Sources(props) {
    const sourcesList =
        [
            {icon:<LayoutIcon/> ,text: 'Background'},
            {icon:<FocusIcon/> ,text: 'Video Capture'},
            {icon:<ChromecastIcon/> ,text: 'Screen Share'},
            {icon:<TextIcon/> ,text: 'Text'},
            {icon:<ImageAddIcon/> ,text: 'Image'},
        ]

    return (
        <Container>
            <TitleBox>
                <StartIcon/>
                <TitleText>
                    Sources
                </TitleText>
            </TitleBox>
            <SourcesBox>
                {sourcesList.map((list, i) => (
                    <SourcesButton key={i} disableRipple>
                        {list.icon}
                        <Typography>{list.text}</Typography>
                    </SourcesButton>
                ))}
            </SourcesBox>
        </Container>
    );
}

export default Sources;