import * as React from 'react';
import {Container, Contents} from "./styles/MobileViewerStyle";
import MobileViewerHeader from "./header/MobileViewerHeader";
import MobileViewerMain from "./main/MobileViewerMain";

function MobileViewer(props) {
    const [landscape, setLandscape] = React.useState(false);
    const [fullScreen, setFullScreen] = React.useState(false);

    const handleClickFullScreen = () => {
        setFullScreen(true);
        setLandscape(true);
    };

    const handleClickLandscapeScreen = () => {
        setFullScreen(false);
        setLandscape(true);
    };

    const handleClickScreen = () => {
        setFullScreen(false);
        setLandscape(false);
    };

    return (
        <Container>
            {!landscape &&
                <MobileViewerHeader/>
            }

            <Contents>
                <MobileViewerMain landscape={landscape} fullScreen={fullScreen} handleClickLandscapeScreen={handleClickLandscapeScreen} handleClickFullScreen={handleClickFullScreen} handleClickScreen={handleClickScreen}/>
            </Contents>
        </Container>
    );
}

export default MobileViewer;