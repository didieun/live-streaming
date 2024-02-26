import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Flex, IconButtonStyle } from '../common/styled/CommonStyle';
import { ReactComponent as FolderIcon } from '../../../assets/images/FolderIcon.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/images/DeleteIcon.svg';
import TestImage from '../../../assets/images/TestImage.png';

const Container = styled(Box)(({ theme, isSd }) => ({}));

const TitleText = styled(Typography)(({ theme, isSd }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.125rem',
        color: '#333',
        fontWeight: 500,
        marginBottom: 25,
        textAlign: 'left',
        '& span': {
            color: '#1976D2',
            fontWeight: 700
        }
    }
}));

const ImageAddBox = styled(Box)(({ theme }) => ({
    width: 760,
    borderTop: '1px solid #BCBCBC',
    borderBottom: '1px solid #BCBCBC'
}));

const LeftBox = styled(Box)(({ theme }) => ({
    width: 155,
    minHeight: 115,
    background: '#F5F6FA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': {
        fontSize: '1rem',
        color: '#333',
        fontWeight: 500
    }
}));

const RightBox = styled(Box)(({ theme }) => ({
    width: 'calc(100% - 155px)',
    height: 'auto',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 25,
    boxSizing: 'border-box'
}));

const ImageListBox = styled(RightBox)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 110px)',
    gap: '10px 25px',
    padding: '19px 0 19px 25px',
    boxSizing: 'border-box'
}));

const ImageList = styled(Box)(({ theme }) => ({
    height: 140,
    background: '#F5F6FA',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': {
        fontSize: '0.875rem',
        color: '#2F3640',
        fontWeight: 400
    },
    '& img': {
        width: '100%',
        objectFit: 'cover'
    }
}));

const DeleteBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 6,
    right: 6,
    '& button': {
        width: 24,
        height: 24
    }
}));

const FileButton = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        width: 126,
        height: 50,
        padding: 16,
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F5F5F5',
        boxSizing: 'border-box',
        fontSize: '0.875rem',
        color: '#333',
        fontWeight: 500,
        '&:hover': {
            background: '#F5F5F5'
        },
        '&.Mui-disabled': {
            background: '#D9D9D9',
            '& p': {
                color: '#fff'
            }
        }
    }
}));

const FlexBorderTopBottom = styled(Flex)(({ theme }) => ({
    borderTop: '1px solid #BCBCBC',
    borderBottom: '1px solid #BCBCBC'
}));

const EssentialMargin = styled(Box)(({ theme }) => ({
    paddingTop: 12,
    paddingLeft: 14,
    boxSizing: 'border-box'
}));

const EssentialText = styled(Typography)(({ theme, isSd }) => ({
    '&.MuiTypography-root': {
        fontSize: '0.875rem',
        color: '#E66767',
        fontWeight: 500,
        marginLeft: 10
    }
}));

const EmptyText = styled(Typography)(({ theme, isSd }) => ({
    '&.MuiTypography-root': {
        fontSize: '1rem',
        color: '#737373',
        fontWeight: 400
    }
}));

const StyledInput = styled(TextField)(({ theme }) => ({
    '&.MuiFormControl-root': {
        width: '100%'
    },
    '& .MuiInputBase-root': {
        width: '100%',
        height: 45,
        background: '#FFF7E7',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '0 16px !important',
        '& input': {
            padding: '0 !important',
            fontSize: '1rem',
            color: '#2F3640',
            fontWeight: 400,
            opacity: 1,
            '&::placeholder': {
                opacity: 1
            }
        },
        '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: '0'
            }
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: '0'
        },
        '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: '0'
            }
        }
    }
}));

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1
});

function AddLearningHistoryComponent() {
    const imageList = [{ image: TestImage }, { image: '' }, { image: '' }, { image: '' }];
    return (
        <Container>
            <TitleText>
                [&nbsp;<span>참여자명</span> 학생&nbsp;]
            </TitleText>
            <ImageAddBox>
                <Flex>
                    <LeftBox>
                        <Typography>이미지 첨부</Typography>
                    </LeftBox>
                    <RightBox>
                        <FileButton component="label" role={undefined} tabIndex={-1} startIcon={<FolderIcon />} disableRipple>
                            파일 선택
                            <VisuallyHiddenInput type="file" />
                        </FileButton>
                        <EssentialText>*최대 8개</EssentialText>
                    </RightBox>
                </Flex>
                <FlexBorderTopBottom>
                    <LeftBox>
                        <Typography>콘텐츠 이름</Typography>
                    </LeftBox>
                    <RightBox sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                        <StyledInput
                            // error
                            label=""
                            variant="outlined"
                            fullWidth
                            placeholder="이미지 콘텐츠 [2023-12-04 07:24]"
                        />
                        <EssentialMargin>
                            <EssentialText>*이름을 변경할 수 있습니다.</EssentialText>
                        </EssentialMargin>
                    </RightBox>
                </FlexBorderTopBottom>
                <Flex sx={{ alignItems: 'stretch' }}>
                    <LeftBox sx={{ minHeight: 178 }}>
                        <Typography>첨부파일</Typography>
                    </LeftBox>

                    {imageList.length <= 0 ? (
                        <RightBox>
                            <EmptyText>첨부 파일이 여기에 표시됩니다.</EmptyText>
                        </RightBox>
                    ) : (
                        <ImageListBox>
                            {imageList.map((list, i) => (
                                <ImageList key={i}>
                                    {list.image === '' ? (
                                        <Typography>
                                            첨부파일
                                            <br />
                                            이미지
                                        </Typography>
                                    ) : (
                                        <img src={list.image} alt={'첨부이미지'} />
                                    )}

                                    <DeleteBox>
                                        <IconButtonStyle disableRipple>
                                            <DeleteIcon />
                                        </IconButtonStyle>
                                    </DeleteBox>
                                </ImageList>
                            ))}
                        </ImageListBox>
                    )}
                </Flex>
            </ImageAddBox>
        </Container>
    );
}

export default AddLearningHistoryComponent;
