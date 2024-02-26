import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { ReactComponent as DotsSixVerticalIcon } from '../../../../../assets/images/DotsSixVerticalIcon.svg';
import { ReactComponent as PlayCircleIcon } from '../../../../../assets/images/PlayCircleIcon.svg';
import { ReactComponent as TrashIcon } from '../../../../../assets/images/TrashIcon.svg';
import { Flex, FlexCenter, FlexSpace, IconButtonStyle, ArrowTooltipStyle } from '../../../common/styled/CommonStyle';
import TooltipArrowYellow from '../../../../../assets/images/TooltipArrowYellow.svg';
import CommonDialog from '../../../common/CommonDialog';
import { useViewSize } from '../../../../../store';

const BoxStyle = styled(Box)(({ theme, contentsWidth }) => ({
    width: '100%',
    paddingBottom: contentsWidth < 1000 ? 16 : 22,
    boxSizing: 'border-box',
    borderBottom: '1px solid #E1E1E1',
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: contentsWidth < 1000 ? 18 : 28,
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

const ContentsInfoBox = styled(FlexSpace)(({ theme, contentsWidth }) => ({
    width: contentsWidth ? 'calc(100% - 25px - 30% - 15px)' : 'calc(100% - 32px - 30% - 15px)'
}));

const DeleteIconButton = styled(IconButtonStyle)(({ theme, contentsWidth }) => ({
    '&.MuiButtonBase-root': {
        width: contentsWidth < 1000 ? 35 : 45,
        height: contentsWidth < 1000 ? 35 : 45,
        background: '#D8E5FC',
        '&:hover': {
            background: '#D8E5FC'
        },
        '& svg': {
            width: contentsWidth < 1000 ? 18 : 24,
            height: contentsWidth < 1000 ? 18 : 24,
            '& path': {
                stroke: '#1976d2'
            }
        }
    }
}));

const ChipBox = styled(FlexCenter)(({ theme, contentsWidth }) => ({
    minWidth: contentsWidth < 1000 ? 55 : 69,
    height: contentsWidth < 1000 ? 20 : 24,
    padding: contentsWidth < 1000 ? '0 5px' : '0 8px',
    border: '1px solid #1976D2',
    borderRadius: 100,
    boxSizing: 'border-box',
    marginRight: contentsWidth < 1000 ? 5 : 10,
    '& p': {
        fontSize: contentsWidth < 1000 ? '0.625rem' : '0.75rem',
        color: '#1976D2',
        fontWeight: 600,
        letterSpacing: '-0.24px'
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

export const CourseText = styled(Typography)(({ theme, contentsWidth }) => ({
    '&.MuiTypography-root': {
        fontSize: contentsWidth < 1000 ? '0.688rem' : '0.875rem',
        color: '#393939',
        fontWeight: 500,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    }
}));

export const TitleText = styled(Typography)(({ theme, contentsWidth }) => ({
    '&.MuiTypography-root': {
        width: '100%',
        fontSize: contentsWidth < 1000 ? '0.875rem' : '1rem',
        color: '#333',
        fontWeight: 600,
        textAlign: 'left',
        marginTop: contentsWidth < 1000 ? 8 : 15,
        marginBottom: contentsWidth < 1000 ? 5 : 10,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    }
}));

export const TextStyle = styled(Typography)(({ theme, contentsWidth }) => ({
    '&.MuiTypography-root': {
        width: '100%',
        fontSize: contentsWidth < 1000 ? '0.75rem' : '0.875rem',
        color: '#737373',
        fontWeight: 400,
        textAlign: 'left',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    }
}));

function AddContentsBox(props) {
    const { isLg } = useViewSize();
    const { index, list, contentsWidth } = props;
    const [deleteBtn, setDeleteBtn] = React.useState(false);

    const handleClickDeleteDialog = () => {
        setDeleteBtn(true);
    };

    const handleCloseDeleteDialog = () => {
        setDeleteBtn(false);
    };

    return (
        <BoxStyle key={index} contentsWidth={contentsWidth}>
            <IconButtonStyle sx={{ width: contentsWidth < 1000 ? 25 : 32, height: contentsWidth < 1000 ? 25 : 32 }} disableRipple>
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
            <ContentsInfoBox contentsWidth={contentsWidth}>
                <Box sx={{ width: contentsWidth < 1000 ? 'calc(100% - 35px - 10px)' : 'calc(100% - 45px - 10px)' }}>
                    <Flex>
                        {list.chip === '멀티미디어' ? (
                            <ChipBox contentsWidth={contentsWidth}>
                                <Typography>{list.chip}</Typography>
                            </ChipBox>
                        ) : list.chip === 'PDF' ? (
                            <PdfChipBox contentsWidth={contentsWidth}>
                                <Typography>{list.chip}</Typography>
                            </PdfChipBox>
                        ) : (
                            <SharingChipBox contentsWidth={contentsWidth}>
                                <Typography>{list.chip}</Typography>
                            </SharingChipBox>
                        )}

                        {list.print && (
                            <PrintChipBox contentsWidth={contentsWidth}>
                                <Typography>스마트 페이퍼</Typography>
                            </PrintChipBox>
                        )}

                        <CourseText contentsWidth={contentsWidth}>{list.course}</CourseText>
                    </Flex>
                    <ArrowTooltipStyle
                        title={
                            <Box sx={{ maxWidth: 200 }}>
                                <Typography>{list.title}</Typography>
                            </Box>
                        }
                        placement="bottom"
                        top={'-20px'}
                        left={'50%'}
                        background={'#F5CD79'}
                        triangle={TooltipArrowYellow}
                    >
                        <TitleText contentsWidth={contentsWidth}>{list.title}</TitleText>
                    </ArrowTooltipStyle>

                    <TextStyle contentsWidth={contentsWidth}>{list.sub}</TextStyle>
                </Box>
                <DeleteIconButton contentsWidth={contentsWidth} onClick={handleClickDeleteDialog} disableRipple>
                    <TrashIcon />
                </DeleteIconButton>
            </ContentsInfoBox>

            <CommonDialog
                open={deleteBtn}
                title={''}
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
    contentsWidth: PropTypes.number
};

export default AddContentsBox;
