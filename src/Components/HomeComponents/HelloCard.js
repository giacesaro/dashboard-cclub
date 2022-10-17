import React from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';
import '../../CSS/Home.css';
import '../../CSS/Dashboard.css';
import '../../CSS/Passes.css';
import { getTextShadow } from '../../Utils/Constants';

function HelloCard(props) {
    var hello = '';
    var widthImgXsXl = 0;
    var widthImgMd = 0;
    var topCss = '';
    var heightImg = ''
    var textShadow = getTextShadow(props.type);
    switch (props.type) {
        case 'home':
            hello = 'Hello!';
            widthImgXsXl = 224;
            widthImgMd = 224;
            topCss = '!top-10';
            heightImg = 176;
            break;
        default:
            hello = 'Hello gentleman!';
            widthImgXsXl = 340;
            widthImgMd = 320;
            topCss = '!top-0';
            heightImg = 160;
            break;
    }
    return (
        <Card className='box-border h-40 !rounded-2xl bg-card !shadow-none'>
            <Grid container>
                <Grid item xs={6} md={6} lg={6} xl={6}>
                    <Typography variant='h1' className={'text-left h-10 !font-normal font-openSans-extrabold colore-titoli ' + props.colorDark + ' ' + textShadow}
                        sx={{
                            fontSize: { xs: 25, lg: 27, xl: 34 }, mt: { xs: props.type === 'home'? 6 : 3, lg: 4, xl: 5.5 }, mb: { xs: props.type === 'home'? 0 : 3.5, md: 0 },
                            lineHeight: { xs: '30px', md: '57px' }, ml: { xs: 2, md: 4 }
                        }}
                    >
                        {hello}
                    </Typography>
                    <Typography
                        variant='body1'
                        className='text-left font-openSans-light !font-normal !text-xl !leading-6 w-385 colore-titoli'
                        sx={{ mt: { xs: 2, lg: 1 }, display: { xs: 'contents', md: 'block' }, ml: {xs: 8, md: 4} }}
                    >
                        Welcome, <span className={props.colorPass + ' !font-bold font-openSans-light colore-titoli'}>{props.type}</span> member!
                    </Typography>
                </Grid>
                <Grid item xs={6} md={6} lg={6} xl={6}>
                    <Box
                        component="img"
                        className={topCss}
                        alt="Logo"
                        src={props.image}
                        sx={{ position: { xs: 'initial', md: 'absolute' }, width: { xs: widthImgXsXl, md: widthImgMd, xl: widthImgXsXl }, height: { xs: heightImg, md: 224 } }}
                    />
                </Grid>
            </Grid>
        </Card>
    );
}

export default HelloCard;
