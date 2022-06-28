import React, { Fragment } from 'react';
import { Grid, Typography } from '@mui/material';
import '../../CSS/Home.css';
import '../../CSS/Dashboard.css';
import ApexChart from './Charts';

function Statistics(props) {
    return (
        <Fragment>
            <Typography variant='h2' className='text-left !text-3xl h-9 !font-normal !leading-9 !mt-4 !mb-4 font-Baloo'>
                Passes Sold
            </Typography>
            <Grid container>
                <Grid item xs={12} md={11} lg={11}>
                    <ApexChart />
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default Statistics;