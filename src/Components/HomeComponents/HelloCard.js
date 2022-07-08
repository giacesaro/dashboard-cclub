import React from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';
import '../../CSS/Home.css';
import '../../CSS/Dashboard.css';
import '../../CSS/Passes.css';

function HelloCard(props) {
    var hello = '';
    var widthImgXsXl = 0;
    var widthImgMd = 0;
    switch (props.type) {
        case 'home':
            hello = 'Hello!';
            widthImgXsXl = 200;
            widthImgMd = 200;
            break;
        default:
            hello = 'Hello gentleman!';
            widthImgXsXl = 340;
            widthImgMd = 320;
            break;
    }
    return (
        <Card className='box-border h-40 !rounded-2xl bg-card !shadow-none'>
            <Grid container>
                <Grid item xs={6} md={6} lg={6} xl={6}>
                    <Typography variant='h1' className={'text-left h-10 !font-normal line-57p !ml-8 font-openSans-extrabold ' + props.colorDark}
                        sx={{ fontSize: { xs: 30, lg: 27, xl: 36 }, mt: { xs: 5.5, lg: 4, xl: 5.5 } }}
                    >
                        {hello}
                    </Typography>
                    <Typography variant='body1' className='text-left !ml-8 font-openSans-light !font-normal !text-xl !leading-6'
                        sx={{ mt: { xs: 0.5, lg: 1 } }}>
                        Welcome, <span className={props.colorPass + ' !font-bold font-openSans-light'}>{props.type}</span> member!
                    </Typography>
                </Grid>
                <Grid item xs={6} md={6} lg={6} xl={6}>
                    <Box
                        component="img"
                        className='!top-0 !h-56'
                        alt="Logo"
                        src={props.image}
                        sx={{ position: { xs: 'initial', md: 'absolute' }, width: { xs: widthImgXsXl, md: widthImgMd, xl: widthImgXsXl } }}
                    />
                </Grid>
            </Grid>
        </Card>
    );
}

export default HelloCard;
