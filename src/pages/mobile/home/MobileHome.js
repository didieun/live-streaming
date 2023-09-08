import * as React from 'react';
import {Container, Contents} from "./styles/MobileHomeStyle";
import MobileHeader from "./header/MobileHeader";
import MobileMain from "./main/MobileMain";

function MobileHome(props) {

    return (

        <Container>
            <MobileHeader/>
            <Contents>
                <MobileMain/>
            </Contents>
        </Container>
    );
}

export default MobileHome;