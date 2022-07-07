import React from 'react';
import { Box, Button, Card, Grid, Typography } from '@mui/material';
import '../../CSS/Home.css';
import '../../CSS/Dashboard.css';
import { useDispatch } from 'react-redux';
import { setSection } from '../../Redux/Sidebar/SidebarAction';

function FindOutMore() {
    const dispatch = useDispatch();

    const handleChangeSection = (type) => {
        dispatch(setSection(type));
    }

    return (
        <Card className='box-border h-40 !rounded-2xl bg-card !shadow-none'>
            <Grid container>
                <Grid item xs={7} md={7} lg={7}>
                    <Typography variant='h1' className='text-left h-10 !font-normal !ml-8 !mt-6 font-openSans-extrabold' sx={{ fontSize: { xs: 25, xl: 36 }, lineHeight: { xs: 1, md: 1 } }}>
                        Find Out More!
                    </Typography>
                    <Typography variant='body1' className='text-left !ml-8 ffont-openSans-light !font-normal !text-base !leading-6'>
                        Discover all our passes!
                    </Typography>
                    <Typography variant='body1' className='text-left !ml-8 font-openSans-light !font-normal !text-base !leading-6'>
                        <Button variant='contained' className='bg-my-black !rounded-md font-openSans-light !text-sm !text-left !mt-4' onClick={() => handleChangeSection('buying')}>
                            BUY YOUR PASS
                        </Button>
                    </Typography>
                </Grid>
                <Grid item xs={5} md={5} lg={5}>
                    <Box
                        component="img"
                        alt="Logo"
                        src="/images/logo-buy-pass.png"
                        sx={{ height: { xs: 150, md: 176 } }}
                    />
                </Grid>
            </Grid>
        </Card>
    );
}

export default FindOutMore;
