import React, { Fragment } from 'react';
import { Button, Card, Grid, Typography } from '@mui/material';
import '../../CSS/Home.css';
import '../../CSS/Dashboard.css';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Box } from '@mui/system';

function MyPassCard() {
    return (
        <Grid container>
            <Grid item xs={12} md={10} lg={10}>
                <Card className='box-border !rounded-2xl bg-card !shadow-none' sx={{height: {xs: 'initial', md: 80}}}>
                    <Grid container>
                        <Grid item xs={4} md={2} lg={2} className='mt-10n'>
                            <Box
                                component="img"
                                alt="Type"
                                src="/images/member-icon.png"
                                sx={{height: {xs: 100, md: 112}}}
                            />
                        </Grid>
                        <Grid item xs={8} md={6} lg={4} className='text-left !mt-6'>
                            <Typography variant='body1' className='text-left !text-4xl h-10 !font-normal line-57p font-Baloo'>
                                Member Pass
                            </Typography>
                        </Grid>
                        <Grid item xs={3} md={6} lg={2} className='text-left !mt-6'/>
                        <Grid item xs={6} md={6} lg={4} className='text-right !pr-10' sx={{mt: {xs: 1, md: 3}, mb: {xs: 2, md: 0}}}>
                            <Button variant='contained' className='bg-my-black !rounded-md font-Roboto !text-sm'>
                                CONTINUE
                            </Button>
                        </Grid>
                        <Grid item xs={3} md={6} lg={2} className='text-left !mt-6' display={{xs:'initial', md:'none'}}/>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={6} md={6} lg={1} className='self-center' sx={{textAlign: {xs: 'right', md: 'initial'}}}>
                <Button>
                    <ArrowCircleLeftIcon className='!text-5xl arrow-button' />
                </Button>
            </Grid>
            <Grid item xs={6} md={6} lg={1} className='self-center' sx={{textAlign: {xs: 'left', md: 'initial'}}}>
                <Button>
                    <ArrowCircleRightIcon className='!text-5xl arrow-button' />
                </Button>
            </Grid>
        </Grid>
    );
}

export default MyPassCard;
