import React from 'react';
import {
    ActionBox, ButtonStyle, TextBox, ControlButton, DialogBox,
} from "./styles/MobileAlertDialogStyle";

function MobileAlertDialog(props) {
    const { open, children, onClick, onClose, actionCancel, cancelText, submitText } = props;

    return (
        <DialogBox open={open}>
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
        </DialogBox>
    );
}

export default MobileAlertDialog;
