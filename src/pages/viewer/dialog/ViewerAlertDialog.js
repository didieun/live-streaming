import React from 'react';
import {
    Container,
    ActionBox, ButtonStyle, TextBox, ControlButton,
} from "./styles/ViewerAlertDialogStyle";

function ViewerAlertDialog(props) {
    const { children, onClick, onClose, actionCancel , cancelText, submitText, submitColor } = props;

    return (
        <Container>
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
                <ControlButton onClick={onClick} color={submitColor} disableRipple>
                    {submitText ?
                        submitText
                        :
                        'OK'
                    }
                </ControlButton>
            </ActionBox>
        </Container>
    );
}

export default ViewerAlertDialog;
