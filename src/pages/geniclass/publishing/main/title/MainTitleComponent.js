import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Flex, FlexCenter, FlexSpace, IconButtonStyle } from '../../common/styled/CommonStyle';
import { ReactComponent as FolderBackIcon } from '../../../../assets/images/FolderBackIcon.svg';

const TitleStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        color: '#333',
        fontSize: '1.375rem',
        fontWeight: 700,
        letterSpacing: '-0.5px'
    }
}));

const ButtonStyle = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        minWidth: 111,
        height: 35,
        borderRadius: 4,
        background: '#2F3640',
        padding: '0 8px',
        fontSize: '1rem',
        color: '#fff',
        fontWeight: 500,
        letterSpacing: '-0.5px',
        '&:hover': {
            background: '#2F3640'
        },
        '&.Mui-disabled': {
            background: '#BBB',
            border: '1px solid #BBB',
            color: '#FFF'
        }
    }
}));

const IconButton = styled(IconButtonStyle)(({ theme, iconSize }) => ({
    '&.MuiButtonBase-root': {
        width: iconSize ? iconSize : '32px',
        height: iconSize ? iconSize : '32px',
        marginRight: 24,
        '& svg': {
            width: iconSize ? iconSize : '32px',
            height: iconSize ? iconSize : '32px'
        }
    }
}));

const CircularProgressStyle = styled(CircularProgress)(({ theme }) => ({
    color: '#fff',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-12px',
    marginLeft: '-12px'
}));

const BackButton = styled(Button)(({ theme }) => ({
    '&.MuiButtonBase-root': {
        minWidth: 20,
        minHeight: 20,
        padding: 0,
        background: 'transparent',
        '& p': {
            fontSize: '1.125rem',
            color: '#737373',
            fontWeight: 400,
            marginLeft: 8
        },
        '&:hover': {
            background: 'transparent'
        }
    }
}));

const LineStyle = styled(Box)(({ theme }) => ({
    width: 1,
    height: 21,
    background: '#737373',
    margin: '0 8px'
}));

const FolderTextStyle = styled(Typography)(({ theme }) => ({
    '&.MuiTypography-root': {
        fontSize: '1.125rem',
        color: '#737373',
        fontWeight: 700
    }
}));

const MainTitleComponent = (props) => {
    const { folder = false, title, onClick, iconOnClick, disabled, actions = true, btnText, file = false, iconSize, icon } = props;
    return (
        <FlexSpace>
            {folder ? (
                <FlexCenter>
                    <BackButton disableRipple>
                        <FolderBackIcon />
                        <Typography>이전</Typography>
                    </BackButton>
                    <LineStyle />
                    <FolderTextStyle>새폴더 이름</FolderTextStyle>
                </FlexCenter>
            ) : (
                <TitleStyle>{title}</TitleStyle>
            )}

            <Flex>
                {icon && (
                    <IconButton onClick={iconOnClick} iconSize={iconSize} disableRipple>
                        {icon}
                    </IconButton>
                )}
                {actions && (
                    <Box>
                        {file ? (
                            <>
                                <input
                                    id="upload-button-file"
                                    type="file"
                                    accept=".txt, .pdf, .hwp, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .gif, .jpg, .jpeg, .png, .mp4, .zip"
                                    style={{ display: 'none' }}
                                />
                                <Box sx={{ position: 'relative' }}>
                                    <ButtonStyle component={'label'} htmlFor={'upload-button-file'} disabled={disabled} disableRipple>
                                        {btnText}
                                    </ButtonStyle>
                                    {/*파일 업로드중일때*/}
                                    {/*<CircularProgressStyle size={24} />*/}
                                </Box>
                            </>
                        ) : (
                            <ButtonStyle onClick={onClick} disabled={disabled} disableRipple>
                                {btnText}
                            </ButtonStyle>
                        )}
                    </Box>
                )}
            </Flex>
        </FlexSpace>
    );
};

MainTitleComponent.propTypes = {
    folder: PropTypes.bool,
    title: PropTypes.string,
    onClick: PropTypes.func,
    iconOnClick: PropTypes.func,
    disabled: PropTypes.bool,
    actions: PropTypes.bool,
    btnText: PropTypes.string,
    file: PropTypes.bool,
    iconSize: PropTypes.string,
    icon: PropTypes.element
};

export default MainTitleComponent;
