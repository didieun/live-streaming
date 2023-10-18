import * as React from 'react';
import {
    BoxStyle,
    Container,
    FlexMarginBottom,
    BoxText,
    FlexEnd, SwitchStyle, FormControlLabelBox,
    StyledTextarea, NumberText,
    BoxText3, ContainerIn, AlignCenter, ButtonStyle, ActionBoxSpace, ControlButton, WarningButton
} from "./styles/SupportDialogStyle";
import AdminCommonSelect from "../main/common/select/AdminCommonSelect";
import AdminAlertDialog from "./AdminAlertDialog";
import AdminCommonDialog from "./AdminCommonDialog";

function FAQDialog(props) {
    const {edit, handleClickFaqEdit, handleCloseFaqEdit, handleCloseDialog} = props;
    const [value, setValue] = React.useState(false);
    const [filter, setFilter] = React.useState(0);
    const [deleteDialog, setDeleteDialog] = React.useState(false);
    const menuList = [
        {text: 'Topics'},
        {text: 'Account'},
        {text: 'Broadcasting'},
        {text: 'Channel'},
        {text: 'Point'},
        {text: 'Channel Owner'},
        {text: 'Streamer'},
        {text: 'Troubleshooting'},
    ]

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    const handleChangeSwitch = (event) => {
        setValue((prev) => !prev);
    };

    const handleClickDeleteDialog = () => {
        setDeleteDialog(true);
    };

    const handleCloseDeleteDialog = () => {
        setDeleteDialog(false);
    };

    return (
        <Container>
            <ContainerIn>
                <BoxStyle>
                    <FlexMarginBottom>
                        <BoxText>Topics</BoxText>
                        <AdminCommonSelect
                            filter={filter}
                            handleChangeFilter={handleChangeFilter}
                            menuList={menuList}
                        />
                    </FlexMarginBottom>

                    <FlexMarginBottom>
                        <BoxText>Display</BoxText>
                        <FormControlLabelBox
                            control={<SwitchStyle checked={value} onChange={handleChangeSwitch} sx={{ m: 1 }} disableRipple/>}
                            label={value ? 'Yes':'No'}
                        />
                    </FlexMarginBottom>

                    <FlexMarginBottom>
                        <BoxText>Question</BoxText>

                        {edit ?
                            <div>
                                <StyledTextarea
                                    minRows={3}
                                    maxRows={3}
                                    placeholder="This is a question."
                                />
                                <FlexEnd>
                                    <NumberText>
                                        0 / 140
                                    </NumberText>
                                </FlexEnd>
                            </div>
                            :
                            <BoxText3>
                                This is a question.
                            </BoxText3>
                        }
                    </FlexMarginBottom>

                    <FlexMarginBottom>
                        <BoxText>Answer</BoxText>
                        {edit ?
                            <div>
                                <StyledTextarea
                                    minRows={3}
                                    maxRows={3}
                                    placeholder="This is a answer."
                                />
                                <FlexEnd>
                                    <NumberText>
                                        0 / 10,000
                                    </NumberText>
                                </FlexEnd>
                            </div>
                            :
                            <BoxText3>
                                This is a answer.This is a answer.This is a answer.This is a answer.This is a answer. This is a answer.This is a answer.This is a answer.This is a answer.This is a answer.This is a answer.
                            </BoxText3>
                        }
                    </FlexMarginBottom>
                </BoxStyle>
            </ContainerIn>
            <ActionBoxSpace>
                <div>
                    {!edit &&
                        <WarningButton onClick={handleClickDeleteDialog} disableRipple>
                            Delete
                        </WarningButton>
                    }
                </div>

                <AlignCenter>
                    <ButtonStyle onClick={edit ? handleCloseFaqEdit : handleCloseDialog} disableRipple>
                        Cancel
                    </ButtonStyle>

                    <ControlButton onClick={edit? null : handleClickFaqEdit} disableRipple>
                        {edit ?
                            'Save'
                            :
                            'Edit'
                        }
                    </ControlButton>
                </AlignCenter>

            </ActionBoxSpace>

            <AdminCommonDialog
                open={deleteDialog}
                title={''}
                children={
                    <AdminAlertDialog
                        children={value ? <span>This FAQ is displayed.<br/> If you delete it, users won't be able to see it.<br/> Are you sure you want to delete?</span> : 'Are you sure you want to delete this FAQ'}
                        actionCancel={true}
                        submitText={'Delete'}
                        redColor={true}
                        onClose={handleCloseDeleteDialog}
                    />
                }
                onClose={handleCloseDeleteDialog}
            />

        </Container>
    );
}

export default FAQDialog;