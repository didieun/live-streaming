import React from 'react';
import { useViewSize } from '../../../../store';
import styled from '@emotion/styled/macro';
import {Box} from '@mui/material';
import WeeklyDatepickerComponent_Backup from "../home/WeeklyDatepickerComponent";
import ScheduleListDetailComponent from "./ScheduleListDetailComponent";
import {FlexCenter, FlexSpace} from "../../common/styled/CommonStyle";

const Root = styled(Box)(({ theme,isLg }) => ({
    width:'100%',
    boxSizing: 'border-box',
}));
const TitleBox = styled(FlexSpace)(({ theme }) => ({
    width:'100%',
    marginBottom:'14px',
    alignItems:'flex-end'
}));
const DateBox = styled(FlexCenter)(({ theme }) => ({
    color:'#333333',
    fontSize:'1.5rem',
    fontWeight:700,
    letterSpacing:'-0.5px',
}));
const Today = styled('span')(({ theme }) => ({
    width:56,
    height:28,
    display:'flex',
    alignItems: 'center',
    justifyContent : 'center',
    color:'#3190FF',
    fontSize:'1rem',
    fontWeight:500,
    border:'1px solid #3190FF',
    borderRadius:25,
    marginLeft:10,
    boxSizing:'border-box',
}));

function LectureSchedule(props) {
    const { isLg } = useViewSize();

    return (
        <Root isLg={isLg}>
            <TitleBox>
                <DateBox>2월 27일 (화) <Today>오늘</Today></DateBox>
            </TitleBox>
            <WeeklyDatepickerComponent_Backup/>
            <ScheduleListDetailComponent/>
        </Root>
    );
}

export default LectureSchedule;
