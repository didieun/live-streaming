import { useNavigate } from 'react-router';
import Header from './header/Header';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { useViewSize } from '../../../store';
import React from 'react';
import TabBox from './tabs/TabBox';
import Learning from './learning/Learning';
import WhiteBoard from './whiteBoard/WhiteBoard';
import CommonDialog from '../common/CommonDialog';
import PenConnectionComponent from '../dialog/PenConnectionComponent';
import AddLearningHistoryComponent from '../dialog/AddLearningHistoryComponent';
import { Container, ContainerIn } from '../common/styled/CommonStyle';

const TabMargin = styled(Box)(({ theme }) => ({
    marginBottom: 25
}));

const Record = () => {
    const navigate = useNavigate();
    const { isHd } = useViewSize();
    const [sort, setSort] = React.useState(true);
    const [tabValue, setTabValue] = React.useState('학습기록');
    const valueList = [
        {
            label: '학습기록',
            value: '학습기록'
        },
        {
            label: '화이트보드 기록',
            value: '화이트보드 기록'
        }
    ];

    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Container>
            <Header />
            <ContainerIn isHd={isHd}>
                <TabMargin>
                    <TabBox tabValue={tabValue} valueList={valueList} handleChangeTab={handleChangeTab} />
                </TabMargin>

                {tabValue === '학습기록' && <Learning sort={sort} tabValue={tabValue} />}

                {tabValue === '화이트보드 기록' && <WhiteBoard sort={sort} tabValue={tabValue} />}
            </ContainerIn>

            {/* 학습 기록 추가 -> 펜연결 dialog*/}
            <CommonDialog open={false} title={'학습 기록 추가'} children={<PenConnectionComponent />} actionBtn2={false} />
            {/* 학습 기록 추가 dialog*/}
            <CommonDialog
                open={false}
                title={'학습 기록 추가'}
                children={<AddLearningHistoryComponent />}
                actionBtn1={false}
                btnText2={'첨부'}
            />
        </Container>
    );
};

export default Record;
