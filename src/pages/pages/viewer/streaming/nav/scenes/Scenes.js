import React from 'react';
import {
    AddSceneBox,
    AddSceneButton, ButtonIcon,
    Container,
    JustifySpace, ScenesBox, ScenesBoxIn, ScenesBoxList, StyledInput,
    TitleBox,
    TitleText, PopoverBox
} from "./styles/ScenesStyle";
import {ReactComponent as MenuDotsIcon} from "../../../../common/images/MenuDotsIcon.svg";
import {ReactComponent as MediaStripIcon} from "../../../../common/images/MediaStripIcon.svg";
import {ReactComponent as ScenesImageIcon} from "../../../../common/images/ScenesImageIcon.svg";
import {List, ListItem, Typography} from "@mui/material";
import ViewerAlertDialog from "../../../dialog/ViewerAlertDialog";
import ViewerCommonDialog from "../../../dialog/ViewerCommonDialog";

function Scenes(props) {
    const [scenes, setScenes] = React.useState(false);
    const [scenesName, setScenesName] = React.useState('scenes1');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const [scenesDialogOpen, setScenesDialogOpen] = React.useState(false);

    const handleClickScenes = () => {
        setScenes(true);
    };

    const handleChangeScenesName = (event) => {
        setScenesName(event.target.value);
    };

    const handleClickPopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePopover = () => {
        setAnchorEl(null);
    };

    const handleClickScenesDialogOpen = () => {
        setScenesDialogOpen(true);
        setAnchorEl(null);
    };

    const handleCloseDialog = () => {
        setScenesDialogOpen(false);
    };

    return (
        <Container>
            <TitleBox>
                <MediaStripIcon/>
                <TitleText>
                    Scenes
                </TitleText>
            </TitleBox>
            <ScenesBoxList>
                <ScenesBox>
                    <ScenesBoxIn onClick={handleClickScenes} select={scenes}>
                        <ScenesImageIcon/>
                    </ScenesBoxIn>
                    <JustifySpace>
                        <StyledInput
                            value={scenesName}
                            onChange={handleChangeScenesName}
                        />
                        <ButtonIcon aria-describedby={id} onClick={handleClickPopoverOpen} disableRipple>
                            <MenuDotsIcon/>
                        </ButtonIcon>
                    </JustifySpace>
                </ScenesBox>

                <PopoverBox
                    id="simple-popper"
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClosePopover}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left'
                    }}
                >
                    <List>
                        <ListItem onClick={handleClosePopover}>Duplicate</ListItem>
                        <ListItem onClick={handleClickScenesDialogOpen}>Delete</ListItem>
                    </List>
                </PopoverBox>
            </ScenesBoxList>
            <AddSceneBox>
                <AddSceneButton disableRipple>
                    + Add Scene
                </AddSceneButton>
            </AddSceneBox>


            {/* dialog */}
            <ViewerCommonDialog
                open={scenesDialogOpen}
                actionBtn={false}
                onClose={handleCloseDialog}
                title={''}
                children={
                    <ViewerAlertDialog
                        children={<Typography>Are you sure you wish to remove <span>scenes name</span> ?</Typography>}
                        submitText={'Delete'}
                        actionCancel={true}
                        onClose={handleCloseDialog}
                    />
                }
            />

        </Container>
    );
}

export default Scenes;