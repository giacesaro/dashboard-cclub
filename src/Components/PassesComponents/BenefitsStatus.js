import React, { Fragment } from 'react';
import { Button, Card, Grid, Tooltip, Typography } from '@mui/material';
import '../../CSS/Dashboard.css';
import '../../CSS/Passes.css';
import InfoIcon from '@mui/icons-material/Info';
import { useSelector } from 'react-redux';

function BenefitsStatus(props) {
    var params = useSelector(state => state.application.params);
    var listBenefits = JSON.parse(params.valore)

    return (
        <Fragment>
            <Typography variant='h2' className={'text-left h-6 !font-normal !leading-9 font-openSans-extrabold ' + props.colorDark}
                sx={{ mt: { xs: 3, md: 0 }, mb: { xs: 3, md: 4 }, fontSize: { xs: '24px', md: '30px' }, lineHeight: { xs: '28px', md: '36px' } }}>
                Benefits status
            </Typography>
            {listBenefits.map(benefit => {
                return (
                    <Card className='box-border !rounded-2xl bg-card !shadow-none !mb-4' sx={{ height: { xs: 85, md: 70 } }} key={benefit.title}>
                        <Grid container>
                            <Grid item xs={5} md={6} lg={5.5} className='text-left !mt-2 !ml-4 ' >
                                <Typography variant='h5' className='text-left font-openSans-extrabold !text-base' sx={{ lineHeight: { xs: 0.8, md: 0.9 } }}>
                                    {benefit.title}
                                </Typography>
                                <Typography variant='h6' className='text-left font-openSans-light !leading-4 !text-base ' sx={{ pt: { xs: 0, xl: 0.5 } }}>
                                    {benefit.subtitle}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={6} lg={6} className='text-right self-center !mt-2.5'>
                                {/* TODO tooltip non si vede da mobile */}
                                <Tooltip title={benefit.info} placement="top" className=''>
                                    <Button className='info-button'>
                                        <InfoIcon className='mr-6' sx={{ color: props.colorTooltip }} />
                                    </Button>
                                </Tooltip>
                                <Button variant='contained'
                                    className={'!rounded-lg font-openSans-light !text-lg !font-bold !text-white ' + (benefit.disable ? 'bg-color-disable' : props.bgColor)}
                                    disabled={true}
                                    sx={{ width: { xs: '50%', md: '50%' }, height: { xs: 40, md: 48 } }}
                                >
                                    {benefit.disable ? 'Inactive' : 'Active'}
                                </Button>
                            </Grid>
                        </Grid>
                    </Card>
                )
            })}
        </Fragment>
    );
}

export default BenefitsStatus;
