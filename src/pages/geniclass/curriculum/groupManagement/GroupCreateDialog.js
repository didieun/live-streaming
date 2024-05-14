import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Checkbox, InputAdornment, Typography } from '@mui/material';
import { Flex, FormControlLabelCheckBox, IconButtonStyle, LightTooltip, SearchInput } from '../../common/styled/CommonStyle';
import CommonTextField from '../../common/CommonTextField';
import ClearIcon from '../../../../assets/images/ClearIcon.svg';
import { ReactComponent as SearchIcon } from '../../../../assets/images/SearchIcon.svg';
import { ReactComponent as UnCheckedIcon } from '../../../../assets/images/UnCheckedIcon.svg';
import { ReactComponent as WhiteUnCheckedIcon } from '../../../../assets/images/WhiteUnCheckedIcon.svg';
import { ReactComponent as CheckedIcon } from '../../../../assets/images/CheckedIcon.svg';
import TestProfileImage from '../../../../assets/images/TestProfileImage.jpeg';
import CommonSelect from '../../common/CommonSelect';

const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.125rem',
        color: '#333',
        fontWeight: 500,
        letterSpacing: '-0.9px',
        marginRight: 14
    }
}));

const TextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.125rem',
        color: '#111',
        fontWeight: 400,
        letterSpacing: '-0.36px',
        marginRight: 10
    }
}));

const NumberBox = styled(Box)(({ theme }) => ({
    minWidth: 64,
    height: 28,
    padding: '0 8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    background: '#EBF2FF',
    '& p': {
        fontSize: '0.875rem',
        color: '#3190FF',
        fontWeight: 500,
        letterSpacing: '-0.28px'
    }
}));

const SearchInputStyle = styled(SearchInput)(({ theme }) => ({
    '& .MuiInputBase-root': {
        background: '#f5f6fa'
    },
    '& input': {
        fontSize: '0.875rem',
        color: '#737373',
        letterSpacing: '-0.5px',
        '&::placeholder': {
            color: '#737373!important'
        }
    },
    '& input[type="search"]::-webkit-search-cancel-button': {
        WebkitAppearance: 'none',
        height: 24,
        width: 24,
        borderRadius: '50em',
        background: `url(${ClearIcon})`,
        backgroundSize: 'contain',
        opacity: '0',
        pointerEvents: 'none',
        cursor: 'pointer'
    },
    '& input[type="search"]:focus::-webkit-search-cancel-button': {
        opacity: 1,
        pointerEvents: 'all'
    },
    '& .MuiOutlinedInput-notchedOutline': {
        height: 49,
        top: '-6px !important',
        left: '-1px !important',
        border: '1px solid #f5f6fa !important'
    },
    '& .MuiInputBase-root.Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #3190FF !important'
        }
    }
}));

const ListBox = styled(Box)(({ theme }) => ({
    width: 420,
    minHeight: 200,
    maxHeight: 300,
    marginTop: 30,
    overflowY: 'auto',
    borderTop: '1px solid #F5F5F5',
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
        background: '#E8E8E8',
        marginTop: 5,
        marginBottom: 5
    }
}));

const ListInBox = styled(Flex)(({ theme }) => ({
    borderBottom: '1px solid #F5F5F5',
    padding: '10px 15px'
    // display: 'grid',
    // gridTemplateColumns: '29px 53px 1fr 5fr'
}));

const AvatarBox = styled(Box)(({ theme }) => ({
    width: 25,
    height: 25,
    borderRadius: '50%',
    boxSizing: 'border-box',
    overflow: 'hidden',
    marginRight: 14,
    marginLeft: 14,
    '& img': {
        width: '100%',
        objectFit: 'cover'
    }
}));

const NameText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        maxWidth: 100,
        fontSize: '0.875rem',
        color: '#333',
        fontWeight: 400,
        letterSpacing: '-0.5px',
        textAlign: 'left'
    }
}));

const EmailText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        maxWidth: 190,
        fontSize: '0.813rem',
        color: '#737373',
        fontWeight: 400,
        letterSpacing: '-0.5px',
        textAlign: 'left',
        marginLeft: 8
    }
}));

const CourseBox = styled(Flex)(({ theme }) => ({
    marginTop: 30,
    '& .MuiFormControl-root': {
        minWidth: '342px !important'
    }
}));

const GroupCreateDialog = (props) => {
    const [filter, setFilter] = React.useState(0);
    const menuList = [{ text: '분류1' }, { text: '분류2' }];
    const groups = [
        {
            checked: false,
            disable: false,
            profile: TestProfileImage,
            name: '김지안',
            email: 'dkjfls1486@gmail.com'
        },
        {
            checked: false,
            disable: false,
            profile: TestProfileImage,
            name: '김지안',
            email: 'dkjfls1486@gmail.com'
        },
        {
            checked: false,
            disable: true,
            profile: TestProfileImage,
            name: '김지안',
            email: 'dkjfls1486@gmail.com'
        },
        {
            checked: false,
            disable: false,
            profile: TestProfileImage,
            name: '김지안',
            email: 'dkjfls1486@gmail.com'
        }
    ];

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    return (
        <Box>
            <Flex>
                <TitleText>그룹 이름</TitleText>
                <CommonTextField placeholder={'그룹 이름 입력 (최대 10자)'} width={'342px'} />
            </Flex>

            <CourseBox>
                <TitleText>교육 과정</TitleText>
                <CommonSelect filter={filter} handleChangeFilter={handleChangeFilter} menuList={menuList} />
            </CourseBox>

            <Flex sx={{ margin: '30px 0' }}>
                <TextStyle>그룹에 포함할 학생을 선택해 주세요.</TextStyle>
                <NumberBox>
                    <Typography>96</Typography>
                </NumberBox>
            </Flex>

            <SearchInputStyle
                type="search"
                label=""
                variant="outlined"
                placeholder={'학생 이름 검색'}
                width={'420px'}
                height={'42px'}
                borderRadius={'999px'}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButtonStyle sx={{ width: 18, height: 18 }} disableRipple>
                                <SearchIcon />
                            </IconButtonStyle>
                        </InputAdornment>
                    )
                }}
            />
            <ListBox>
                {groups.map((list, i) => (
                    <ListInBox key={i}>
                        {list.disable ? (
                            <Box sx={{ width: '29px', height: '25px' }}>
                                <UnCheckedIcon />
                            </Box>
                        ) : (
                            <FormControlLabelCheckBox
                                control={<Checkbox checkedIcon={<CheckedIcon />} icon={<WhiteUnCheckedIcon />} disableRipple />}
                                label=""
                            />
                        )}

                        <AvatarBox>
                            <img src={list.profile} alt={'프로필 이미지'} />
                        </AvatarBox>
                        <LightTooltip title={list.name}>
                            <NameText>{list.name}</NameText>
                        </LightTooltip>
                        <LightTooltip title={list.email}>
                            <EmailText>{list.email}</EmailText>
                        </LightTooltip>
                    </ListInBox>
                ))}
            </ListBox>
        </Box>
    );
};

GroupCreateDialog.propTypes = {};

export default GroupCreateDialog;
