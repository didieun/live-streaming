import React from 'react';
import {
    NoticeContainer,
    ActionBox, ButtonStyle, TextBox, ControlButton,
} from "./styles/AlertDialogStyle";

function AlertDialog(props) {
    const { children, onClick, onClose, actionCancel, cancelText, submitText } = props;

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
                <ControlButton onClick={onClick} disableRipple>
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

export default AlertDialog;
