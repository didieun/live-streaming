import React from 'react';
import CommonButton from '../../common/CommonButton';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { Flex } from '../../common/styled/CommonStyle';
import CommonDialog from '../../common/CommonDialog';

const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 100,
    background: '#fff',
    padding: '0 35px',
    boxSizing: 'border-box',
    boxShadow: '0 -5px 28px 0 rgba(0, 0, 0, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 1501
}));

const TitleChipBox = styled(Box)(({ theme }) => ({
    minWidth: 158,
    height: 52,
    boxSizing: 'border-box',
    padding: '0 16px',
    border: '1px solid #ddd',
    borderRadius: '90px',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 44,
    '& p': {
        fontSize: '1.125rem',
        color: '#000',
        fontWeight: 600,
        letterSpacing: '0.5px'
    }
}));

const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.125rem',
        fontWeight: 600,
        letterSpacing: '0.5px',
        color: '#000',
        marginRight: 8
    }
}));

const ButtonBox = styled(Flex)(({ theme }) => ({
    '& .MuiButtonBase-root': {
        '&:last-child': {
            marginLeft: 10
        }
    }
}));

function Header() {
    const [saveBtn, setSaveBtn] = React.useState(false);

    const handleClickSaveDialog = () => {
        setSaveBtn(true);
    };

    const handleCloseSaveDialog = () => {
        setSaveBtn(false);
    };

    return (
        <Container>
            <Flex>
                <TitleChipBox>
                    <Typography>강의개설</Typography>
                </TitleChipBox>
                <TitleText>강의명</TitleText>
            </Flex>
            <ButtonBox>
                <CommonButton
                    width={'155px'}
                    height={'48px'}
                    text={'임시저장'}
                    background={'#fff'}
                    border={'#dddddd'}
                    color={'#737373'}
                    fontWeight={600}
                    borderRadius={'4px'}
                    fontSize={'1rem'}
                    hoverBk={'#2f3640'}
                    hoverColor={'#fff'}
                    onClick={handleClickSaveDialog}
                />
                <CommonButton
                    width={'155px'}
                    height={'48px'}
                    text={'개설 완료하기'}
                    background={'#fff'}
                    border={'#dddddd'}
                    color={'#737373'}
                    fontWeight={600}
                    borderRadius={'4px'}
                    fontSize={'1rem'}
                    hoverBk={'#2f3640'}
                    hoverColor={'#fff'}
                />
            </ButtonBox>

            <CommonDialog
                open={saveBtn}
                title={''}
                message={
                    <Typography>
                        ‘비공개 강의‘로 저장되어 이어서 생성 할 수 있습니다.
                        <br />
                        임시 저장 하시겠습니까?
                    </Typography>
                }
                btnText2={'이동'}
                onClose={handleCloseSaveDialog}
                btnClick1={handleCloseSaveDialog}
            />
        </Container>
    );
}

export default Header;
