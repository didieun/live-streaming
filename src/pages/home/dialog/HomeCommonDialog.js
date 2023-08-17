import React from 'react';
import {
    ActionBox,
    ButtonIcon, ButtonStyle, ChildrenBox, ControlButton,
    DialogBox,
    DialogHeader,
    TitleText,
} from "./styles/HomeCommonDialogStyle";
import {ReactComponent as SettingDialogCloseIcon} from "../../common/images/SettingDialogCloseIcon.svg";
import {Typography} from "@mui/material";
import {ArrowTooltipStyle} from "../main/styles/MainStyle";
import TooltipArrowBlue from "../../common/images/TooltipArrowBlue.svg";

function ViewerCommonDialog(props) {
    const { onClose, open, title, children, submitText, onClick, cancelText, actionBtn = true, cancelBtn = true, tooltipOpen = false, tooltipChildren, tooltipTop, tooltipBottom, tooltipLeft, tooltipRight, triangle, tooltipPlacement, tooltipClose } = props;

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
                    {cancelBtn &&
                        <ButtonStyle onClick={onClose} disableRipple>
                            {cancelText ?
                                cancelText
                                :
                                'Cancel'
                            }
                        </ButtonStyle>
                    }

                    <ArrowTooltipStyle
                        open={tooltipOpen ? true: false}
                        title={
                            <div>
                                {tooltipChildren}
                                <ButtonIcon onClick={tooltipClose} disableRipple>
                                    <SettingDialogCloseIcon style={{width: 16, height: 16}}/>
                                </ButtonIcon>
                            </div>
                        }
                        placement={tooltipPlacement}
                        top={tooltipTop}
                        bottom={tooltipBottom}
                        left={tooltipLeft}
                        right={tooltipRight}
                        triangle={triangle}
                    >
                        <ControlButton onClick={onClick} disableRipple>
                            {submitText ?
                                submitText
                                :
                                'OK'
                            }
                        </ControlButton>
                    </ArrowTooltipStyle>
                </ActionBox>
            }
        </DialogBox>
    );
}

export default ViewerCommonDialog;