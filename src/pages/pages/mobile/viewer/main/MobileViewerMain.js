import React from 'react';
import MobileViewerChannelInfo from "./info/MobileViewerChannelInfo";
import MobileViewerCommonDialog from "../dialog/MobileViewerCommonDialog";
import MobileViewerShare from "../dialog/MobileViewerShare";
import MobileViewerGiveAPointGift from "../dialog/MobileViewerGiveAPointGift";
import MobileViewerVertical from "./vertical/MobileViewerVertical";
import MobileViewerLandscape from "./landscape/MobileViewerLandscape";

function MobileViewerMain(props) {
    const {landscape, fullScreen, handleClickScreen, handleClickFullScreen, handleClickLandscapeScreen} = props;

    const [channelInfoOpen, setChannelInfoOpen] = React.useState(false);
    const [shareOpen, setShareOpen] = React.useState(false);
    const [giveAPointGiftOpen, setGiveAPointGiftOpen] = React.useState(false);


    const handleClickChannelInfoOpen = () => {
        setChannelInfoOpen(true);
    };

    const handleClickShareOpen = () => {
        setShareOpen(true);
    };

    const handleClickGiveAPointGiftOpen = () => {
        setGiveAPointGiftOpen(true);
    };

    const handleClose = () => {
        setChannelInfoOpen(false);
        setShareOpen(false);
        setGiveAPointGiftOpen(false);
    };

    const handleCloseGiveAPointGift = () => {
        setGiveAPointGiftOpen(false);
    };

    return (
        <div>
            {landscape ?
                <MobileViewerLandscape
                    handleClickLandscapeScreen={handleClickLandscapeScreen}
                    handleClickFullScreen={handleClickFullScreen}
                    fullScreen={fullScreen}
                    handleClickChannelInfoOpen={handleClickChannelInfoOpen}
                    handleClickShareOpen={handleClickShareOpen}
                    handleClickGiveAPointGiftOpen={handleClickGiveAPointGiftOpen}
                />
                :
                <MobileViewerVertical
                    fullScreen={fullScreen}
                    handleClickScreen={handleClickScreen}
                    handleClickFullScreen={handleClickFullScreen}
                    handleClickLandscapeScreen={handleClickLandscapeScreen}
                    handleClickChannelInfoOpen={handleClickChannelInfoOpen}
                    handleClickShareOpen={handleClickShareOpen}
                    handleClickGiveAPointGiftOpen={handleClickGiveAPointGiftOpen}
                />
            }

            <MobileViewerChannelInfo
                open={channelInfoOpen}
                handleClose={handleClose}
            />

            <MobileViewerCommonDialog
                open={shareOpen}
                title={'URL Share'}
                action={true}
                actionCancel={true}
                children={<MobileViewerShare/>}
                onClose={handleClose}
            />

            <MobileViewerCommonDialog
                open={giveAPointGiftOpen}
                title={'Give a point gift'}
                children={<MobileViewerGiveAPointGift/>}
                onClose={handleCloseGiveAPointGift}
            />

        </div>
    );
}

export default MobileViewerMain;