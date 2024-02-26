import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import TabBox from '../tabs/TabBox';
import ContentsBox from './ContentsBox';
import PropTypes from 'prop-types';
import TestImage from '../../../../../assets/images/TestImage.png';
import { ArrowTooltipStyle, IconButtonStyle, Flex } from '../../../common/styled/CommonStyle';
import { ReactComponent as QuestionIcon } from '../../../../../assets/images/QuestionIcon.svg';
import { ReactComponent as TooltipCloseIcon } from '../../../../../assets/images/TooltipCloseIcon.svg';
import { ReactComponent as ArrowClockwiseIcon } from '../../../../../assets/images/ArrowClockwiseIcon.svg';
import TooltipArrowBlue from '../../../../../assets/images/TooltipArrowBlue.svg';
import AddContentsBox from './AddContentsBox';
import { useViewSize } from '../../../../../store';
import CommonButton from '../../../common/CommonButton';

const Container = styled(Box)(({ theme, contentsWidth }) => ({
    display: 'flex',
    justifyContent: 'space-between'
}));

const ContentsBoxStyle = styled(Box)(({ theme, contentsWidth }) => ({
    width: contentsWidth < 800 ? '100%' : 'calc((100% / 2) - 9px)',
    borderRadius: 4,
    marginTop: '25px'
}));

const ContentsTop = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 56,
    background: '#333',
    padding: 16,
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '4px 4px 0 0',
    '& p': {
        fontSize: '1rem',
        color: '#fff',
        fontWeight: 600,
        letterSpacing: '0.5px'
    }
}));

const ContentsBoxIn = styled(Box)(({ theme, radioValue, contentsMaxHeight, contentsHeight, contentsWidth }) => ({
    width: '100%',
    height: radioValue ? (contentsWidth < 800 ? 800 : contentsMaxHeight) : contentsWidth < 800 ? 800 : contentsHeight,
    minHeight: 700,
    border: '1px solid #D9D9D9',
    borderTop: 0,
    borderRadius: '0 0 4px 4px',
    boxSizing: 'border-box'
}));

const TabsBox = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    '& .MuiTabs-root': {
        width: 'calc(100% - 120px) !important'
    }
}));

const ContentsListBox = styled(Box)(({ theme, contentsWidth }) => ({
    width: 'calc(100% - 14px)',
    height: 'calc(100% - 57px)',
    boxSizing: 'border-box',
    overflowY: 'auto',
    padding: contentsWidth < 1000 ? '26px 5px 26px 10px' : '26px 14px 26px 28px',
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
        background: '#E8E8E8',
        marginTop: 25,
        marginBottom: 25
    }
}));

const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.125rem',
        color: '#000',
        fontWeight: 400,
        marginBottom: 10,
        textAlign: 'left'
    }
}));

const GridBox = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gridTemplateRows: 'auto',
    gap: 25
}));

const EmptyBox = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 'calc(100% - 38px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': {
        fontSize: '1.125rem',
        color: '#979797',
        fontWeight: 400,
        letterSpacing: '-0.36px'
    }
}));

const InfoBox = styled(Box)(({ theme }) => ({
    width: 119,
    height: 56,
    boxSizing: 'border-box',
    borderRight: '1px solid #ddd',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#F5F5F5',
    cursor: 'pointer',
    '& p': {
        fontSize: '1rem',
        color: '#1976D2',
        fontWeight: 600,
        marginRight: 1
    }
}));

const ButtonStyle = styled(Button)(({ theme }) => ({
    padding: 0,
    background: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
        background: 'transparent'
    },
    '& p': {
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight: 600,
        letterSpacing: '0.5px'
    },
    '& svg': {
        marginRight: 8
    },
    '&.Mui-disabled': {
        background: 'transparent',
        '& p': {
            color: '#D9D9D9'
        },
        '& path': {
            fill: '#D9D9D9'
        }
    }
}));

function ContentsComponent(props) {
    const { radioValue, contentsMaxHeight, contentsHeight, contentsWidth } = props;
    const [question, setQuestion] = React.useState(false);
    const [tabValue, setTabValue] = React.useState('전체');
    const [studentTabValue, setStudentTabValue] = React.useState('전체 수강생보기');

    const valueList = [
        { label: '전체', value: '전체' },
        { label: '멀티미디어', value: '멀티미디어' },
        { label: 'PDF자료', value: 'PDF자료' }
    ];
    const studentValueList = [
        { label: '전체 수강생보기', value: '전체 수강생보기' },
        { label: 'Ariana 외 2명', value: 'Ariana 외 2명' },
        { label: '오학생', value: '오학생' },
        { label: '최학생', value: '최학생' },
        { label: '김학생', value: '김학생' },
        { label: '백학생', value: '백학생' },
        { label: '유학생', value: '유학생' },
        { label: '정학생', value: '학생' }
    ];

    const contentsList = [
        {
            image: TestImage,
            multimedia: true,
            text: '교과서 수업 자료',
            title: '초등 기초 과학123 - 초등 수업자료'
        },
        {
            image: TestImage,
            multimedia: true,
            text: '교과서 수업 자료',
            title: '초등 기초 과학123 - 초등 수업자료 초등 기초 과학123 - 초등 수업자료 '
        },
        {
            image: TestImage,
            multimedia: false,
            text: '교과서 수업 자료',
            title: '초등 기초 과학123 - 초등 수업자료 '
        },
        {
            image: TestImage,
            multimedia: false,
            text: '교과서 수업 자료',
            title: '초등 기초 과학123 - 초등 수업자료'
        },
        {
            image: TestImage,
            multimedia: true,
            text: '교과서 수업 자료',
            title: '초등 기초 과학123 - 초등 수업자료'
        }
    ];

    const addContentsList = [
        {
            image: TestImage,
            course: '교과서 수업 자료',
            title: '초등 기초 과학123 - 초등 수업자료',
            sub: '수학 10쪽, 수학 익힘 6~7쪽',
            chip: '멀티미디어',
            print: false
        },
        {
            image: TestImage,
            course: '학습지',
            title: '초등 기초 과학123 - 초등 수업자료 초등 기초 과학123 - 초등 수업자료 ',
            sub: '수학 10쪽, 수학 익힘 6~7쪽',
            chip: 'PDF',
            print: true
        },
        {
            image: TestImage,
            course: '학습지',
            title: '초등 기초 과학123 - 초등 수업자료 ',
            sub: '영어 10쪽',
            chip: 'PDF',
            print: false
        },
        {
            image: TestImage,
            course: '',
            title: '초등 기초 과학123 - 초등 수업자료',
            sub: '영어 10쪽',
            chip: '공유자료',
            print: false
        },
        {
            image: TestImage,
            course: '교과서 수업 자료',
            title: '초등 기초 과학123 - 초등 수업자료',
            sub: '영어 10쪽',
            chip: '멀티미디어',
            print: false
        }
    ];

    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleChangeStudentTab = (event, newValue) => {
        setStudentTabValue(newValue);
    };

    const handleClickQuestion = () => {
        setQuestion(!question);
    };

    const handleCloseQuestion = () => {
        setQuestion(false);
    };

    return (
        <Container
            sx={{
                position: 'absolute',
                left: props.rect.x,
                top: props.rect.y,
                width: props.rect.width,
                height: props.rect.height,
                flexDirection: props.rect.direction
            }}
        >
            <ContentsBoxStyle sx={{ marginBottom: props.rect.width < 800 ? '25px' : 0 }} contentsWidth={props.rect.width}>
                <ContentsTop>
                    <Typography>검색된 콘텐츠</Typography>
                </ContentsTop>
                <ContentsBoxIn
                    radioValue={radioValue}
                    contentsMaxHeight={contentsMaxHeight}
                    contentsHeight={contentsHeight}
                    contentsWidth={props.rect.width}
                >
                    <TabBox
                        contentsWidth={props.rect.width}
                        tabValue={tabValue}
                        scrollButtons={false}
                        valueList={valueList}
                        handleChangeTab={handleChangeTab}
                    />
                    <ContentsListBox contentsWidth={props.rect.width}>
                        <TitleText>{tabValue}</TitleText>
                        {contentsList.length === 0 ? (
                            <EmptyBox>
                                <Typography>검색된 콘텐츠가 없습니다.</Typography>
                            </EmptyBox>
                        ) : (
                            <GridBox>
                                {contentsList.map((list, i) =>
                                    tabValue === '멀티미디어' ? (
                                        list.multimedia && <ContentsBox index={i} list={list} />
                                    ) : tabValue === 'PDF자료' ? (
                                        !list.multimedia && <ContentsBox index={i} list={list} />
                                    ) : (
                                        <ContentsBox index={i} list={list} />
                                    )
                                )}
                            </GridBox>
                        )}
                    </ContentsListBox>
                </ContentsBoxIn>
            </ContentsBoxStyle>

            <ContentsBoxStyle contentsWidth={props.rect.width}>
                <ContentsTop>
                    <Typography>강의 콘텐츠 담기</Typography>
                    <Flex>
                        <ButtonStyle sx={{ marginRight: '25px' }} disableRipple>
                            <Typography>코칭 스케줄보기</Typography>
                        </ButtonStyle>
                        <CommonButton
                            width={'87px'}
                            height={'34px'}
                            text={'초기화'}
                            background={'#D8E5FC'}
                            color={'#000'}
                            fontWeight={600}
                            borderRadius={'4px'}
                            fontSize={'0.875rem'}
                            disabled={false}
                            startIcon={<ArrowClockwiseIcon />}
                        />
                    </Flex>
                </ContentsTop>
                <ContentsBoxIn
                    radioValue={radioValue}
                    contentsMaxHeight={contentsMaxHeight}
                    contentsHeight={contentsHeight}
                    contentsWidth={props.rect.width}
                >
                    <TabsBox>
                        <InfoBox onClick={handleClickQuestion}>
                            <Typography>강의대상</Typography>
                            <ArrowTooltipStyle
                                open={question}
                                title={
                                    <Box>
                                        <Typography sx={{ marginRight: 25 }}>
                                            전체 학생 또는 학생별
                                            <br />
                                            수업콘텐츠를 선택할 수 있습니다.
                                        </Typography>
                                        <IconButtonStyle onClick={handleCloseQuestion} disableRipple>
                                            <TooltipCloseIcon />
                                        </IconButtonStyle>
                                    </Box>
                                }
                                placement="bottom"
                                top={'-20px'}
                                left={'50%'}
                                triangle={TooltipArrowBlue}
                            >
                                <QuestionIcon />
                            </ArrowTooltipStyle>
                        </InfoBox>
                        <TabBox
                            tabValue={studentTabValue}
                            valueList={studentValueList}
                            gap={25}
                            scrollButtons={true}
                            ellipsis={true}
                            handleChangeTab={handleChangeStudentTab}
                        />
                    </TabsBox>
                    <ContentsListBox contentsWidth={props.rect.width}>
                        {addContentsList.map((list, i) => (
                            <AddContentsBox index={i} list={list} contentsWidth={props.rect.width} />
                        ))}
                    </ContentsListBox>
                </ContentsBoxIn>
            </ContentsBoxStyle>
        </Container>
    );
}

ContentsComponent.propTypes = {
    radioValue: PropTypes.string,
    contentsMaxHeight: PropTypes.string,
    contentsHeight: PropTypes.string,
    contentsWidth: PropTypes.object
};

export default ContentsComponent;
