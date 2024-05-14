import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import MainTitleComponent from '../title/MainTitleComponent';
// import { FormattedMessage } from 'react-intl';
import MainEmptyComponent from '../empty/MainEmptyComponent';
// import WritingDialogComponent from '../../../../views/dialog/WritingDialogComponent';
import CommonDialog from '../../common/CommonDialog';
import MainReferenceRoomList from './MainReferenceRoomList';
import { ReactComponent as FolderPlusIcon } from '../../../../assets/images/FolderPlusIcon.svg';

const Root = styled(Box)(({ theme }) => ({
    width: '100%',
    marginTop: 40
}));

const ContentsBox = styled(Box)(({ theme }) => ({
    width: '100%',
    marginTop: 14,
    boxSizing: 'border-box'
}));

const MainReferenceRoomComponent = (props) => {
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [addFile, setAddFile] = React.useState(false);
    const [isLeader, setIsLeader] = React.useState(true);

    const handleClickDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const handleClickAddFile = () => {
        setAddFile(true);
    };

    return (
        <Root>
            <MainTitleComponent
                title={'참고'}
                icon={isLeader ? <FolderPlusIcon /> : false}
                btnText={'업로드'}
                actions={isLeader ? true : false}
                iconOnClick={handleClickAddFile}
                //폴더 생성 완료와 동시에 file={true} -> 기획참고
                file={true}
            />
            <ContentsBox>
                <MainReferenceRoomList isLeader={isLeader} addFile={addFile} />

                {/* 자료실 없을때 */}
                {/*<MainEmptyComponent emptyText={<FormattedMessage id="no_registered_folders_or_files_msg" />} />*/}
            </ContentsBox>
        </Root>
    );
};

MainReferenceRoomComponent.propTypes = {};

export default MainReferenceRoomComponent;
