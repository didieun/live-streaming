import React from 'react';
import {
    ActionBox, ButtonStyle, ControlButton, DialogBox,
} from "./styles/MobileCommonDialogStyle";
import {ButtonIcon, DialogHeader, TitleText} from "./styles/MobileCommonDialogStyle";
import {ReactComponent as MobileCloseIcon} from "../../common/images/MobileCloseIcon.svg";

function MobileCommonDialog(props) {
    const { open, title, children, onClose } = props;

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

        </DialogBox>
    );
}

export default MobileCommonDialog;
