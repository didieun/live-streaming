import React from 'react';
import {
    Container,
    Flex,
    NoImageBox,
    TitleText,
    FlexColumn,
    JustifyEnd,
    NumberText,
    StyledTextarea,
    AlignCenter,
    FormControlBox,
    Menu,
    FormControlFontSizeBox,
    ButtonIcon,
    ImageBox,
    FontStyle,
    IconBox,
    ImageBoxText,
    IconSelect,
    PopoverBox,
    PopoverBoxIn,
    ColorBoxIn,
    ListBox,
    ErrorStyledTextarea, JustifySpace, ErrorText
} from "./styles/TextPropertiesDialogStyle";
import {ReactComponent as SceneTextIcon} from "../../common/images/SceneTextIcon.svg";
import {ReactComponent as FontArrowIcon} from "../../common/images/FontArrowIcon.svg";
import {ReactComponent as FontBoldIcon} from "../../common/images/FontBoldIcon.svg";
import {ReactComponent as FontItalicIcon} from "../../common/images/FontItalicIcon.svg";
import {ReactComponent as FontUnderlineIcon} from "../../common/images/FontUnderlineIcon.svg";
import {ReactComponent as FontLineThroughIcon} from "../../common/images/FontLineThroughIcon.svg";
import {ReactComponent as FontColorIcon} from "../../common/images/FontColorIcon.svg";
import {ReactComponent as FontEmojiIcon} from "../../common/images/FontEmojiIcon.svg";
import {ReactComponent as FontLeftIcon} from "../../common/images/FontLeftIcon.svg";
import {ReactComponent as FontCenterIcon} from "../../common/images/FontCenterIcon.svg";
import {ReactComponent as FontRightIcon} from "../../common/images/FontRightIcon.svg";
import {ReactComponent as StreamingErrorIcon} from "../../common/images/StreamingErrorIcon.svg";
import {Box, Select, Typography} from "@mui/material";

function TextPropertiesDialog(props) {
    const fontFamilyList = [
        {fontFamily: 'Roboto'},
        {fontFamily: 'Inter'},
        {fontFamily: 'Nanum Gothic'},
        {fontFamily: 'Fira Sans'},
        {fontFamily: 'Ubuntu'},
        {fontFamily: 'Segoe UI'},
        {fontFamily: 'Oxygen'},
    ];
    const fontSizeList = [
        {fontSize: '10px'},
        {fontSize: '12px'},
        {fontSize: '14px'},
        {fontSize: '18px'},
        {fontSize: '24px'},
        {fontSize: '36px'},
        {fontSize: '48px'},
    ];
    const PaletteList = [
        {color: '#000'},
        {color: '#404040'},
        {color: '#7F7F7F'},
        {color: '#BFBFBF'},
        {color: '#fff'},
        {color: '#F2441D'},
        {color: '#F29D1D'},
        {color: '#FFFF54'},
        {color: '#BCFD53'},
        {color: '#76B856'},
        {color: '#2E6DF6'},
        {color: '#2548AC'},
        {color: '#0F0372'},
        {color: '#961DC0'},
        {color: '#5B2F8B'},
    ];
    const [fontFilter, setFontFilter] = React.useState('Roboto');
    const [fontSizeFilter, setFontSizeFilter] = React.useState('14px');
    const [fontBold, setFontBold] = React.useState(false);
    const [fontStyle, setFontStyle] = React.useState(false);
    const [fontUnderline, setFontUnderline] = React.useState(false);
    const [fontLineThrough, setFontLineThrough] = React.useState(false);
    const [colorAnchorEl, setColorAnchorEl] = React.useState(null);
    const [palette, setPalette] = React.useState('#fff');
    const [emojiAnchorEl, setEmojiAnchorEl] = React.useState(false);
    const [emoji, setEmoji] = React.useState(false);
    const [fontLeft, setFontLeft] = React.useState(false);
    const [fontCenter, setFontCenter] = React.useState(false);
    const [fontRight, setFontRight] = React.useState(false);

    const colorOpen = Boolean(colorAnchorEl);
    const colorId = colorOpen ? 'simple-popover' : undefined;
    const emojiOpen = Boolean(emojiAnchorEl);
    const emojiId = emojiOpen ? 'simple-popover' : undefined;

    const handleChangeFontFilter = (event) => {
        setFontFilter(event.target.value);
    };

    const handleChangeFontSizeFilter = (event) => {
        setFontSizeFilter(event.target.value);
    };

    const handleClickFontBold = () => {
        setFontBold(!fontBold);
    };

    const handleClickFontStyle = () => {
        setFontStyle(!fontStyle);
    };

    const handleClickFontUnderline = () => {
        setFontUnderline(!fontUnderline);
    };

    const handleClickFontLineThrough = () => {
        setFontLineThrough(!fontLineThrough);
    };

    const handleClickFontColor = (event) => {
        setColorAnchorEl(event.currentTarget);
    };

    const handleClickPalette = (value) => {
        setPalette(value);
    };

    const handleClosePopover = () => {
        setColorAnchorEl(null);
        setEmojiAnchorEl(null);
    };

    const handleClickEmoji = (event) => {
        setEmoji(!emoji);
        setEmojiAnchorEl(event.currentTarget);
    };

    const handleClickFontLeft = () => {
        setFontLeft(!fontLeft);
        setFontCenter(false);
        setFontRight(false);
    };

    const handleClickFontCenter = () => {
        setFontLeft(false);
        setFontCenter(!fontCenter);
        setFontRight(false);
    };

    const handleClickFontRight = () => {
        setFontLeft(false);
        setFontCenter(false);
        setFontRight(!fontRight);
    };

    return (
        <Container>
            {/*<NoImageBox>*/}
            {/*    <SceneTextIcon/>*/}
            {/*    <ImageBoxText>Preview</ImageBoxText>*/}
            {/*</NoImageBox>*/}

            <ImageBox>
                <FontStyle style={{fontWeight: 800}}>Text</FontStyle>
                <FontStyle style={{fontStyle: 'italic'}}>Text</FontStyle>
                <FontStyle style={{textDecoration: 'underline'}}>Text</FontStyle>
                <FontStyle style={{textDecoration: 'line-through'}}>Text</FontStyle>
                <FontStyle style={{color: '#F2441D'}}>Text</FontStyle>
                <FontStyle style={{textAlign: 'left'}}>Text</FontStyle>
                <FontStyle style={{textAlign: 'center'}}>Text</FontStyle>
                <FontStyle style={{textAlign: 'right'}}>Text</FontStyle>
            </ImageBox>

            <Flex>
                <TitleText>Font</TitleText>
                <FlexColumn>
                    <AlignCenter>
                        <FormControlBox variant="outlined">
                            <Select
                                id="filter"
                                value={fontFilter}
                                onChange={handleChangeFontFilter}
                                IconComponent={(props) => (
                                    <Box>
                                        <FontArrowIcon {...props}/>
                                    </Box>
                                )}
                                MenuProps={{
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "center"
                                    },
                                    transformOrigin: {
                                        vertical: 'top',
                                        horizontal: 'center',
                                    },
                                    PaperProps: {
                                        sx: {
                                            '&.MuiPaper-root':{
                                                boxShadow: 'none',
                                                border: '1px solid #6F6F6F',
                                                boxSizing:'border-box',
                                                background:'#212121',
                                                '& ul': {
                                                    padding: '6px 0',
                                                    '& p': {
                                                        fontSize: '0.875rem',
                                                    }
                                                }
                                            },
                                        }
                                    }
                                }}
                            >
                                {fontFamilyList.map((list, i) => (
                                    <Menu key={i} value={list.fontFamily} disableRipple>
                                        <Typography style={{fontFamily: list.fontFamily}}>{list.fontFamily}</Typography>
                                    </Menu>
                                ))}
                            </Select>
                        </FormControlBox>

                        <FormControlFontSizeBox variant="outlined">
                            <Select
                                id="filter"
                                value={fontSizeFilter}
                                onChange={handleChangeFontSizeFilter}
                                IconComponent={(props) => (
                                    <Box>
                                        <FontArrowIcon {...props}/>
                                    </Box>
                                )}
                                MenuProps={{
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "center"
                                    },
                                    transformOrigin: {
                                        vertical: 'top',
                                        horizontal: 'center',
                                    },
                                    PaperProps: {
                                        sx: {
                                            '&.MuiPaper-root':{
                                                boxShadow: 'none',
                                                border: '1px solid #6F6F6F',
                                                boxSizing:'border-box',
                                                background:'#212121',
                                                '& ul': {
                                                    padding: '6px 0'
                                                }
                                            },
                                        }
                                    }
                                }}
                            >
                                {fontSizeList.map((list, i) => (
                                    <Menu key={i} value={list.fontSize} disableRipple>
                                        <Typography style={{fontSize: list.fontSize}}>{list.fontSize}</Typography>
                                    </Menu>
                                ))}
                            </Select>
                        </FormControlFontSizeBox>
                    </AlignCenter>

                    <IconBox>
                        <IconSelect select={fontBold} onClick={handleClickFontBold} disableRipple>
                            <FontBoldIcon/>
                        </IconSelect>
                        <IconSelect select={fontStyle} onClick={handleClickFontStyle} disableRipple>
                            <FontItalicIcon/>
                        </IconSelect>
                        <IconSelect select={fontUnderline} onClick={handleClickFontUnderline} disableRipple>
                            <FontUnderlineIcon/>
                        </IconSelect>
                        <IconSelect select={fontLineThrough} onClick={handleClickFontLineThrough} disableRipple>
                            <FontLineThroughIcon/>
                        </IconSelect>
                        <ButtonIcon
                            aria-describedby={colorId}
                            onClick={handleClickFontColor}
                            sx={{
                                '& path': {
                                    fill: palette
                                }
                            }}
                            disableRipple
                        >
                            <FontColorIcon/>
                        </ButtonIcon>
                        <IconSelect aria-describedby={emojiId} select={emoji} onClick={handleClickEmoji} disableRipple>
                            <FontEmojiIcon/>
                        </IconSelect>
                        <IconSelect select={fontLeft} onClick={handleClickFontLeft} disableRipple>
                            <FontLeftIcon/>
                        </IconSelect>
                        <IconSelect select={fontCenter} onClick={handleClickFontCenter} disableRipple>
                            <FontCenterIcon/>
                        </IconSelect>
                        <IconSelect select={fontRight} onClick={handleClickFontRight} disableRipple>
                            <FontRightIcon/>
                        </IconSelect>
                    </IconBox>

                    <div>
                        <StyledTextarea
                            minRows={12}
                            maxRows={12}
                            placeholder="Enter a text."
                        />
                        <JustifyEnd>
                            <NumberText>0 / 10,000</NumberText>
                        </JustifyEnd>

                        {/* 미입력 시*/}
                        {/*<ErrorStyledTextarea*/}
                        {/*    minRows={12}*/}
                        {/*    maxRows={12}*/}
                        {/*    placeholder="Enter a text."*/}
                        {/*/>*/}
                        {/*<JustifySpace>*/}
                        {/*    <AlignCenter>*/}
                        {/*        <StreamingErrorIcon/>*/}
                        {/*        <ErrorText>Please enter a title.</ErrorText>*/}
                        {/*    </AlignCenter>*/}

                        {/*    <NumberText>0 / 10,000</NumberText>*/}
                        {/*</JustifySpace>*/}
                    </div>
                </FlexColumn>
            </Flex>

            <PopoverBox
                id={colorId}
                open={colorOpen}
                anchorEl={colorAnchorEl}
                onClose={handleClosePopover}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >

                <PopoverBoxIn>
                    <ListBox>
                        {PaletteList.map((color, i) => (
                            <ColorBoxIn select={palette === color.color} onClick={() => handleClickPalette(color.color)} key={i}>
                                <div style={{background: color.color, border: color.color === '#404040' ? '1px solid #6F6F6F' : 0}}/>
                            </ColorBoxIn>
                        ))}
                    </ListBox>
                </PopoverBoxIn>
            </PopoverBox>

            <PopoverBox
                id={emojiId}
                open={emojiOpen}
                anchorEl={emojiAnchorEl}
                onClose={handleClosePopover}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >

                <PopoverBoxIn>
                    <ListBox>
                        {/* 이모지 아직 디자인 안나옴... */}
                    </ListBox>
                </PopoverBoxIn>
            </PopoverBox>
        </Container>
    );
}

export default TextPropertiesDialog;
