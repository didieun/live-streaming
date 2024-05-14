import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { useViewSize } from '../../../../store';
import React from 'react';
import CommonRadioGroup from '../../common/CommonRadioGroup';
import CommonSelect from '../../common/CommonSelect';
import View from '../view/View';
import CommonButton from '../../common/CommonButton';
import PropTypes from 'prop-types';

const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
}));

const SelectBox = styled(Box)(({ theme, isMSmall }) => ({
    display: 'flex',
    flexDirection: isMSmall ? 'column' : 'row',
    alignItems: 'center',
    '& .MuiFormControl-root': {
        minWidth: isMSmall ? '100%' : '255px !important',
        '&:last-child': {
            marginLeft: isMSmall ? 0 : 16,
            marginTop: isMSmall ? 16 : 0
        }
    },
    '& .MuiInputBase-root': {
        '& .MuiSelect-select': {}
    }
}));

const ControlBoxSpace = styled(Box)(({ theme, sort }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: sort ? 'space-between' : 'flex-end',
    margin: '25px 0'
}));

const ButtonBox = styled(Box)(({ theme, isSmall }) => ({
    display: isSmall ? 'none' : 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& .MuiButtonBase-root': {
        '&:last-child': {
            marginLeft: 10
        }
    }
}));

const Learning = (props) => {
    const { tabValue, sort } = props;
    const { isSmall, isMSmall } = useViewSize();
    const [filter, setFilter] = React.useState(0);
    const [nameFilter, setNameFilter] = React.useState(0);
    const menuList = [{ text: '수업 콘텐츠' }, { text: '이미지 콘텐츠' }];
    const nameMenuList = [{ text: '이미지명' }, { text: '이미지명1' }, { text: '이미지명2' }, { text: '이미지명3' }];

    const [value, setValue] = React.useState('전체');
    const valueList = [
        {
            label: '전체',
            value: '전체'
        },
        {
            label: '첨삭보기',
            value: '첨삭보기'
        },
        {
            label: '학생필기 보기',
            value: '학생필기 보기'
        }
    ];

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    const handleChangeNameFilter = (event) => {
        setNameFilter(event.target.value);
    };

    return (
        <Container>
            <SelectBox isMSmall={isMSmall}>
                <CommonSelect filter={filter} handleChangeFilter={handleChangeFilter} menuList={menuList} />

                <CommonSelect filter={nameFilter} handleChangeFilter={handleChangeNameFilter} menuList={nameMenuList} />
            </SelectBox>
            <ControlBoxSpace sort={sort}>
                {sort && <CommonRadioGroup handleChange={handleChange} value={value} valueList={valueList} />}

                <ButtonBox isSmall={isSmall}>
                    <CommonButton
                        width={'155px'}
                        height={'48px'}
                        text={'다운로드'}
                        background={'#fff'}
                        border={'#D5D4DC'}
                        hoverColor={'#fff'}
                        hoverBk={'#2F3640'}
                        color={'#737373'}
                        fontWeight={700}
                        borderRadius={'90px'}
                        fontSize={'1rem'}
                    />
                    <CommonButton
                        width={'155px'}
                        height={'48px'}
                        text={'첨삭 업로드'}
                        background={'#fff'}
                        border={'#D5D4DC'}
                        hoverColor={'#fff'}
                        hoverBk={'#2F3640'}
                        color={'#737373'}
                        fontWeight={700}
                        borderRadius={'90px'}
                        fontSize={'1rem'}
                    />
                </ButtonBox>
            </ControlBoxSpace>

            <View tabValue={tabValue} />
        </Container>
    );
};

Learning.propTypes = {
    tabValue: PropTypes.string,
    sort: PropTypes.bool
};

export default Learning;
