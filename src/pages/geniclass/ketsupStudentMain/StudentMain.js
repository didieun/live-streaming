import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, Tab, Tabs, Typography } from '@mui/material';
import Header from './header/Header';
import Footer from './footer/Footer';
import { FlexCenter, IconButtonStyle } from '../common/styled/CommonStyle';
import { useViewSize } from '../../../store';
import { ReactComponent as VideoPlayIcon } from '../../../assets/images/VideoPlayIcon.svg';
import LectureReviewComponent from '../main/review/LectureReviewComponent';
import MainLectureComponent from '../main/lecture/MainLectureComponent';
import StudentMainLectureComponent from './StudentMainLectureComponent';

export const Container = styled(Stack)(({ theme }) => ({
    width: '100%',
    minHeight: '100vh',
    background: '#fff',
    boxSizing: 'border-box'
}));

const ContentsBox = styled(Box)(({ theme, isLg }) => ({
    width: isLg ? '100%' : 1280,
    padding: isLg ? '60px 16px' : '60px 0',
    minHeight: `calc(100vh - ${headerHeight}px - 234px)`,
    margin: `${headerHeight}px auto 0`
}));

const VideoBox = styled(FlexCenter)(({ theme, isLg }) => ({
    width: '100%',
    height: isLg ? 'max-content' : 720,
    aspectRatio: isLg ? 16 / 9 : 'unset',
    borderRadius: 5,
    background: '#E3E3E3',
    marginBottom: 40,
    '& .MuiButtonBase-root': {
        width: isLg ? 51 : 98,
        height: isLg ? 51 : 98,
        '& svg': {
            width: isLg ? 51 : 98,
            height: isLg ? 51 : 98
        }
    }
}));

const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.5rem',
        color: '#333',
        fontWeight: 500,
        letterSpacing: '-0.5px',
        textAlign: 'left',
        wordBreak: 'keep-all',
        textOverflow: 'unset',
        whiteSpace: 'unset',
        lineHeight: '33.12px'
    }
}));

const NameText = styled(TextStyle)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '2.25rem',
        fontWeight: 700,
        marginBottom: 30,
        lineHeight: 'normal'
    }
}));

const TitleText = styled(TextStyle)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.75rem',
        fontWeight: 700,
        lineHeight: 'normal',
        marginTop: 36
    }
}));

const Text = styled(TextStyle)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.25rem',
        fontWeight: 400,
        margin: '20px 0 10px',
        lineHeight: 'normal'
    }
}));

const InfoText = styled(TextStyle)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.25rem',
        fontWeight: 400,
        margin: '10px 0 40px',
        lineHeight: '31.2px'
    }
}));

const ChipBox = styled(Box)(({ theme }) => ({
    flex: 3,
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8
}));

const ChipStyle = styled(FlexCenter)(({ theme }) => ({
    minWidth: 74,
    height: 36,
    border: '1px solid #FFBE9C',
    borderRadius: 99,
    background: '#FFEADF',
    padding: '4px 14px',
    boxSizing: 'border-box',
    '& p': {
        fontSize: '1rem',
        color: '#FF7628',
        letterSpacing: '-0.5px',
        fontWeight: 500,
        lineHeight: 'normal'
    }
}));

const LineStyle = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 1,
    background: '#D5D4DC',
    marginBottom: 40
}));

const TabsStyle = styled(Tabs)(({ theme }) => ({
    '&.MuiTabs-root': {
        '& .MuiButtonBase-root': {
            minHeight: 46,
            marginRight: 14,
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#737373',
            border: '1px solid #DDDDDD',
            borderRadius: 50,
            opacity: 1,
            minWidth: 140,
            '&:hover': {
                backgroundColor: '#2F3640',
                color: '#fff'
            },
            '&.Mui-selected': {
                backgroundColor: '#2F3640',
                color: '#fff'
            }
        },
        '& .MuiTab-root': {
            padding: '6px 40px'
        },
        '& .MuiTabs-indicator': {
            display: 'none',
            width: 0
        }
    }
}));

export const headerHeight = 78;

const Main = () => {
    const { isLg } = useViewSize();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container>
            <Header />
            <ContentsBox isLg={isLg}>
                <VideoBox isLg={isLg}>
                    <IconButtonStyle disableRipple>
                        <VideoPlayIcon />
                    </IconButtonStyle>
                </VideoBox>
                <NameText>문예진</NameText>
                <TextStyle>
                    국어국문학
                    <br />
                    한국어교원자격 1급
                </TextStyle>

                <TextStyle>강의 언어 : 한국어 / 영어 / 인도네시아어</TextStyle>
                <TitleText>키워드</TitleText>
                <Text>강의 영역</Text>
                <ChipBox>
                    <ChipStyle>
                        <Typography>TOPIK 읽기</Typography>
                    </ChipStyle>
                    <ChipStyle>
                        <Typography>TOPIK 듣기</Typography>
                    </ChipStyle>
                    <ChipStyle>
                        <Typography>비지니스 한국어</Typography>
                    </ChipStyle>
                </ChipBox>
                <Text>관심사</Text>
                <ChipBox>
                    <ChipStyle>
                        <Typography>K-POP</Typography>
                    </ChipStyle>
                    <ChipStyle>
                        <Typography>반려동물</Typography>
                    </ChipStyle>
                </ChipBox>

                <TitleText>소개</TitleText>
                <InfoText>
                    건강과 지속 가능성을 추구하는 이들을 위해, 맛과 영양이 가득한 채식 요리 레시피를 소개합니다. 이 글에서는 간단하지만
                    맛있는 채식 요리 10가지를 선보입니다. 첫 번째 레시피는 아보카도 토스트, 아침 식사로 완벽하며 영양소가 풍부합니다. 두
                    번째는 콩과 야채를 사용한 푸짐한 채식 칠리, 포만감을 주는 동시에 영양소를 공급합니다. 세 번째는 색다른 맛의 채식
                    패드타이, 고소한 땅콩 소스로 풍미를 더합니다. 네 번째는 간단하고 건강한 콥 샐러드, 신선한 야채와 단백질이 가득합니다.
                    다섯 번째로는 향긋한 허브와 함께하는 채식 리조또, 크리미한 맛이 일품입니다. 여섯 번째는 에너지를 주는 채식 스무디 볼,
                    과일과 견과류의 완벽한 조합입니다. 일곱 번째는 건강한 채식 버거, 만족감 있는 식사를 제공합니다. 여덟 번째는 채식 파스타
                    프리마베라, 신선한 야채와 토마토 소스의 조화가 뛰어납니다. 아홉 번째는 채식 볶음밥, 풍부한 맛과 영양으로 가득 차
                    있습니다. 마지막으로, 식사 후 달콤한 마무리를 위한 채식 초콜릿 케이크, 건강한 재료로 만들어 죄책감 없는 달콤함을
                    선사합니다. 이 레시피들은 채식을 선호하는 이들에게 새로운 요리 아이디어를 제공하며, 채식이 얼마나 다채롭고 맛있을 수
                    있는지 보여줍니다. 건강한 라이프스타일을 추구하는 모든 이들에게 이 레시피들이 영감을 줄 것입니다.
                </InfoText>

                <LineStyle />

                <TabsStyle value={value} onChange={handleChange}>
                    <Tab label="리뷰" value={0} />
                    <Tab label="교육과정" value={1} />
                </TabsStyle>

                {value === 0 && <LectureReviewComponent />}
                {value === 1 && <StudentMainLectureComponent />}
            </ContentsBox>
            <Footer />
        </Container>
    );
};

export default Main;
