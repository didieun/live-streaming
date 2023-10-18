import * as React from 'react';
import {
    BoxStyle,
    Container,
    FlexMarginBottom,
    Flex,
    BoxText,
    FlexEnd, SwitchStyle, FormControlLabelBox,
    StyledTextarea, NumberText, ContainerIn, ActionBox, ButtonStyle, ControlButton
} from "./styles/SupportDialogStyle";
import AdminCommonSelect from "../main/common/select/AdminCommonSelect";

function AddANewFAQ(props) {
    const {handleCloseDialog} = props;
    const [value, setValue] = React.useState(false);
    const [filter, setFilter] = React.useState(0);
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

                    </FlexMarginBottom>

                    <Flex>
                        <BoxText>Answer</BoxText>
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
                    </Flex>
                </BoxStyle>
            </ContainerIn>
            <ActionBox>
                <ButtonStyle onClick={handleCloseDialog} disableRipple>
                    Cancel
                </ButtonStyle>

                <ControlButton disableRipple>
                    Add a New FAQ
                </ControlButton>
            </ActionBox>
        </Container>
    );
}

export default AddANewFAQ;