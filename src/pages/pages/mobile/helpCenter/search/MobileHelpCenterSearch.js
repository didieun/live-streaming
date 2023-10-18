import * as React from 'react';
import {
    Container,
    TitleText,
    ButtonIcon,
    ContainerImage, SearchBox
} from "./styles/MobileHelpCenterSearchStyle";
import {InputAdornment, OutlinedInput} from "@mui/material";
import {ReactComponent as SearchIcon} from "../../../common/images/SearchIcon.svg";

function MobileHelpCenterSearch(props) {
    return (
        <Container>
            <ContainerImage>
                <TitleText>
                    Hello, How can we help?
                </TitleText>

                <SearchBox variant="outlined">
                    <OutlinedInput
                        type="search"
                        placeholder={'Describe your issue'}
                        endAdornment={
                            <InputAdornment position="end">
                                <ButtonIcon disableRipple>
                                    <SearchIcon style={{width: 18, height: 18}} />
                                </ButtonIcon>
                            </InputAdornment>
                        }
                    />
                </SearchBox>
            </ContainerImage>
        </Container>
    );
}

export default MobileHelpCenterSearch;