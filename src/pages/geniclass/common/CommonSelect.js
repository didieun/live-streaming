import React from 'react';
import PropTypes from 'prop-types';
import { Select, Box } from '@mui/material';
import { ReactComponent as ArrowIcon } from '../../../assets/images/ArrowIcon.svg';
import { Menu, SelectFormControlBox } from './styled/CommonStyle';

function CommonSelect(props) {
    const { filter, handleChangeFilter, menuList, disabled } = props;

    return (
        <SelectFormControlBox variant="outlined">
            <Select
                id="filter"
                value={filter}
                onChange={handleChangeFilter}
                disabled={disabled}
                IconComponent={(props) => (
                    <Box>
                        <ArrowIcon {...props} />
                    </Box>
                )}
                MenuProps={{
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left'
                    },
                    transformOrigin: {
                        vertical: 'top',
                        horizontal: 'left'
                    },
                    PaperProps: {
                        sx: {
                            '&.MuiPaper-root': {
                                boxShadow: '0 4px 15px 0 rgba(51, 51, 51, 0.15)',
                                border: '0',
                                borderRadius: '4px',
                                boxSizing: 'border-box',
                                marginTop: '4px',
                                '& ul': {
                                    padding: '4px 4px'
                                }
                            }
                        }
                    }
                }}
            >
                {menuList.map((list, i) => (
                    <Menu key={i} value={i} disableRipple>
                        {list.text}
                    </Menu>
                ))}
            </Select>
        </SelectFormControlBox>
    );
}

CommonSelect.propTypes = {
    filter: PropTypes.number,
    handleChangeFilter: PropTypes.func,
    menuList: PropTypes.object,
    disabled: PropTypes.bool
};

export default CommonSelect;
