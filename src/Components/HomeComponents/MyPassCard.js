import React, { useState } from 'react';
import { Button, Card, Grid, Typography } from '@mui/material';
import '../../CSS/Home.css';
import '../../CSS/Dashboard.css';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Box } from '@mui/system';
import { useWeb3React } from '@web3-react/core';
import { useSelector, useDispatch } from 'react-redux';
import { setSection } from '../../Redux/Sidebar/SidebarAction';

function MyPassCard() {
    const { active } = useWeb3React();
    const dispatch = useDispatch();
    const refMovement = useSelector(state => state.user.refMovement);
    const [countArrow, setCountArrow] = useState(0);
    var passConf = {}
    var passPosseduti = 0
    if (active && Object.keys(refMovement).length !== 0) {
        passConf = JSON.parse(refMovement.idPassConf)
        passPosseduti = passConf[countArrow].passPosseduti
    }

    const handleDecrement = () => {
        if (countArrow === 0)
            setCountArrow(2)
        else
            setCountArrow(countArrow - 1)
    }

    const handleIncrement = () => {
        if (countArrow === 2)
            setCountArrow(0)
        else
            setCountArrow(countArrow + 1)
    }

    const handleGoPage = () => {
        let type = ''
        switch (countArrow) {
            case 0:
                type = 'partner'
                break;
            case 1:
                type = 'elite'
                break;
            case 2:
                type = 'premium'
                break;
            default:
                break;
        }
        if(passPosseduti > 0){
            dispatch(setSection(type));
        }
    }

    return (
        <Grid container>
            <Grid item xs={12} md={10} lg={10}>
                <Card className='box-border !rounded-2xl bg-card !shadow-none' sx={{ height: { xs: 'initial', md: 80 } }}>
                    <Grid container>
                        <Grid item xs={4} md={2} lg={2} className='mt-10n' display={active ? 'initial' : 'none'}>
                            {active ?
                                <Box
                                    component="img"
                                    alt="Type"
                                    src={countArrow === 0 ? "/images/Partner-icon.png" : countArrow === 1 ? "/images/Elite-icon.png" : "/images/Premium-icon.png"}
                                    sx={{ height: { xs: 100, md: 112 } }}
                                />
                                :
                                ""
                            }
                        </Grid>
                        <Grid item xs={active ? 8 : 12} md={active ? 6 : 12} lg={active ? 5 : 12} className={'text-left !mt-6 ' + (active ? '' : '!pl-4')}>
                            <Typography variant='body1' className={'text-left h-10 !font-normal !text-3xl line-57p font-openSans-extrabold '}>
                                {active ?
                                    (countArrow === 0 ? 'Partner Pass' : countArrow === 1 ? 'Elite Pass' : 'Premium Pass') + ': ' + passPosseduti
                                    :
                                    'No Pass Owned'}
                            </Typography>
                        </Grid>
                        <Grid item xs={3} md={6} lg={2} className='text-left !mt-6' display={active ? 'initial' : 'none'} />
                        <Grid item xs={6} md={6} lg={3} sx={{ mt: { xs: 1, md: 3 }, mb: { xs: 2, md: 0 }, textAlign: { xs: 'right', sm: 'center', md: 'right' }, pr: { xs: 5, sm: 0, md: 5 } }} display={active ? 'initial' : 'none'}>
                            <Button 
                                variant='contained' 
                                className={'!rounded-md font-openSans-light !text-sm ' + (passPosseduti > 0 ?'bg-my-black' : 'bg-color-disable')} 
                                onClick={handleGoPage} 
                                disabled={passPosseduti === 0}
                                >
                                CONTINUE
                            </Button>
                        </Grid>
                        <Grid item xs={3} md={6} lg={2} className='text-left !mt-6' display={{ xs: 'initial', md: 'none' }} />
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={6} md={6} lg={1} className='self-center' sx={{ textAlign: { xs: 'right', md: 'initial' } }}>
                <Button disabled={!active} onClick={handleDecrement}>
                    <ArrowCircleLeftIcon className={'!text-5xl ' + (active ? 'arrow-button' : 'arrow-button-disabled')} />
                </Button>
            </Grid>
            <Grid item xs={6} md={6} lg={1} className='self-center' sx={{ textAlign: { xs: 'left', md: 'initial' } }}>
                <Button disabled={!active} onClick={handleIncrement}>
                    <ArrowCircleRightIcon className={'!text-5xl ' + (active ? 'arrow-button' : 'arrow-button-disabled')} />
                </Button>
            </Grid>
        </Grid>
    );
}

export default MyPassCard;
