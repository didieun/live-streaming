import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, MenuItem, MenuList, Popover, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { ReactComponent as PlayCircleIcon } from '../../../../../assets/images/PlayCircleIcon.svg';
import { ReactComponent as PrintIcon } from '../../../../../assets/images/PrintIcon.svg';
import { ReactComponent as ButtonAddIcon } from '../../../../../assets/images/ButtonAddIcon.svg';
import { ReactComponent as DownloadSimpleIcon } from '../../../../../assets/images/DownloadSimpleIcon.svg';
import { ReactComponent as TooltipCloseIcon } from '../../../../../assets/images/TooltipCloseIcon.svg';
import TooltipArrowBlue from '../../../../../assets/images/TooltipArrowBlue.svg';
import { ArrowTooltipStyle, Flex, FlexSpace, IconButtonStyle } from '../../../common/styled/CommonStyle';
import TooltipArrowYellow from '../../../../../assets/images/TooltipArrowYellow.svg';

const BoxStyle = styled(Box)(({ theme }) => ({
    width: '100%',
    border: '1px solid #ECECEC',
    background: '#fff',
    borderRadius: 4,
    padding: '5px 6px 11px',
    boxSizing: 'border-box'
}));

const ImageBox = styled(Box)(({ theme }) => ({
    width: '100%',
    aspectRatio: 80 / 47,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 10,
    '& img': {
        width: '100%',
        objectFit: 'cover'
    }
}));

const IconPosition = styled(Box)(({ theme }) => ({
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
}));

const PdfPosition = styled(IconButtonStyle)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        width: 24,
        height: 24,
        position: 'absolute',
        top: 4,
        right: 4
    }
}));

const PaddingBox = styled(Box)(({ theme }) => ({
    padding: '0 5px',
    boxSizing: 'border-box'
}));

const ContentsText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        width: '100%',
        fontSize: '0.75rem',
        color: '#393939',
        fontWeight: 400,
        textAlign: 'left',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        marginBottom: 5
    }
}));

const ContentsTitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        width: '100%',
        fontSize: '0.875rem',
        color: '#333',
        fontWeight: 600,
        marginBottom: 13,
        textAlign: 'left',
        display: '-webkit-box',
        wordBreak: 'break-all',
        textOverflow: 'ellipsis',
        WebkitBoxOrient: 'vertical',
        whiteSpace: 'normal',
        WebkitLineClamp: 2,
        overflow: 'hidden'
    }
}));

export const ButtonStyle = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        minWidth: 20,
        padding: '0',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        '& p': {
            fontSize: '0.75rem',
            color: '#333',
            fontWeight: 400,
            marginLeft: 9
        },
        '&:hover': {
            background: 'transparent'
        },
        '& svg': {
            width: 18,
            height: 18,
            '& path': {
                fill: '#343330'
            }
        },
        '&.Mui-disabled': {
            '& p': {
                color: '#D9D9D9'
            },
            '& path': {
                fill: '#D9D9D9'
            }
        }
    }
}));

const PopoverBox = styled(Popover)(({ theme }) => ({
    '& .MuiPaper-root': {
        minWidth: 123,
        boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.15)',
        borderRadius: 4,
        background: '#fff',
        border: 0,
        '& .MuiList-root': {
            padding: 5,
            '& .MuiButtonBase-root': {
                fontSize: '0.75rem',
                height: 30,
                color: '#444343',
                fontWeight: 400,
                justifyContent: 'center',
                padding: '0',
                boxSizing: 'border-box',
                '&:hover': {
                    background: '#f5f6fa',
                    borderRadius: 4
                }
            }
        }
    }
}));

function ContentsBox(props) {
    const { index, list } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [addTooltip, setAddTooltip] = React.useState(true);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCloseTooltip = () => {
        setAddTooltip(false);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <BoxStyle key={index}>
            <ImageBox>
                <img src={list.image} alt={'첨부이미지'} />
                {list.multimedia ? (
                    <IconPosition>
                        <PlayCircleIcon />
                    </IconPosition>
                ) : (
                    <PdfPosition onClick={handleClick} disableRipple>
                        <PrintIcon />
                    </PdfPosition>
                )}

                <PopoverBox
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                >
                    <MenuList>
                        <MenuItem>스마트 페이퍼 인쇄</MenuItem>
                        <MenuItem>일반인쇄</MenuItem>
                    </MenuList>
                </PopoverBox>
            </ImageBox>

            <PaddingBox>
                <ContentsText>{list.text}</ContentsText>
                <ArrowTooltipStyle
                    title={
                        <Box sx={{ width: 250 }}>
                            <Typography>{list.title}</Typography>
                        </Box>
                    }
                    placement="bottom"
                    top={'-21px'}
                    left={'50%'}
                    background={'#F5CD79'}
                    triangle={TooltipArrowYellow}
                >
                    <ContentsTitleText>{list.title}</ContentsTitleText>
                </ArrowTooltipStyle>
                <FlexSpace>
                    <Flex>
                        <ButtonStyle disableRipple>
                            <ButtonAddIcon />
                            <ArrowTooltipStyle
                                open={index === 0 && addTooltip}
                                title={
                                    <Box>
                                        <Typography sx={{ marginRight: 25 }}>
                                            ‘담기' 버튼을 누르거나 드래그하여 <br />
                                            수업 콘텐츠를 만들어보세요.
                                        </Typography>
                                        <IconButtonStyle onClick={handleCloseTooltip} disableRipple>
                                            <TooltipCloseIcon />
                                        </IconButtonStyle>
                                    </Box>
                                }
                                placement="bottom"
                                top={'-20px'}
                                left={'50%'}
                                triangle={TooltipArrowBlue}
                            >
                                <Typography>담기</Typography>
                            </ArrowTooltipStyle>
                        </ButtonStyle>
                    </Flex>

                    <Flex>
                        <ButtonStyle disableRipple>
                            <DownloadSimpleIcon />
                            <Typography>다운로드</Typography>
                        </ButtonStyle>
                    </Flex>
                </FlexSpace>
            </PaddingBox>
        </BoxStyle>
    );
}

ContentsBox.propTypes = {
    index: PropTypes.number,
    list: PropTypes.array
};

export default ContentsBox;
