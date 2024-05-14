import React from 'react';
import CommonButton from '../../common/CommonButton';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import { Flex } from '../../common/styled/CommonStyle';
import CommonDialog from '../../common/CommonDialog';
import { useViewSize } from '../../../../store';
import { headerHeight } from '../Lecture';
import { ReactComponent as EyeOnIcon } from '../../../../assets/images/EyeOnIcon.svg';
import { ReactComponent as CaretCircleLeftIcon } from '../../../../assets/images/CaretCircleLeftIcon.svg';
import PropTypes from 'prop-types';

const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    height: `${headerHeight}px`,
    background: '#fff',
    padding: '0 35px',
    boxSizing: 'border-box',
    boxShadow: '0 -5px 28px 0 rgba(0, 0, 0, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 1300
}));

const TitleChipBox = styled(Box)(({ theme, isSl }) => ({
    minWidth: 153,
    height: 48,
    boxSizing: 'border-box',
    padding: '0 16px',
    border: '1px solid #ddd',
    borderRadius: '90px',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: isSl ? 20 : 44,
    '& p': {
        fontSize: '1.125rem',
        color: '#000',
        fontWeight: 500,
        letterSpacing: '0.5px'
    }
}));

const ChipBox = styled(Box)(({ theme, isSl }) => ({
    minWidth: 48,
    height: 30,
    boxSizing: 'border-box',
    padding: '0 12px',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    background: '#000',
    '& p': {
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight: 700,
        letterSpacing: '-0.5px'
    }
}));

const EvaluationChipBox = styled(ChipBox)(({ theme, isSl }) => ({
    background: '#00BEEA'
}));

const AssignmentChipBox = styled(ChipBox)(({ theme, isSl }) => ({
    background: '#A674ED'
}));

const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        maxWidth: 'calc(100% - 153px - 20px)',
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

const PreviewButton = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        background: 'transparent',
        padding: 0,
        marginRight: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
            background: 'transparent'
        },
        '& p': {
            fontSize: '1rem',
            color: '#333',
            fontWeight: 600,
            marginLeft: 5
        }
    }
}));

function Header(props) {
    const { isSl } = useViewSize();

    return (
        <Container>
            <Flex>
                <ChipBox>
                    <Typography>VOD</Typography>
                </ChipBox>
                <EvaluationChipBox>
                    <Typography>평가</Typography>
                </EvaluationChipBox>
                <AssignmentChipBox>
                    <Typography>과제</Typography>
                </AssignmentChipBox>
            </Flex>
            <ButtonBox>
                <CommonButton
                    width={isSl ? '120px' : '155px'}
                    height={'48px'}
                    text={'강의종료'}
                    background={'#fff'}
                    border={'#D5D4DC'}
                    color={'#737373'}
                    fontWeight={500}
                    fontSize={'1rem'}
                />
                <CommonButton
                    width={isSl ? '120px' : '240px'}
                    height={'48px'}
                    text={'교육과정으로 이동'}
                    background={'#2F3640'}
                    color={'#fff'}
                    fontWeight={500}
                    fontSize={'1rem'}
                />
            </ButtonBox>
        </Container>
    );
}
Header.propTypes = {};

export default Header;
