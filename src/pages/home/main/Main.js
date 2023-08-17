import React, {Component} from 'react';
import {Container} from "./styles/MainStyle";
import Following from "./following/Following";
import ForYou from "./foryou/ForYou";
import LogIn from "../login/LogIn";
import Dashboard from "./dashboard/Dashboard";
import Points from "../studio/earnPurchase/points/points/Points";
import MyChannels from "../studio/channelsManager/myChannels/MyChannels";
import MyChannelsPurchase from "../studio/channelsManager/purchase/MyChannelsPurchase";
import MyChannelsDetail from "../studio/channelsManager/myChannels/detail/MyChannelsDetail";
import PointsPurchase from "../studio/earnPurchase/points/purchase/PointsPurchase";
import Settlement from "../studio/earnPurchase/settlement/settlement/Settlement";
import SettlementHistory from "../studio/earnPurchase/settlement/history/SettlementHistory";
import Exchange from "../studio/earnPurchase/exchange/exchange/Exchange";
import ExchangeHistory from "../studio/earnPurchase/exchange/history/ExchangeHistory";
import StartStream from "../studio/startStream/StartStream";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const {
            open,
            menu,
            login,
            handleClickLogIn,
            handleClickEditStreamInfoDialog,
            handleClickEditPopoverOpen,
            handleCloseEditPopover,
            editOpen,
            editId,
            editAnchorEl,
            handleClickEditChannelInfoDialogOpen,
            handleClickExtendChannelPeriodDialogOpen,
            handleClickChangeStreamerDialogOpen,
            handleClickBuyANewChannelDialogOpen,
            handleClickBuyPointsDialogOpen,
            handleClickSettlementDialogOpen,
            handleClickExchangeSettlementDialogOpen
        } = this.props;

        return (
            <Container open={open}>
                {menu === 'foryou' &&
                    <ForYou/>
                }
                {menu === 'following' &&
                    <Following login={login} handleClickLogIn={handleClickLogIn} />
                }

                {menu === 'login' &&
                    <LogIn/>
                }

                {menu === 'dashboard' &&
                    <Dashboard/>
                }

                {menu === 'startStream' &&
                    <StartStream
                        handleClickEditStreamInfoDialog={handleClickEditStreamInfoDialog}
                        handleClickEditPopoverOpen={handleClickEditPopoverOpen}
                        handleCloseEditPopover={handleCloseEditPopover}
                        editOpen={editOpen}
                        editId={editId}
                        editAnchorEl={editAnchorEl}
                    />
                }

                {menu === 'manager' &&
                    // <MyChannels/>
                    // <MyChannelsPurchase handleClickBuyANewChannelDialogOpen={handleClickBuyANewChannelDialogOpen}/>
                    <MyChannelsDetail
                        handleClickEditChannelInfoDialogOpen={handleClickEditChannelInfoDialogOpen}
                        handleClickExtendChannelPeriodDialogOpen={handleClickExtendChannelPeriodDialogOpen}
                        handleClickChangeStreamerDialogOpen={handleClickChangeStreamerDialogOpen}
                    />
                }

                {menu === 'points' &&
                    <Points/>
                    // <PointsPurchase handleClickBuyPointsDialogOpen={handleClickBuyPointsDialogOpen}/>
                }

                {menu === 'settlement' &&
                    <Settlement handleClickSettlementDialogOpen={handleClickSettlementDialogOpen}/>
                    // <SettlementHistory/>
                }

                {menu === 'exchange' &&
                    <Exchange handleClickExchangeSettlementDialogOpen={handleClickExchangeSettlementDialogOpen}/>
                    // <ExchangeHistory/>
                }

            </Container>
        );
    }
}

export default Main;