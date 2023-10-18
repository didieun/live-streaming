import * as React from 'react';
import {
    Container,
    ContainerIn,
    TitleText,
    ButtonIcon,
    MainSearchBox, MainContainerImage
} from "./styles/HelpCenterSearchStyle";
import {InputAdornment, OutlinedInput} from "@mui/material";
import {ReactComponent as SearchIcon} from "../../common/images/SearchIcon.svg";

function HelpCenterMainSearch(props) {
    return (
        <Container>
            <MainContainerImage>
                <ContainerIn>
                    <TitleText>
                        Hello, How can we help?
                    </TitleText>

                    <MainSearchBox variant="outlined">
                        <OutlinedInput
                            type="search"
                            placeholder={'Describe your issue'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <ButtonIcon disableRipple>
                                        <SearchIcon style={{width: 27, height: 27}} />
                                    </ButtonIcon>
                                </InputAdornment>
                            }
                        />
                    </MainSearchBox>
                </ContainerIn>
            </MainContainerImage>
        </Container>
    );
}

export default HelpCenterMainSearch;