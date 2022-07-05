import React from 'react';
import { Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import '../CSS/BuyPasses.css';
import '../CSS/Dashboard.css';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import ButtonConnect from '../Components/ButtonConnect';
import { useDispatch } from 'react-redux';
import { useWeb3React } from '@web3-react/core';
import { Zoom } from 'react-reveal';
import { mint } from '../Redux/Blockchain/BlockchainAction';
import { getUserById } from '../Redux/Users/UserAction';

function BuyPasses(props) {
    const dispatch = useDispatch();
    const { active, account } = useWeb3React();
    let passes = [
        {
            'title': 'PARTNER PASS',
            'price': '0.1 ETH',
            'referralProgram': true,
            'giveawayAccess': false,
            'presaleAccess': false,
            'nftsAirdrop': true,
            'metaverseAccess': true,
            'fixedEarnings': false,
            'type': 'partner',
            'img': './images/card-partner.png',
            'css-dark-color': 'color-dark-partner-pass',
            'bg-color': 'bg-partner-pass',
            'border': '#153633',
            'hover-bg-color': 'bg-light-partner-pass',
        },
        {
            'title': 'ELITE PASS',
            'price': '1.0 ETH',
            'referralProgram': true,
            'giveawayAccess': true,
            'presaleAccess': true,
            'nftsAirdrop': true,
            'metaverseAccess': false,
            'fixedEarnings': false,
            'type': 'elite',
            'img': './images/card-elite.png',
            'css-dark-color': 'color-dark-elite-pass',
            'bg-color': 'bg-elite-pass',
            'border': '#821218',
            'hover-bg-color': 'bg-light-elite-pass',
        },
        {
            'title': 'PREMIUM PASS',
            'price': '10.0 ETH',
            'referralProgram': true,
            'giveawayAccess': true,
            'presaleAccess': true,
            'nftsAirdrop': true,
            'metaverseAccess': true,
            'fixedEarnings': true,
            'type': 'premium',
            'img': './images/card-premium.png',
            'css-dark-color': 'color-dark-premium-pass',
            'bg-color': 'bg-premium-pass',
            'border': '#424141',
            'hover-bg-color': 'bg-light-premium-pass',
        }
    ];
    dispatch(getUserById())

    const handleBuy = (type) => {
        let idPass = type === 'partner' ? 1 : type === 'elite' ? 2 : 3;
        if(active){
            dispatch(mint(1, account, '', idPass))
        } else {
            //TODO modale per connettere wallet
        }
    }

    return (
        <Grid container spacing={5} className='justify-center' sx={{ pl: { xs: 1, md: 4, lg: 0 }, pr: { xs: 1, md: 0 }, mt: { xs: 1, md: 1 } }}>
            <Grid item xs={12} md={12} lg={12} className='!mr-20 text-right' sx={{ display: { xs: 'none', md: 'initial' } }}>
                <ButtonConnect />
            </Grid>
            {passes.map(pass => {
                return (
                    <Grid item xs={3.5} md={3.5} lg={3.5} key={pass.type} className='!pt-4'>
                        <Zoom left>
                            <Card className={'box-border !rounded-2xl flex flex-col card-buy '} style={{ borderColor: pass.border }}> {/*+ (pass.type === 'partner' ? 'bg-partner-pass' : (pass.type === 'elite' ? 'bg-elite-pass' : 'bg-premium-pass')) */}
                                <CardHeader
                                    className={'!pt-9 card-header-buy ' + pass['css-dark-color']}
                                    title={pass.title}
                                    subheader="test sottotitolo"
                                />
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={pass.img}
                                    alt="Paella dish"
                                />
                                <CardContent className='flex flex-col'>
                                    <Typography variant="h3" color="text.secondary" className={'font-openSans-extrabold ' + pass['css-dark-color']}>
                                        {pass.price}
                                    </Typography>
                                    <Button variant='contained' className={'!rounded-full !h-12 !text-lg !mt-5 font-openSans-extrabold ' + pass['hover-bg-color'] + ' ' + pass['bg-color']} onClick={() => handleBuy(pass.type)}>
                                        BUY ACCESS PASS
                                    </Button>
                                    <Typography variant="body2" color="text.secondary" className={'text-left !mt-10 ' + pass['css-dark-color']}>
                                        {pass.referralProgram ? <CheckIcon color='success' /> : <ClearIcon color='error' />} Referral Program
                                        <br />
                                        {pass.giveawayAccess ? <CheckIcon color='success' /> : <ClearIcon color='error' />} Giveaway Access
                                        <br />
                                        {pass.presaleAccess ? <CheckIcon color='success' /> : <ClearIcon color='error' />} Presale Access
                                        <br />
                                        {pass.nftsAirdrop ? <CheckIcon color='success' /> : <ClearIcon color='error' />} NFTs Airdrop
                                        <br />
                                        {pass.metaverseAccess ? <CheckIcon color='success' /> : <ClearIcon color='error' />} Metaverse Access
                                        <br />
                                        {pass.fixedEarnings ? <CheckIcon color='success' /> : <ClearIcon color='error' />} Fixed Earnings
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Zoom>
                    </Grid>
                )
            })}
        </Grid>
    );
}

export default BuyPasses;
