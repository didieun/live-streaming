import React from 'react';
import {
    ActionBox,
    ButtonIcon, ButtonStyle, ChildrenBox, ControlButton,
    DialogBox,
    DialogHeader,
    TitleText,
} from "./styles/ViewerCommonDialogStyle";
import {ReactComponent as SettingDialogCloseIcon} from "../../common/images/SettingDialogCloseIcon.svg";

function ViewerCommonDialog(props) {
    const { onClose, open, title, children, submitText, onClick, actionBtn = true } = props;

    return (
        <DialogBox open={open}>
            <DialogHeader>
                <TitleText>
                    {title}
                </TitleText>
                <ButtonIcon onClick={onClose} disableRipple>
                    <SettingDialogCloseIcon/>
                </ButtonIcon>
            </DialogHeader>

            <ChildrenBox>
                {children}
            </ChildrenBox>

            {actionBtn &&
                <ActionBox>
                    <ButtonStyle onClick={onClose} disableRipple>
                        Cancel
                    </ButtonStyle>
                    <ControlButton onClick={onClick} disableRipple>
                        {submitText}
                    </ControlButton>
                </ActionBox>
            }
        </DialogBox>
    );
}

export default ViewerCommonDialog;