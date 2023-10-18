import React from 'react';
import {
    NoticeContainer,
    ActionBox, ButtonStyle, TextBox, ControlButton,
} from "./styles/AdminAlertDialogStyle";

function AdminAlertDialog(props) {
    const { children, onClick, onClose, actionCancel, cancelText, submitText, redColor } = props;

    return (
        <NoticeContainer>
            <TextBox>
                {children}
            </TextBox>

            <ActionBox>
                {actionCancel &&
                    <ButtonStyle onClick={onClose} disableRipple>
                        {cancelText ?
                            cancelText
                            :
                            'Cancel'
                        }
                    </ButtonStyle>
                }
                <ControlButton onClick={onClick} redColor={redColor} disableRipple>
                    {submitText ?
                        submitText
                        :
                        'OK'
                    }
                </ControlButton>
            </ActionBox>
        </NoticeContainer>
    );
}

export default AdminAlertDialog;
