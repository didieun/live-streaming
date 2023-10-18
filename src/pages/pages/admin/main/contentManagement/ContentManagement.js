import React from 'react';
import {AbsoluteButton, BoxPosition, TitleText} from "../styles/AdminMainStyle";
import Tabs from "../common/tabs/Tabs";
import MainBannerDisplay from "./banner/MainBannerDisplay";
import Tags from "./tags/Tags";

function ContentManagement(props) {
    const [tabValue, setTabValue] = React.useState('Main Banner Display');
    const valueList =
        [
            {
                label: 'Main Banner Display',
                value: 'Main Banner Display'
            },
            {
                label: 'Trending & Recommended Tags',
                value: 'Tags'
            },
        ]

    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div>
            <TitleText>Content Management</TitleText>
            <BoxPosition>
                <Tabs
                    tabValue={tabValue}
                    handleChangeTab={handleChangeTab}
                    valueList={valueList}
                />
                {tabValue === 'Main Banner Display' &&
                    <AbsoluteButton disableRipple>
                        Display Management
                    </AbsoluteButton>
                }

                {tabValue === 'Tags' &&
                    <AbsoluteButton disableRipple>
                        Exclusion Management
                    </AbsoluteButton>
                }
            </BoxPosition>

            {tabValue === 'Main Banner Display' &&
                <MainBannerDisplay/>
            }

            {tabValue === 'Tags' &&
                <Tags/>
            }

        </div>
    );

}

export default ContentManagement;