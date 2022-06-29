import React, { Fragment } from 'react';
import { Button, Card, Grid, Tooltip, Typography } from '@mui/material';
import '../../CSS/Dashboard.css';
import '../../CSS/Passes.css';
import InfoIcon from '@mui/icons-material/Info';

function BenefitsStatus(props) {
    const listBenefits = [
        { 'title': 'Referral program', 'subtitle': 'Welcome, elitè member!', 'info': '', 'disable': false },
        { 'title': 'Giveaway access', 'subtitle': 'Welcome, elitè member!', 'info': '', 'disable': true },
        { 'title': 'Presale access', 'subtitle': 'Welcome, elitè member!', 'info': '', 'disable': true },
        { 'title': 'NFTs airdrop', 'subtitle': 'Welcome, elitè member!', 'info': '', 'disable': false },
        { 'title': 'Metaverse access', 'subtitle': 'Welcome, elitè member!', 'info': '', 'disable': true },
        { 'title': 'Fixed earnings', 'subtitle': 'Welcome, elitè member!', 'info': '', 'disable': false },
    ];

    return (
        <Fragment>
            <Typography variant='h2' className={'text-left !text-3xl h-6 !font-normal !leading-9 font-Baloo !mb-8 ' + props.colorDark}>
                Benefits status
            </Typography>
            {listBenefits.map(benefit => (
                <Card className='box-border !rounded-2xl bg-card !shadow-none !mb-4' sx={{ height: { xs: 'initial', md: 70 } }}>
                    <Grid container>
                        <Grid item xs={4} md={6} lg={5.5} className='text-left !mt-2 !ml-4 '>
                            <Typography variant='h5' className='text-left font-Baloo !text-xl' sx={{ lineHeight: { xs: 0.8, md: 0.9 } }}>
                                {benefit.title}
                            </Typography>
                            <Typography variant='h6' className='text-left font-Roboto !leading-4 !text-lg pt-1'>
                                {benefit.subtitle}
                            </Typography>
                        </Grid>
                        <Grid item xs={3} md={6} lg={6} className='text-right self-center !mt-2.5'>
                            <Tooltip title="Add" placement="left">
                                <Button className='info-button'>
                                    <InfoIcon className='mr-6' sx={{color: props.colorTooltip}}/>
                                </Button>
                            </Tooltip>
                            <Button variant='contained' className={'!rounded-lg font-Roboto !text-lg !font-bold h-12 w-3/6 !text-white ' + (benefit.disable ? 'bg-color-disable' : props.bgColor)} disabled={true}>
                                {benefit.disable ? 'Inactive' : 'Active'}
                            </Button>
                        </Grid>
                    </Grid>
                </Card>
            ))}
        </Fragment>
    );
}

export default BenefitsStatus;
