import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Checkbox, Typography } from '@mui/material';
import { Flex, FlexCenter, FlexEnd, FlexSpace, FormControlLabelCheckBox, IconButtonStyle } from '../../common/styled/CommonStyle';
import CommonButton from '../../common/CommonButton';
import PropTypes from 'prop-types';
import { useViewSize } from '../../../../store';
import { ReactComponent as ArrowClockwiseIcon } from '../../../../assets/images/ArrowClockwiseIcon.svg';
import { ReactComponent as ArrowIcon } from '../../../../assets/images/ArrowIcon.svg';
import { ReactComponent as UnCheckedIcon } from '../../../../assets/images/UnCheckedIcon.svg';
import { ReactComponent as CheckedIcon } from '../../../../assets/images/CheckedIcon.svg';
import CommonZoomInZoomOut from '../../common/CommonZoomInZoomOut';
import { scheduleHeight, scheduleUserListWidth } from '../CreateACourse';
import UserListComponent from './userList/UserListComponent';
import Schedule from './schedule/Schedule';

const Container = styled(Box)(({ theme, isLg, open }) => ({
    width: isLg ? (open ? '100%' : 'calc(100% - 60px)') : 1424,
    padding: isLg ? '25px 16px 33px' : '25px 0 33px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: open ? '0 auto' : isLg ? '0 0 0 60px' : '0 auto'
}));

const TitleBox = styled(Box)(({ theme }) => ({
    width: '100%',
    marginBottom: 30,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
}));

const ListScheduleBox = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    marginBottom: 15
}));

const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.5rem',
        color: '#2F3640',
        fontWeight: 600,
        letterSpacing: '0.5px'
    }
}));

const UserListBox = styled(Box)(({ theme }) => ({
    width: `${scheduleUserListWidth}px`,
    height: `${scheduleHeight}`,
    minHeight: 450,
    borderRadius: '10px 0px 0px 10px',
    background: '#fff',
    boxShadow: '4px 1px 28px 0px rgba(0, 0, 0, 0.10)',
    position: 'relative',
    boxSizing: 'border-box',
    padding: '19px 4px 19px 17px'
}));

const ScheduleBox = styled(Box)(({ theme }) => ({
    width: `calc(100% - ${scheduleUserListWidth}px)`,
    boxSizing: 'border-box',
    background: '#fff'
}));

const ScheduleBoxIn = styled(Box)(({ theme }) => ({
    width: '100%',
    height: `${scheduleHeight}`,
    minHeight: 450,
    borderRadius: '0 10px 10px 0px',
    border: '1px solid #ECECEC',
    borderLeft: 0,
    boxSizing: 'border-box',
    background: '#fff',
    marginBottom: 25
}));

export const ScheduleButton = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        background: '#fff',
        border: '1px solid #DDD',
        borderRadius: '90px',
        minWidth: 133,
        height: 44,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 15px',
        marginRight: 15,
        '&:hover': {
            background: '#fff'
        },
        '& svg': {
            width: 20,
            height: 20,
            transform: 'rotate( 270deg )',
            '& path': {
                fill: '#2F3640'
            }
        },
        '& p': {
            fontSize: '0.875rem',
            color: '#2F3640',
            fontWeight: 400
        },
        '&.Mui-disabled': {
            background: '#D9D9D9',
            border: '1px solid #D9D9D9',
            '& p': {
                color: '#fff'
            }
        }
    }
}));

const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '0.875rem',
        color: '#333',
        fontWeight: 400,
        letterSpacing: '-0.7px',
        marginTop: 9.5
    }
}));

function ScheduleRegistration(props) {
    const { isLg } = useViewSize();
    const { handleComplete, open } = props;

    return (
        <Container isLg={isLg} open={open}>
            <TitleBox>
                <TitleText>코칭 스케줄</TitleText>
                <FlexCenter>
                    <ScheduleButton disableRipple>
                        <Typography>지난스케줄</Typography>
                        <ArrowIcon />
                    </ScheduleButton>
                    <IconButtonStyle disableRipple>
                        <ArrowClockwiseIcon style={{ width: 24, height: 24 }} />
                    </IconButtonStyle>
                </FlexCenter>
            </TitleBox>

            <ListScheduleBox>
                <UserListBox>
                    <UserListComponent />
                </UserListBox>
                <ScheduleBox>
                    <ScheduleBoxIn>
                        <Schedule />
                    </ScheduleBoxIn>
                    <FlexSpace sx={{ width: '100%' }}>
                        <Box>
                            <FormControlLabelCheckBox
                                control={<Checkbox checkedIcon={<CheckedIcon />} icon={<UnCheckedIcon />} />}
                                label="비공개"
                            />
                            <TextStyle>강의가 수강생에게 공개되지 않습니다. </TextStyle>
                        </Box>
                        <CommonZoomInZoomOut width={'142px'} height={'2px'} />
                    </FlexSpace>
                </ScheduleBox>
            </ListScheduleBox>

            <FlexEnd sx={{ width: '100%' }}>
                <CommonButton
                    width={'202px'}
                    height={'48px'}
                    text={'저장 후 계속'}
                    background={'#2F3640'}
                    color={'#fff'}
                    fontWeight={500}
                    fontSize={'1rem'}
                    onClick={handleComplete}
                    disabled={false}
                />
            </FlexEnd>
        </Container>
    );
}

ScheduleRegistration.propTypes = {
    open: PropTypes.bool,
    handleComplete: PropTypes.func
};

export default ScheduleRegistration;
