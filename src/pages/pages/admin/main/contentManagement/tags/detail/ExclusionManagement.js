import React from 'react';
import {
    BackButton, ButtonStyle,
    TitleText,
    JustifyEnd, Flex, LeftBox, RightBox, TitleText2, BoxStyle,
    ButtonIcon,
    TagBox, EmptyText, JustifyCenter, ExcludeButton,
} from "./styles/ExclusionManagementStyle";
import {Typography} from "@mui/material";
import {ReactComponent as BackArrowIcon} from "../../../../../common/images/BackArrowIcon.svg";
import {ReactComponent as TagCloseIcon} from "../../../../../common/images/TagCloseIcon.svg";
import {ReactComponent as TagIcon} from "../../../../../common/images/TagIcon.svg";
import {ReactComponent as SettingDialogCloseIcon} from "../../../../../common/images/SettingDialogCloseIcon.svg";
import {ReactComponent as InfoIcon} from "../../../../../common/images/InfoIcon.svg";
import {ReactComponent as CalendarIcon} from "../../../../../common/images/CalendarIcon.svg";
import {AlignCenter, DateText, JustifySpace, TextStyle} from "../styles/TagsStyles";
import {ArrowTooltipStyle} from "../../../styles/AdminMainStyle";
import TooltipArrowBlue from "../../../../../common/images/TooltipArrowBlue.svg";
import ExclusionTopTrendingTagsTable from "./table/ExclusionTopTrendingTagsTable";
import ExclusionTopRecommendedTagsTable from "./table/ExclusionTopRecommendedTagsTable";

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

function ExclusionManagement(props) {
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
        <div>
            <TitleText>Content Management</TitleText>

            <BackButton disableRipple>
                <BackArrowIcon/>
                <Typography>Trending & Recommended Tags List</Typography>
            </BackButton>

            <JustifyEnd>
                <ButtonStyle disableRipple>Save and Exclusion</ButtonStyle>
            </JustifyEnd>

            <Flex>
                <LeftBox>
                    <TitleText2>Excluded Trending Tags</TitleText2>
                    <BoxStyle>
                        <TagBox>
                            <Typography>가나다라마바사아자차카타파하</Typography>
                            <ButtonIcon disableRipple>
                                <TagCloseIcon/>
                            </ButtonIcon>
                        </TagBox>
                    </BoxStyle>

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

                    <ExclusionTopTrendingTagsTable/>

                    <JustifyCenter>
                        <ExcludeButton disableRipple>Exclude</ExcludeButton>
                    </JustifyCenter>
                </LeftBox>
                <RightBox>
                    <TitleText2>Excluded Recommended Tags</TitleText2>

                    <BoxStyle>
                        <EmptyText>There are no excluded tags.</EmptyText>
                    </BoxStyle>

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

                    <ExclusionTopRecommendedTagsTable/>

                    <JustifyCenter>
                        <ExcludeButton disableRipple>Exclude</ExcludeButton>
                    </JustifyCenter>
                </RightBox>
            </Flex>
        </div>
    );
}

export default ExclusionManagement;