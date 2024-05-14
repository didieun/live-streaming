import { styled } from '@mui/material/styles';
import React from 'react';
import { IconButton, Drawer, Typography, Box } from '@mui/material';
import { ReactComponent as ArrowLineLeft } from '../../../../assets/images/ArrowLineLeft.svg';
import PropTypes from 'prop-types';
import StepperComponent from './StepperComponent';
import CommonButton from '../../common/CommonButton';
import CommonDialog from '../../common/CommonDialog';
import { headerHeight, sideBarWidth } from '../CreateACourse';
import SideBarLayoutComponent from './SideBarLayoutComponent';
import { IconButtonStyle } from '../../common/styled/CommonStyle';

const SideBarBox = styled(Drawer)(({ theme }) => ({
    '&.MuiDrawer-root': {
        '& .MuiPaper-root': {
            width: `${sideBarWidth}px`,
            height: `calc(100vh - ${headerHeight}px)`,
            border: 0,
            borderRight: '1px solid #D4D4D4',
            background: '#fff',
            position: 'relative',
            padding: '49px 20px 25px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }
    }
}));

const CloseSideBarBtn = styled(IconButtonStyle)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        width: 20,
        height: 20,
        position: 'absolute',
        top: 19,
        right: 19
    }
}));

const SideBar = (props) => {
    const {
        open,
        handleSideBarClose,
        steps,
        activeStep,
        completed,
        handleActiveStep,
        setActiveStep,
        typeValue,
        layoutTooltip,
        contentsTooltip,
        handleCloseLayoutTooltip,
        handleCloseContentsTooltip
    } = props;
    const [movement, setMovementBtn] = React.useState(false);

    const handleClickMovementDialog = () => {
        setMovementBtn(true);
    };

    const handleCloseMovementDialog = () => {
        setMovementBtn(false);
    };

    return (
        <SideBarBox variant="persistent" anchor="left" open={open}>
            <CloseSideBarBtn onClick={handleSideBarClose} sx={{ width: 20, height: 20 }} disableRipple>
                <ArrowLineLeft />
            </CloseSideBarBtn>
            <Box sx={{ height: 'calc(100% - 48px - 25px)' }}>
                <StepperComponent
                    steps={steps}
                    activeStep={activeStep}
                    completed={completed}
                    handleActiveStep={handleActiveStep}
                    setActiveStep={setActiveStep}
                />
                {typeValue !== '0' && activeStep === 1 && (
                    <SideBarLayoutComponent
                        layoutTooltip={layoutTooltip}
                        contentsTooltip={contentsTooltip}
                        handleCloseLayoutTooltip={handleCloseLayoutTooltip}
                        handleCloseContentsTooltip={handleCloseContentsTooltip}
                    />
                )}
            </Box>

            <CommonButton
                width={'100%'}
                height={'48px'}
                text={'교육과정 홈으로 이동'}
                background={'#fff'}
                border={'#D5D4DC'}
                color={'#2F3640'}
                fontWeight={500}
                fontSize={'0.875rem'}
                onClick={handleClickMovementDialog}
            />

            <CommonDialog
                open={movement}
                title={'알림'}
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
    open: PropTypes.bool,
    handleSideBarClose: PropTypes.func,
    steps: PropTypes.array,
    activeStep: PropTypes.number,
    completed: PropTypes.object,
    handleActiveStep: PropTypes.func,
    typeValue: PropTypes.string,
    layoutTooltip: PropTypes.bool,
    contentsTooltip: PropTypes.bool,
    handleCloseLayoutTooltip: PropTypes.func,
    handleCloseContentsTooltip: PropTypes.func
};

export default SideBar;
