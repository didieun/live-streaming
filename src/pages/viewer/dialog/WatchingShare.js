import React from 'react';
import {
    Container, Title, TextStyle, ButtonStyle, JustifyCenter, UrlBox, ButtonIcon
} from "./styles/WatchingShareStyle";
import {ReactComponent as CopyIcon} from "../../common/images/CopyIcon.svg";
import {Typography} from "@mui/material";
import {TooltipStyle} from "../watching/styles/WatchingStyle";

function WatchingShare(props) {
    const {onClose} = props;

    return (
        <Container>
            <Title>URL</Title>

            <UrlBox>
                {/* 툴팁은 드래그 하여 복사 하거나 copy 버튼 클릭 시*/}
                <TooltipStyle
                    title="Link copied to clipboard"
                    placement="bottom"
                >
                    <Typography>https://play.dkjfkfj.com/kdjfl/dkjfoow24945</Typography>
                </TooltipStyle>

                <TooltipStyle
                    title="Link copied to clipboard"
                    placement="bottom"
                >
                    <ButtonIcon disableRipple>
                        <CopyIcon/>
                    </ButtonIcon>
                </TooltipStyle>
            </UrlBox>

            <TextStyle>
                Copy the link to invite them to your stream.
            </TextStyle>

            <JustifyCenter>
                <ButtonStyle onClick={onClose} disableRipple>Cancel</ButtonStyle>
            </JustifyCenter>

        </Container>
    );
}

export default WatchingShare;