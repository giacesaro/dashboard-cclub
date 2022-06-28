import React, { Fragment } from 'react';
import { Box, Button, Card, Grid, Typography } from '@mui/material';
import '../../CSS/Home.css';
import '../../CSS/Dashboard.css';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { useSelector } from 'react-redux';

function BenefitsStatus(props) {
    const listBenefits = [
        {'title':'Referral program', 'subtitle':'Welcome, elitè member!', 'info':'', 'stato':true},
        {'title':'Giveaway access', 'subtitle':'Welcome, elitè member!', 'info':'', 'stato':true},
        {'title':'Presale access', 'subtitle':'Welcome, elitè member!', 'info':'', 'stato':true},
        {'title':'NFTs airdrop', 'subtitle':'Welcome, elitè member!', 'info':'', 'stato':true},
        {'title':'Metaverse access', 'subtitle':'Welcome, elitè member!', 'info':'', 'stato':true},
        {'title':'Fixed earnings', 'subtitle':'Welcome, elitè member!', 'info':'', 'stato':true},
    ];

    return (
        <Fragment>
            <Typography variant='h2' className={'text-left !text-3xl h-6 !font-normal !leading-9 font-Baloo !mb-8 ' + props.colorDark}>
                Benefits status
            </Typography>
            {listBenefits.map(benefit => (
                <Card className='box-border !rounded-2xl bg-card !shadow-none !mb-4' sx={{ height: { xs: 'initial', md: 80 } }}>
                    <Grid container>
                        <Grid item xs={4} md={6} lg={4} className='text-left !mt-6 ' sx={{ ml: { xs: 2, md: 0 } }}>
                            <Typography variant='h5' className='text-left font-Baloo' sx={{ lineHeight: { xs: 0.8, md: 0.9 } }}>
                                {benefit.title}
                            </Typography>
                            <Typography variant='body2' className='text-left font-Roboto !leading-4 !text-xs pt-1'>
                                {benefit.subtitle}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} md={6} lg={2} className='text-left !mt-6'>
                            <AccessTimeFilledIcon />
                        </Grid>
                        <Grid item xs={3} md={6} lg={4} className='text-right !mt-6 !pr-10'>
                            <Button variant='outlined' className='!rounded-md font-Roboto !text-sm border-my-black color-my-black !border-2 !font-bold' disabled={benefit.stato}>
                                Active
                            </Button>
                        </Grid>
                    </Grid>
                </Card>
            ))}
        </Fragment>
    );
}

export default BenefitsStatus;
