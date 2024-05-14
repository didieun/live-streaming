import { styled } from '@mui/material/styles';
import React from 'react';
import { Box, Button, FormControl, FormControlLabel, IconButton, Radio, RadioGroup, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { ReactComponent as TextIcon } from '../../../../assets/images/TextIcon.svg';
import { ReactComponent as ImageSquareIcon } from '../../../../assets/images/ImageSquareIcon.svg';
import { ReactComponent as VideoIcon } from '../../../../assets/images/VideoIcon.svg';
import { ReactComponent as NotebookIcon } from '../../../../assets/images/NotebookIcon.svg';
import { ReactComponent as ListChecksIcon } from '../../../../assets/images/ListChecksIcon.svg';
import { ReactComponent as NotePencilIcon } from '../../../../assets/images/NotePencilIcon.svg';
import { ReactComponent as RadioCheckIcon } from '../../../../assets/images/RadioCheckIcon.svg';
import { ReactComponent as UnRadioCheckIcon } from '../../../../assets/images/UnRadioCheckIcon.svg';
import { ReactComponent as LayoutPlayCircleIcon } from '../../../../assets/images/LayoutPlayCircleIcon.svg';
import { ReactComponent as LayoutCodeIcon } from '../../../../assets/images/LayoutCodeIcon.svg';
import { ReactComponent as LayoutExamIcon } from '../../../../assets/images/LayoutExamIcon.svg';
import { ReactComponent as TooltipCloseIcon } from '../../../../assets/images/TooltipCloseIcon.svg';
import TooltipLeftArrowBlue from '../../../../assets/images/TooltipLeftArrowBlue.svg';
import { IconButtonStyle, ArrowTooltipStyle, ArrowTooltipInStyle } from '../../common/styled/CommonStyle';
// import { GroupLessonLayoutTypes } from '../../../../stores/LessonStore';
// import { inject } from 'mobx-react';

const Container = styled(Box)(({ theme }) => ({
    paddingTop: 32,
    height: 'calc(100% - 127px)',
    overflowY: 'auto',
    '&:focus': {
        outline: 0
    },
    '&::-webkit-scrollbar': {
        width: '5px'
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#7A7A7A',
        borderRadius: '10px',
        backgroundClip: 'padding-box'
    },
    '&::-webkit-scrollbar-track': {
        borderRadius: '10px',
        marginTop: 70,
        background: '#E8E8E8'
    }
}));

export const TitleStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        maxWidth: '100%',
        fontSize: '0.875rem',
        color: '#2F3640',
        fontWeight: 500,
        letterSpacing: '0.5px',
        marginBottom: 18,
        textAlign: 'left'
    }
}));

const FormControlBox = styled(FormControl)(({ theme }) => ({
    '&.MuiFormControl-root': {
        marginRight: 0,
        '& .MuiFormControlLabel-root': {
            margin: '0 0 0 14px'
        },
        '& .MuiButtonBase-root': {
            padding: 0
        },
        '& .MuiTypography-root': {
            fontSize: '0.875rem',
            color: '#333',
            fontWeight: 400,
            marginLeft: 5
        },
        '&.Mui-disabled': {
            '& .MuiTypography-root': {
                color: '#d9d9d9'
            }
        }
    }
}));

const ButtonStyle = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        width: '100%',
        height: 40,
        padding: '0 16px',
        boxSizing: 'border-box',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 10,
        borderRadius: 8,
        '&:hover': {
            background: '#E5F1FF'
        },
        '& p': {
            fontSize: '0.875rem',
            color: '#344054',
            fontWeight: 400,
            marginLeft: 10
        },
        '&:last-child': {
            marginBottom: 0
        }
    }
}));

const LineStyle = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 1,
    background: '#d9d9d9',
    marginBottom: 10
}));

const LayoutBox = styled(Box)(({ theme, select }) => ({
    width: 111,
    height: 124,
    background: '#F5F7FB',
    borderRadius: 4,
    border: select ? '2px solid #3190FF' : '2px solid #F5F7FB',
    padding: '10px 11px 4px 12px',
    boxSizing: 'border-box',
    marginTop: 15,
    marginBottom: 25,
    display: 'flex',
    flexDirection: 'column'
}));

const LayoutInBox = styled(Box)(({ theme, layout }) => ({
    width: layout ? 44 : '100%',
    height: 30,
    background: '#fff',
    borderRadius: 4,
    boxSizing: 'border-box',
    border: '1px solid #ECECEC',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5
}));

export const CustomTooltipTitleStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight: 600
    }
}));

export const CustomTooltipTextStyle = styled(CustomTooltipTitleStyle)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontWeight: 400,
        marginTop: 20
    }
}));

const SideBarLayoutComponent = (props) => {
    const { layoutTooltip, contentsTooltip, handleCloseLayoutTooltip, handleCloseContentsTooltip } = props;
    const [value, setValue] = React.useState('1단');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleClickLayoutType = (type) => {
        // const { lessonStore } = props;
        // lessonStore.changeLessonLayout(type);
    };

    return (
        <Container>
            <ArrowTooltipStyle
                open={layoutTooltip}
                title={
                    <Box>
                        <ArrowTooltipInStyle>
                            <CustomTooltipTitleStyle>단계 1 of 2 레이아웃 선택하기</CustomTooltipTitleStyle>
                            <IconButtonStyle onClick={handleCloseLayoutTooltip} disableRipple>
                                <TooltipCloseIcon />
                            </IconButtonStyle>
                        </ArrowTooltipInStyle>
                        <CustomTooltipTextStyle>
                            수강생들에게 보여주는 강의 콘텐츠를 배치하기 위해
                            <br />
                            레이아웃을 먼저 선택해 주세요.
                        </CustomTooltipTextStyle>
                    </Box>
                }
                placement="right"
                top={'50%'}
                left={'-9px'}
                triangle={TooltipLeftArrowBlue}
            >
                <TitleStyle>레이아웃</TitleStyle>
            </ArrowTooltipStyle>
            <FormControlBox>
                <RadioGroup
                    aria-labelledby="radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        value={'1단'}
                        control={<Radio icon={<UnRadioCheckIcon />} checkedIcon={<RadioCheckIcon />} disableRipple />}
                        label={'1단 세로형'}
                        // onClick={() => handleClickLayoutType(GroupLessonLayoutTypes.vertical)}
                    />

                    <LayoutBox select={value === '1단'}>
                        <LayoutInBox>
                            <LayoutPlayCircleIcon />
                        </LayoutInBox>
                        <LayoutInBox>
                            <LayoutCodeIcon />
                        </LayoutInBox>
                        <LayoutInBox>
                            <LayoutExamIcon />
                        </LayoutInBox>
                    </LayoutBox>

                    <FormControlLabel
                        value={'2단'}
                        control={<Radio icon={<UnRadioCheckIcon />} checkedIcon={<RadioCheckIcon />} disableRipple />}
                        label={'2단 세로형'}
                        // onClick={() => handleClickLayoutType(GroupLessonLayoutTypes.landscape)}
                    />
                    <LayoutBox select={value === '2단'} sx={{ flexDirection: 'row', paddingBottom: '9px' }}>
                        <Box>
                            <LayoutInBox layout={true}>
                                <LayoutPlayCircleIcon />
                            </LayoutInBox>
                            <LayoutInBox layout={true}>
                                <LayoutCodeIcon />
                            </LayoutInBox>
                            <LayoutInBox layout={true}>
                                <LayoutExamIcon />
                            </LayoutInBox>
                        </Box>
                        <LayoutInBox layout={true} sx={{ height: '100%', marginLeft: '5px' }}>
                            <LayoutExamIcon />
                        </LayoutInBox>
                    </LayoutBox>
                </RadioGroup>
            </FormControlBox>

            <ArrowTooltipStyle
                open={contentsTooltip}
                title={
                    <Box>
                        <ArrowTooltipInStyle>
                            <CustomTooltipTitleStyle>단계 1 of 2 강의 콘텐츠 만들기</CustomTooltipTitleStyle>
                            <IconButtonStyle onClick={handleCloseContentsTooltip} disableRipple>
                                <TooltipCloseIcon />
                            </IconButtonStyle>
                        </ArrowTooltipInStyle>
                        <CustomTooltipTextStyle>
                            콘텐츠 유형을 선택해 주세요.
                            <br />
                            생성된 콘텐츠 박스를 클릭하고 유형을 누르면 해당 박스 안에 콘텐츠가 생성됩니다.
                        </CustomTooltipTextStyle>
                    </Box>
                }
                placement="right"
                top={'50%'}
                left={'-9px'}
                triangle={TooltipLeftArrowBlue}
            >
                <TitleStyle sx={{ marginTop: '29px' }}>콘텐츠</TitleStyle>
            </ArrowTooltipStyle>
            <ButtonStyle disableRipple>
                <TextIcon />
                <Typography>텍스트</Typography>
            </ButtonStyle>
            <ButtonStyle disableRipple>
                <ImageSquareIcon />
                <Typography>이미지</Typography>
            </ButtonStyle>
            <ButtonStyle disableRipple>
                <VideoIcon />
                <Typography>동영상</Typography>
            </ButtonStyle>
            <ButtonStyle disableRipple>
                <NotebookIcon />
                <Typography>교재</Typography>
            </ButtonStyle>
            <LineStyle />
            <ButtonStyle disableRipple>
                <ListChecksIcon />
                <Typography>평가</Typography>
            </ButtonStyle>
            <ButtonStyle disableRipple>
                <NotePencilIcon />
                <Typography>과제</Typography>
            </ButtonStyle>
        </Container>
    );
};

SideBarLayoutComponent.propTypes = {
    layoutTooltip: PropTypes.bool,
    contentsTooltip: PropTypes.bool,
    handleCloseLayoutTooltip: PropTypes.func,
    handleCloseContentsTooltip: PropTypes.func
};

// export default inject('lessonStore')(SideBarLayoutComponent);
export default SideBarLayoutComponent;
