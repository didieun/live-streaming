import React from 'react';
import {
    DialogBox,
    DialogHeader,
    DialogTitleText,
    IconButtonStyle,
    ChildrenBox,
    FlexCenter,
    ActionBox,
    MessageText,
    MessageTextBox
} from './styled/CommonStyle';
import PropTypes from 'prop-types';
import { ReactComponent as DialogCloseIcon } from '../../../assets/images/DialogCloseIcon.svg';
import CommonButton from './CommonButton';

function CommonDialog(props) {
    const {
        open,
        title,
        children,
        message,
        onClose,
        action = true,
        actionBtn1 = true,
        actionBtn2 = true,
        btnWidth,
        btnText1,
        btnText2,
        btnClick1,
        btnClick2,
        disabled1 = false,
        disabled2 = false,
        error1 = false,
        error2 = false
    } = props;

    return (
        <DialogBox open={open}>
            <DialogHeader>
                <DialogTitleText>{title}</DialogTitleText>
                <IconButtonStyle onClick={onClose} disableRipple>
                    <DialogCloseIcon />
                </IconButtonStyle>
            </DialogHeader>

            <ChildrenBox>
                {children && children}
                {message && <MessageTextBox>{message}</MessageTextBox>}
            </ChildrenBox>

            {action && (
                <ActionBox mr={actionBtn1 && actionBtn2}>
                    {actionBtn1 && (
                        <CommonButton
                            width={actionBtn1 && actionBtn2 ? (btnWidth ? btnWidth : '154px') : btnWidth ? btnWidth : '300px'}
                            height={'50px'}
                            text={btnText1 ? btnText1 : '취소'}
                            border={'#D5D4DC'}
                            background={'#fff'}
                            color={'#333'}
                            onClick={btnClick1}
                            disabled={disabled1}
                            error={error1}
                        />
                    )}
                    {actionBtn2 && (
                        <CommonButton
                            width={actionBtn1 && actionBtn2 ? (btnWidth ? btnWidth : '154px') : btnWidth ? btnWidth : '300px'}
                            height={'50px'}
                            text={btnText2 ? btnText2 : '삭제'}
                            background={'#2F3640'}
                            color={'#fff'}
                            onClick={btnClick2}
                            disabled={disabled2}
                            error={error2}
                        />
                    )}
                </ActionBox>
            )}
        </DialogBox>
    );
}

CommonDialog.propTypes = {
    open: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.func,
    message: PropTypes.object,
    onClose: PropTypes.func,
    action: PropTypes.bool,
    actionBtn1: PropTypes.bool,
    actionBtn2: PropTypes.bool,
    btnWidth: PropTypes.string,
    btnText1: PropTypes.string,
    btnText2: PropTypes.string,
    btnClick1: PropTypes.func,
    btnClick2: PropTypes.func,
    disabled1: PropTypes.bool,
    disabled2: PropTypes.bool,
    error1: PropTypes.string,
    error2: PropTypes.string
};

export default CommonDialog;
