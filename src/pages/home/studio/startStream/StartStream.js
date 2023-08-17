import React from 'react';
import CommonTitle from "../title/CommonTitle";
import StartStreamList from "./StartStreamList";

function StartStream(props) {
    const { handleClickEditStreamInfoDialog, handleClickEditPopoverOpen, handleCloseEditPopover, editOpen, editId, editAnchorEl } = props;

    return (
        <div>
            <CommonTitle
                title={'Start Streams'}
                subTitle={<span>You can start <span style={{fontWeight: 700}}>streaming or edit</span> channel & stream informatiom.</span>}
            />

            <StartStreamList
                handleClickEditStreamInfoDialog={handleClickEditStreamInfoDialog}
                handleClickEditPopoverOpen={handleClickEditPopoverOpen}
                handleCloseEditPopover={handleCloseEditPopover}
                editOpen={editOpen}
                editId={editId}
                editAnchorEl={editAnchorEl}
            />

        </div>
    );
}

export default StartStream;