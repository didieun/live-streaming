import React from 'react';
import {
    ActionBox, ButtonStyle, ControlButton, DialogBox,
} from "./styles/MobileViewerCommonDialogStyle";
import {ButtonIcon, DialogHeader, TitleText} from "../../../viewer/dialog/styles/ViewerCommonDialogStyle";
import {ReactComponent as MobileCloseIcon} from "../../../common/images/MobileCloseIcon.svg";

function MobileViewerCommonDialog(props) {
    const { open, title, children, onClick, onClose, actionCancel, action, actionOk, cancelText, submitText } = props;

    return (
        <DialogBox open={open}>
            <DialogHeader>
                <TitleText>
                    {title}
                </TitleText>
                <ButtonIcon onClick={onClose} disableRipple>
                    <MobileCloseIcon/>
                </ButtonIcon>
            </DialogHeader>

            {children}

            {action &&
                <ActionBox>
                    {actionCancel &&
                        <ButtonStyle onClick={onClose} actionOk={actionOk} disableRipple>
                            {cancelText ?
                                cancelText
                                :
                                'Cancel'
                            }
                        </ButtonStyle>
                    }
                    {actionOk &&
                        <ControlButton onClick={onClick} disableRipple>
                            {submitText ?
                                submitText
                                :
                                'OK'
                            }
                        </ControlButton>
                    }
                </ActionBox>
            }

        </DialogBox>
    );
}

export default MobileViewerCommonDialog;
