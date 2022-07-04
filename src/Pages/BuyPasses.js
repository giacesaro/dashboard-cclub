import React from 'react';
import { Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import '../CSS/BuyPasses.css';
import '../CSS/Dashboard.css';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

function BuyPasses(props) {
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
            'type':'partner',
            'img':'./images/card-partner.png',
            'css-color':'color-partner-pass',
            'bg-color': 'bg-partner-pass',
            'border': '#153633'
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
            'type':'elite',
            'img':'./images/card-elite.png',
            'css-color':'color-elite-pass',
            'bg-color': 'bg-elite-pass',
            'border':'#821218'
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
            'type':'premium',
            'img':'./images/card-premium.png',
            'css-color':'color-premium-pass',
            'bg-color': 'bg-premium-pass',
            'border':'#424141'
        }
    ];

    console.log('props', props)
    return (
        <Grid container spacing={5} className='justify-center' sx={{ pl: { xs: 1, md: 4, lg: 0 }, pr: { xs: 1, md: 0 }, mt: { xs: 1, md: 3 } }}>
            {passes.map(pass => {
                return (
                    <Grid item xs={3.5} md={3.5} lg={3.5}>
                        <Card className={'box-border !rounded-2xl flex flex-col card-buy '} style={{borderColor: pass.border}}> {/*+ (pass.type === 'partner' ? 'bg-partner-pass' : (pass.type === 'elite' ? 'bg-elite-pass' : 'bg-premium-pass')) */}
                            <CardHeader
                                className={'!pt-9 card-header-buy ' + pass['css-color']}
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
                                <Typography variant="h3" color="text.secondary" className={'font-openSans-extrabold ' + pass['css-color']}>
                                    {pass.price}
                                </Typography>
                                <Button variant='contained' className={'!rounded-full !h-12 !text-lg !mt-5 font-openSans-extrabold ' + pass['bg-color']}>
                                    BUY ACCESS PASS
                                </Button>
                                <Typography variant="body2" color="text.secondary" className={'text-left !mt-10 ' + pass['css-color']}>
                                    {pass.referralProgram ? <CheckIcon color='success'/> : <ClearIcon color='error'/>} Referral Program
                                    <br/>
                                    {pass.giveawayAccess ? <CheckIcon color='success'/> : <ClearIcon color='error'/>} Giveaway Access
                                    <br/>
                                    {pass.presaleAccess ? <CheckIcon color='success'/> : <ClearIcon color='error'/>} Presale Access
                                    <br/>
                                    {pass.nftsAirdrop ? <CheckIcon color='success'/> : <ClearIcon color='error'/>} NFTs Airdrop
                                    <br/>
                                    {pass.metaverseAccess ? <CheckIcon color='success'/> : <ClearIcon color='error'/>} Metaverse Access
                                    <br/>
                                    {pass.fixedEarnings ? <CheckIcon color='success'/> : <ClearIcon color='error'/>} Fixed Earnings
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    );
}

export default BuyPasses;
