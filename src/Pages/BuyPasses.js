import React from 'react';
import { Box, Button, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import HelloCard from '../Components/HomeComponents/HelloCard';
import Statistics from '../Components/HomeComponents/Statistics';
import ReferralProgramStatus from '../Components/PassesComponents/ReferralProgramStatus';
import { useSelector } from 'react-redux';
import BenefitsStatus from '../Components/PassesComponents/BenefitsStatus';
import '../CSS/BuyPasses.css'

function BuyPasses(props) {
    const section = useSelector(state => state.sidebar.section);
    var colorDark = '';
    var colorPass = '';
    var bgColor = '';
    var color = '';
    var image = '';
    switch (section) {
        case 'home':
            colorDark = 'black';
            colorPass = 'black';
            bgColor = 'bg-my-black';
            color = '#0C0B0B';
            image = '/images/c-club-card-hello.png';
            break;
        case 'partner':
            colorDark = 'color-dark-partner-pass';
            colorPass = 'color-partner-pass';
            bgColor = 'bg-partner-pass';
            color = '#153633';
            image = '/images/MrCapital_Partner.png';
            break;
        case 'elite':
            colorDark = 'color-dark-elite-pass';
            colorPass = 'color-elite-pass';
            bgColor = 'bg-elite-pass';
            color = '#821218';
            image = '/images/MrCapital_Elite.png';
            break;
        case 'premium':
            colorDark = 'color-dark-premium-pass';
            colorPass = 'color-premium-pass';
            bgColor = 'bg-premium-pass';
            color = '#424141';
            image = '/images/c-club-card-hello.png';
            break;
        default:
            break;
    }
    return (
        <Grid container spacing={5} sx={{ pl: { xs: 1, md: 6 }, pr: { xs: 1, md: 0 }, mt: { xs: 1, md: 3 } }}>
            <Grid item xs={3} md={3} lg={3}>
                <Card className='box-border !rounded-2xl bg-card flex flex-col card-buy'>
                    <CardHeader
                        className='!pt-9'
                        title="Test Pass 1"
                        subheader="test sottotitolo"
                    />
                    <CardContent className='flex flex-col'>
                        <Typography variant="h3" color="text.secondary" className='font-openSans-extrabold'>
                            1 ETH
                        </Typography>
                        <Button variant='contained'> BUY ACCESS PASS </Button>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default BuyPasses;
