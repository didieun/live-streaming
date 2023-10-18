import * as React from 'react';
import {Container} from "./styles/MobileHelpCenterStyle";
import MobileHelpHeader from "./header/MobileHelpHeader";
import MobileHelpCenterSearch from "./search/MobileHelpCenterSearch";
import MobileHelpCenterFooter from "./footer/MobileHelpCenterFooter";
import MobileHelpCenterContact from "./contact/MobileHelpCenterContact";
import MobileHelpCenterMainContent from "./content/MobileHelpCenterMainContent";
import MobileHelpCenterQuestion from "./content/MobileHelpCenterQuestion";
import MobileHelpCenterAnswer from "./content/MobileHelpCenterAnswer";
import MobileHelpCenterQuestionSearch from "./content/MobileHelpCenterQuestionSearch";

function MobileHelpCenter(props) {

    return (
        <Container>
            <div>
                <MobileHelpHeader/>

                <MobileHelpCenterSearch/>
                <MobileHelpCenterMainContent/>
                {/*<MobileHelpCenterQuestion/>*/}
                {/*<MobileHelpCenterAnswer/>*/}
                {/*<MobileHelpCenterQuestionSearch/>*/}
            </div>
            <div>
                <MobileHelpCenterContact/>
                <MobileHelpCenterFooter/>
            </div>
        </Container>
    );
}

export default MobileHelpCenter;