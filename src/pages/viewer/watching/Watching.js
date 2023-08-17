import React from 'react';
import {Aside, ChatCloseBox, Container, Contents, ContentsTop, Section, ButtonIcon} from "./styles/WatchingStyle";
import WatchingHeader from "./header/WatchingHeader";
import WatchingVideo from "./video/WatchingVideo";
import WatchingChat from "./aside/WatchingChat";
import WatchingIntroduction from "./introduction/WatchingIntroduction";
import WatchingInfo from "./info/WatchingInfo";
import {ReactComponent as AsideCloseArrowIcon} from "../../common/images/AsideCloseArrowIcon.svg";

export const headerHeight = 54;
export const asideWidth = 350;
export const smallAsideWidth = 300;

function Watching(props) {
    const [open, setOpen] = React.useState(true);

    const handleClickChat = () => {
        setOpen(!open);
    };

    return (
        <Container>
            <WatchingHeader/>

            <Contents>
                <ContentsTop>
                    <Section open={open}>
                        <WatchingVideo/>
                        <WatchingInfo/>
                    </Section>

                    {!open &&
                        <ChatCloseBox>
                            <ButtonIcon onClick={handleClickChat} disableRipple>
                                <AsideCloseArrowIcon style={{transform: 'scaleX(-1)'}}/>
                            </ButtonIcon>
                        </ChatCloseBox>

                    }
                    <Aside open={open}>
                        <WatchingChat handleClickChat={handleClickChat} open={open}/>
                    </Aside>
                </ContentsTop>

                <WatchingIntroduction open={open}/>
            </Contents>
        </Container>
    );
}

export default Watching;