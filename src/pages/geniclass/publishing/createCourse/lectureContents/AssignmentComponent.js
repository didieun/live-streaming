import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, MenuItem, MenuList, Popover, TextField, Typography } from '@mui/material';
import { Flex, FlexCenter, FlexColumnCenter, FlexEnd, FlexSpace, IconButtonStyle } from '../../common/styled/CommonStyle';
import { ReactComponent as LinkIcon } from '../../../../assets/images/LinkIcon.svg';
import { ReactComponent as FileIcon } from '../../../../assets/images/FileIcon.svg';
import { ReactComponent as SurveyCloseIcon } from '../../../../assets/images/SurveyCloseIcon.svg';
import { useViewSize } from '../../../../store';
import CommonButton from '../../common/CommonButton';
import PropTypes from 'prop-types';
import CommonTextField from '../../common/CommonTextField';
import ClearIcon from '../../../../assets/images/ClearIcon.svg';
import CommonDialog from '../../common/CommonDialog';

const Root = styled(Box)(({ theme }) => ({
    marginBottom: 40,
    paddingBottom: 40
}));

const BoxMargin = styled(FlexSpace)(({ theme }) => ({
    alignItems: 'flex-start',
    marginBottom: 18
}));

const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.125rem',
        color: '#333',
        fontWeight: 700,
        wordBreak: 'keep-all',
        textOverflow: 'unset',
        whiteSpace: 'unset',
        textAlign: 'left',
        '& span': {
            color: '#FF5E57'
        }
    }
}));

const ChipBox = styled(FlexCenter)(({ theme }) => ({
    minWidth: 48,
    height: 30,
    borderRadius: 6,
    padding: '0 12px',
    boxSizing: 'border-box',
    marginRight: 14,
    '& p': {
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight: 700,
        letterSpacing: '-0.5px'
    }
}));

const EvaluationChipBox = styled(ChipBox)(({ theme }) => ({
    background: '#00BEEA'
}));

const AssignmentChipBox = styled(ChipBox)(({ theme }) => ({
    background: '#A674ED'
}));

const EvaluationTextStyle = styled(TextStyle)(({ theme }) => ({
    '&.MuiTypography-root': {
        '& span': {
            color: '#00BEEA'
        }
    }
}));

const AssignmentTextStyle = styled(TextStyle)(({ theme }) => ({
    '&.MuiTypography-root': {
        '& span': {
            color: '#A674ED'
        }
    }
}));

const RedTextStyle = styled(TextStyle)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1rem !important',
        color: '#FF5E57 !important',
        letterSpacing: '0.1px',
        marginLeft: '0 !important'
    }
}));

const AnswerTextStyle = styled(RedTextStyle)(({ theme }) => ({
    '&.MuiTypography-root': {
        color: '#3190FF !important'
    }
}));

const SubmitBox = styled(Flex)(({ theme }) => ({
    width: '100%',
    flexWrap: 'wrap',
    marginTop: 14,
    '& > div': {
        marginBottom: 5
    },
    '& > button': {
        marginBottom: 5,
        marginRight: 14
    },
    '& svg': {
        width: 20,
        height: 20,
        '& path': {
            fill: '#737373'
        }
    }
}));

const NameText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1rem',
        color: '#000',
        fontWeight: 400,
        letterSpacing: '0.1px',
        margin: '0 8px'
    }
}));

const PopoverBox = styled(Popover)(({ theme }) => ({
    '& .MuiPaper-root': {
        minWidth: 100,
        boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.15)',
        borderRadius: 4,
        background: '#fff',
        border: 0,
        '& .MuiList-root': {
            padding: 5,
            '& .MuiButtonBase-root': {
                fontSize: '0.875rem',
                height: 30,
                color: '#444343',
                fontWeight: 400,
                padding: '0 12px',
                boxSizing: 'border-box',
                '&:hover': {
                    background: '#f5f6fa',
                    borderRadius: 4
                }
            }
        }
    }
}));

const StyledInput = styled(TextField)(({ theme }) => ({
    '&.MuiFormControl-root': {
        width: 50,
        boxSizing: 'border-box',
        margin: '0 8px 0 0'
    },
    '& .MuiInputBase-root': {
        width: '100%',
        minHeight: 30,
        height: 30,
        background: '#fff',
        borderRadius: 0,
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '0 6px !important',
        '& input': {
            padding: '0 !important',
            fontSize: '1.125rem',
            color: '#333',
            fontWeight: 400,
            opacity: 1,
            minHeight: 30,
            textAlign: 'right',
            '&::placeholder': {
                color: '#737373',
                opacity: 1,
                letterSpacing: '-0.8px'
            }
        },
        '& .MuiOutlinedInput-notchedOutline': {
            width: '100%',
            border: '0',
            borderBottom: '1px solid #D5D4DC',
            boxSizing: 'border-box',
            top: -5,
            bottom: 0,
            left: 0,
            right: 0
        },
        '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: '0',
                borderBottom: '1px solid #D5D4DC'
            }
        },
        '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: '0',
                borderBottom: '1px solid #D5D4DC'
            }
        },
        '&.Mui-error': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: '0',
                borderBottom: '1px solid #D5D4DC'
            }
        }
    }
}));

const DialogText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        boxSizing: 'border-box',
        fontSize: '1.125rem',
        color: '#333',
        fontWeight: 400,
        textAlign: 'center',
        marginBottom: 14
    }
}));

const DialogTextFieldBox = styled(Box)(({ theme }) => ({
    '& .MuiFormControl-root': {
        marginRight: '0 !important'
    }
}));

const DialogErrorText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '0.875rem',
        color: '#FF5E57',
        fontWeight: 400,
        letterSpacing: '-0.5px',
        marginTop: 4,
        textAlign: 'left'
    }
}));

const AssignmentComponent = (props) => {
    const { isLg } = useViewSize();
    const { lecture } = props;
    const [submit, setSubmit] = React.useState(true);
    const [submitBtn, setSubmitBtn] = React.useState(false);
    const [grading, setGrading] = React.useState(false);
    const [linkDialog, setLinkDialog] = React.useState(false);
    const [saveDialog, setSaveDialog] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClickSubmitBtn = () => {
        setSubmitBtn(true);
        setSubmit(true);
    };

    const handleClickGrading = () => {
        setGrading(true);
    };

    const handleCloseGrading = () => {
        setGrading(false);
    };

    const handleClickLinkDialog = () => {
        setLinkDialog(true);
        setAnchorEl(null);
    };

    const handleClickSaveDialog = () => {
        setSaveDialog(true);
    };

    const handleCloseDialog = () => {
        setLinkDialog(false);
        setSaveDialog(false);
    };

    const handleClickBtn = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseBtn = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Root>
            <BoxMargin>
                <TextStyle sx={{ maxWidth: lecture ? 'calc(100% - 355px)' : 'calc(100% - 140px)' }}>텍스트</TextStyle>
                <FlexEnd sx={lecture ? { width: '355px' } : { width: '140px' }}>
                    {lecture && (
                        <>
                            {grading ? (
                                <Flex sx={{ '& button': { marginRight: '14px' } }}>
                                    <CommonButton
                                        width={'72px'}
                                        height={'34px'}
                                        text={'저장'}
                                        background={'#2F3640'}
                                        color={'#fff'}
                                        fontSize={'0.875rem'}
                                        onClick={handleClickSaveDialog}
                                    />
                                    <CommonButton
                                        width={'72px'}
                                        height={'34px'}
                                        text={'취소'}
                                        background={'#fff'}
                                        border={'#D5D4DC'}
                                        color={'#333'}
                                        fontSize={'0.875rem'}
                                        onClick={handleCloseGrading}
                                    />
                                </Flex>
                            ) : (
                                <Box sx={{ marginRight: '14px' }}>
                                    <CommonButton
                                        width={'72px'}
                                        height={'34px'}
                                        text={'채점하기'}
                                        background={'#2F3640'}
                                        color={'#fff'}
                                        fontSize={'0.875rem'}
                                        onClick={handleClickGrading}
                                    />
                                </Box>
                            )}
                        </>
                    )}

                    <AssignmentChipBox>
                        <Typography>과제</Typography>
                    </AssignmentChipBox>

                    {grading ? (
                        <Flex>
                            <StyledInput label="" variant="outlined" fullWidth placeholder={''} />
                            <AssignmentTextStyle>
                                / <span>100</span>
                            </AssignmentTextStyle>
                        </Flex>
                    ) : (
                        <AssignmentTextStyle>
                            <span>-</span> / <span>100</span>
                        </AssignmentTextStyle>
                    )}
                </FlexEnd>
            </BoxMargin>
            <FlexSpace>
                {lecture ? (
                    submit ? (
                        <SubmitBox>
                            <Flex sx={{ marginRight: '35px' }}>
                                <FileIcon />
                                <NameText>파일명.pdf</NameText>
                                <IconButtonStyle sx={{ width: '20px', height: '20px' }} disableRipple>
                                    <SurveyCloseIcon />
                                </IconButtonStyle>
                            </Flex>

                            <Flex>
                                <LinkIcon />
                                <NameText>www.google.com</NameText>
                                <IconButtonStyle sx={{ width: '20px', height: '20px' }} disableRipple>
                                    <SurveyCloseIcon />
                                </IconButtonStyle>
                            </Flex>
                        </SubmitBox>
                    ) : (
                        <FlexEnd sx={{ width: '100%' }}>
                            <RedTextStyle>미제출</RedTextStyle>
                        </FlexEnd>
                    )
                ) : (
                    <Box sx={{ width: '100%' }}>
                        <SubmitBox>
                            {!lecture && submitBtn ? null : (
                                <CommonButton
                                    width={'100px'}
                                    height={'42px'}
                                    text={'과제추가'}
                                    background={'#fff'}
                                    border={'#D5D4DC'}
                                    color={'#333'}
                                    fontWeight={500}
                                    fontSize={'1rem'}
                                    disabled={false}
                                    onClick={handleClickBtn}
                                />
                            )}
                            <Flex sx={{ marginRight: '35px' }}>
                                <FileIcon />
                                <NameText>파일명.pdf</NameText>
                                <IconButtonStyle sx={{ width: '20px', height: '20px' }} disableRipple>
                                    <SurveyCloseIcon />
                                </IconButtonStyle>
                            </Flex>

                            <Flex>
                                <LinkIcon />
                                <NameText>www.google.com</NameText>
                                <IconButtonStyle sx={{ width: '20px', height: '20px' }} disableRipple>
                                    <SurveyCloseIcon />
                                </IconButtonStyle>
                            </Flex>
                        </SubmitBox>

                        {submitBtn ? (
                            <FlexEnd>
                                <AnswerTextStyle>제출완료</AnswerTextStyle>
                            </FlexEnd>
                        ) : (
                            <FlexEnd sx={{ width: '100%' }}>
                                <CommonButton
                                    width={'72px'}
                                    height={'34px'}
                                    text={'제출'}
                                    background={'#2F3640'}
                                    color={'#fff'}
                                    fontSize={'0.875rem'}
                                    onClick={handleClickSubmitBtn}
                                />
                            </FlexEnd>
                        )}
                    </Box>
                )}
            </FlexSpace>

            <PopoverBox
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleCloseBtn}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
            >
                <MenuList>
                    <input id="upload-button-file" type="file" style={{ display: 'none' }} />
                    <MenuItem component={'label'} htmlFor={'upload-button-file'}>
                        파일
                    </MenuItem>
                    <MenuItem onClick={handleClickLinkDialog}>링크</MenuItem>
                </MenuList>
            </PopoverBox>

            <CommonDialog
                open={linkDialog}
                title={'링크'}
                children={
                    <FlexColumnCenter>
                        <DialogText>링크를 입력해 주세요</DialogText>
                        <DialogTextFieldBox>
                            <CommonTextField placeholder={'최대 100자 이내'} width={'305px'} />
                            <DialogErrorText>올바른 링크를 입력하세요.</DialogErrorText>
                        </DialogTextFieldBox>
                    </FlexColumnCenter>
                }
                actionBtn1={false}
                btnText2={'링크 추가'}
                onClose={handleCloseDialog}
            />

            <CommonDialog
                open={saveDialog}
                title={'알림'}
                message={<Typography>평가 점수를 확인해 주세요.</Typography>}
                actionBtn1={false}
                btnText2={'확인'}
                onClose={handleCloseDialog}
            />
        </Root>
    );
};

AssignmentComponent.propTypes = {
    lecture: PropTypes.bool
};

export default AssignmentComponent;
