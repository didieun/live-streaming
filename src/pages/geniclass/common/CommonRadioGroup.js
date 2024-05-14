import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { ReactComponent as RadioIcon } from '../../../assets/images/RadioIcon.svg';
import { ReactComponent as UnRadioIcon } from '../../../assets/images/UnRadioIcon.svg';
import { FormControlBox } from './styled/CommonStyle';

function CommonRadioGroup(props) {
    const { iconSize, handleChange, value, valueList, fontSize, row = true } = props;

    return (
        <FormControlBox iconSize={iconSize} fontSize={fontSize}>
            <RadioGroup
                aria-labelledby="radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
                row={row}
            >
                {valueList.map((list, i) => (
                    <FormControlLabel
                        key={i}
                        value={list.value}
                        // disabled={true}
                        control={<Radio icon={<UnRadioIcon />} checkedIcon={<RadioIcon />} disableRipple />}
                        label={list.label}
                    />
                ))}
            </RadioGroup>
        </FormControlBox>
    );
}

CommonRadioGroup.propTypes = {
    iconSize: PropTypes.number,
    handleChange: PropTypes.func,
    value: PropTypes.string,
    valueList: PropTypes.array,
    fontSize: PropTypes.string,
    row: PropTypes.bool
};

export default CommonRadioGroup;
