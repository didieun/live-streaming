import React from 'react';
import {
    AlignCenter, AlignStart,
    ButtonIcon,
    Container, ContainerIn, JustifySpace, MarginRight50, TextBoldStyle, TextStyle,
    TitleText,
    VideoBox, SubVideoBox, SceneIconUser, SubVideoScreenShareBox, TextShareBox, ImageShareBox
} from "./styles/StreamingContentsStyle";
import {ReactComponent as StreamingEditIcon} from "../../../common/images/StreamingEditIcon.svg";
import {ReactComponent as StreamingEditArrowIcon} from "../../../common/images/StreamingEditArrowIcon.svg";
import {ReactComponent as SceneUserIcon} from "../../../common/images/SceneUserIcon.svg";
import {ReactComponent as SceneChromecastIcon} from "../../../common/images/SceneChromecastIcon.svg";
import {ReactComponent as SceneImageIcon} from "../../../common/images/SceneImageIcon.svg";
import {TooltipStyle} from "../styles/StreamingStyle";
import ViewerCommonDialog from "../../dialog/ViewerCommonDialog";
import StreamInfo from "../../dialog/StreamInfo";
import {Typography} from "@mui/material";
import TestVideoImage from "../../../common/images/TestVideoImage.jpg";
import MainScreenImage from "../../../common/images/MainScreenImage.png";
import TestImage from "../../../common/images/TestImage.svg";

function StreamingContents(props) {
    const [streamInfoDialog, setStreamInfoDialog] = React.useState(false);
    const [edit, setEdit] = React.useState(false);

    const handleClickEdit = () => {
        setEdit(true);
    };

    const handleClickStreamInfoDialog = () => {
        setStreamInfoDialog(true);
    };

    const handleCloseDialog = () => {
        setStreamInfoDialog(false);
        setEdit(false);
    };

    return (
        <Container>
            <ContainerIn>
                <JustifySpace>
                    <AlignCenter>
                        <TooltipStyle
                            title="Edit"
                            placement="bottom"
                        >
                            <ButtonIcon onClick={handleClickStreamInfoDialog} disableRipple>
                                <StreamingEditIcon/>
                            </ButtonIcon>
                        </TooltipStyle>

                        <TitleText>Title</TitleText>
                        <ButtonIcon onClick={handleClickStreamInfoDialog} disableRipple>
                            <StreamingEditArrowIcon/>
                        </ButtonIcon>
                    </AlignCenter>

                    <AlignCenter>
                        <MarginRight50>
                            <TextStyle>Views</TextStyle>
                            <TextBoldStyle>0</TextBoldStyle>
                        </MarginRight50>

                        <AlignStart>
                            <TextStyle>Session</TextStyle>
                            <TextBoldStyle>0:00:00</TextBoldStyle>
                        </AlignStart>
                    </AlignCenter>
                </JustifySpace>


                <VideoBox>
                    <img src={MainScreenImage} alt='image'/>

                    <SubVideoBox>
                        <SceneIconUser>
                            <SceneUserIcon/>
                        </SceneIconUser>
                    </SubVideoBox>

                    <SubVideoScreenShareBox>
                        <SceneChromecastIcon style={{width: 60, height: 60}}/>
                    </SubVideoScreenShareBox>
                    <TextShareBox>
                        <Typography>abc</Typography>
                    </TextShareBox>
                    <ImageShareBox>
                        <img src={TestImage} alt='image'/>
                    </ImageShareBox>
                </VideoBox>
            </ContainerIn>

            <ViewerCommonDialog
                open={streamInfoDialog}
                title={edit ?  'Edit Stream Info' : 'Stream Info'}
                cancelBtn={edit ? false : true}
                submitText={'Edit'}
                onClose={handleCloseDialog}
                onClick={edit ? handleCloseDialog : handleClickEdit}
                children={<StreamInfo edit={edit}/>}
            />

        </Container>
    );
}

export default StreamingContents;