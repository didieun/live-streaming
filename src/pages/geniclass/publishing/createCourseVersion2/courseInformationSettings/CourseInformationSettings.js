import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import CommonRadio from '../../common/CommonRadio';
import CommonTextField from '../../common/CommonTextField';
import CommonTextarea from '../../common/CommonTextarea';
import { FlexCenter, MarginBottom25 } from '../../common/styled/CommonStyle';
import CommonButton from '../../common/CommonButton';
import PropTypes from 'prop-types';
import { useViewSize } from '../../../../store';
import CommonCalendar from '../../common/CommonCalendar';

const Container = styled(Box)(({ theme, isMd, open }) => ({
    width: isMd ? (open ? '100%' : 'calc(100% - 60px)') : 850,
    padding: isMd ? '25px 16px 33px' : '25px 0 33px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: open ? '0 auto' : isMd ? '0 0 0 60px' : '0 auto'
}));

const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.5rem',
        color: '#2F3640',
        fontWeight: 700,
        letterSpacing: '0.5px'
    }
}));

const RadioBox = styled(MarginBottom25)(({ theme }) => ({
    width: '100%',
    '& .MuiFormControl-root': {
        width: '100%',
        '& .MuiFormGroup-root': {
            justifyContent: 'space-between'
        }
    }
}));

const LineStyle = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 2,
    background: '#ddd'
}));

const NameText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.125rem',
        color: '#000',
        fontWeight: 500,
        letterSpacing: '0.5px',
        marginBottom: 15,
        '& span': {
            color: '#A7A7A7'
        }
    }
}));

const InfoText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        maxWidth: '100%',
        whiteSpace: 'normal',
        wordBreak: 'break-all',
        fontSize: '0.875rem',
        color: '#737373',
        fontWeight: 400,
        textAlign: 'left',
        '& span': {
            fontWeight: 600
        }
    }
}));

const TopicBox = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 132,
    border: '1px solid #D4D4D4',
    boxSizing: 'border-box',
    borderRadius: 4,
    padding: '22px 21px',
    marginBottom: 25,
    marginTop: 15
}));

const TopicBoxIn = styled(ToggleButtonGroup)(({ theme }) => ({
    '&.MuiToggleButtonGroup-root': {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        overflowY: 'scroll',
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
            background: '#E8E8E8'
        }
    }
}));

const TopicChip = styled(ToggleButton)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        minWidth: 82,
        height: 36,
        padding: '0 16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '4px !important',
        border: '1px solid #ddd !important',
        marginRight: 10,
        marginBottom: 13,
        background: '#fff',
        cursor: 'pointer',
        marginLeft: '0 !important',
        fontSize: '1.125rem',
        color: '#737373',
        fontWeight: 500,
        '&.Mui-selected': {
            background: '#4D9FFF',
            color: '#fff',
            border: '1px solid #4D9FFF !important'
        },
        '&:hover': {
            background: '#4D9FFF',
            color: '#fff'
        }
    }
}));

function CourseInformationSettings(props) {
    const { isMd } = useViewSize();
    const { handleComplete, open } = props;
    const [topic, setTopic] = React.useState(-1);
    const [value, setValue] = React.useState('1');
    const topicList = [
        { label: '태그' },
        { label: '테스트' },
        { label: '테스트 교육과정' },
        { label: '교육과정 UI' },
        { label: '닥공' },
        { label: '가명정보' },
        { label: '가명정보활용' },
        { label: '실습' },
        { label: '평가' },
        { label: '평가2' },
        { label: '테스트 교육과정' },
        { label: '테스트 교육과정' },
        { label: '테스트 교육과정' }
    ];
    const valueList = [
        {
            label: '맞춤코칭',
            value: '0'
        },
        {
            label: '일시강의',
            value: '1'
        },
        {
            label: '상시강의',
            value: '2'
        },
        {
            label: '만족도 조사',
            value: '3'
        }
    ];

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleClickTopic = (event, newTopic) => {
        setTopic(newTopic);
    };

    return (
        <Container isMd={isMd} open={open}>
            <MarginBottom25>
                <TitleText>강의유형</TitleText>
            </MarginBottom25>

            <RadioBox>
                <CommonRadio handleChange={handleChange} value={value} valueList={valueList} />
            </RadioBox>

            <MarginBottom25>
                {value === '0' && (
                    <InfoText>수강생과 1:1 또는 1:N 음성 코칭부터 스마트펜으로 양방향 첨삭 지도할 수 있는 강의 입니다.</InfoText>
                )}

                {value === '1' && (
                    <InfoText>
                        다수의 수강생을 대상으로 VOD, 과제, 평가 등 다양한 형태의 강의를 할 수 있습니다.
                        <br />
                        <span>특정 일시에만 수강이 가능합니다.</span>
                    </InfoText>
                )}

                {value === '2' && (
                    <InfoText>
                        다수의 수강생을 대상으로 VOD, 과제, 평가 등 다양한 형태의 강의를 할 수 있습니다.
                        <br />
                        <span>수강 일정에 제약이 없습니다.</span>
                    </InfoText>
                )}

                {value === '3' && <InfoText>수강생의 만족도를 조사하는 설문입니다. 모든 강의를 완료한 후에 수행 할 수 있습니다.</InfoText>}
            </MarginBottom25>

            <MarginBottom25>
                <LineStyle />
            </MarginBottom25>
            {value === '1' && (
                <MarginBottom25>
                    <NameText>
                        강의일정<span>(선택)</span>
                    </NameText>
                    {/*<CommonCalendar />*/}
                    <InfoText>강의 시작과 종료의 날짜, 시간을 선택 할 수 있습니다.</InfoText>
                </MarginBottom25>
            )}
            <MarginBottom25>
                <NameText>토픽</NameText>

                <InfoText>
                    토픽을 선택하면 동일 소주제 기준으로 강의 섹션이 구분됩니다. 아래 토픽은 교육과정 개설에서 등록되었습니다.
                    <br />
                    <span>1개를 선택하거나 직접 입력해주세요.</span>
                </InfoText>

                <TopicBox>
                    <TopicBoxIn value={topic} exclusive onChange={handleClickTopic} aria-label="text alignment">
                        {topicList.map((list, i) => (
                            <TopicChip value={i} disableRipple>
                                {list.label}
                            </TopicChip>
                        ))}
                    </TopicBoxIn>
                </TopicBox>

                <CommonTextField placeholder={'토픽 직접입력'} />
            </MarginBottom25>

            <MarginBottom25>
                <NameText>강의명</NameText>
                <CommonTextField placeholder={'제목 (최대50자)'} />
            </MarginBottom25>

            <MarginBottom25>
                <NameText>강의소개</NameText>
                <CommonTextarea minRows={18} maxRows={18} placeholder={'강의 설명 및 커리큘럼 등 자유롭게 적어주세요. (최대 1,000자)'} />
            </MarginBottom25>
            <FlexCenter sx={{ width: '100%' }}>
                <CommonButton
                    width={'293px'}
                    height={'60px'}
                    text={'저장 후 계속'}
                    background={'#4B7BEC'}
                    color={'#fff'}
                    fontWeight={600}
                    borderRadius={'4px'}
                    fontSize={'1.25rem'}
                    onClick={handleComplete}
                    disabled={false}
                />
            </FlexCenter>
        </Container>
    );
}

CourseInformationSettings.propTypes = {
    open: PropTypes.bool,
    handleComplete: PropTypes.func
};

export default CourseInformationSettings;
