import { useNavigate } from 'react-router';

import { Button, Stack, Typography } from '@mui/material';

import PublishingRoutes from '../../../routes/PublishingRoutes';
import AnimateButton from '../../../components/@extended/AnimateButton';
import MainCard from '../../../components/MainCard';

const publishingRoutesChildren = PublishingRoutes.children;

// const LogPrefix = '[Publishing Default]';

const Default = () => {
    const navigate = useNavigate();
    return (
        <MainCard sx={{ width: '100%' }}>
            <Stack spacing={4} direction={'column'} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h1">Publishing Home Route</Typography>
                {publishingRoutesChildren
                    ?.filter((child) => child.path !== '/publishing')
                    ?.map((child) => (
                        <AnimateButton key={child.path} type={'scale'}>
                            <Button disableElevation variant="contained" onClick={() => navigate(child.path)}>
                                {child.title}
                            </Button>
                        </AnimateButton>
                    ))}
            </Stack>
        </MainCard>
    );
};

export default Default;
