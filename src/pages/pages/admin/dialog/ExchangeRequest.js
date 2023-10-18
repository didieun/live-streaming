import * as React from 'react';
import {
    BoxStyle,
    BoxTitle,
    Container,
    FlexMarginBottom,
    Flex,
    BoxText,
    BoxText3,
    BoxStyle2, StyledInput, SubText, PointText, ContainerIn, ActionBox, ButtonStyle, ControlButton
} from "./styles/RequestStyle";
import {InputAdornment, Typography} from "@mui/material";
import AdminDialogNotes from "./chat/AdminDialogNotes";

function ExchangeRequest(props) {
    const {handleCloseDialog} = props;

    return (
        <Container>
            <ContainerIn>
                <BoxStyle>
                    <BoxTitle>User's Approval Request Information</BoxTitle>
                    <FlexMarginBottom>
                        <BoxText>User Name</BoxText>
                        <BoxText3>User Name</BoxText3>
                    </FlexMarginBottom>

                    <Flex>
                        <BoxText>Points Requested<br/> for Exchange</BoxText>
                        <PointText>
                            <span>10</span> point
                        </PointText>
                    </Flex>
                </BoxStyle>

                <BoxStyle2>
                    <FlexMarginBottom>
                        <BoxText>Exchange<br/> Money</BoxText>
                        <div>
                            <StyledInput
                                type='number'
                                label=""
                                variant="outlined"
                                fullWidth
                                placeholder="16.00"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Typography>﹩</Typography>
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <SubText>
                                * When exchanging money, please enter the exact amount sent<br/>
                                &nbsp;&nbsp;&nbsp;to the user, if possible.<br/>
                                <span>* User cannot see this money, so enter with confidence.</span>
                            </SubText>
                        </div>
                    </FlexMarginBottom>

                    <Flex>
                        <BoxText>Notes</BoxText>
                        <AdminDialogNotes
                            width={450}
                            placeholder={'Leave a message'}
                            tooltipMessage={
                                <Typography>
                                    Enter the actual transfer amount, the<br/>
                                    transfer account request, and a message<br/>
                                    to send to the user.
                                </Typography>
                            }
                        />
                    </Flex>
                </BoxStyle2>
            </ContainerIn>

            <ActionBox>
                <ButtonStyle onClick={handleCloseDialog} disableRipple>
                    Cancel
                </ButtonStyle>

                <ControlButton disableRipple>
                    Confirm and Send Message
                </ControlButton>
            </ActionBox>

        </Container>
    );
}

export default ExchangeRequest;