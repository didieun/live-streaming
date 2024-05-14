import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { ReactComponent as DotsSixVerticalIcon } from '../../../../../assets/images/DotsSixVerticalIcon.svg';
import { ReactComponent as PlayCircleIcon } from '../../../../../assets/images/PlayCircleIcon.svg';
import { ReactComponent as TrashIcon } from '../../../../../assets/images/TrashIcon.svg';
import { Flex, FlexCenter, FlexSpace, IconButtonStyle, ArrowTooltipStyle, FlexColumn } from '../../../common/styled/CommonStyle';
import TooltipArrowOrange from '../../../../../assets/images/TooltipArrowOrange.svg';
import CommonDialog from '../../../common/CommonDialog';
import { useViewSize } from '../../../../../store';

const BoxStyle = styled(Box)(({ theme, open, isHd, isSl }) => ({
    width: '100%',
    paddingBottom: open ? (isHd ? 16 : 22) : isSl ? 16 : 22,
    boxSizing: 'border-box',
    borderBottom: '1px solid #E1E1E1',
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: open ? (isHd ? 18 : 28) : isSl ? 18 : 28,
    '&:last-child': {
        marginBottom: 0
    }
}));

const ImageBox = styled(Box)(({ theme }) => ({
    width: '30%',
    aspectRatio: 16 / 9,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    margin: '0 10px 0 5px',
    overflow: 'hidden',
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

const ContentsInfoBox = styled(FlexSpace)(({ theme, open, isHd, isSl }) => ({
    width: open
        ? isHd
            ? 'calc(100% - 25px - 30% - 15px)'
            : 'calc(100% - 32px - 30% - 15px)'
        : isSl
          ? 'calc(100% - 25px - 30% - 15px)'
          : 'calc(100% - 32px - 30% - 15px)'
}));

const DeleteIconButton = styled(IconButtonStyle)(({ theme, open, isHd, isSl }) => ({
    '&.MuiButtonBase-root': {
        width: open ? (isHd ? 35 : 45) : isSl ? 35 : 45,
        height: open ? (isHd ? 35 : 45) : isSl ? 35 : 45,
        background: '#D8E5FC',
        '&:hover': {
            background: '#D8E5FC'
        },
        '& svg': {
            width: open ? (isHd ? 18 : 24) : isSl ? 18 : 24,
            height: open ? (isHd ? 18 : 24) : isSl ? 18 : 24,
            '& path': {
                stroke: '#1976d2'
            }
        }
    }
}));

const ChipBox = styled(FlexCenter)(({ theme, open, isHd, isSl }) => ({
    minWidth: 50,
    height: open ? (isHd ? 20 : 24) : isSl ? 20 : 24,
    padding: open ? (isHd ? '0 5px' : '0 8px') : isSl ? '0 5px' : '0 8px',
    border: '1px solid #1976D2',
    borderRadius: 100,
    boxSizing: 'border-box',
    marginRight: open ? (isHd ? 5 : 10) : isSl ? 5 : 10,
    marginBottom: open ? (isHd ? '1%' : '2%') : isSl ? '1%' : '2%',
    '& p': {
        fontSize: open ? (isHd ? '0.625rem' : '0.75rem') : isSl ? '0.625rem' : '0.75rem',
        color: '#1976D2',
        fontWeight: 600,
        letterSpacing: '-0.24px',
        lineHeight: 'normal'
    }
}));

const PdfChipBox = styled(ChipBox)(({ theme }) => ({
    border: '1px solid #18427C',
    '& p': {
        color: '#18427C'
    }
}));

const SharingChipBox = styled(ChipBox)(({ theme }) => ({
    border: '1px solid #4D9FFF',
    background: '#4D9FFF',
    '& p': {
        color: '#fff'
    }
}));

const PrintChipBox = styled(ChipBox)(({ theme }) => ({
    border: '1px solid #00CCA5',
    '& p': {
        color: '#00CCA5'
    }
}));

export const CourseText = styled(Typography)(({ theme, open, isHd, isSl }) => ({
    '&.MuiTypography-root': {
        fontSize: open ? (isHd ? '0.688rem' : '0.875rem') : isSl ? '0.688rem' : '0.875rem',
        color: '#393939',
        fontWeight: 500,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        marginBottom: open ? (isHd ? '1%' : '2%') : isSl ? '1%' : '2%'
    }
}));

export const TitleText = styled(Typography)(({ theme, open, isHd, isSl }) => ({
    '&.MuiTypography-root': {
        maxWidth: '100%',
        display: 'inline-block',
        fontSize: open ? (isHd ? '0.875rem' : '1rem') : isSl ? '0.875rem' : '1rem',
        color: '#333',
        fontWeight: 600,
        textAlign: 'left',
        marginTop: open ? (isHd ? '1%' : '3%') : isSl ? '1%' : '3%',
        marginBottom: open ? (isHd ? '1%' : '3%') : isSl ? '1%' : '3%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    }
}));

export const TextStyle = styled(Typography)(({ theme, open, isHd, isSl }) => ({
    '&.MuiTypography-root': {
        width: '100%',
        fontSize: open ? (isHd ? '0.75rem' : '0.875rem') : isSl ? '0.75rem' : '0.875rem',
        color: '#737373',
        fontWeight: 400,
        textAlign: 'left',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    }
}));

function AddContentsBox(props) {
    const { isHd, isSl } = useViewSize();
    const { index, list, open } = props;
    const [deleteBtn, setDeleteBtn] = React.useState(false);

    const handleClickDeleteDialog = () => {
        setDeleteBtn(true);
    };

    const handleCloseDeleteDialog = () => {
        setDeleteBtn(false);
    };

    return (
        <BoxStyle key={index} open={open} isHd={isHd} isSl={isSl}>
            <IconButtonStyle
                sx={{
                    width: open ? (isHd ? '25px' : '32px') : isSl ? '25px' : '32px',
                    height: open ? (isHd ? '25px' : '32px') : isSl ? '25px' : '32px'
                }}
                disableRipple
            >
                <DotsSixVerticalIcon />
            </IconButtonStyle>
            <ImageBox>
                <img src={list.image} alt={'첨부이미지'} />
                {list.chip === '멀티미디어' && (
                    <IconPosition>
                        <PlayCircleIcon />
                    </IconPosition>
                )}
            </ImageBox>
            <ContentsInfoBox open={open} isHd={isHd} isSl={isSl}>
                <FlexColumn
                    sx={{
                        width: open
                            ? isHd
                                ? 'calc(100% - 35px - 10px)'
                                : 'calc(100% - 45px - 10px)'
                            : isSl
                              ? 'calc(100% - 35px - 10px)'
                              : 'calc(100% - 45px - 10px)'
                    }}
                >
                    <Flex sx={{ flexWrap: 'wrap' }}>
                        {list.chip === '멀티미디어' ? (
                            <ChipBox open={open} isHd={isHd} isSl={isSl}>
                                <Typography>{list.chip}</Typography>
                            </ChipBox>
                        ) : list.chip === 'PDF' ? (
                            <PdfChipBox open={open} isHd={isHd} isSl={isSl}>
                                <Typography>{list.chip}</Typography>
                            </PdfChipBox>
                        ) : (
                            <SharingChipBox open={open} isHd={isHd} isSl={isSl}>
                                <Typography>{list.chip}</Typography>
                            </SharingChipBox>
                        )}

                        {list.print && (
                            <PrintChipBox open={open} isHd={isHd} isSl={isSl}>
                                <Typography>스마트 페이퍼</Typography>
                            </PrintChipBox>
                        )}

                        <CourseText open={open} isHd={isHd} isSl={isSl}>
                            {list.course}
                        </CourseText>
                    </Flex>
                    <ArrowTooltipStyle
                        title={
                            <Box sx={{ maxWidth: 200 }}>
                                <Typography sx={{ fontWeight: '600 !important' }}>{list.title}</Typography>
                            </Box>
                        }
                        placement="bottom"
                        top={'-9px'}
                        left={'50%'}
                        background={'#F80'}
                        triangle={TooltipArrowOrange}
                    >
                        <TitleText open={open} isHd={isHd} isSl={isSl}>
                            {list.title}
                        </TitleText>
                    </ArrowTooltipStyle>

                    <TextStyle open={open} isHd={isHd} isSl={isSl}>
                        {list.sub}
                    </TextStyle>
                </FlexColumn>
                <DeleteIconButton open={open} isHd={isHd} isSl={isSl} onClick={handleClickDeleteDialog} disableRipple>
                    <TrashIcon />
                </DeleteIconButton>
            </ContentsInfoBox>

            <CommonDialog
                open={deleteBtn}
                title={'알림'}
                message={<Typography>‘콘텐츠명' 콘텐츠를 삭제하시겠습니까?</Typography>}
                onClose={handleCloseDeleteDialog}
                btnClick1={handleCloseDeleteDialog}
            />
        </BoxStyle>
    );
}

AddContentsBox.propTypes = {
    index: PropTypes.number,
    list: PropTypes.array,
    open: PropTypes.bool
};

export default AddContentsBox;
