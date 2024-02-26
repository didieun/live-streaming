import { styled } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';
import React from 'react';
import { ReactComponent as HandPointing } from '../../../../assets/images/HandPointing.svg';
import { ReactComponent as PenLineIcon } from '../../../../assets/images/PenLineIcon.svg';
import { ReactComponent as ColorCheckIcon } from '../../../../assets/images/ColorCheckIcon.svg';
import { ReactComponent as PenEraserIcon } from '../../../../assets/images/PenEraserIcon.svg';
import { ReactComponent as HighlighterIcon } from '../../../../assets/images/HighlighterIcon.svg';
import { ReactComponent as PenSelectIcon } from '../../../../assets/images/PenSelectIcon.svg';
import PaletteArrow from '../../../../assets/images/PaletteArrow.svg';
import { useViewSize } from '../../../../store';

const PenBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 25,
    left: 25,
    borderRadius: 6,
    background: '#fff',
    boxSizing: 'border-box',
    border: '1px solid #a4a4a4'
}));

const PenBoxIn = styled(Box)(({ theme }) => ({
    position: 'relative',
    padding: 10,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}));

const PenSubPosition = styled(Box)(({ theme, isMd }) => ({
    position: 'absolute',
    top: isMd ? 75 : 60,
    right: isMd ? 187 : -200
}));

const PenSubPositionColor = styled(PenSubPosition)(({ theme, isMd }) => ({
    top: isMd ? 75 : 105,
    right: isMd ? 128 : -200
}));

const PenBoxSub = styled(Box)(({ theme, isMd }) => ({
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
        left: isMd ? '50%' : -9,
        top: isMd ? -9 : '50%',
        transform: isMd ? 'translate(-50%, 0) rotate( 90deg) ' : 'translate(0, -50%)',
        content: "''",
        width: 9,
        height: 10,
        backgroundImage: `url(${PaletteArrow})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
    }
}));

const PenSelectBox = styled(Box)(({ theme }) => ({
    width: 26,
    height: 26,
    boxSizing: 'border-box',
    cursor: 'pointer',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid transparent',
    '&:hover': {
        border: '2px solid #4dbdcf'
    }
}));

const LineSelectInBox = styled(Box)(({ theme, size }) => ({
    width: 20,
    height: 20,
    boxSizing: 'border-box',
    borderRadius: '50%',
    background: '#dddddd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)',
    '&::after': {
        content: "''",
        width: size,
        height: size,
        background: '#2F3640',
        borderRadius: '50%'
    }
}));

const ColorSelectInBox = styled(Box)(({ theme, color }) => ({
    width: 16,
    height: 16,
    boxSizing: 'border-box',
    borderRadius: '50%',
    background: color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
}));

const PenIconButton = styled(IconButton)(({ theme, select, color, isMd }) => ({
    '&.MuiButtonBase-root': {
        width: 40,
        height: 40,
        padding: 0,
        margin: isMd ? '0 10px' : '10px 0',
        borderRadius: '50%',
        background: select ? 'rgba(228, 228, 228, 0.60)' : 'transparent',
        '&:hover': {
            background: 'rgba(228, 228, 228, 0.60)'
        },
        '& .highlighter-color, .pen-select-color': {
            fill: color ? color : '#000000'
        },
        '& .eraser-color': {
            fill: select ? '#F2C336' : 'transparent'
        }
    }
}));

const PenColorIconButton = styled(PenIconButton)(({ theme, color, border }) => ({
    '&.MuiButtonBase-root': {
        '& div': {
            width: 30,
            height: 30,
            background: color ? color : '#000000',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: border ? '1px solid #D9D9D9' : '0',
            boxSizing: 'border-box'
        }
    }
}));

const Palette = () => {
    const { isSmall, isMd } = useViewSize();
    const [line, setLine] = React.useState(false);
    const [handPoint, setHandPoint] = React.useState(false);
    const [color, setColor] = React.useState(false);
    const [selectColor, setSelectColor] = React.useState('#000');
    const [eraser, setEraser] = React.useState(false);
    const [highlighter, setHighlighter] = React.useState(false);
    const [pen, setPen] = React.useState(false);
    const lineList = [
        { size: 1 },
        { size: 2 },
        { size: 3 },
        { size: 4 },
        { size: 5 },
        { size: 6 },
        { size: 7 },
        { size: 8 },
        { size: 9 },
        { size: 10 }
    ];
    const colorList = [
        { color: '#000' },
        { color: '#404040' },
        { color: '#7f7f7f' },
        { color: '#bfbfbf' },
        { color: '#fff' },
        { color: '#f2441d' },
        { color: '#f29d1d' },
        { color: '#ffff54' },
        { color: '#bcfd53' },
        { color: '#76b856' },
        { color: '#2e6df6' },
        { color: '#2548ac' },
        { color: '#0f0372' },
        { color: '#961dc0' },
        { color: '#5b2f8b' }
    ];

    const handleClickHandPoint = () => {
        setHandPoint(!line);
        setLine(false);
        setColor(false);
        setEraser(false);
        setPen(false);
        setHighlighter(false);
    };

    const handleClickLine = () => {
        setLine(!line);
        setColor(false);
        setEraser(false);
    };

    const handleClickColor = () => {
        setLine(false);
        setColor(!color);
        setEraser(false);
    };

    const handleClickEraser = () => {
        setLine(false);
        setColor(false);
        setEraser(!eraser);
        setPen(false);
        setHighlighter(false);
    };

    const handleClickHighlighter = () => {
        setEraser(false);
        setPen(false);
        setHighlighter(!highlighter);
    };

    const handleClickPen = () => {
        setEraser(false);
        setPen(!pen);
        setHighlighter(false);
    };

    const handleClickSelectColor = (value) => {
        setSelectColor(value);
    };

    return (
        <PenBox sx={{ display: isSmall ? 'none' : isMd ? '' : '' }}>
            <PenBoxIn sx={{ flexDirection: isMd ? 'row' : 'column' }}>
                <PenIconButton isMd={isMd} select={handPoint} onClick={handleClickHandPoint} disableRipple>
                    <HandPointing />
                </PenIconButton>

                <PenIconButton isMd={isMd} select={line} onClick={handleClickLine} disableRipple>
                    <PenLineIcon />
                </PenIconButton>
                <PenColorIconButton
                    isMd={isMd}
                    select={color}
                    color={selectColor}
                    border={selectColor === '#fff'}
                    onClick={handleClickColor}
                    disableRipple
                >
                    <Box>
                        <ColorCheckIcon />
                    </Box>
                </PenColorIconButton>
                <PenIconButton isMd={isMd} select={eraser} onClick={handleClickEraser} disableRipple>
                    <PenEraserIcon />
                </PenIconButton>
                <PenIconButton isMd={isMd} select={highlighter} color={selectColor} onClick={handleClickHighlighter} disableRipple>
                    <HighlighterIcon />
                </PenIconButton>
                <PenIconButton isMd={isMd} select={pen} color={selectColor} onClick={handleClickPen} disableRipple>
                    <PenSelectIcon />
                </PenIconButton>
            </PenBoxIn>
            {line && (
                <PenSubPosition isMd={isMd}>
                    <PenBoxSub isMd={isMd}>
                        {lineList.map((list, i) => (
                            <PenSelectBox key={i}>
                                <LineSelectInBox size={list.size} />
                            </PenSelectBox>
                        ))}
                    </PenBoxSub>
                </PenSubPosition>
            )}

            {color && (
                <PenSubPositionColor isMd={isMd}>
                    <PenBoxSub isMd={isMd}>
                        {colorList.map((list, i) => (
                            <PenSelectBox key={i} onClick={() => handleClickSelectColor(list.color)}>
                                <ColorSelectInBox color={list.color} />
                            </PenSelectBox>
                        ))}
                    </PenBoxSub>
                </PenSubPositionColor>
            )}
        </PenBox>
    );
};

export default Palette;
