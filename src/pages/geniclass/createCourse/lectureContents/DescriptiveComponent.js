import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { Flex, FlexCenter, FlexEnd, FlexSpace, FormControlBox, StyledInput } from '../../common/styled/CommonStyle';
import { ReactComponent as UnRadioIcon } from '../../../../assets/images/UnRadioIcon.svg';
import { ReactComponent as RadioIcon } from '../../../../assets/images/RadioIcon.svg';
import { ReactComponent as WrongAnswerIcon } from '../../../../assets/images/WrongAnswerIcon.svg';
import { ReactComponent as AnswerIcon } from '../../../../assets/images/AnswerIcon.svg';
import { useViewSize } from '../../../../store';
import ClearIcon from '../../../../assets/images/ClearIcon.svg';
import ShortAnswerComponent from './ShortAnswerComponent';
import PropTypes from 'prop-types';

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

const RedTextStyle = styled(TextStyle)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1rem !important',
        color: '#FF5E57 !important',
        letterSpacing: '0.1px',
        marginLeft: '0 !important'
    }
}));

const AnswerTextStyle = styled(TextStyle)(({ theme }) => ({
    '&.MuiTypography-root': {
        color: '#3190FF'
    }
}));

const DescriptiveComponent = (props) => {
    const { isLg } = useViewSize();
    const { lecture } = props;
    const [submit, setSubmit] = React.useState(false);

    return (
        <Root>
            {lecture ? (
                <>
                    <BoxMargin>
                        <TextStyle sx={{ maxWidth: 'calc(100% - 140px)' }}>주관식 평가 질문입니다.</TextStyle>
                        <FlexEnd sx={{ width: '140px' }}>
                            <EvaluationChipBox>
                                <Typography>평가</Typography>
                            </EvaluationChipBox>
                            <EvaluationTextStyle>
                                <span>-</span> / <span>100</span>
                            </EvaluationTextStyle>
                        </FlexEnd>
                    </BoxMargin>
                    <StyledInputCustom label="" variant="outlined" disabled={true} placeholder={''} />
                    <FlexSpace>
                        <AnswerTextStyle>정답 : 주관식 정답</AnswerTextStyle>
                        {submit ? <AnswerTextStyle>채점완료</AnswerTextStyle> : <RedTextStyle>미제출</RedTextStyle>}
                    </FlexSpace>
                </>
            ) : (
                <>
                    <BoxMargin>
                        <TextStyle sx={{ maxWidth: 'calc(100% - 140px)' }}>주관식 평가 질문입니다.</TextStyle>
                        <FlexEnd sx={{ width: '140px' }}>
                            <EvaluationChipBox>
                                <Typography>평가</Typography>
                            </EvaluationChipBox>
                            <EvaluationTextStyle>
                                <span>-</span> / <span>100</span>
                            </EvaluationTextStyle>
                        </FlexEnd>
                    </BoxMargin>
                    <StyledInputCustom label="" variant="outlined" placeholder={'답변(최대 500자)'} />
                </>
            )}
        </Root>
    );
};

DescriptiveComponent.propTypes = {
    lecture: PropTypes.bool
};

export default DescriptiveComponent;
