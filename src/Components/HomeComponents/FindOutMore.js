import React, { Fragment } from 'react';
import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material';
import '../../CSS/Home.css';
import '../../CSS/Dashboard.css';

function FindOutMore() {
    return (
        <Card className='box-border h-40 !rounded-2xl bg-card !shadow-none'>
            <Grid container>
                <Grid item xs={7} md={8} lg={8}>
                    <Typography variant='h1' className='text-left h-10 !font-normal !ml-8 !mt-6 font-Baloo' sx={{fontSize: {xs: 25, md: 36}, lineHeight: {xs: 1, md: 1}}}>
                        Find Out More!
                    </Typography>
                    <Typography variant='body1' className='text-left !ml-8 font-Roboto !font-normal !text-base !leading-6'>
                        Discover all our passes!
                    </Typography>
                    <Typography variant='body1' className='text-left !ml-8 font-Roboto !font-normal !text-base !leading-6'>
                        <Button variant='contained' className='bg-my-black !rounded-md font-Roboto !text-sm !text-left !mt-4'>
                            BUY YOUR PASS
                        </Button>
                    </Typography>
                </Grid>
                <Grid item xs={5} md={4} lg={4}>
                    <Box
                        component="img"
                        alt="Logo"
                        src="/images/logo-buy-pass.png"
                        sx={{height: {xs: 150, md: 176}}}
                    />
                </Grid>
            </Grid>
        </Card>
    );
}

export default FindOutMore;
