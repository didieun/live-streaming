import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled/macro';
import { Box, Checkbox, Popover, Typography } from '@mui/material';
import { FlexSpace, Flex, IconButtonStyle, FlexCenter } from '../../../../common/styled/CommonStyle';
import { ReactComponent as SearchIcon } from '../../../../../../assets/images/SearchIcon.svg';
import { ReactComponent as ArrowUpIcon } from '../../../../../../assets/images/ArrowUpIcon.svg';
import { ReactComponent as ArrowIcon } from '../../../../../../assets/images/ArrowIcon.svg';
import { ReactComponent as WhiteUnCheckedIcon } from '../../../../../../assets/images/WhiteUnCheckedIcon.svg';
import { ReactComponent as CheckedIcon } from '../../../../../../assets/images/CheckedIcon.svg';
import TestProfileImage from '../../../../../../assets/images/TestProfileImage.jpeg';
import CommonSearch from '../../../../common/CommonSearch';
import PaletteArrow from '../../../../../../assets/images/PaletteArrow.svg';

const TitleBox = styled(FlexSpace)(({ theme }) => ({
    marginBottom: '15px',
    paddingRight: '12px',
    boxSizing: 'border-box'
}));

const TitleText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.125rem',
        color: '#000',
        fontWeight: 500,
        marginRight: 16
    }
}));

const NumberBox = styled(Box)(({ theme }) => ({
    minWidth: 64,
    height: 28,
    borderRadius: '100px',
    background: '#EBF2FF',
    padding: '0 8px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& p': {
        fontSize: '0.875rem',
        color: '#4D9FFF',
        fontWeight: 500,
        letterSpacing: '-0.28px'
    }
}));

const ListBoxScroll = styled(Box)(({ theme }) => ({
    width: '100%',
    paddingRight: '7px',
    boxSizing: 'border-box',
    height: 'calc(100% - 34px - 15px)',
    overflowY: 'auto',
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
}));

const ListGroupBox = styled(FlexSpace)(({ theme, background }) => ({
    width: '100%',
    height: 45,
    background: background ? `rgba(${background}, 0.1)` : `rgba(46, 109, 246, 0.1)`,
    boxSizing: 'border-box',
    padding: '0 15px 0 13px',
    borderTop: '1px solid #F5F5F5',
    borderBottom: '1px solid #F5F5F5',
    '& p': {
        fontSize: '0.875rem',
        // color: background ? `rgba(${background}, 1)` : `rgba(46, 109, 246, 1)`,
        color: '#333',
        fontWeight: 600,
        letterSpacing: '-0.1px',
        marginLeft: 15,
        marginRight: 4
    }
}));

const CheckBox = styled(Checkbox)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        padding: 0
    }
}));

const ColorChip = styled(FlexSpace)(({ theme, background }) => ({
    width: 10,
    height: 10,
    borderRadius: '50%',
    background: background ? `rgba(${background}, 1)` : `rgba(46, 109, 246, 1)`,
    cursor: 'pointer'
}));

const ListItemsStyle = styled(ListGroupBox)(({ theme }) => ({
    borderTop: 0,
    background: '#fff',
    justifyContent: 'flex-start'
}));

const AvatarBox = styled(Box)(({ theme }) => ({
    width: 25,
    height: 25,
    borderRadius: '50%',
    boxSizing: 'border-box',
    overflow: 'hidden',
    marginRight: 8,
    marginLeft: 15,
    '& img': {
        width: '100%',
        objectFit: 'cover'
    }
}));

const UserNameText = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        width: 190,
        color: '#161616',
        fontWeight: 400,
        marginLeft: 0
    }
}));

const PopoverBox = styled(Popover)(({ theme }) => ({
    '& .MuiPaper-root': {
        minWidth: 123,
        boxShadow: 'none',
        borderRadius: 0,
        background: 'transparent',
        border: 0,
        paddingLeft: 15
    }
}));

const PositionColorBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    borderRadius: 3,
    padding: 10,
    boxSizing: 'border-box',
    background: '#fff',
    border: '1px solid rgba(164, 164, 164, 0.5)',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '4px 8px',
    '&::before': {
        position: 'absolute',
        left: -9,
        top: '50%',
        transform: 'translate(0, -50%)',
        content: "''",
        width: 9,
        height: 10,
        backgroundImage: `url(${PaletteArrow})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
    }
}));

const ColorSelectBox = styled(Box)(({ theme, select }) => ({
    width: 26,
    height: 26,
    boxSizing: 'border-box',
    cursor: 'pointer',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: select ? '2px solid #4dbdcf' : '2px solid transparent',
    '&:hover': {
        border: '2px solid #4dbdcf'
    }
}));

const ColorSelectInBox = styled(Box)(({ theme, color }) => ({
    width: 16,
    height: 16,
    boxSizing: 'border-box',
    borderRadius: '50%',
    background: `rgba(${color}, 1)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
}));

const groups = [
    {
        index: 0,
        color: '46, 109, 246',
        title: '1학년 1반',
        userList: [
            { id: 1, image: TestProfileImage, name: 'Ariana' },
            { id: 2, image: TestProfileImage, name: 'Ariana' },
            { id: 3, image: TestProfileImage, name: 'Ariana' }
        ]
    },
    {
        index: 1,
        color: '46, 109, 246',
        title: '2학년 1반',
        userList: [
            { id: 1, image: TestProfileImage, name: 'Ariana' },
            { id: 2, image: TestProfileImage, name: 'Ariana' },
            { id: 3, image: TestProfileImage, name: 'Ariana' }
        ]
    }
];

function UserListComponent() {
    const [checkItems, setCheckItems] = React.useState([]);
    const [search, setSearch] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectColor, setSelectColor] = React.useState('46, 109, 246');
    const [select, setSelect] = React.useState(0);
    const [sort, setSort] = React.useState(false);
    const [sortValue, setSortValue] = React.useState(-1);

    const [groupList, setGroupList] = useState(groups);

    const colorList = [
        { color: '0, 0, 0' },
        { color: '64, 64, 64' },
        { color: '127, 127, 127' },
        { color: '191, 191, 191' },
        { color: '255, 255, 255' },
        { color: '242, 68, 29' },
        { color: '242, 157, 29' },
        { color: '255, 255, 84' },
        { color: '188, 253, 83' },
        { color: '118, 184, 86' },
        { color: '46, 109, 246' },
        { color: '37,72,172' },
        { color: '15, 3, 114' },
        { color: '150, 29, 192' },
        { color: '91, 47, 139' }
    ];

    const handleSingleCheck = (checked, id) => {
        if (checked) {
            setCheckItems((prev) => [...prev, id]);
        } else {
            setCheckItems(checkItems.filter((el) => el !== id));
        }
    };

    const handleAllCheck = (checked, index) => {
        if (checked) {
            const idArray = [];
            groupList[index].userList.forEach((el) => idArray.push(el.id));
            setCheckItems(idArray);
        } else {
            setCheckItems([]);
        }
    };

    const handleClickSearch = () => {
        setSearch(!search);
    };

    const handleClickSort = (value) => {
        setSort(!sort);
        setSortValue(value);
    };

    const handleClickColorPalette = (event, index) => {
        setSelect(index);
        setSelectColor(groupList[index].color);
        setAnchorEl(event.currentTarget);
    };

    const handleCloseColorPalette = () => {
        setAnchorEl(null);
    };

    const handleClickSelectColor = (value) => {
        const idx = groupList.findIndex((group) => group.index === select);
        if (idx > -1) {
            groupList[idx].color = value;
            setGroupList(groupList);
            setSelectColor(value);
        }
        setAnchorEl(null);
    };

    const paletteOpen = Boolean(anchorEl);
    const paletteId = paletteOpen ? 'simple-popover' : undefined;

    return (
        <Box sx={{ height: '100%' }}>
            {search ? (
                <TitleBox>
                    <IconButtonStyle
                        onClick={handleClickSearch}
                        sx={{
                            width: 24,
                            height: 24,
                            marginRight: '5px',
                            '& path': { fill: '#343330' }
                        }}
                        disableRipple
                    >
                        <ArrowIcon style={{ transform: 'rotate( 90deg )' }} />
                    </IconButtonStyle>
                    <CommonSearch width={'242px'} placeholder={'학생이름을 검색해보세요.'} />
                </TitleBox>
            ) : (
                <TitleBox sx={{ height: '34px' }}>
                    <Flex>
                        <TitleText>코칭대상</TitleText>
                        <NumberBox>
                            <Typography>96</Typography>
                        </NumberBox>
                    </Flex>
                    <IconButtonStyle sx={{ width: 24, height: 24 }} onClick={handleClickSearch} disableRipple>
                        <SearchIcon />
                    </IconButtonStyle>
                </TitleBox>
            )}
            <ListBoxScroll>
                {groupList &&
                    groupList.map((list) => (
                        <Box key={list.index}>
                            <ListGroupBox background={list.color}>
                                <FlexCenter>
                                    <CheckBox
                                        onChange={(e) => handleAllCheck(e.target.checked, list.index)}
                                        checked={checkItems.length === groupList[list.index].userList.length ? true : false}
                                        checkedIcon={<CheckedIcon />}
                                        icon={<WhiteUnCheckedIcon />}
                                        disableRipple
                                    />
                                    <Typography>{list.title}</Typography>
                                    <IconButtonStyle
                                        sx={{ width: 16, height: 16 }}
                                        onClick={() => handleClickSort(list.index)}
                                        disableRipple
                                    >
                                        {sort && sortValue === list.index ? (
                                            <ArrowUpIcon style={{ transform: 'scaleY(-1)' }} />
                                        ) : (
                                            <ArrowUpIcon />
                                        )}
                                    </IconButtonStyle>
                                </FlexCenter>
                                <ColorChip background={list.color} onClick={(event) => handleClickColorPalette(event, list.index)} />
                            </ListGroupBox>
                            {list.userList.map((list) => (
                                <ListItemsStyle key={list.id}>
                                    <CheckBox
                                        onChange={(e) => handleSingleCheck(e.target.checked, list.id)}
                                        checked={checkItems.includes(list.id) ? true : false}
                                        checkedIcon={<CheckedIcon />}
                                        icon={<WhiteUnCheckedIcon />}
                                        disableRipple
                                    />
                                    <Flex>
                                        <AvatarBox>
                                            <img src={list.image} alt={'프로필 이미지'} />
                                        </AvatarBox>
                                        <UserNameText>{list.name}</UserNameText>
                                    </Flex>
                                </ListItemsStyle>
                            ))}
                        </Box>
                    ))}

                <PopoverBox
                    id={paletteId}
                    open={paletteOpen}
                    anchorEl={anchorEl}
                    onClose={handleCloseColorPalette}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'left'
                    }}
                >
                    <PositionColorBox>
                        {colorList.map((list, i) => (
                            <ColorSelectBox key={i} select={list.color === selectColor} onClick={() => handleClickSelectColor(list.color)}>
                                <ColorSelectInBox color={list.color} />
                            </ColorSelectBox>
                        ))}
                    </PositionColorBox>
                </PopoverBox>
            </ListBoxScroll>
        </Box>
    );
}

export default UserListComponent;
