import React from 'react';
import { Card, Grid, Typography } from '@mui/material';
import '../../CSS/Home.css';
import '../../CSS/Dashboard.css';
import { useWeb3React } from '@web3-react/core';

function SimpleNumberTextCard(props) {
    const { active } = useWeb3React();
    return (
        <Card className='box-border h-24 !rounded-2xl bg-card !shadow-none'>
            <Grid container>
                <Grid item xs={6} md={6} lg={6}>
                    <Typography className='!text-6xl h-24 !font-normal line-102p mt-22px !ml-8 font-openSans-extrabold'>
                        {active ? props.number : 0}
                    </Typography>
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <Typography variant='body1' className='font-openSans-light !text-lg !font-medium' sx={{mt: {xs: 3, xl: 4.5}, ml: {xs: 1, xl: 0}}}>
                        {props.text}
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    );
}

export default SimpleNumberTextCard;
