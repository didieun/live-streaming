import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, MenuItem, MenuList, Popover, Typography } from '@mui/material';
import { Flex, FlexCenter, FlexColumnCenter, FlexEnd, FlexSpace, IconButtonStyle, LightTooltip } from '../../common/styled/CommonStyle';
import CommonButton from '../../common/CommonButton';
import { ReactComponent as MoreIcon } from '../../../../assets/images/MoreIcon.svg';
import { ReactComponent as DotsThreeOutlineVertical } from '../../../../assets/images/DotsThreeOutlineVertical.svg';
import { ReactComponent as ChartBarIcon } from '../../../../assets/images/ChartBarIcon.svg';
import { ReactComponent as ClockIcon } from '../../../../assets/images/ClockIcon.svg';
import { ReactComponent as VideoCameraIcon } from '../../../../assets/images/VideoCameraIcon.svg';
import { ReactComponent as LockKeyIcon } from '../../../../assets/images/LockKeyIcon.svg';
import { ReactComponent as TooltipCloseIcon } from '../../../../assets/images/TooltipCloseIcon.svg';
import { ReactComponent as PushPinIcon } from '../../../../assets/images/PushPinIcon.svg';
import CommonDialog from '../../common/CommonDialog';
import PropTypes from 'prop-types';
import CommonSelect from '../../common/CommonSelect';
import { useViewSize } from '../../../../store';
import { GroupMainPath } from '../../../../components/GroupMainPath';

const BoxStyle = styled(FlexSpace)(({ theme }) => ({
    position: 'relative',
    marginBottom: 20,
    zIndex: 1200
}));

const BoxInStyle = styled(FlexSpace)(({ theme, coaching }) => ({
    width: '100%',
    minHeight: 120,
    outline: coaching ? '1px solid #00CCA5' : '1px solid #D5D4DC',
    background: coaching ? '#f0fffc' : '#fff',
    borderRadius: 8,
    padding: 30,
    boxSizing: 'border-box',
    position: 'relative',
    '&:last-child': {
        marginBottom: 0
    },
    '&:hover': {
        outline: '3px solid #F5CD79'
    },
    [theme.breakpoints.down('sl')]: {
        alignItems: 'flex-start'
    }
}));

const PinBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 7,
    left: 8
}));

const LockBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    '& > div': {
        position: 'relative'
    }
}));

const ChipBox = styled(FlexCenter)(({ theme }) => ({
    display: 'inline-flex',
    minWidth: 48,
    height: 30,
    background: '#00CCA5',
    borderRadius: 6,
    padding: '3px 12px',
    boxSizing: 'border-box',
    marginRight: 8,
    '& p': {
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight: 700,
        letterSpacing: '-0.5px'
    }
}));

const VodChipBox = styled(ChipBox)(({ theme }) => ({
    background: '#000'
}));

const EvaluationChipBox = styled(ChipBox)(({ theme }) => ({
    background: '#00BEEA'
}));

const AssignmentChipBox = styled(ChipBox)(({ theme }) => ({
    background: '#A674ED'
}));

const SurveyChipBox = styled(ChipBox)(({ theme }) => ({
    background: '#FFA500'
}));

const BoxTitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        minWidth: 0,
        fontSize: '1.5rem',
        color: '#333',
        fontWeight: 500,
        letterSpacing: '-0.5px',
        textAlign: 'left',
        marginTop: 10,
        marginBottom: 10
    }
}));

const IconSize = styled(FlexCenter)(({ theme }) => ({
    width: 22,
    height: 22,
    '& svg': {
        width: 22,
        height: 22,
        '& path': {
            fill: '#787878'
        }
    }
}));

const SubTextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '0.875rem',
        color: '#333',
        fontWeight: 500,
        letterSpacing: '-0.28px',
        textAlign: 'left',
        margin: '0 20px 0 4px'
    }
}));

const CommonButtonStyle = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        padding: 0,
        width: '100%',
        marginTop: 24,

        '& p': {
            color: '#333',
            fontSize: '0.875rem',
            fontWeight: 400,
            marginRight: 6
        },
        '&:hover': {
            backgroundColor: '#fff'
        },
        '& svg': {
            width: 20,
            height: 20
        }
    }
}));

const StateChipBox = styled(Box)(({ theme }) => ({
    minWidth: 60,
    height: 34,
    padding: '5px 16px',
    background: '#fff',
    border: '1px solid #3190FF',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
    margin: '0 0 0 24px',
    '& p': {
        fontSize: '1rem',
        color: '#3190FF',
        fontWeight: 500,
        lineHeight: 'normal'
    },
    [theme.breakpoints.down('sl')]: {
        margin: '0 0 0 16px'
    }
}));

const EndStateChipBox = styled(StateChipBox)(({ theme }) => ({
    background: '#F5F6FA',
    border: '1px solid #F5F6FA',
    '& p': {
        color: '#737373'
    }
}));

const ScheduleStateChipBox2 = styled(StateChipBox)(({ theme }) => ({
    border: '1px solid #333',
    '& p': {
        color: '#333'
    }
}));

const SaveStateChipBox = styled(StateChipBox)(({ theme }) => ({
    border: '1px solid #D5D4DC',
    background: '#F5F6FA',
    '& p': {
        color: '#333'
    }
}));

const MoreIconButton = styled(IconButtonStyle)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        width: 28,
        height: 28,
        marginLeft: 24,
        [theme.breakpoints.down('sl')]: {
            marginLeft: 16
        },
        '& svg': {
            width: 28,
            height: 28
        }
    }
}));

const ButtonBox = styled(FlexEnd)(({ theme }) => ({
    marginTop: 33,
    '& .MuiButtonBase-root': {
        marginLeft: 14
    },
    [theme.breakpoints.down('sl')]: {
        display: 'none'
    }
}));

const ButtonBoxShow = styled(FlexEnd)(({ theme }) => ({
    marginTop: 20,
    justifyContent: 'flex-start',
    '& .MuiButtonBase-root': {
        marginRight: 10
    },
    [theme.breakpoints.up('sl')]: {
        display: 'none'
    }
}));

const PopoverBox = styled(Popover)(({ theme }) => ({
    '& .MuiPaper-root': {
        minWidth: 123,
        boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.15)',
        borderRadius: 4,
        background: '#fff',
        border: 0,
        '& .MuiList-root': {
            padding: 5,
            '& .MuiButtonBase-root': {
                fontSize: '0.875rem',
                height: 30,
                color: '#444343',
                fontWeight: 400,
                padding: '0 12px',
                boxSizing: 'border-box',
                '&:hover': {
                    background: '#f5f6fa',
                    borderRadius: 4
                }
            }
        }
    }
}));

const DialogText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.125rem',
        color: '#333',
        fontWeight: 400,
        marginBottom: 14,
        '& span': {
            fontWeight: 700
        }
    }
}));

const ExplanationBox = styled(Box)(({ theme }) => ({
    width: 350,
    background: '#3190FF',
    boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.25)',
    position: 'absolute',
    padding: '11px',
    top: 70,
    left: '50%',
    borderRadius: 6,
    zIndex: 2000,
    transform: 'translate(-50%, 0) ',
    '&::before': {
        backgroundColor: '#3190FF',
        content: "''",
        display: 'block',
        height: '13px',
        position: 'absolute',
        top: -6,
        left: '49%',
        transform: 'rotate( -227deg ) skew( 0deg ) ',
        width: '13px',
        zIndex: 200
    }
}));

const InfoTooltipBoxIn = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    '& button': {
        width: 16,
        height: 16,
        marginLeft: 10
    }
}));

const InfoTooltipText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '0.875rem',
        color: '#fff',
        fontWeight: 400,
        textOverflow: 'unset',
        whiteSpace: 'unset',
        overflow: 'unset',
        textAlign: 'left',
        wordBreak: 'keep-all',
        '& span': {
            fontWeight: 700
        }
    }
}));

const RecordButton = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        minWidth: 114,
        height: 34,
        boxSizing: 'border-box',
        padding: '5px 10px',
        borderRadius: 4,
        border: '1px solid #664CFF',
        background: '#fff',
        '& p': {
            fontSize: '1rem',
            color: '#664CFF',
            fontWeight: 500,
            letterSpacing: '-0.5px',
            lineHeight: 'normal',
            marginLeft: 4
        },
        '&:hover': {
            background: '#fff'
        }
    }
}));

const MainLectureListComponent = (props) => {
    const { handleChangeTab, items } = props;
    const { isSd } = useViewSize();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [deleteBtn, setDeleteBtn] = React.useState(false);
    const [endBtn, setEndBtn] = React.useState(false);
    const [changeBtn, setChangeBtn] = React.useState(false);
    const [filter, setFilter] = React.useState(0);
    const [tooltip, setTooltip] = React.useState(true);
    const menuList = [
        { text: 'n번 강의 - 강의명' },
        { text: 'n번 강의 - 강의명2' },
        { text: 'n번 강의 - 강의명3' },
        { text: 'n번 강의 - 강의명4' }
    ];

    const handleCloseTooltip = () => {
        setTooltip(false);
    };

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    const handleClickMore = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMore = () => {
        setAnchorEl(null);
    };

    const handleClickDeleteDialog = () => {
        setDeleteBtn(true);
    };

    const handleCloseDeleteDialog = () => {
        setDeleteBtn(false);
    };

    const handleClickEndDialog = () => {
        setEndBtn(true);
    };

    const handleCloseEndDialog = () => {
        setEndBtn(false);
    };

    const handleClickChangeDialog = () => {
        setChangeBtn(true);
    };

    const handleCloseChangeDialog = () => {
        setChangeBtn(false);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Box>
            {items.map((item, i) => (
                <BoxStyle key={i}>
                    <BoxInStyle coaching={item.coaching}>
                        {item.pin && (
                            <PinBox>
                                <PushPinIcon />
                            </PinBox>
                        )}
                        <Box sx={{ flex: 2, overflow: 'hidden' }}>
                            {item.coaching && (
                                <ChipBox>
                                    <Typography>코칭</Typography>
                                </ChipBox>
                            )}

                            {item.vod && (
                                <VodChipBox>
                                    <Typography>VOD</Typography>
                                </VodChipBox>
                            )}

                            {item.evaluation && (
                                <EvaluationChipBox>
                                    <Typography>평가</Typography>
                                </EvaluationChipBox>
                            )}

                            {item.assignment && (
                                <AssignmentChipBox>
                                    <Typography>과제</Typography>
                                </AssignmentChipBox>
                            )}

                            {item.survey && (
                                <SurveyChipBox>
                                    <Typography>설문</Typography>
                                </SurveyChipBox>
                            )}

                            <BoxTitleText>{item.title}</BoxTitleText>
                            <Flex>
                                {item.type ? (
                                    <SubTextStyle sx={{ color: '#1976D2 !important' }}>일시 강의</SubTextStyle>
                                ) : item.survey ? (
                                    <SubTextStyle sx={{ color: '#1976D2 !important' }}>만족도 조사</SubTextStyle>
                                ) : (
                                    <SubTextStyle sx={{ color: '#1976D2 !important' }}>상시 강의</SubTextStyle>
                                )}

                                {item.type && (
                                    <FlexCenter>
                                        <ClockIcon />
                                        <SubTextStyle>{item.date}</SubTextStyle>
                                    </FlexCenter>
                                )}
                                {item.vod && (
                                    <FlexCenter>
                                        <IconSize>
                                            <VideoCameraIcon />
                                        </IconSize>
                                        <SubTextStyle>{item.vodTime}</SubTextStyle>
                                    </FlexCenter>
                                )}
                            </Flex>

                            <ButtonBoxShow>
                                {item.coachingBtn && (
                                    <CommonButton
                                        width={isSd ? '100px' : '154px'}
                                        height={isSd ? '46px' : '50px'}
                                        text={'코칭 스케줄 관리'}
                                        background={'#fff'}
                                        border={'#D5D4DC'}
                                        color={'#333'}
                                        fontWeight={700}
                                        fontSize={isSd ? '1rem' : '1.125rem'}
                                        disabled={false}
                                    />
                                )}

                                {item.contentsBtn && (
                                    <CommonButton
                                        width={isSd ? '100px' : '154px'}
                                        height={isSd ? '46px' : '50px'}
                                        text={'수업 콘텐츠 관리'}
                                        background={'#fff'}
                                        border={'#D5D4DC'}
                                        color={'#333'}
                                        fontWeight={700}
                                        fontSize={isSd ? '1rem' : '1.125rem'}
                                        disabled={false}
                                    />
                                )}
                                <CommonButton
                                    width={isSd ? '100px' : '154px'}
                                    height={isSd ? '46px' : '50px'}
                                    text={item.lecture ? '강의하기' : '강의보기'}
                                    background={item.lecture ? '#2F3640' : '#E8E8E8'}
                                    color={item.lecture ? '#fff' : '#333'}
                                    fontWeight={700}
                                    fontSize={isSd ? '1rem' : '1.125rem'}
                                    disabled={false}
                                />
                            </ButtonBoxShow>
                        </Box>

                        <Box sx={{ flex: 1 }}>
                            <FlexEnd>
                                {item.record && (
                                    <RecordButton onClick={() => handleChangeTab(GroupMainPath.lecture.record)} disableRipple>
                                        <ChartBarIcon />
                                        <Typography>학습기록</Typography>
                                    </RecordButton>
                                )}

                                {item.state === '종료' ? (
                                    <EndStateChipBox>
                                        <Typography>종료</Typography>
                                    </EndStateChipBox>
                                ) : item.state === '진행중' ? (
                                    <StateChipBox>
                                        <Typography>진행중</Typography>
                                    </StateChipBox>
                                ) : item.state === '임시저장' ? (
                                    <SaveStateChipBox>
                                        <Typography>임시저장</Typography>
                                    </SaveStateChipBox>
                                ) : (
                                    <ScheduleStateChipBox2>
                                        <Typography>예정</Typography>
                                    </ScheduleStateChipBox2>
                                )}

                                <MoreIconButton onClick={handleClickMore} disableRipple>
                                    <DotsThreeOutlineVertical />
                                </MoreIconButton>

                                <PopoverBox
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleCloseMore}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right'
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                >
                                    <MenuList>
                                        <MenuItem onClick={handleClickChangeDialog}>강의 순서 변경</MenuItem>
                                        <MenuItem>비공개로 변경</MenuItem>
                                        <MenuItem>편집</MenuItem>
                                        <MenuItem>상단에 고정</MenuItem>
                                        <MenuItem sx={{ color: '#f00 !important' }} onClick={handleClickEndDialog}>
                                            강의 종료
                                        </MenuItem>
                                        <MenuItem sx={{ color: '#f00 !important' }} onClick={handleClickDeleteDialog}>
                                            삭제
                                        </MenuItem>
                                    </MenuList>
                                </PopoverBox>
                            </FlexEnd>
                            <ButtonBox>
                                {item.coachingBtn && (
                                    <CommonButton
                                        width={'154px'}
                                        height={'50px'}
                                        text={'코칭 스케줄 관리'}
                                        background={'#fff'}
                                        border={'#D5D4DC'}
                                        color={'#333'}
                                        fontWeight={500}
                                        fontSize={'1.125rem'}
                                        disabled={false}
                                    />
                                )}

                                {item.contentsBtn && (
                                    <CommonButton
                                        width={'154px'}
                                        height={'50px'}
                                        text={'수업 콘텐츠 관리'}
                                        background={'#fff'}
                                        border={'#D5D4DC'}
                                        color={'#333'}
                                        fontWeight={500}
                                        fontSize={'1.125rem'}
                                        disabled={false}
                                    />
                                )}
                                <CommonButton
                                    width={'140px'}
                                    height={'50px'}
                                    text={item.lecture ? '강의하기' : '강의보기'}
                                    background={item.lecture ? '#2F3640' : '#E8E8E8'}
                                    color={item.lecture ? '#fff' : '#333'}
                                    fontWeight={700}
                                    fontSize={'1.125rem'}
                                    disabled={false}
                                />
                            </ButtonBox>
                        </Box>
                    </BoxInStyle>
                    {item.lock && (
                        <LockBox>
                            <Box sx={{ position: 'relative' }}>
                                <LockKeyIcon />
                                {tooltip && (
                                    <ExplanationBox>
                                        <InfoTooltipBoxIn>
                                            <InfoTooltipText>
                                                교육생은 강의 정보만 볼 수 있습니다.
                                                <br />
                                                강의 시작 시간이 되면 수강 가능 상태로 변경됩니다.
                                            </InfoTooltipText>
                                            <IconButtonStyle onClick={handleCloseTooltip} disableRipple>
                                                <TooltipCloseIcon />
                                            </IconButtonStyle>
                                        </InfoTooltipBoxIn>
                                    </ExplanationBox>
                                )}
                            </Box>
                        </LockBox>
                    )}
                </BoxStyle>
            ))}
            <CommonButtonStyle disableRipple>
                <Typography>더보기</Typography>
                <MoreIcon />
            </CommonButtonStyle>

            <CommonDialog
                open={endBtn}
                title={'알림'}
                message={<Typography>강의를 종료하시겠습니까?</Typography>}
                onClose={handleCloseEndDialog}
                btnClick1={handleCloseEndDialog}
            />

            <CommonDialog
                open={deleteBtn}
                title={'알림'}
                message={<Typography>강의를 삭제하시겠습니까?</Typography>}
                // message={<Typography>학습 진행 중인 강의는 삭제 할 수 없습니다.</Typography>}
                onClose={handleCloseDeleteDialog}
                btnClick1={handleCloseDeleteDialog}
            />

            <CommonDialog
                open={changeBtn}
                title={'강의 순서 변경'}
                children={
                    <FlexColumnCenter>
                        <DialogText>
                            n번 강의 - <span>‘강의명’</span>
                            <br />
                            선택한 강의 다음 순서로 변경됩니다.
                        </DialogText>
                        <FlexCenter sx={{ width: 318, '& .MuiPopover-root': { zIndex: 1451 } }}>
                            <CommonSelect filter={filter} handleChangeFilter={handleChangeFilter} menuList={menuList} />
                        </FlexCenter>
                    </FlexColumnCenter>
                }
                onClose={handleCloseChangeDialog}
                btnClick1={handleCloseChangeDialog}
                btnText2={'적용'}
            />
        </Box>
    );
};

MainLectureListComponent.propTypes = {
    handleChangeTab: PropTypes.func,
    items: PropTypes.array
};

export default MainLectureListComponent;
