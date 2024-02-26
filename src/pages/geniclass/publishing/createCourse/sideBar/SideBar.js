import { styled } from '@mui/material/styles';
import React from 'react';
import { IconButton, Drawer, Typography } from '@mui/material';
import { ReactComponent as SideBarArrowIcon } from '../../../../assets/images/SideBarArrowIcon.svg';
import PropTypes from 'prop-types';
import StepperComponent from './StepperComponent';
import CommonButton from '../../common/CommonButton';
import CommonDialog from '../../common/CommonDialog';

const SideBarBox = styled(Drawer)(({ theme, width }) => ({
    '&.MuiDrawer-root': {
        '& .MuiPaper-root': {
            width: width,
            height: 'calc(100vh - 100px)',
            border: 0,
            borderRight: '1px solid #D4D4D4',
            background: '#fff',
            position: 'relative',
            padding: '40px 18px 18px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }
    }
}));

const CloseSideBarBtn = styled(IconButton)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        width: 35,
        height: 35,
        boxShadow: '0 2px 15px 0 rgba(0, 0, 0, 0.15)',
        borderRadius: '50%',
        background: '#fff',
        position: 'absolute',
        top: 19,
        right: 19,
        '&:hover': {
            background: '#fff'
        }
    }
}));

const SideBar = (props) => {
    const { width, open, handleSideBarClose, steps, activeStep, completed, handleActiveStep, setActiveStep } = props;
    const [movement, setMovementBtn] = React.useState(false);

    const handleClickMovementDialog = () => {
        setMovementBtn(true);
    };

    const handleCloseMovementDialog = () => {
        setMovementBtn(false);
    };

    return (
        <SideBarBox width={width} variant="persistent" anchor="left" open={open}>
            <CloseSideBarBtn onClick={handleSideBarClose}>
                <SideBarArrowIcon style={{ transform: 'scaleX(-1)' }} />
            </CloseSideBarBtn>
            <StepperComponent
                steps={steps}
                activeStep={activeStep}
                completed={completed}
                handleActiveStep={handleActiveStep}
                setActiveStep={setActiveStep}
            />
            <CommonButton
                width={'100%'}
                height={'60px'}
                text={'교육과정 홈으로 이동'}
                background={'rgba(235, 235, 235, 0.40)'}
                color={'#B3B3B3'}
                fontWeight={600}
                borderRadius={'4px'}
                fontSize={'0.875rem'}
                onClick={handleClickMovementDialog}
            />

            <CommonDialog
                open={movement}
                title={''}
                message={
                    <Typography>
                        저장하지 않았을 경우 입력한 내용이 날아갑니다.
                        <br /> 교육과정 홈으로 이동하시겠습니까?
                    </Typography>
                }
                btnText2={'이동'}
                onClose={handleCloseMovementDialog}
                btnClick1={handleCloseMovementDialog}
            />
        </SideBarBox>
    );
};

SideBar.propTypes = {
    width: PropTypes.number,
    open: PropTypes.bool,
    handleSideBarClose: PropTypes.func,
    steps: PropTypes.object,
    activeStep: PropTypes.number,
    completed: PropTypes.object,
    handleActiveStep: PropTypes.func
};

export default SideBar;
