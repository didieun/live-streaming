import React from 'react';
import {
    AlignCenter,
    ButtonIcon,
    Container,
    PositionBox,
    PositionButton,
    SubVideoBox,
    SubVideoBoxIn,
    SubVideoIconButton,
    SubVideoIconButtonShow,
    TitleText,
    VideoBox,
    PopoverBox,
    PopoverButton
} from "./styles/StreamingContentsStyle";
import {ReactComponent as StreamingEditIcon} from "../../../common/images/StreamingEditIcon.svg";
import {ReactComponent as StreamingEditArrowIcon} from "../../../common/images/StreamingEditArrowIcon.svg";
import {ReactComponent as MinusIcon} from "../../../common/images/ViewerMinusIcon.svg";
import {ReactComponent as PlusIcon} from "../../../common/images/ViewerPlusIcon.svg";
import {ReactComponent as LayoutScaleIcon} from "../../../common/images/LayoutScaleIcon.svg";
import {ReactComponent as PlusIcon2} from "../../../common/images/PlusIcon2.svg";
import {ReactComponent as MinusIcon2} from "../../../common/images/MinusIcon2.svg";
import {TooltipStyle} from "../styles/StreamingStyle";

function StreamingContents(props) {
    const [hidden, setHidden] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [layout, setLayout] = React.useState('bottomLeft');

    const handleClickSubVideoShow = () => {
        setHidden(true);
    };

    const handleClickSubVideoHidden = () => {
        setHidden(false);
    };

    const handleClickLayout = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseLayout = () => {
        setAnchorEl(null);
    };

    const handleClickLayoutOn = (value) => {
        setLayout(value);
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Container>
            <AlignCenter>
                <TooltipStyle
                    title="Edit"
                    placement="bottom"
                >
                    <ButtonIcon disableRipple>
                        <StreamingEditIcon/>
                    </ButtonIcon>
                </TooltipStyle>

                <TitleText>Title</TitleText>
                <ButtonIcon disableRipple>
                    <StreamingEditArrowIcon/>
                </ButtonIcon>
            </AlignCenter>

            <VideoBox>
                {hidden ?
                    <SubVideoIconButtonShow onClick={handleClickSubVideoHidden} disableRipple>
                        <PlusIcon/>
                    </SubVideoIconButtonShow>
                    :
                    <SubVideoBox>
                        <SubVideoBoxIn>
                            <SubVideoIconButton onClick={handleClickSubVideoShow} disableRipple>
                                <MinusIcon/>
                            </SubVideoIconButton>

                            <PositionBox>
                                <PositionButton aria-describedby={id} onClick={handleClickLayout} disableRipple>
                                    {layout === 'topLeft' ?
                                        <LayoutScaleIcon style={{transform: 'scaleY(-1)'}}/>
                                        :
                                        layout === 'topRight' ?
                                            <LayoutScaleIcon style={{transform: 'scaleX(-1) scaleY(-1)'}}/>
                                            :
                                            layout === 'bottomLeft' ?
                                                <LayoutScaleIcon/>
                                                :
                                                <LayoutScaleIcon style={{transform: 'scaleX(-1)'}}/>

                                    }

                                </PositionButton>
                            </PositionBox>
                        </SubVideoBoxIn>
                    </SubVideoBox>
                }
            </VideoBox>

            <PopoverBox
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleCloseLayout}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <AlignCenter>
                    <PopoverButton
                        select={layout === 'topLeft'}
                        onClick={() => handleClickLayoutOn('topLeft')}
                        disableRipple
                    >
                        <LayoutScaleIcon style={{transform: 'scaleY(-1)'}}/>
                    </PopoverButton>

                    <PopoverButton
                        select={layout === 'topRight'}
                        onClick={() => handleClickLayoutOn('topRight')}
                        disableRipple
                    >
                        <LayoutScaleIcon style={{transform: 'scaleX(-1) scaleY(-1)'}}/>
                    </PopoverButton>

                    <PopoverButton disableRipple>
                        <PlusIcon2/>
                    </PopoverButton>
                </AlignCenter>

                <AlignCenter>
                    <PopoverButton
                        select={layout === 'bottomLeft'}
                        onClick={() => handleClickLayoutOn('bottomLeft')}
                        disableRipple
                    >
                        <LayoutScaleIcon/>

                    </PopoverButton>

                    <PopoverButton
                        select={layout === 'bottomRight'}
                        onClick={() => handleClickLayoutOn('bottomRight')}
                        disableRipple
                    >
                        <LayoutScaleIcon style={{transform: 'scaleX(-1)'}}/>
                    </PopoverButton>

                    <PopoverButton disableRipple>
                        <MinusIcon2/>
                    </PopoverButton>
                </AlignCenter>

            </PopoverBox>
        </Container>
    );
}

export default StreamingContents;