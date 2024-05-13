import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, Typography } from '@mui/material';
import { Flex, FlexColumnCenter } from '../common/styled/CommonStyle';
import TestImage from '../../../assets/images/TestImage.png';
import CommonButton from '../common/CommonButton';

const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: '100vh',
    paddingTop: 90,
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center'
}));

const ContainerIn = styled(FlexColumnCenter)(({ theme }) => ({
    width: 350,
    height: '100%',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
    overflow: 'hidden'
}));

const ImageBox = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 200,
    borderRadius: '0 0 10px 10px',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }
}));

const ContentsBox = styled(FlexColumnCenter)(({ theme }) => ({
    width: '100%',
    padding: '30px 24px',
    boxSizing: 'border-box',
    '& button:last-child': {
        marginLeft: 14
    }
}));

const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1rem',
        color: '#333',
        fontWeight: 500,
        letterSpacing: '-0.5px',
        marginBottom: 30,
        '& span': {
            fontWeight: 700
        }
    }
}));

const Invite = () => {
    return (
        <Container>
            <ContainerIn>
                <ImageBox>
                    <img src={TestImage} alt={'이미지'} />
                </ImageBox>
                <ContentsBox>
                    <TextStyle>
                        <span>강사명</span>님이 <span>교육과정명</span> 수업으로 초대합니다.
                    </TextStyle>
                    <Flex sx={{ width: '100%' }}>
                        <CommonButton
                            width={'calc((100% / 2) - 7px)'}
                            height={'40px'}
                            text={'거절'}
                            background={'#FFF'}
                            border={'#D5D4DC'}
                            color={'#333'}
                            fontSize={'1rem'}
                            disabled={false}
                        />
                        <CommonButton
                            width={'calc((100% / 2) - 7px)'}
                            height={'40px'}
                            text={'수락'}
                            background={'#2f3640'}
                            color={'#fff'}
                            fontSize={'1rem'}
                            disabled={false}
                        />
                    </Flex>
                </ContentsBox>
            </ContainerIn>
        </Container>
    );
};

export default Invite;
