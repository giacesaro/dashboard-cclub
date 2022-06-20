import React, { Fragment } from 'react';
import { Box, Card, CardMedia, Grid, Typography } from '@mui/material';
import '../../CSS/Home.css';
import '../../CSS/Dashboard.css';

function HelloCard() {
    return (
        <Card className='box-border h-40 !rounded-2xl bg-card !shadow-none'>
            <Grid container>
                <Grid item xs={6} md={6} lg={6}>
                    <Typography variant='h1' className='text-left !text-4xl h-10 !font-normal line-57p !ml-8 !mt-11 font-Baloo'>
                        Hello!
                    </Typography>
                    <Typography variant='body1' className='text-left !ml-8 font-Roboto !font-normal !text-base !leading-6'>
                        It’s good to see you again.
                    </Typography>
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                    <Box
                        component="img"
                        className='absolute left-650 w-340 top-40n'
                        alt="Logo"
                        src="/images/c-club-card-hello.png"
                        sx={{position: {xs: 'initial', md: 'absolute'}}}
                    />
                </Grid>
            </Grid>
        </Card>
    );
}

export default HelloCard;
