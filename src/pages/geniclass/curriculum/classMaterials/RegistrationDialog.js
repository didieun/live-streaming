import React from 'react';
import { useViewSize } from '../../../../store';
import styled from '@emotion/styled/macro';
import { Box, Typography } from '@mui/material';
import { Flex, FlexSpace, IconButtonStyle, LightTooltip } from '../../common/styled/CommonStyle';
import CommonButton from '../../common/CommonButton';
import { ReactComponent as ClearIcon } from '../../../../assets/images/ClearIcon.svg';
import { ReactComponent as FilePdfIcon } from '../../../../assets/images/FilePdfIcon.svg';
import TestImage from '../../../../assets/images/TestImage.png';
import CommonTextField from '../../common/CommonTextField';

const Root = styled(Box)(({ theme }) => ({
    width: '100%',
    border: '1px solid #D5D4DC',
    borderRadius: 10,
    padding: 20,
    boxSizing: 'border-box'
}));

const InputBox = styled(Flex)(({ theme }) => ({
    '& .MuiInputBase-root': {
        minHeight: '38px !important',
        height: '38px !important'
    },
    '& > button': {
        marginLeft: 10
    }
}));

const ErrorText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '0.875rem',
        color: '#FF5E57',
        fontWeight: 400,
        letterSpacing: '-0.5px',
        marginTop: 10,
        textAlign: 'left'
    }
}));

const ScrollBox = styled(Box)(({ theme }) => ({
    height: 300,
    overflowY: 'auto',
    overflowX: 'hidden',
    marginTop: 20,
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
        marginTop: 5,
        marginBottom: 5
    }
}));

const ListBox = styled(FlexSpace)(({ theme, isSd }) => ({
    width: isSd ? 474 : 698,
    background: '#E5F1FF',
    marginBottom: 8,
    padding: 12,
    boxSizing: 'border-box'
}));

const ImageBox = styled(Box)(({ theme }) => ({
    width: 102,
    height: 56,
    border: '1px solid #D5D4DC',
    borderRadius: 4,
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }
}));

const NameText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        maxWidth: 'calc(100% - 102px - 14px)',
        fontSize: '1rem',
        color: '#000',
        fontWeight: 500,
        letterSpacing: '-0.5px',
        textAlign: 'left'
    }
}));

const IconSize = styled(IconButtonStyle)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        width: 38,
        height: 38,
        '& svg': {
            width: 38,
            height: 38
        }
    }
}));

function RegistrationDialog(props) {
    const { youtube } = props;
    const { isSd } = useViewSize();
    const [error, setError] = React.useState(false);

    return (
        <Root>
            <InputBox>
                <CommonTextField
                    placeholder={youtube ? 'URL 주소를 입력하세요.' : '공유 PDF URL 주소를 입력해주세요.'}
                    width={isSd ? '400px' : '624px'}
                />
                <CommonButton
                    width={'64px'}
                    height={'38px'}
                    text={'등록'}
                    background={'#2F3640'}
                    color={'#fff'}
                    fontWeight={700}
                    fontSize={'1rem'}
                    disabled={false}
                />
            </InputBox>
            {error ? (
                youtube ? (
                    <ErrorText>* 유효하지 않은 유튜브 URL입니다.</ErrorText>
                ) : (
                    <ErrorText>* 유효하지 URL입니다.</ErrorText>
                )
            ) : null}
            <ScrollBox>
                <ListBox isSd={isSd}>
                    <Flex sx={{ width: 'calc(100% - 38px)' }}>
                        <ImageBox>{youtube ? <img src={TestImage} alt={'동영상 이미지'} /> : <FilePdfIcon />}</ImageBox>
                        <LightTooltip title={'[playlist]이거 틀었더니 우리집 갑자기 힙해짐'}>
                            <NameText>[playlist]이거 틀었더니 우리집 갑자기 힙해짐</NameText>
                        </LightTooltip>
                    </Flex>
                    <IconSize>
                        <ClearIcon />
                    </IconSize>
                </ListBox>
            </ScrollBox>
        </Root>
    );
}

RegistrationDialog.propTypes = {};
export default RegistrationDialog;
