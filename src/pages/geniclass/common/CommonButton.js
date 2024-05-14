import React from 'react';
import { TextStyle, ButtonStyle } from './styled/CommonStyle';
import PropTypes from 'prop-types';

function CommonButton(props) {
    const {
        component,
        text,
        width,
        height,
        background,
        color,
        border,
        borderRadius,
        fontSize,
        disabled,
        onClick,
        hoverBk,
        hoverColor,
        startIcon,
        endIcon,
        fontWeight,
        error
    } = props;

    return (
        <ButtonStyle
            component={component ? component : 'button'}
            width={width}
            height={height}
            background={background}
            border={border}
            borderRadius={borderRadius}
            hoverBk={hoverBk}
            hoverColor={hoverColor}
            onClick={onClick}
            disabled={disabled}
            startIcon={startIcon}
            endIcon={endIcon}
            error={error}
            disableRipple
        >
            <TextStyle color={color} fontSize={fontSize} fontWeight={fontWeight}>
                {text}
            </TextStyle>
        </ButtonStyle>
    );
}

CommonButton.propTypes = {
    component: PropTypes.string,
    text: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    background: PropTypes.string,
    color: PropTypes.string,
    border: PropTypes.string,
    borderRadius: PropTypes.string,
    fontSize: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    hoverBk: PropTypes.string,
    hoverColor: PropTypes.string,
    fontWeight: PropTypes.number,
    error: PropTypes.string
};

export default CommonButton;
