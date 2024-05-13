import React from 'react';
import PropTypes from 'prop-types';
import { IconButtonStyle, ZoomInZoomOut, SliderBox } from './styled/CommonStyle';
import { ReactComponent as PlusCircleIcon } from '../../../assets/images/PlusCircleIcon.svg';
import { ReactComponent as MinusCircleIcon } from '../../../assets/images/MinusCircleIcon.svg';

function valuetext(value) {
    return `${value}`;
}

function CommonZoomInZoomOut(props) {
    const { width, height } = props;

    return (
        <ZoomInZoomOut>
            <IconButtonStyle sx={{ width: 24, height: 24 }} disableRipple>
                <PlusCircleIcon />
            </IconButtonStyle>
            <SliderBox
                width={width}
                height={height}
                aria-label="Temperature"
                defaultValue={100}
                getAriaValueText={valuetext}
                valueLabelDisplay="on"
                shiftStep={30}
                step={10}
                marks
                min={25}
                max={300}
            />
            <IconButtonStyle sx={{ width: 24, height: 24 }} disableRipple>
                <MinusCircleIcon />
            </IconButtonStyle>
        </ZoomInZoomOut>
    );
}

CommonZoomInZoomOut.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string
};

export default CommonZoomInZoomOut;
