import * as React from 'react';
import {Container, ContainerImage, ContainerIn, TitleText, ButtonIcon, SearchBox} from "./styles/HelpCenterSearchStyle";
import {InputAdornment, OutlinedInput} from "@mui/material";
import {ReactComponent as SearchIcon} from "../../common/images/SearchIcon.svg";

function HelpCenterSearch(props) {
    return (
        <Container>
            <ContainerImage>
                <ContainerIn>
                    <SearchBox variant="outlined">
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
                    </SearchBox>
                </ContainerIn>
            </ContainerImage>
        </Container>
    );
}

export default HelpCenterSearch;