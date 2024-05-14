import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import MainTitleComponent from '../title/MainTitleComponent';
// import { FormattedMessage } from 'react-intl';
import MainEmptyComponent from '../empty/MainEmptyComponent';
// import WritingDialogComponent from '../../../../views/dialog/WritingDialogComponent';
import CommonDialog from '../../common/CommonDialog';
import MainCommunityList from './MainCommunityList';

const Root = styled(Box)(({ theme }) => ({
    width: '100%',
    marginTop: 40
}));

const ContentsBox = styled(Box)(({ theme }) => ({
    width: '100%',
    marginTop: 14,
    boxSizing: 'border-box'
}));

const MainCommunityComponent = (props) => {
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [isLeader, setIsLeader] = React.useState(true);

    const handleClickDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <Root>
            <MainTitleComponent
                title={'공지'}
                onClick={handleClickDialog}
                btnText={'쓰기'}
                actions={isLeader ? true : false}
            />
            <ContentsBox>
                <MainCommunityList isLeader={isLeader} />

                {/* 공지사항 없을때 */}
                {/*<MainEmptyComponent emptyText={<FormattedMessage id="no_published_announcements" />} />*/}
            </ContentsBox>

            {/*<CommonDialog*/}
            {/*    open={dialogOpen}*/}
            {/*    onClose={handleCloseDialog}*/}
            {/*    title={'글쓰기'}*/}
            {/*    children={<WritingDialogComponent />}*/}
            {/*    actionBtn1={false}*/}
            {/*    btnText2={'게시'}*/}
            {/*/>*/}
        </Root>
    );
};

MainCommunityComponent.propTypes = {};

export default MainCommunityComponent;
