import React from 'react';
import {
    AlignCenter,
    ButtonIcon,
    Container,
    DateText,
    JustifySpace,
    LeftBox, MarginTop,
    RightBox,
    TextStyle, TitleText,
    FormControlLabelBox
} from "./styles/TagsStyles";
import {ReactComponent as TagIcon} from "../../../../common/images/TagIcon.svg";
import {ReactComponent as InfoIcon} from "../../../../common/images/InfoIcon.svg";
import {ReactComponent as CalendarIcon} from "../../../../common/images/CalendarIcon.svg";
import {ReactComponent as Checked} from "../../../../common/images/Checked.svg";
import {ReactComponent as UnChecked} from "../../../../common/images/UnChecked.svg";
import {ReactComponent as SettingDialogCloseIcon} from "../../../../common/images/SettingDialogCloseIcon.svg";
import TopTrendingTagsTable from "./table/TopTrendingTagsTable";
import TopRecommendedTagsTable from "./table/TopRecommendedTagsTable";
import {Checkbox, Typography} from "@mui/material";
import AdminSearch from "../../common/search/AdminSearch";
import TrendingTagsTable from "./table/TrendingTagsTable";
import TooltipArrowBlue from "../../../../common/images/TooltipArrowBlue.svg";
import {ArrowTooltipStyle} from "../../styles/AdminMainStyle";
import RecommendedTagsTable from "./table/RecommendedTagsTable";


const infoTrendingMessage = (
    <React.Fragment>
        <div style={{marginLeft: 10}}>
            <Typography><b>Trending Tags</b></Typography>
            <Typography>
                This is the order of tags most clicked by users.
            </Typography>
        </div>
    </React.Fragment>
);

const infoRecommendedMessage = (
    <React.Fragment>
        <div style={{marginLeft: 10}}>
            <Typography><b>Recommended Tags</b></Typography>
            <Typography>
                This is the tag order frequently used when registering a channel.
            </Typography>
        </div>
    </React.Fragment>
);

function Tags(props) {
    const [info, setInfo] = React.useState(false);
    const [info2, setInfo2] = React.useState(false);

    const handleClickInfo = () => {
        setInfo(true);
    };

    const handleClickInfo2 = () => {
        setInfo2(true);
    };

    const handleCloseInfo = () => {
        setInfo(false);
    };

    const handleCloseInfo2 = () => {
        setInfo2(false);
    };

    return (
        <Container>
            <LeftBox>
                <JustifySpace>
                    <AlignCenter>
                        <TagIcon/>
                        <TextStyle>
                            Top Trending Tags <span>8</span>
                        </TextStyle>
                        <ArrowTooltipStyle
                            open={info}
                            title={
                                <div>
                                    {infoTrendingMessage}
                                    <ButtonIcon onClick={handleCloseInfo} disableRipple>
                                        <SettingDialogCloseIcon style={{width: 16, height: 16}}/>
                                    </ButtonIcon>
                                </div>
                            }
                            placement="bottom"
                            top={'-25px'}
                            left={'50%'}
                            triangle={TooltipArrowBlue}
                        >
                            <ButtonIcon onClick={handleClickInfo} disableRipple>
                                <InfoIcon/>
                            </ButtonIcon>
                        </ArrowTooltipStyle>

                    </AlignCenter>

                    <AlignCenter>
                        <CalendarIcon style={{width: 18, height: 18}}/>
                        <DateText>Wednesday, 9/19/2023</DateText>
                    </AlignCenter>
                </JustifySpace>

                <TopTrendingTagsTable/>

                <MarginTop>
                    <TitleText>All Trending Tags</TitleText>
                    <AlignCenter>
                        <FormControlLabelBox control={<Checkbox checkedIcon={<Checked />} icon={<UnChecked />}/>} label="Excluding top 8 tags" />
                        <AdminSearch width={180} placeholder={'Search for tag'}/>
                    </AlignCenter>
                </MarginTop>

                <TrendingTagsTable/>
            </LeftBox>
            <RightBox>
                <JustifySpace>
                    <AlignCenter>
                        <TagIcon/>
                        <TextStyle>
                            Top Recommended Tags <span>8</span>
                        </TextStyle>
                        <ArrowTooltipStyle
                            open={info2}
                            title={
                                <div>
                                    {infoRecommendedMessage}
                                    <ButtonIcon onClick={handleCloseInfo2} disableRipple>
                                        <SettingDialogCloseIcon style={{width: 16, height: 16}}/>
                                    </ButtonIcon>
                                </div>
                            }
                            placement="bottom"
                            top={'-25px'}
                            left={'50%'}
                            triangle={TooltipArrowBlue}
                        >
                            <ButtonIcon onClick={handleClickInfo2} disableRipple>
                                <InfoIcon/>
                            </ButtonIcon>
                        </ArrowTooltipStyle>
                    </AlignCenter>

                    <AlignCenter>
                        <CalendarIcon style={{width: 18, height: 18}}/>
                        <DateText>Wednesday, 9/19/2023</DateText>
                    </AlignCenter>
                </JustifySpace>

                <TopRecommendedTagsTable/>

                <MarginTop>
                    <TitleText>All Recommended Tags</TitleText>
                    <AlignCenter>
                        <FormControlLabelBox control={<Checkbox checkedIcon={<Checked />} icon={<UnChecked />}/>} label="Excluding top 8 tags" />
                        <AdminSearch width={180} placeholder={'Search for tag'}/>
                    </AlignCenter>
                </MarginTop>

                <RecommendedTagsTable/>
            </RightBox>
        </Container>
    );

}

export default Tags;