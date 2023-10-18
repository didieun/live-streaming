import * as React from 'react';
import {Container, Contents} from "./styles/MobileHomeStyle";
import MobileHeader from "./header/MobileHeader";
import MobileMain from "./main/MobileMain";
import MobileJoinDialog from "../join/MobileJoinDialog";

function MobileHome(props) {
    const [join, setJoin] = React.useState(false);

    const handleClickJoin = () => {
        setJoin(true);
    };


    //start stream
    const handleCloseDialog = () => {
        setJoin(false);
    };

    return (

        <Container>
            <MobileHeader handleClickJoin={handleClickJoin}/>
            <Contents>
                <MobileMain/>
            </Contents>

            <MobileJoinDialog open={join} onClose={handleCloseDialog}/>
        </Container>
    );
}

export default MobileHome;