import React from 'react';
import {Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {ActiveRoles, Audience, ChannelOwner, Streamer,} from "../../styles/UserTableStyle";

// 공통 css
import {
    TableContainerBox,
    AlignCenter, TableAvatarBox, UnderlineText, TooltipStyle,
} from "../../../../styles/AdminMainStyle";
import TestProfileImage from "../../../../../../common/images/TestProfileImage.jpeg";
import {ReactComponent as ProfileUserIcon} from "../../../../../../common/images/ProfileUserIcon.svg";

function UserDetailTable() {

    return (
        <div>
            <TableContainerBox component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left">User Name</TableCell>
                            <TableCell align="left">Nickname</TableCell>
                            <TableCell align="left">Active Roles</TableCell>
                            <TableCell align="left">Signup date</TableCell>
                            <TableCell align="left">Last Login Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow >
                            <TableCell align="left" style={{width: '5%'}}>

                            </TableCell>
                            <TableCell align="center" style={{width: '20%'}}>
                                <AlignCenter>
                                    <TableAvatarBox>
                                        <img src={TestProfileImage} alt='image'/>

                                        {/* 프로필 이미지가 없는 경우*/}
                                        {/*<ProfileUserIcon />*/}
                                    </TableAvatarBox>
                                    <UnderlineText disableRipple>
                                        <TooltipStyle
                                            title="jimsmith"
                                            placement="bottom"
                                        >
                                            <Typography>
                                                jimsmith
                                            </Typography>
                                        </TooltipStyle>

                                    </UnderlineText>
                                </AlignCenter>
                            </TableCell>
                            <TableCell align="left" style={{width: '20%', maxWidth: 230}}>
                                jims
                            </TableCell>
                            <TableCell align="left" style={{width: '25%'}}>
                                <AlignCenter>
                                    <Audience>
                                        <span/>
                                        <Typography>Audience</Typography>
                                    </Audience>

                                    <Streamer>
                                        <span/>
                                        <Typography>Streamer</Typography>
                                    </Streamer>

                                    <ChannelOwner>
                                        <span/>
                                        <Typography>Channel Owner</Typography>
                                    </ChannelOwner>

                                    {/*<ActiveRoles>*/}
                                    {/*    <span/>*/}
                                    {/*    <Typography>Channel Owner</Typography>*/}
                                    {/*</ActiveRoles>*/}
                                </AlignCenter>

                            </TableCell>
                            <TableCell align="left" style={{width: '15%'}}>
                                2023. 06. 08 14:20
                            </TableCell>
                            <TableCell align="left" style={{width: '15%'}}>
                                2023. 06. 09 11:20
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainerBox>
        </div>
    );
}

export default UserDetailTable;