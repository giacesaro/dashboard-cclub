import React, { Fragment, useState } from 'react';
import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material';
import '../../CSS/Home.css';
import '../../CSS/Dashboard.css';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

function News() {
    const [list, setList] = useState([1]);
    return (
        <Fragment>
            <Typography variant='h2' className='text-left !text-3xl h-6 !font-normal !leading-9 font-Baloo' sx={{mt: {xs: 0, md: 2}}}>
                News
            </Typography>
            <Typography variant='h3' className='text-left !text-xl h-10 !font-normal line-57p !mt-4 font-Baloo'>
                All News
            </Typography>
            {list.map(news => (
                <Card className='box-border !rounded-2xl bg-card !shadow-none !mb-4'  sx={{height: {xs: 'initial', md: 80}}}>
                    <Grid container>
                        <Grid item xs={2} md={2} lg={2} className='mt-10n'>
                            <Box
                                component="img"
                                alt="Type"
                                src="/images/btc.png"
                                sx={{height: {xs: 'initial', md: 112}, mt: {xs: 2.5, md: 0}, ml: {xs: 1, md: 0}}}
                            />
                        </Grid>
                        <Grid item xs={4} md={6} lg={4} className='text-left !mt-6 ' sx={{ml: {xs: 2, md: 0}}}>
                            <Typography variant='h5' className='text-left font-Baloo' sx={{lineHeight: {xs: 0.8, md: 0.9}}}>
                                Bitcoin collapse
                            </Typography>
                            <Typography variant='body2' className='text-left font-Roboto !leading-4 !text-xs pt-1'>
                                by C-Club
                            </Typography>
                        </Grid>
                        <Grid item xs={2} md={6} lg={2} className='text-left !mt-6'>
                            <AccessTimeFilledIcon/>
                            <Typography variant='overline' className='text-left font-Baloo !text-sm !mt-2' sx={{ml: {xs: 0, md: 0.5}}}>
                                3min
                            </Typography>
                        </Grid>
                        <Grid item xs={3} md={6} lg={4} className='text-right !mt-6 !pr-10'>
                            <Button variant='outlined' className='!rounded-md font-Roboto !text-sm border-my-black color-my-black !border-2 !font-bold'>
                                READ
                            </Button>
                        </Grid>
                    </Grid>
                </Card>
            ))}
            <Card className='box-border !rounded-2xl bg-card !shadow-none !mb-4' sx={{height: {xs: 'initial', md: 80}}}>
                    <Grid container>
                        <Grid item xs={2} md={2} lg={2} className='mt-10n'>
                            <Box
                                component="img"
                                alt="Type"
                                src="/images/Elite-icon.png"
                                sx={{height: {xs: 'initial', md: 112}, mt: {xs: 2.5, md: 0}, ml: {xs: 1, md: 0}}}
                            />
                        </Grid>
                        <Grid item xs={4} md={6} lg={4} className='text-left !mt-6 ' sx={{ml: {xs: 2, md: 0}}}>
                            <Typography variant='h5' className='text-left font-Baloo' sx={{lineHeight: {xs: 0.8, md: 0.9}}}>
                                100 passes sold!
                            </Typography>
                            <Typography variant='body2' className='text-left font-Roboto !leading-4 !text-xs pt-1'>
                                by C-Club
                            </Typography>
                        </Grid>
                        <Grid item xs={2} md={6} lg={2} className='text-left !mt-6'>
                            <AccessTimeFilledIcon/>
                            <Typography variant='overline' className='text-left font-Baloo !text-sm !mt-2' sx={{ml: {xs: 0, md: 0.5}}}>
                            2.5min
                            </Typography>
                        </Grid>
                        <Grid item xs={3} md={6} lg={4} className='text-right !mt-6 !pr-10'>
                            <Button variant='outlined' className='!rounded-md font-Roboto !text-sm border-my-black color-my-black !border-2 !font-bold'>
                                READ
                            </Button>
                        </Grid>
                    </Grid>
                </Card>
        </Fragment>
    );
}

export default News;
