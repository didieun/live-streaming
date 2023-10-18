import React from 'react';
import {
    ButtonIcon, ChildrenBox,
    DialogBox,
    DialogHeader,
    TitleText,
} from "./styles/AdminCommonDialogStyle";
import {ReactComponent as SettingDialogCloseIcon} from "../../common/images/SettingDialogCloseIcon.svg";

function AdminCommonDialog(props) {
    const { onClose, open, title, children} = props;

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
        </DialogBox>
    );
}

export default AdminCommonDialog;