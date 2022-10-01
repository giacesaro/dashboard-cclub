import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import '../CSS/BuyPasses.css';
import '../CSS/Dashboard.css';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import ButtonConnect from '../Components/ButtonConnect';
import ModalCustom from '../Components/HomeComponents/ModalCustom';
import { Zoom } from 'react-reveal';
import { useWeb3React } from '@web3-react/core';
import { setErrorBoolean } from '../Redux/Blockchain/BlockchainAction';

function BuyPasses() {
    const { active } = useWeb3React();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [type, setType] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [modalPrice, setModalPrice] = useState('');
    var configPasses = useSelector(state => state.application.configPasses);
    var loading = useSelector(state => state.application.loading);

    const handleBuy = (pass) => {
        if (active) {
            setOpen(true);
            setType(pass.type);
            setModalTitle(pass.title);
            setModalPrice(pass.price);
        } else {
            dispatch(setErrorBoolean(true, 'Connect wallet!'))
        }
    }

    return (
        <Grid container spacing={5} className='justify-center' sx={{ pl: { xs: 1, md: 4, lg: 0 }, pr: { xs: 1, md: 0 }, mt: { xs: 1, md: 1 } }}>
            <Grid item xs={12} md={12} lg={12} className='!mr-20 text-right' sx={{ display: { xs: 'none', md: 'initial' } }}>
                <ButtonConnect />
            </Grid>
            {/* <Grid item xl={1} display={{xs:'none', xl:'initial'}}/> */}
            {configPasses.map(configPass => {
                var pass = JSON.parse(configPass.valore);
                return (
                    <Grid item xs={12} md={3.5} lg={3.5} xl={3.8} key={pass.type} sx={{ pt: { xs: 10, md: 2, xl: '10px !important' } }}>
                        <Zoom left>
                            <Card className={'box-border !rounded-2xl flex flex-col card-buy '} style={{ borderColor: pass.border, maxHeight: 790 }}> {/*+ (pass.type === 'partner' ? 'bg-partner-pass' : (pass.type === 'elite' ? 'bg-elite-pass' : 'bg-premium-pass')) */}
                                <CardHeader
                                    className={'!pt-5 card-header-buy ' + pass['css-dark-color']}
                                    title={pass.title}
                                    // subheader="test sottotitolo"
                                />
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={pass.img}
                                    alt={pass.title}
                                />
                                <CardContent className='flex flex-col'>
                                    <Typography variant="h3" color="text.secondary" className={'font-openSans-extrabold ' + pass['css-dark-color']}>
                                        {pass.price}
                                    </Typography>
                                    <Button variant='contained'
                                        className={'!rounded-full !h-12 !text-lg !mt-5 font-openSans-extrabold ' + pass['hover-bg-color'] + ' ' + pass['bg-color']}
                                        onClick={() => handleBuy(pass)}
                                        disabled = {loading}
                                    >
                                        BUY {pass.title}
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
            {open &&
                <ModalCustom open={open} setOpen={setOpen} title={modalTitle} content={"Are you sure you want to buy the " + modalTitle + " for " + modalPrice + " ?"} type={type} />
            }
        </Grid>
    );
}

export default BuyPasses;
