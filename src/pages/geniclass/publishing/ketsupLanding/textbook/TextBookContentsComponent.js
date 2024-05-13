import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, Stack, Typography } from '@mui/material';
import { FlexCenter, FlexColumnCenter, IconButtonStyle } from '../../common/styled/CommonStyle';
import TextBook1 from '../../../../assets/images/TextBook1.png';
import TextBook2 from '../../../../assets/images/TextBook2.png';
import TextBook3 from '../../../../assets/images/TextBook3.png';
import TextBook4 from '../../../../assets/images/TextBook4.png';
import { ReactComponent as KetsUpCaretDownArrowIcon } from '../../../../assets/images/KetsUpCaretDownArrowIcon.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useViewSize } from '../../../../store';
import LandingBookImage from '../../../../assets/images/LandingBookImage.png';

const Container = styled(Stack)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    background: '#F9FAFB',
    padding: '122px 0 148px',
    boxSizing: 'border-box',
    [theme?.breakpoints?.down('md')]: {
        padding: '70px 0 60px'
    },
    [theme?.breakpoints?.down('sm')]: {
        padding: '50px 0 60px'
    }
}));

const ContainerIn = styled(FlexColumnCenter)(({ theme }) => ({
    width: 1200,
    padding: '0 16px',
    boxSizing: 'border-box',
    [theme?.breakpoints?.down('hd')]: {
        padding: '0 30px'
    },
    [theme?.breakpoints?.down('md')]: {
        width: '100%',
        padding: '0'
    }
}));

const SubText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.75rem',
        color: '#667085',
        fontWeight: 500,
        letterSpacing: '-0.5px',
        lineHeight: 'normal',
        textAlign: 'center',
        wordBreak: 'keep-all',
        textOverflow: 'unset',
        whiteSpace: 'unset',
        [theme?.breakpoints?.down('md')]: {
            fontSize: '1.5rem',
            padding: '0 24px'
        },
        [theme?.breakpoints?.down('sm')]: {
            fontSize: '1.125rem'
        }
    }
}));

const TitleText = styled(SubText)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '3rem',
        fontWeight: 700,
        color: '#0C111D',
        marginTop: 20,
        '& span': {
            color: '#00B959'
        },
        [theme?.breakpoints?.down('md')]: {
            fontSize: '2.625rem',
            marginTop: 14
        },
        [theme?.breakpoints?.down('sm')]: {
            fontSize: '1.75rem',
            marginTop: 10
        }
    }
}));

const TextStyle = styled(SubText)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.5rem',
        marginTop: 0,
        [theme?.breakpoints?.down('md')]: {
            fontSize: '1.125rem',
            marginTop: 0
        },
        [theme?.breakpoints?.down('sm')]: {
            lineHeight: '24px',
            fontSize: '1rem'
        }
    }
}));

const SliderBox = styled(Box)(({ theme }) => ({
    width: '100%',
    margin: '75px 0',
    boxSizing: 'border-box',
    [theme?.breakpoints?.down('md')]: {
        margin: '64px 0 40px',
        paddingLeft: 24
    },
    [theme?.breakpoints?.down('sm')]: {
        margin: '40px 0'
    }
}));

const SliderStyle = styled(Slider)(({ theme }) => ({
    '&.slick-slider': {
        '& .slick-slide': {
            padding: '0 8px',
            boxSizing: 'border-box'
        },
        '& .slick-prev': {
            left: -16
        },
        '& .slick-next': {
            right: -16
        }
    }
}));

const ImageBox = styled(Box)(({ theme }) => ({
    aspectRatio: '9/12',
    borderRadius: 3,
    border: '1px solid #E4E7EC',
    boxShadow: '0px 0px 3.153px 0px rgba(0, 0, 0, 0.25)',
    overflow: 'hidden',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }
}));

const CharacterBox = styled(Box)(({ theme }) => ({
    width: 54,
    height: 54,
    marginBottom: 20,
    overflow: 'hidden',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    [theme?.breakpoints?.down('sm')]: {
        marginBottom: 10,
        width: 35,
        height: 35
    }
}));

const ArrowIconButton = styled(IconButtonStyle)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        width: 40,
        height: 40,
        background: '#fff',
        border: '1px solid #F2F4F7',
        boxShadow: '0px 2.359px 7.077px rgba(138, 136, 149, 0.50)',
        zIndex: 100,
        '&:hover': {
            background: '#fff'
        },
        '&:after': {
            display: 'none'
        },
        '&:before': {
            display: 'none'
        },
        '& svg': {
            width: 20,
            height: 20
        },
        '&.slick-disabled': {
            background: '#fff',
            opacity: 1,
            '& svg': {
                '& path': {
                    fill: '#D0D5DD',
                    stroke: '#D0D5DD'
                }
            }
        }
    }
}));

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <ArrowIconButton className={className} style={{ ...style, display: 'block' }} onClick={onClick} disableRipple>
            <KetsUpCaretDownArrowIcon style={{ transform: 'rotate( -90deg )' }} />
        </ArrowIconButton>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <ArrowIconButton className={className} style={{ ...style, display: 'block' }} onClick={onClick} disableRipple>
            <KetsUpCaretDownArrowIcon style={{ transform: 'rotate( 90deg )' }} />
        </ArrowIconButton>
    );
}

const TextBookContentsComponent = () => {
    const { isMd, isSl, isSd, isXSmall } = useViewSize();
    const items = [
        { image: TextBook1 },
        { image: TextBook2 },
        { image: TextBook3 },
        { image: TextBook4 },
        { image: TextBook1 },
        { image: TextBook2 },
        { image: TextBook3 }
    ];
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: isXSmall ? 2.5 : isSd ? 3.5 : isMd ? 4.5 : 6,
        slidesToScroll: 1,
        arrows: isMd ? false : true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <Container>
            <ContainerIn>
                <CharacterBox>
                    <img src={LandingBookImage} alt={'책 이미지'} />
                </CharacterBox>
                <SubText>현지 한국어학당과 동일한 교재</SubText>
                <TitleText>
                    한국대학출판협회의
                    <br />
                    <span>독점적 교재 공급</span>
                </TitleText>
                <SliderBox>
                    <SliderStyle {...settings}>
                        {items.map((item, i) => (
                            <ImageBox key={i}>
                                <img src={item.image} alt={'교재'} />
                            </ImageBox>
                        ))}
                    </SliderStyle>
                </SliderBox>

                <TextStyle>
                    한국 현지 한국어학당에서 사용하는 교재로
                    <br />
                    강의을 진행하는 온라인 어학당은 KETSUP이 유일합니다.
                </TextStyle>
            </ContainerIn>
        </Container>
    );
};

export default TextBookContentsComponent;
