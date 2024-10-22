import React from 'react';
import {
    FormControlLabel,
    Paper,
    Radio,
    RadioGroup,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography
} from "@mui/material";
import {
    BoxColumn,
    ButtonStyle,
    DayRed,
    OpenButtonStyle,
    StatusBox,
    TableHeadBox,
    BorderRight4,
    ExpirationDateBox,
    FormControlBox,
    JustifySpace,
    NoImageBox,
    SubTextStyle,
    TableCellBox,
    TagBox,
    TagBoxIn,
    TextBox,
    TextStyle,
    ImageBox,
    GoLiveButton,
    LiveBox,
    OffLineBox,
    GreenText,
    RedText,
    YellowText
} from "../../styles/ChannelPurchaseApprovalsTableStyle";
import {ReactComponent as ProfileUserIcon} from "../../../../../../common/images/ProfileUserIcon.svg";
import {ReactComponent as CalendarIcon} from "../../../../../../common/images/CalendarIcon.svg";
import {ReactComponent as MailOpenIcon} from "../../../../../../common/images/MailOpenIcon.svg";
import {ReactComponent as MailIcon} from "../../../../../../common/images/MailIcon.svg";
import {ReactComponent as ImageIcon} from "../../../../../../common/images/ImageIcon.svg";
import {ReactComponent as UnRadioIcon} from "../../../../../../common/images/UnRadioIcon.svg";
import {ReactComponent as RadioIcon} from "../../../../../../common/images/RadioIcon.svg";
import {ReactComponent as GoLiveIcon} from "../../../../../../common/images/GoLiveIcon.svg";
import {ReactComponent as LiveIcon} from "../../../../../../common/images/LiveIcon.svg";
import TestProfileImage from "../../../../../../common/images/TestProfileImage.jpeg";
import TestVideoImage from "../../../../../../common/images/TestVideoImage.jpg";

// 공통 css
import {
    TableContainerBox,
    AlignCenter,
    NoTableCell, UnderlineText,
    TooltipStyle, TableAvatarBox,
} from "../../../../styles/AdminMainStyle";

function ChannelPurchaseApprovalsDetailTable(props) {
    const {handleClickChannelPurchaseRequestDialog} = props;

    return (
        <div>
            <TableContainerBox component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHeadBox>
                        <TableRow>
                            <TableCell align="center">No</TableCell>
                            <TableCell align="left">Channel ID</TableCell>
                            <TableCell align="left">Price Plan</TableCell>
                            <TableCell align="left">Expiration Date</TableCell>
                            <TableCell align="left" style={{minWidth: 197}}>Payment validity period</TableCell>
                            <TableCell align="left">Buyer</TableCell>
                            <TableCell align="left">Notes</TableCell>
                            <TableCell align="left" style={{minWidth: 210}}>Payment Request Date</TableCell>
                            <TableCell align="left" style={{minWidth: 112}}>Product Price</TableCell>
                            <TableCell align="left">Status</TableCell>
                        </TableRow>
                    </TableHeadBox>
                    <TableBody>
                        <TableRow >
                            <NoTableCell align="center" style={{width: '5%'}}>
                                1
                            </NoTableCell>
                            <TableCell align="left" style={{width: '10%'}}>
                                <TooltipStyle
                                    title={'abc-12345678abc-12345678abc-12345678abc-12345678'}
                                    placement="bottom"
                                >
                                    <UnderlineText disableRipple>
                                        <Typography>
                                            abc-12345678abc-12345678abc-12345678abc-12345678
                                        </Typography>
                                    </UnderlineText>
                                </TooltipStyle>
                            </TableCell>
                            <TableCell align="left" style={{width: '10%'}}>Basic 3 month</TableCell>
                            <TableCell align="left" style={{width: '15%'}} >
                                <ExpirationDateBox>
                                    <AlignCenter>
                                        <CalendarIcon/>
                                        2023. 06. 08 ~ 2024. 06. 08
                                    </AlignCenter>
                                </ExpirationDateBox>
                            </TableCell>
                            <TableCell align="left" style={{width: '15%'}} >
                                <DayRed>D-7</DayRed>
                            </TableCell>
                            <BorderRight4 align="center" style={{width: '15%'}}>
                                <AlignCenter>
                                    <TableAvatarBox>
                                        <ProfileUserIcon />
                                        {/*<img src={TestProfileImage} alt='image'/>*/}
                                    </TableAvatarBox>
                                    <UnderlineText disableRipple>
                                        <TooltipStyle
                                            title={'jimsmith'}
                                            placement="bottom"
                                        >
                                            <Typography>
                                                jimsmith
                                            </Typography>
                                        </TooltipStyle>
                                    </UnderlineText>
                                </AlignCenter>
                            </BorderRight4>
                            <TableCell align="left" style={{width: '10%', maxWidth: 230}}>
                                {/*<OpenButtonStyle disableRipple>*/}
                                {/*    <MailOpenIcon/>*/}
                                {/*    <Typography>*/}
                                {/*        last message*/}
                                {/*    </Typography>*/}
                                {/*</OpenButtonStyle>*/}

                                <ButtonStyle disableRipple>
                                    <MailIcon/>
                                    <TooltipStyle
                                        title={'last message'}
                                        placement="bottom"
                                    >
                                        <Typography onClick={handleClickChannelPurchaseRequestDialog}>
                                            last message
                                        </Typography>
                                    </TooltipStyle>
                                </ButtonStyle>
                            </TableCell>
                            <TableCell align="left" style={{width: '10%'}} >
                                <BoxColumn>
                                    2023. 06. 08 14:20
                                </BoxColumn>
                            </TableCell>
                            <TableCell align="left" style={{width: '10%'}}>
                                $ 2,300
                            </TableCell>
                            <TableCell align="left" style={{width: '10%'}} >
                                <StatusBox>
                                    APPROVED
                                </StatusBox>

                                {/*<GreenText>*/}
                                {/*    REQUESTING..*/}
                                {/*</GreenText>*/}

                                {/*<YellowText>*/}
                                {/*    UPCOMING*/}
                                {/*</YellowText>*/}

                                {/*<RedText>*/}
                                {/*    EXPIRED*/}
                                {/*</RedText>*/}

                                {/*<RedText>*/}
                                {/*    REJECTED*/}
                                {/*</RedText>*/}

                                {/*<RedText>*/}
                                {/*    CANCELED*/}
                                {/*</RedText>*/}
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCellBox colSpan={10}>
                                <JustifySpace>
                                    <div style={{display:'flex'}}>
                                        {/*<ImageBox>*/}
                                        {/*    <img src={TestVideoImage} alt='image'/>*/}
                                        {/*</ImageBox>*/}
                                        <NoImageBox>
                                            <ImageIcon/>
                                            <Typography>Banner Image</Typography>
                                        </NoImageBox>

                                        <TextBox>
                                            <TextStyle>Description</TextStyle>
                                            <SubTextStyle>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor dui at varius posuere. Donec id mauris sagittis, eleifend ligula quis, tempor est. Nunc quis nibh mauris. Donec iaculis augue nec sollicitudin cursus. Nulla ante erat, vestibulum in erat ut, semper faucibus nulla. Integer pellentesque nunc sed bibendum condimentum. Nam odio diam, tristique posuere lorem a, iaculis suscipit ligula
                                            </SubTextStyle>
                                            {/*<SubTextStyle>*/}
                                            {/*    There is no description.*/}
                                            {/*</SubTextStyle>*/}
                                        </TextBox>

                                        <div>
                                            <TextStyle>Tags</TextStyle>
                                            <TagBox>
                                                <TagBoxIn disableRipple>
                                                    <Typography>#kldsjfw</Typography>
                                                </TagBoxIn>

                                                <TagBoxIn disableRipple>
                                                    <Typography>#dkfklfmfaksdkrldnlgo</Typography>
                                                </TagBoxIn>

                                                <TagBoxIn disableRipple>
                                                    <Typography>#kdjkflwlqfj</Typography>
                                                </TagBoxIn>
                                            </TagBox>

                                            <TextStyle>Appear in search results</TextStyle>

                                            <FormControlBox>
                                                <RadioGroup
                                                    row
                                                    defaultValue="yes"
                                                >
                                                    <FormControlLabel
                                                        value="yes"
                                                        control={<Radio  icon={<UnRadioIcon />} checkedIcon={<RadioIcon />} disableRipple/>}
                                                        label="Yes"
                                                    />
                                                    <FormControlLabel
                                                        value="no"
                                                        control={<Radio  icon={<UnRadioIcon />} checkedIcon={<RadioIcon />} disableRipple/>}
                                                        label="No"
                                                    />
                                                </RadioGroup>
                                            </FormControlBox>
                                        </div>
                                    </div>

                                    <AlignCenter>
                                        <LiveBox>
                                            <LiveIcon/>
                                            <Typography>LIVE</Typography>
                                        </LiveBox>
                                        {/*<OffLineBox>*/}
                                        {/*    <Typography>OFF LINE</Typography>*/}
                                        {/*</OffLineBox>*/}
                                        <GoLiveButton disableRipple>
                                            <GoLiveIcon/>
                                            <Typography>
                                                Go Live
                                            </Typography>
                                        </GoLiveButton>
                                    </AlignCenter>
                                </JustifySpace>
                            </TableCellBox>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainerBox>

        </div>
    );
}

export default ChannelPurchaseApprovalsDetailTable;
