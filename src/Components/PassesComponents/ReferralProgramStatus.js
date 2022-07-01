import React, { Fragment } from 'react';
import { Card, Grid, Typography } from '@mui/material';
import '../../CSS/Home.css';
import '../../CSS/Dashboard.css';

function ReferralProgramStatus(props) {
    let titles = ['Code', 'Level', 'Referral Used', 'ETH earned'];
    return (
        <Fragment>
            <Typography variant='h2' className={'text-left !text-3xl h-6 !mt-10 !font-normal !leading-9 font-openSans-extrabold !mb-4 ' + props.colorDark} sx={{ mt: { xs: 0, md: 2 } }}>
                Referral Program Status
            </Typography>
            <Grid container spacing={2}>
                {titles.map(title => (
                    <Grid item xs={6} md={6} lg={5.5} key={title}>
                        <Card className='box-border h-14 !rounded-2xl bg-card !shadow-none'>
                            <Grid container>
                                <Grid item xs={6} md={6} lg={9}>
                                    <Typography variant='body1' className='font-openSans-light !text-left !text-3xl !ml-3 !mt-3'>
                                        {title}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} md={6} lg={3}>
                                    <Typography className={'!text-3xl h-24 !font-normal line-102p !mr-8 !mt-3 font-openSans-extrabold !text-right ' + props.colorDark}>
                                        12
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Fragment>
    );
}

export default ReferralProgramStatus;
