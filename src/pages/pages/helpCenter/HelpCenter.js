import * as React from 'react';
import {Container} from "./styles/HelpCenterStyle";
import HelpHeader from "./header/HelpHeader";
import HelpCenterMainSearch from "./search/HelpCenterMainSearch";
import HelpCenterSearch from "./search/HelpCenterSearch";
import HelpCenterFooter from "./footer/HelpCenterFooter";
import HelpCenterContact from "./contact/HelpCenterContact";
import HelpCenterMainContent from "./content/HelpCenterMainContent";
import HelpCenterQuestion from "./content/HelpCenterQuestion";
import HelpCenterAnswer from "./content/HelpCenterAnswer";
import HelpCenterQuestionSearch from "./content/HelpCenterQuestionSearch";

function HelpCenter(props) {

    return (
        <Container>
            <div>
                <HelpHeader/>

                <HelpCenterMainSearch/>
                <HelpCenterMainContent/>

                {/*<HelpCenterSearch/>*/}
                {/*<HelpCenterQuestion/>*/}
                {/*<HelpCenterAnswer/>*/}
                {/*<HelpCenterQuestionSearch/>*/}
            </div>
            <div>
                <HelpCenterContact/>
                <HelpCenterFooter/>
            </div>
        </Container>
    );
}

export default HelpCenter;