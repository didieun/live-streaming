import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import CommonRadio from '../../common/CommonRadio';
import CommonTextField from '../../common/CommonTextField';
import { MarginBottom25 } from '../../common/styled/CommonStyle';
import CommonButton from '../../common/CommonButton';
import PropTypes from 'prop-types';
import { useViewSize } from '../../../../store';
import CommonSelect from '../../common/CommonSelect';
import { ReactComponent as SearchIcon } from '../../../../assets/images/SearchIcon.svg';
import ContentsComponent from './contents/ContentsComponent';

const Container = styled(Box)(({ theme, isLg, open }) => ({
    width: open ? (isLg ? '100%' : 1280) : isLg ? 'calc(100% - 60px)' : 1280,
    // minHeight: 'calc(100vh - 100px)',
    padding: isLg ? '25px 16px' : '25px 0',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: open ? '0 auto' : isLg ? '0 0 0 60px' : '0 auto'
    // overflowY: 'auto'
}));

export const RadioBox = styled(MarginBottom25)(({ theme, contentsWidth }) => ({
    '& .MuiFormControlLabel-root': {
        margin: '0 15px 0 0 !important',
        '&:last-child': {
            marginTop: contentsWidth < 500 ? '15px !important' : 0,
            marginRight: '0 !important'
        }
    }
}));

export const SelectBox = styled(Box)(({ theme, isSd }) => ({
    width: '100%',
    display: 'grid',
    gridTemplateColumns: isSd ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: 15,
    marginBottom: 15,
    '& .MuiSelect-select': {
        height: '57px !important'
    }
}));

export const SearchBox = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
    '& .MuiInputBase-root': {
        height: '54px !important'
    },
    '& .MuiSelect-select': {
        height: '57px !important'
    }
}));

export const SelectBoxWidth = styled(Box)(({ theme }) => ({
    width: 458
}));

const contentsMaxHeight = 'calc(100vh - 100px - 50px - 25px - 25px - 57px - 15px - 57px - 25px - 56px)';
const contentsHeight = 'calc(100vh - 100px - 50px - 25px - 25px - 57px - 25px - 56px)';
function ContentRegistration(props) {
    const { isLg, isSd } = useViewSize();
    const { open, contentsWidth } = props;
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
            <RadioBox contentsWidth={contentsWidth}>
                <CommonRadio handleChange={handleChange} value={value} valueList={valueList} fontSize={'1rem'} />
            </RadioBox>

            {value === '0' && (
                <>
                    <SelectBox isSd={isSd}>
                        <CommonSelect filter={filter} handleChangeFilter={handleChangeFilter} menuList={menuList} />
                        <CommonSelect filter={filter} handleChangeFilter={handleChangeFilter} menuList={menuList} />
                        <CommonSelect filter={filter} handleChangeFilter={handleChangeFilter} menuList={menuList} />
                        <CommonSelect filter={filter} handleChangeFilter={handleChangeFilter} menuList={menuList} />
                    </SelectBox>
                    <SearchBox>
                        <CommonTextField placeholder={'콘텐츠를 직접 검색할수 있습니다.'} width={'calc(100% - 174px - 15px)'} />
                        <CommonButton
                            width={'174px'}
                            height={'57px'}
                            text={'검색'}
                            background={'#4D9FFF'}
                            color={'#fff'}
                            fontWeight={600}
                            borderRadius={'4px'}
                            fontSize={'1.125rem'}
                            disabled={false}
                            startIcon={<SearchIcon />}
                        />
                    </SearchBox>
                </>
            )}

            {value === '1' && (
                <SearchBox sx={{ flexDirection: contentsWidth < 1280 ? 'column' : 'row' }} contentsWidth={contentsWidth}>
                    <SelectBoxWidth contentsWidth={contentsWidth}>
                        <CommonSelect filter={folder} handleChangeFilter={handleChangeFolderFilter} menuList={folderList} />
                    </SelectBoxWidth>
                    <Box>
                        <CommonTextField placeholder={'콘텐츠를 직접 검색할수 있습니다.'} width={'624px'} />
                        <CommonButton
                            width={'174px'}
                            height={'57px'}
                            text={'검색'}
                            background={'#4D9FFF'}
                            color={'#fff'}
                            fontWeight={600}
                            borderRadius={'4px'}
                            fontSize={'1.125rem'}
                            disabled={false}
                            startIcon={<SearchIcon />}
                        />
                    </Box>
                </SearchBox>
            )}

            {(value === '2' || value === '3') && (
                <SearchBox>
                    <CommonTextField
                        placeholder={
                            value === '2' ? '사이트 URL 주소를 입력하세요. ex) https://www.google.com' : 'PDF공유 URL 주소를 입력하세요.'
                        }
                        width={'calc(100% - 174px - 15px)'}
                    />
                    <CommonButton
                        width={'174px'}
                        height={'57px'}
                        text={'담기'}
                        background={'#4D9FFF'}
                        color={'#fff'}
                        fontWeight={600}
                        borderRadius={'4px'}
                        fontSize={'1.125rem'}
                        disabled={false}
                    />
                </SearchBox>
            )}
            <ContentsComponent
                radioValue={value === '0'}
                contentsMaxHeight={contentsMaxHeight}
                contentsHeight={contentsHeight}
                contentsWidth={contentsWidth}
            />
        </Container>
    );
}

ContentRegistration.propTypes = {
    open: PropTypes.bool,
    contentsWidth: PropTypes.object
};

export default ContentRegistration;
