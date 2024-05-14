import { styled } from '@mui/material/styles';
import React from 'react';
import { Stepper, Typography, Step, StepLabel, Box } from '@mui/material';
import PropTypes from 'prop-types';

const StepperBox = styled(Stepper)(({ theme }) => ({
    '&.MuiStepper-root': {
        '& .MuiStepLabel-root': {
            cursor: 'pointer',
            padding: 12,
            boxSizing: 'border-box'
        },
        '& .MuiStepLabel-iconContainer': {
            padding: 0,
            '&.Mui-active': {
                '& div': {
                    borderRadius: '50%',
                    background: '#3190FF !important'
                }
            },
            '&.Mui-completed': {
                '& div': {
                    borderRadius: '50%',
                    background: '#3190FF !important'
                }
            }
        },
        '& .MuiStepLabel-labelContainer': {
            '& .MuiStepLabel-label': {
                fontSize: '1rem',
                color: '#A7A7A7',
                fontWeight: 400,
                marginLeft: 16,
                '&.Mui-active': {
                    color: '#324054',
                    fontWeight: 500
                },
                '&.Mui-completed': {
                    color: '#324054',
                    fontWeight: 500
                }
            }
        },
        '& .MuiStepConnector-root': {
            marginLeft: 24,
            '& .MuiStepConnector-line': {
                borderColor: '#d9d9d9',
                minHeight: 26
            }
        }
    }
}));

const StepperIconBox = styled(Box)(({ theme }) => ({
    width: 25,
    height: 25,
    borderRadius: '50%',
    background: '#D9D9D9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& p': {
        fontSize: '1.125rem',
        color: '#fff',
        fontWeight: 400
    }
}));

function ColorStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: (
            <StepperIconBox>
                <Typography>1</Typography>
            </StepperIconBox>
        ),
        2: (
            <StepperIconBox>
                <Typography>2</Typography>
            </StepperIconBox>
        ),
        3: (
            <StepperIconBox>
                <Typography>3</Typography>
            </StepperIconBox>
        )
    };

    return (
        <Box ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </Box>
    );
}

ColorStepIcon.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    completed: PropTypes.bool,
    icon: PropTypes.node
};

const StepperComponent = (props) => {
    const { steps, activeStep, completed, handleActiveStep, setActiveStep } = props;
    console.log('[StepperComponent] : >>', steps);
    console.log('[StepperComponent] : >>', activeStep);
    console.log('[StepperComponent] : >>', completed[activeStep - 1]);
    return (
        <StepperBox nonLinear activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => {
                return (
                    <Step key={label} completed={completed[index]}>
                        <StepLabel
                            StepIconComponent={ColorStepIcon}
                            onClick={(e) => {
                                setActiveStep(steps.indexOf(label));
                            }}
                        >
                            {label}
                        </StepLabel>
                    </Step>
                );
            })}
        </StepperBox>
    );
};

StepperComponent.propTypes = {
    steps: PropTypes.array,
    activeStep: PropTypes.number,
    completed: PropTypes.object,
    handleActiveStep: PropTypes.func
};

export default StepperComponent;
