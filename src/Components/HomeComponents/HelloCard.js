import React from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';
import '../../CSS/Home.css';
import '../../CSS/Dashboard.css';
import '../../CSS/Passes.css';

function HelloCard(props) {
    var hello = props.type === 'home' ? 'Hello!' : 'Hello gentleman!';
    return (
        <Card className='box-border h-40 !rounded-2xl bg-card !shadow-none'>
            <Grid container>
                <Grid item xs={6} md={6} lg={6}>
                    <Typography variant='h1' className={'text-left !text-4xl h-10 !font-normal line-57p !ml-8 !mt-11 font-Baloo ' + props.colorDark} >
                        {hello}
                    </Typography>
                    <Typography variant='body1' className='text-left !ml-8 font-Roboto !font-normal !text-xl !leading-6'>
                        Welcome, <span className={props.colorPass + ' font-semibold'}>{props.type}</span> member!
                    </Typography>
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                    <Box
                        component="img"
                        className='w-340 !top-0 !h-56'
                        alt="Logo"
                        src={props.image}
                        sx={{position: {xs: 'initial', md: 'absolute'}}}
                    />
                </Grid>
            </Grid>
        </Card>
    );
}

export default HelloCard;
