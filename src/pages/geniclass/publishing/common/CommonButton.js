import React from 'react';
import { TextStyle, ButtonStyle } from './styled/CommonStyle';
import PropTypes from 'prop-types';
import MainCard from '../../../components/MainCard';

function CommonButton(props) {
    const { text, width, height, background, color, border, borderRadius, fontSize, disabled, onClick, hoverBk, hoverColor, startIcon } =
        props;

    return (
        <ButtonStyle
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
            disableRipple
        >
            <TextStyle color={color} fontSize={fontSize}>
                {text}
            </TextStyle>
        </ButtonStyle>
    );
}

CommonButton.propTypes = {
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
    hoverColor: PropTypes.string
};

export default CommonButton;
