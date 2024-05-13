import React from 'react';
import { useViewSize } from '../../../../store';
import styled from '@emotion/styled/macro';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Flex, FlexEnd, FlexSpace } from '../../common/styled/CommonStyle';
import CommonButton from '../../common/CommonButton';
import { ReactComponent as FilePlusIcon } from '../../../../assets/images/FilePlusIcon.svg';
import { ReactComponent as MonitorPlayIcon } from '../../../../assets/images/MonitorPlayIcon.svg';
import { ReactComponent as ShareFatIcon } from '../../../../assets/images/ShareFatIcon.svg';
import MaterialsComponent from './MaterialsComponent';
import CommonDialog from '../../common/CommonDialog';
import RegistrationDialog from './RegistrationDialog';

const Root = styled(Box)(({ theme, isLg }) => ({
    width: isLg ? '100%' : 1280,
    padding: '60px 0',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto',
    boxSizing: 'border-box'
}));

const TitleBox = styled(FlexSpace)(({ theme }) => ({
    width: '100%',
    '& .MuiButton-root .MuiTypography-root': {
        fontWeight: 500
    },
    [theme?.breakpoints?.down('sd')]: {
        flexDirection: 'column',
        '& > div': {
            width: '100%',
            marginTop: 14,
            '& .MuiButton-root': {
                minWidth: 100,
                '& .MuiTypography-root': {
                    fontSize: '1rem'
                }
            }
        }
    }
}));
const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        width: '100%',
        textAlign: 'left',
        fontSize: '1.5rem',
        color: '#333',
        fontWeight: 700,
        letterSpacing: '-0.5px'
    }
}));
function ClassMaterials(props) {
    const { isLg } = useViewSize();
    const { pageTitle } = props;
    const [youtubeDialog, setYoutubeDialog] = React.useState(false);
    const [pdfDialog, setPdfDialog] = React.useState(false);
    const handleClickYoutubeDialog = () => {
        setYoutubeDialog(true);
    };

    const handleClickPdfDialog = () => {
        setPdfDialog(true);
    };

    const handleCloseDialog = () => {
        setYoutubeDialog(false);
        setPdfDialog(false);
    };

    return (
        <Root isLg={isLg}>
            <TitleBox>
                <TitleText>{pageTitle}</TitleText>
                <Flex>
                    <FlexEnd sx={{ gap: '14px' }}>
                        <CommonButton
                            width={'137px'}
                            height={'40px'}
                            text={'파일 등록'}
                            background={'#fff'}
                            border={'#D5D4DC'}
                            color={'#333'}
                            fontWeight={500}
                            fontSize={'1.125rem'}
                            disabled={false}
                            startIcon={<FilePlusIcon />}
                        />
                        <CommonButton
                            width={'152px'}
                            height={'40px'}
                            background={'#fff'}
                            text={'유튜브 등록'}
                            border={'#D5D4DC'}
                            color={'#333'}
                            fontWeight={500}
                            fontSize={'1.125rem'}
                            disabled={false}
                            startIcon={<MonitorPlayIcon />}
                            onClick={handleClickYoutubeDialog}
                        />
                        <CommonButton
                            width={'173px'}
                            height={'40px'}
                            background={'#fff'}
                            text={'공유 PDF 추가'}
                            border={'#D5D4DC'}
                            color={'#333'}
                            fontWeight={500}
                            fontSize={'1.125rem'}
                            disabled={false}
                            startIcon={<ShareFatIcon />}
                            onClick={handleClickPdfDialog}
                        />
                    </FlexEnd>
                </Flex>
            </TitleBox>

            <MaterialsComponent />

            <CommonDialog
                open={youtubeDialog}
                title={'유튜브 동영상 등록'}
                children={<RegistrationDialog youtube={youtubeDialog} />}
                btnText2={'영상 추가'}
                onClose={handleCloseDialog}
                btnClick1={handleCloseDialog}
            />

            <CommonDialog
                open={pdfDialog}
                title={'공유 PDF 추가'}
                children={<RegistrationDialog />}
                btnText2={'영상 추가'}
                onClose={handleCloseDialog}
                btnClick1={handleCloseDialog}
            />
        </Root>
    );
}

ClassMaterials.propTypes = {
    pageTitle: PropTypes.string
};
export default ClassMaterials;
