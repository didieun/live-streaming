import React from 'react';
import styled from '@emotion/styled/macro';
import { Box, FormControlLabel, Radio, RadioGroup, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { Flex, FlexCenter, FlexEnd, FormControlBox, IconButtonStyle } from '../common/styled/CommonStyle';
import { ReactComponent as VideoPlayIcon } from '../../../assets/images/VideoPlayIcon.svg';
import { ReactComponent as KetsupUnRadioIcon } from '../../../assets/images/KetsupUnRadioIcon.svg';
import { ReactComponent as KetsupRadioIcon } from '../../../assets/images/KetsupRadioIcon.svg';
import CommonButton from '../common/CommonButton';
import CommonSelect from '../common/CommonSelect';
import CommonTextField from '../common/CommonTextField';
import CommonTextarea from '../common/CommonTextarea';

const Container = styled(Stack)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    paddingTop: 80
}));

const BoxStyle = styled(Box)(({ theme }) => ({
    width: 650,
    '& > div': {
        display: 'flex',
        marginBottom: 30
    }
}));

const ModifyBox = styled(Box)(({ theme }) => ({
    flex: 3
}));

const ModifyBoxMargin = styled(ModifyBox)(({ theme }) => ({
    '& > div:first-child': {
        marginBottom: '10px'
    }
}));

const RadioModifyBox = styled(ModifyBox)(({ theme }) => ({
    '& .MuiFormControlLabel-root': {
        margin: '0 60px 0 0 !important'
    }
}));

const UploadBox = styled(ModifyBox)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    '& .MuiFormControl-root': {
        width: 'calc(100% - 102px - 8px)'
    },
    '& .MuiButtonBase-root': {
        marginLeft: 8
    }
}));

const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        flex: 3,
        fontSize: '1.125rem',
        color: '#333',
        fontWeight: 400,
        letterSpacing: '-0.5px',
        textAlign: 'left',
        wordBreak: 'keep-all',
        textOverflow: 'unset',
        whiteSpace: 'unset'
    }
}));

const TextBoldStyle = styled(TextStyle)(({ theme, modify }) => ({
    '&.MuiTypography-root': {
        flex: 1,
        fontWeight: 600,
        paddingRight: 10,
        paddingTop: modify ? 10 : 0
    }
}));

const ChipTextBoldStyle = styled(TextBoldStyle)(({ theme, modify }) => ({
    '&.MuiTypography-root': {
        paddingTop: modify ? 10 : 5
    }
}));

const ChipBox = styled(Box)(({ theme }) => ({
    flex: 3,
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8
}));

const ChipStyle = styled(FlexCenter)(({ theme }) => ({
    minWidth: 74,
    height: 36,
    border: '1px solid #FFBE9C',
    borderRadius: 99,
    background: '#FFEADF',
    padding: '4px 14px',
    boxSizing: 'border-box',
    '& p': {
        fontSize: '1rem',
        color: '#FF7628',
        letterSpacing: '-0.5px',
        fontWeight: 500,
        lineHeight: 'normal'
    }
}));

const VideoBox = styled(FlexCenter)(({ theme }) => ({
    flex: 3,
    aspectRatio: 16 / 9,
    borderRadius: 5,
    background: '#E3E3E3',
    '& .MuiButtonBase-root': {
        width: 51,
        height: 51
    }
}));

const ChipListBox = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 108,
    border: '1px solid #D5D4DC',
    boxSizing: 'border-box',
    borderRadius: 4,
    padding: '0 0 0 10px'
}));

const LanguageChipListBox = styled(ChipListBox)(({ theme }) => ({
    height: 65
}));

const ChipListBoxIn = styled(ToggleButtonGroup)(({ theme }) => ({
    '&.MuiToggleButtonGroup-root': {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        overflowY: 'scroll',
        boxSizing: 'border-box',
        padding: '12px 0',
        gap: '10px 8px',
        '&::-webkit-scrollbar': {
            width: '5px'
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#7A7A7A',
            borderRadius: '10px',
            backgroundClip: 'padding-box'
        },
        '&::-webkit-scrollbar-track': {
            borderRadius: '10px',
            background: '#E8E8E8'
        }
    }
}));

const ChipListStyle = styled(ToggleButton)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        minWidth: 74,
        height: 36,
        padding: '0 16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '99px !important',
        border: '1px solid #FFBE9C !important',
        background: '#FFEADF',
        cursor: 'pointer',
        marginLeft: '0 !important',
        fontSize: '1rem',
        color: '#FF7628',
        fontWeight: 500,
        lineHeight: 'normal',
        '&.Mui-selected': {
            background: '#FF7628',
            color: '#FFEADF',
            border: '1px solid #FFBE9C !important',
            '&:hover': {
                background: '#FF7628',
                color: '#FFEADF',
                border: '1px solid #FFBE9C !important'
            }
        },
        '&:hover': {
            background: '#FFEADF',
            color: '#FF7628'
        }
    }
}));

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1
});

function TeacherInformationComponent(props) {
    const [modify, setModify] = React.useState(false);
    const [filter, setFilter] = React.useState(0);
    const [degreeFilter, setDegreeFilter] = React.useState(0);
    const [qualificationFilter, setQualificationFilter] = React.useState(0);
    const [lectureChip, setLectureChip] = React.useState(() => []);
    const [interestsChip, setInterestsChip] = React.useState(() => []);
    const [value, setValue] = React.useState('남성');
    const menuList = [{ text: '전공 선택' }, { text: '전공 선택1' }];
    const degreeMenuList = [{ text: '학사' }, { text: '석사' }, { text: '박사' }];
    const qualificationMenuList = [{ text: '한국어교원자격 1급' }, { text: '한국어교원자격 2급' }, { text: '한국어교원자격 3급' }];
    const languageList = [{ label: '한국어' }, { label: '영어' }, { label: '인도네시아어' }];
    const lectureList = [
        { label: 'TOPIK 읽기' },
        { label: 'TOPIK 듣기' },
        { label: '비지니스 한국어' },
        { label: '테스트' },
        { label: '테스트' }
    ];

    const interestsList = [
        { label: 'K-POP' },
        { label: '반려동물' },
        { label: '영화' },
        { label: '여행' },
        { label: '테스트' },
        { label: '테스트' },
        { label: '테스트' },
        { label: '테스트' }
    ];

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleClickModify = () => {
        setModify(true);
    };

    const handleCloseModify = () => {
        setModify(false);
    };

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    const handleChangeDegreeFilter = (event) => {
        setDegreeFilter(event.target.value);
    };

    const handleChangeQualificationFilter = (event) => {
        setQualificationFilter(event.target.value);
    };

    const handleClickLectureChip = (event, newChip1) => {
        setLectureChip(newChip1);
    };

    const handleClickInterestsChip = (event, newChip) => {
        setInterestsChip(newChip);
    };

    return (
        <Container>
            <BoxStyle>
                <Box>
                    <TextBoldStyle>성별</TextBoldStyle>
                    {modify ? (
                        <RadioModifyBox>
                            <FormControlBox>
                                <RadioGroup
                                    aria-labelledby="radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={value}
                                    onChange={handleChange}
                                    row
                                >
                                    <FormControlLabel
                                        value={'남성'}
                                        control={<Radio icon={<KetsupUnRadioIcon />} checkedIcon={<KetsupRadioIcon />} disableRipple />}
                                        label={'남성'}
                                    />
                                    <FormControlLabel
                                        value={'여성'}
                                        control={<Radio icon={<KetsupUnRadioIcon />} checkedIcon={<KetsupRadioIcon />} disableRipple />}
                                        label={'여성'}
                                    />
                                </RadioGroup>
                            </FormControlBox>
                        </RadioModifyBox>
                    ) : (
                        <TextStyle>남성</TextStyle>
                    )}
                </Box>
                <Box>
                    <TextBoldStyle modify={modify}>전공</TextBoldStyle>
                    {modify ? (
                        <ModifyBoxMargin>
                            <CommonSelect filter={filter} handleChangeFilter={handleChangeFilter} menuList={menuList} />
                            <CommonTextField placeholder={'직접 입력해 주세요.'} />
                        </ModifyBoxMargin>
                    ) : (
                        <TextStyle>국어국문학</TextStyle>
                    )}
                </Box>
                <Box>
                    <TextBoldStyle modify={modify}>학위</TextBoldStyle>
                    {modify ? (
                        <ModifyBox>
                            <CommonSelect filter={degreeFilter} handleChangeFilter={handleChangeDegreeFilter} menuList={degreeMenuList} />
                        </ModifyBox>
                    ) : (
                        <TextStyle>학사</TextStyle>
                    )}
                </Box>
                <Box>
                    <TextBoldStyle modify={modify}>자격</TextBoldStyle>
                    {modify ? (
                        <ModifyBox>
                            <CommonSelect
                                filter={qualificationFilter}
                                handleChangeFilter={handleChangeQualificationFilter}
                                menuList={qualificationMenuList}
                            />
                        </ModifyBox>
                    ) : (
                        <TextStyle>한국어교원자격 1급</TextStyle>
                    )}
                </Box>

                <Box>
                    <ChipTextBoldStyle modify={modify}>강의 언어</ChipTextBoldStyle>
                    {modify ? (
                        <ModifyBoxMargin>
                            <LanguageChipListBox>
                                <ChipListBoxIn value={lectureChip} onChange={handleClickLectureChip} aria-label="text alignment">
                                    {languageList.map((list, i) => (
                                        <ChipListStyle key={i} value={i} disableRipple>
                                            {list.label}
                                        </ChipListStyle>
                                    ))}
                                </ChipListBoxIn>
                            </LanguageChipListBox>
                        </ModifyBoxMargin>
                    ) : (
                        <ChipBox>
                            <ChipStyle>
                                <Typography>한국어</Typography>
                            </ChipStyle>
                            <ChipStyle>
                                <Typography>영어</Typography>
                            </ChipStyle>
                            <ChipStyle>
                                <Typography>인도네시아어</Typography>
                            </ChipStyle>
                        </ChipBox>
                    )}
                </Box>

                <Box>
                    <ChipTextBoldStyle modify={modify}>강의 영역</ChipTextBoldStyle>
                    {modify ? (
                        <ModifyBoxMargin>
                            <ChipListBox>
                                <ChipListBoxIn value={lectureChip} onChange={handleClickLectureChip} aria-label="text alignment">
                                    {interestsList.map((list, i) => (
                                        <ChipListStyle key={i} value={i} disableRipple>
                                            {list.label}
                                        </ChipListStyle>
                                    ))}
                                </ChipListBoxIn>
                            </ChipListBox>
                            <CommonTextField placeholder={'직접 입력 (1개 이상 입력 시 콤마로 구분해 주세요.)'} />
                        </ModifyBoxMargin>
                    ) : (
                        <ChipBox>
                            <ChipStyle>
                                <Typography>TOPIK 읽기</Typography>
                            </ChipStyle>
                            <ChipStyle>
                                <Typography>TOPIK 듣기</Typography>
                            </ChipStyle>
                            <ChipStyle>
                                <Typography>비지니스 한국어</Typography>
                            </ChipStyle>
                        </ChipBox>
                    )}
                </Box>
                <Box>
                    <ChipTextBoldStyle modify={modify}>관심사</ChipTextBoldStyle>
                    {modify ? (
                        <ModifyBoxMargin>
                            <ChipListBox>
                                <ChipListBoxIn value={interestsChip} onChange={handleClickInterestsChip} aria-label="text alignment">
                                    {lectureList.map((list, i) => (
                                        <ChipListStyle key={i} value={i} disableRipple>
                                            {list.label}
                                        </ChipListStyle>
                                    ))}
                                </ChipListBoxIn>
                            </ChipListBox>
                            <CommonTextField placeholder={'직접 입력 (1개 이상 입력 시 콤마로 구분해 주세요.)'} />
                        </ModifyBoxMargin>
                    ) : (
                        <ChipBox>
                            <ChipStyle>
                                <Typography>K-POP</Typography>
                            </ChipStyle>
                            <ChipStyle>
                                <Typography>반려동물</Typography>
                            </ChipStyle>
                        </ChipBox>
                    )}
                </Box>

                <Box>
                    <TextBoldStyle modify={modify}>소개 영상</TextBoldStyle>
                    {modify ? (
                        // <UploadBox>
                        //     <CommonTextField placeholder={'파일을 업로드해 주세요.'} />
                        //     <input accept="*" id="button-file" type="file" style={{ display: 'none' }} />
                        //     <label htmlFor="button-file">
                        //         <CommonButton
                        //             component={'span'}
                        //             width={'102px'}
                        //             height={'44px'}
                        //             text={'파일찾기'}
                        //             background={'#2F3640'}
                        //             color={'#fff'}
                        //             fontWeight={700}
                        //             fontSize={'0.938rem'}
                        //             disabled={false}
                        //         />
                        //     </label>
                        // </UploadBox>
                        <ModifyBoxMargin>
                            <CommonTextField placeholder={'유튜브 url 주소를 입력해 주세요.'} />
                        </ModifyBoxMargin>
                    ) : (
                        <VideoBox>
                            <IconButtonStyle disableRipple>
                                <VideoPlayIcon />
                            </IconButtonStyle>
                        </VideoBox>
                    )}
                </Box>

                <Box>
                    <TextBoldStyle modify={modify}>자기소개</TextBoldStyle>
                    {modify ? (
                        <ModifyBox>
                            <CommonTextarea minRows={10} maxRows={10} placeholder={'강사 소개를 자유롭게 입력해 주세요. (최대 1000자)'} />
                        </ModifyBox>
                    ) : (
                        <TextStyle>
                            학세계적인 신경과학 및 의학 연구 기관 중 하나인 포르투갈 샴팔리마우드 연구재단 과학자를 중심으로 한 연구팀이
                            살아있기는 하지만 기능적으로 변형된 신경세포인 ‘좀비 뉴런’을 우연히 발견했다. 연구팀은 좀비 뉴런과 연관된 등반
                            섬유의 활동이 연상 학습에 절대적으로 필요하다는 것을 밝혀냈다. 이 연구 결과는 신경과학 분야 국제 학술지 ‘네이처
                            신경과학’ 4월 2일 자에 실렸다.
                        </TextStyle>
                    )}
                </Box>
                <FlexEnd>
                    {modify ? (
                        <Flex sx={{ '& button:first-child': { marginRight: '16px' } }}>
                            <CommonButton
                                width={'120px'}
                                height={'44px'}
                                text={'취소'}
                                background={'#fff'}
                                border={'#CBCBCB'}
                                color={'#111'}
                                fontWeight={700}
                                fontSize={'1.125rem'}
                                onClick={handleCloseModify}
                                disabled={false}
                            />
                            <CommonButton
                                width={'180px'}
                                height={'44px'}
                                text={'저장'}
                                background={'#2F3640'}
                                color={'#fff'}
                                fontWeight={700}
                                fontSize={'1.125rem'}
                                disabled={false}
                            />
                        </Flex>
                    ) : (
                        <CommonButton
                            width={'180px'}
                            height={'44px'}
                            text={'강사 정보 수정'}
                            background={'#2F3640'}
                            color={'#fff'}
                            fontWeight={700}
                            fontSize={'1.125rem'}
                            onClick={handleClickModify}
                            disabled={false}
                        />
                    )}
                </FlexEnd>
            </BoxStyle>
        </Container>
    );
}

export default TeacherInformationComponent;
