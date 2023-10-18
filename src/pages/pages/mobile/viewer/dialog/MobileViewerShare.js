import React from 'react';
import {
    Container, Title, TextStyle, UrlBox, ButtonIcon
} from "./styles/MobileViewerShareStyle";
import {ReactComponent as CopyIcon} from "../../../common/images/CopyIcon.svg";
import {Typography} from "@mui/material";

function MobileViewerShare(props) {

    return (
        <Container>
            <Title>URL</Title>

            <UrlBox>
                <Typography>https://play.dkjfkfj.com/kdjfl/dkjfoow24945 https://play.dkjfkfj.com/kdjfl/dkjfoow24945https://play.dkjfkfj.com/kdjfl/dkjfoow24945</Typography>

                <ButtonIcon disableRipple>
                    <CopyIcon/>
                </ButtonIcon>
            </UrlBox>

            <TextStyle>
                Copy the link to invite them to your stream.
            </TextStyle>

        </Container>
    );
}

export default MobileViewerShare;