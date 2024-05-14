import React from 'react';
import { useViewSize } from '../../../../store';
import styled from '@emotion/styled/macro';
import { Box, Typography } from '@mui/material';
import CardListComponent from './CardListComponent';
import HomeScheduleComponent from './HomeScheduleComponent';
import BannerCarouselComponent from './BannerCarouselComponent';
import CommonDialog from '../../common/CommonDialog';

const Root = styled(Box)(({ theme, isLg }) => ({
    width: isLg ? '100%' : 1280,
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto',
    boxSizing: 'border-box',
    margin: '0 auto'
}));

const DialogText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        boxSizing: 'border-box',
        fontSize: '1.125rem',
        color: '#333',
        fontWeight: 400,
        textAlign: 'center'
    }
}));

function Home(props) {
    const { isLg } = useViewSize();
    return (
        <Root isLg={isLg}>
            <BannerCarouselComponent />
            <HomeScheduleComponent />
            <CardListComponent />

            <CommonDialog
                open={false}
                title={'알림'}
                children={
                    <Box>
                        <DialogText>
                            초대를 수락하면 해당 교육과정에 참여가 가능합니다.
                            <br />
                            수락하시겠습니까?
                        </DialogText>

                        <DialogText sx={{ marginTop: '14px' }}>
                            선생님 : <span style={{ fontWeight: 600 }}>ㅇㅇㅇ선생님</span>
                            <br />
                            교육과정 이름 : <span style={{ fontWeight: 600 }}>교육과정명</span>
                        </DialogText>
                    </Box>
                }
                btnText1={'거절'}
                btnText2={'수락'}
            />
        </Root>
    );
}

export default Home;
