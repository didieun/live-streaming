import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { FlexCenter, FlexEnd, FlexSpace, FormControlBox, StyledInput } from '../../common/styled/CommonStyle';
import { ReactComponent as UnCheckedIcon } from '../../../../assets/images/UnCheckedIcon.svg';
import { ReactComponent as CheckedIcon } from '../../../../assets/images/CheckedIcon.svg';
import { ReactComponent as WrongAnswerIcon } from '../../../../assets/images/WrongAnswerIcon.svg';
import { ReactComponent as AnswerIcon } from '../../../../assets/images/AnswerIcon.svg';
import { useViewSize } from '../../../../store';
import TestImage from '../../../../assets/images/TestImage.png';
import TestPDF from '../../../../assets/images/TestPDF.png';
import PropTypes from 'prop-types';

const Root = styled(Box)(({ theme }) => ({
    marginBottom: 40,
    paddingBottom: 40
}));

const BoxMargin = styled(FlexSpace)(({ theme }) => ({
    alignItems: 'flex-start',
    marginBottom: 18
}));

const ImageBox = styled(FlexCenter)(({ theme }) => ({
    width: 241,
    height: 'auto',
    background: '#bbb',
    marginBottom: 18,
    overflow: 'hidden',
    '& img': {
        width: '100%',
        objectFit: 'cover'
    }
}));

const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.125rem',
        color: '#333',
        fontWeight: 700,
        textAlign: 'left',
        wordBreak: 'keep-all',
        textOverflow: 'unset',
        whiteSpace: 'unset',
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

const FormControlBoxStyle = styled(FormControlBox)(({ theme }) => ({
    '&.MuiFormControl-root': {
        width: '100%',
        '& .MuiFormControlLabel-root': {
            maxWidth: 'calc(100% - 80px)',
            '& .MuiTypography-root': {
                maxWidth: 'calc(100% - 24px)',
                wordBreak: 'keep-all',
                textOverflow: 'unset',
                whiteSpace: 'unset',
                textAlign: 'left'
            }
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

const ListBoxStyle = styled(FlexSpace)(({ theme, wrong, answer, etc }) => ({
    width: '100%',
    background: wrong ? '#FFE2E1' : answer ? '#D7E9FF' : '#fff',
    paddingRight: wrong ? 5 : answer ? 5 : 0,
    boxSizing: 'border-box',
    marginBottom: etc ? 0 : 20
}));

const StyledInputCustom = styled(StyledInput)(({ theme }) => ({
    '&.MuiFormControl-root': {
        width: '100% !important',
        marginBottom: 20
    },
    '& .MuiInputBase-root': {
        minHeight: '35px !important',
        height: '35px !important',
        borderRadius: '0 !important',
        '& input': {
            minHeight: '35px !important',
            '&.Mui-disabled': {
                WebkitTextFillColor: '#333',
                opacity: 1
            }
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: '0 !important',
            borderBottom: '1px solid #D5D4DC !important'
        },
        '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: '0 !important',
                borderBottom: '1px solid #D5D4DC !important'
            }
        },
        '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: '0 !important',
                borderBottom: '1px solid #3190FF !important'
            }
        },
        '&.Mui-error': {
            '& .MuiOutlinedInput-notchedOutline': {
                border: '0 !important',
                borderBottom: '1px solid #FF5E57 !important'
            }
        }
    }
}));

const AnswerTextStyle = styled(TextStyle)(({ theme }) => ({
    '&.MuiTypography-root': {
        color: '#3190FF'
    }
}));

const MultipleChoiceComponent = (props) => {
    const { lecture } = props;
    const { isLg } = useViewSize();
    const [submit, setSubmit] = React.useState(true);
    const valueList = [
        {
            label: 'A',
            value: 0,
            checked: true,
            wrong: false,
            answer: false,
            etc: false
        },
        {
            label: 'B',
            value: 1,
            checked: true,
            wrong: true,
            answer: false
        },
        {
            label: 'C',
            value: 2,
            checked: false,
            wrong: false,
            answer: true,
            etc: false
        }
        // {
        //     label: '기타',
        //     value: 3,
        //     checked: false,
        //     wrong: false,
        //     answer: false,
        //     etc: true
        // }
    ];

    return (
        <Root>
            <Box>
                <BoxMargin>
                    <TextStyle sx={{ maxWidth: 'calc(100% - 140px)' }}>
                        <span>(필수)</span> 객관식 다답형 평가 질문입니다.
                    </TextStyle>
                    <FlexEnd sx={{ width: '140px' }}>
                        <EvaluationChipBox>
                            <Typography>평가</Typography>
                        </EvaluationChipBox>
                        <EvaluationTextStyle>
                            <span>-</span> / <span>100</span>
                        </EvaluationTextStyle>
                    </FlexEnd>
                </BoxMargin>

                {/* 이미지가 있을경우 */}
                <ImageBox>
                    <img src={TestImage} alt={'테스트 이미지'} />
                    {/*<img src={TestPDF} alt={'테스트 이미지'} />*/}
                </ImageBox>
            </Box>

            {lecture ? (
                <>
                    <FormControlBoxStyle>
                        <FormGroup>
                            {valueList.map((list, i) => (
                                <>
                                    <ListBoxStyle key={i} wrong={list.wrong} answer={list.answer} etc={list.etc}>
                                        <FormControlLabel
                                            key={i}
                                            value={list.value}
                                            control={
                                                <Checkbox
                                                    checked={list.checked}
                                                    icon={<UnCheckedIcon />}
                                                    checkedIcon={<CheckedIcon />}
                                                    disableRipple
                                                />
                                            }
                                            label={list.label}
                                        />
                                        {list.wrong ? <WrongAnswerIcon /> : list.answer ? <AnswerIcon /> : null}
                                    </ListBoxStyle>
                                    {list.etc && <StyledInputCustom label="" variant="outlined" disabled={true} placeholder={''} />}
                                </>
                            ))}
                        </FormGroup>
                    </FormControlBoxStyle>
                    <FlexSpace>
                        <AnswerTextStyle>정답 : C</AnswerTextStyle>
                        {submit ? <AnswerTextStyle>채점완료</AnswerTextStyle> : <RedTextStyle>미제출</RedTextStyle>}
                    </FlexSpace>
                </>
            ) : (
                <FormControlBoxStyle>
                    <FormGroup>
                        {valueList.map((list, i) => (
                            <>
                                <ListBoxStyle key={i} etc={list.etc}>
                                    <FormControlLabel
                                        key={i}
                                        value={list.value}
                                        control={<Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} disableRipple />}
                                        label={list.label}
                                    />
                                </ListBoxStyle>
                                {list.etc && <StyledInputCustom label="" variant="outlined" placeholder={''} />}
                            </>
                        ))}
                    </FormGroup>
                </FormControlBoxStyle>
            )}
        </Root>
    );
};

MultipleChoiceComponent.propTypes = {
    lecture: PropTypes.bool
};

export default MultipleChoiceComponent;
