import React from 'react';
import { Button, Card, Grid, Typography } from '@mui/material';
import '../../CSS/Home.css';
import '../../CSS/Dashboard.css';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Box } from '@mui/system';
import { useWeb3React } from '@web3-react/core';

function MyPassCard() {
    const { active } = useWeb3React();
    return (
        <Grid container>
            <Grid item xs={12} md={10} lg={10}>
                <Card className='box-border !rounded-2xl bg-card !shadow-none' sx={{ height: { xs: 'initial', md: 80 } }}>
                    <Grid container>
                        <Grid item xs={4} md={2} lg={2} className='mt-10n' display={active ? 'initial' : 'none'}>
                            {active ? <Box
                                component="img"
                                alt="Type"
                                src="/images/Partner-icon.png" //TODO img del pass
                                sx={{ height: { xs: 100, md: 112 } }}
                            />
                            :
                            ""
                        }
                        </Grid>
                        <Grid item xs={active ? 8 : 12} md={active ? 6 : 12} lg={active ? 4 : 12} className={'text-left !mt-6 ' + (active ? ''  : '!pl-4')}>
                            <Typography variant='body1' className={'text-left h-10 !font-normal !text-3xl line-57p font-openSans-extrabold '}>
                                {active ? 
                                'Partner Pass' //TODO mettere nome del pass
                                :
                                 'No Pass Owned'}
                            </Typography>
                        </Grid>
                        <Grid item xs={3} md={6} lg={2} className='text-left !mt-6' display={active ? 'initial' : 'none'}/>
                        <Grid item xs={6} md={6} lg={4} sx={{ mt: { xs: 1, md: 3 }, mb: { xs: 2, md: 0 }, textAlign: { xs: 'right', sm: 'center', md: 'right' }, pr: { xs: 5, sm: 0, md: 5 } }} display={active ? 'initial' : 'none'}>
                            <Button variant='contained' className='bg-my-black !rounded-md font-openSans-light !text-sm'> {/*TODO  onclick che riporta alla page del pass */}
                                CONTINUE
                            </Button> 
                        </Grid>
                        <Grid item xs={3} md={6} lg={2} className='text-left !mt-6' display={{ xs: 'initial', md: 'none' }} />
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={6} md={6} lg={1} className='self-center' sx={{ textAlign: { xs: 'right', md: 'initial' } }}>
                <Button> {/* TODO  onclick che scorre i pass posseduti */}
                    <ArrowCircleLeftIcon className='!text-5xl arrow-button' />
                </Button>
            </Grid>
            <Grid item xs={6} md={6} lg={1} className='self-center' sx={{ textAlign: { xs: 'left', md: 'initial' } }}>
                <Button>
                    <ArrowCircleRightIcon className='!text-5xl arrow-button' />
                </Button>
            </Grid>
        </Grid>
    );
}

export default MyPassCard;
