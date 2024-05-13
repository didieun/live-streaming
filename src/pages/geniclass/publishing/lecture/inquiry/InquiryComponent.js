import React from 'react';
import { Box, Button } from '@mui/material';
import { useViewSize } from '../../../../store';
import PropTypes from 'prop-types';
import MainInquiryList from '../../main/inquiry/MainInquiryList';
import MainMemberInquiryList from '../../main/inquiry/MainMemberInquiryList';
import { FilterSelectBox, FlexEnd } from '../../common/styled/CommonStyle';
import CommonSelect from '../../common/CommonSelect';
import WritingDialogComponent from '../../../../views/dialog/WritingDialogComponent';
import CommonDialog from '../../common/CommonDialog';
import { styled } from '@mui/material/styles';
import CommonButton from '../../common/CommonButton';
import { FormattedMessage } from 'react-intl';
import MainEmptyComponent from '../../main/empty/MainEmptyComponent';

const Root = styled(Box)(({ theme, layout, isLg }) => ({
    width: layout ? '100%' : isLg ? '100%' : 1380,
    margin: '0 auto',
    paddingBottom: 50
}));

const BoxMargin = styled(FlexEnd)(({ theme }) => ({
    marginBottom: 14
}));

const InquiryComponent = (props) => {
    const { isLg } = useViewSize();
    const { layout } = props;
    const [isLeader, setIsLeader] = React.useState(true);
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [filter, setFilter] = React.useState(0);
    const inquiryList = [{ text: '전체' }, { text: '답변완료' }, { text: '미답변' }];

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    const handleClickDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <Root layout={layout} isLg={isLg}>
            {!isLeader && (
                <BoxMargin>
                    <CommonButton
                        width={'111px'}
                        height={'35px'}
                        text={'글쓰기'}
                        background={'#2F3640'}
                        color={'#fff'}
                        fontWeight={500}
                        fontSize={'1rem'}
                        onClick={handleClickDialog}
                        disabled={false}
                    />
                </BoxMargin>
            )}

            <BoxMargin>
                <FilterSelectBox>
                    <CommonSelect filter={filter} handleChangeFilter={handleChangeFilter} menuList={inquiryList} />
                </FilterSelectBox>
            </BoxMargin>

            {isLeader ? <MainInquiryList /> : <MainMemberInquiryList />}

            {/* 문의가 없을때 */}
            {/*<MainEmptyComponent emptyText={<FormattedMessage id="course_inquiry_history_management_msg2" />} />*/}

            <CommonDialog
                open={dialogOpen}
                onClose={handleCloseDialog}
                title={'글쓰기'}
                children={<WritingDialogComponent />}
                actionBtn1={false}
                btnText2={'게시'}
            />
        </Root>
    );
};

InquiryComponent.propTypes = {
    layout: PropTypes.bool
};

export default InquiryComponent;
