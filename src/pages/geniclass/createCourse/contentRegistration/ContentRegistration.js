import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import CommonRadioGroup from '../../common/CommonRadioGroup';
import CommonTextField from '../../common/CommonTextField';
import { Flex, MarginBottom25 } from '../../common/styled/CommonStyle';
import CommonButton from '../../common/CommonButton';
import PropTypes from 'prop-types';
import { useViewSize } from '../../../../store';
import CommonSelect from '../../common/CommonSelect';
import { ReactComponent as SearchIcon } from '../../../../assets/images/SearchIcon.svg';
import ContentsComponent from './contents/ContentsComponent';
import { headerHeight } from '../CreateACourse';

const Container = styled(Box)(({ theme, isLg, open }) => ({
    width: open ? (isLg ? '100%' : 1280) : isLg ? 'calc(100% - 60px)' : 1280,
    padding: isLg ? '25px 16px' : '25px 0',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: open ? '0 auto' : isLg ? '0 0 0 60px' : '0 auto'
}));

export const RadioBox = styled(MarginBottom25)(({ theme, open, isSl, isSmall }) => ({
    '& .MuiFormGroup-root': {
        width: '100%'
    },
    '& .MuiFormControlLabel-root': {
        width: open ? (isSl ? 'calc(50% - 15px)' : '') : isSmall ? 'calc(50% - 15px)' : '',
        margin: '0 15px 0 0 !important',
        '&:nth-child(3)': {
            marginTop: open ? (isSl ? '15px !important' : 0) : isSmall ? '15px !important' : 0
        },
        '&:nth-child(4)': {
            marginTop: open ? (isSl ? '15px !important' : 0) : isSmall ? '15px !important' : 0
        }
    }
}));

export const SelectBox = styled(Box)(({ theme, isSl }) => ({
    width: '100%',
    display: 'grid',
    gridTemplateColumns: isSl ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: 15,
    marginBottom: 15
}));

export const SearchBox = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
    '& svg': {
        '& .search': {
            fill: '#Fff'
        }
    },
    '& button:hover': {
        '& svg': {
            '& .search': {
                fill: '#Fff'
            }
        }
    }
}));

export const SelectBoxWidth = styled(Box)(({ theme, isSl }) => ({
    width: isSl ? '100%' : 458
}));

function ContentRegistration(props) {
    const { isLg, isSl, isSmall } = useViewSize();
    const { open } = props;
    const [value, setValue] = React.useState('0');
    const [filter, setFilter] = React.useState(0);
    const [folder, setFolder] = React.useState(0);
    const menuList = [{ text: '분류1' }, { text: '분류2' }];
    const folderList = [{ text: '전체폴더' }, { text: '폴더1' }];
    const valueList = [
        {
            label: '기본 콘텐츠',
            value: '0'
        },
        {
            label: 'My콘텐츠',
            value: '1'
        },
        {
            label: '사이트URL',
            value: '2'
        },
        {
            label: 'PDF공유 URL',
            value: '3'
        }
    ];

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    const handleChangeFolderFilter = (event) => {
        setFolder(event.target.value);
    };

    return (
        <Container isLg={isLg} open={open}>
            <RadioBox isSl={isSl} isSmall={isSmall} open={open}>
                <CommonRadioGroup handleChange={handleChange} value={value} valueList={valueList} fontSize={'1rem'} />
            </RadioBox>

            {value === '0' && (
                <>
                    <SelectBox isSl={isSl}>
                        <CommonSelect filter={filter} handleChangeFilter={handleChangeFilter} menuList={menuList} />
                        <CommonSelect filter={filter} handleChangeFilter={handleChangeFilter} menuList={menuList} />
                        <CommonSelect filter={filter} handleChangeFilter={handleChangeFilter} menuList={menuList} />
                        <CommonSelect filter={filter} handleChangeFilter={handleChangeFilter} menuList={menuList} />
                    </SelectBox>
                    <SearchBox
                        sx={{
                            '& .MuiTextField-root': {
                                marginRight: '15px'
                            }
                        }}
                    >
                        <CommonTextField placeholder={'콘텐츠를 직접 검색할수 있습니다.'} width={'calc(100% - 137px - 15px)'} />
                        <CommonButton
                            width={'137px'}
                            height={'44px'}
                            text={'검색'}
                            background={'#2f3640'}
                            color={'#fff'}
                            fontSize={'1rem'}
                            disabled={false}
                            startIcon={<SearchIcon />}
                        />
                    </SearchBox>
                </>
            )}

            {value === '1' && (
                <SearchBox
                    sx={{
                        flexDirection: isLg ? 'column' : 'row',
                        alignItems: isLg ? 'flex-start' : 'center',
                        '& .MuiTextField-root': {
                            marginRight: '15px'
                        }
                    }}
                >
                    <SelectBoxWidth isSl={isSl}>
                        <CommonSelect filter={folder} handleChangeFilter={handleChangeFolderFilter} menuList={folderList} />
                    </SelectBoxWidth>
                    <Flex sx={{ width: isLg ? '100%' : 'calc(100% - 456px - 15px)', marginTop: isLg ? '15px' : '0' }}>
                        <CommonTextField placeholder={'콘텐츠를 직접 검색할수 있습니다.'} width={'calc(100% - 137px - 15px)'} />
                        <CommonButton
                            width={'137px'}
                            height={'44px'}
                            text={'검색'}
                            background={'#2f3640'}
                            color={'#fff'}
                            fontSize={'1rem'}
                            disabled={false}
                            startIcon={<SearchIcon />}
                        />
                    </Flex>
                </SearchBox>
            )}

            {(value === '2' || value === '3') && (
                <SearchBox
                    sx={{
                        '& .MuiTextField-root': {
                            marginRight: '15px'
                        }
                    }}
                >
                    <CommonTextField
                        placeholder={
                            value === '2' ? '사이트 URL 주소를 입력하세요. ex) https://www.google.com' : 'PDF공유 URL 주소를 입력하세요.'
                        }
                        width={'calc(100% - 137px - 15px)'}
                    />
                    <CommonButton
                        width={'137px'}
                        height={'44px'}
                        text={'담기'}
                        background={'#2f3640'}
                        color={'#fff'}
                        fontSize={'1rem'}
                        disabled={false}
                    />
                </SearchBox>
            )}
            <ContentsComponent radioValue={value === '0'} open={open} />
        </Container>
    );
}

ContentRegistration.propTypes = {
    open: PropTypes.bool
};

export default ContentRegistration;
