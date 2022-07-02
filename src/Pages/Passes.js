import React from 'react';
import { Grid } from '@mui/material';
import HelloCard from '../Components/HomeComponents/HelloCard';
import Statistics from '../Components/HomeComponents/Statistics';
import ReferralProgramStatus from '../Components/PassesComponents/ReferralProgramStatus';
import BenefitsStatus from '../Components/PassesComponents/BenefitsStatus';

function Passes(props) {
    return (
        <Grid container spacing={5} sx={{ pl: { xs: 1, md: 6 }, pr: { xs: 1, md: 0 }, mt: { xs: 1, md: 3 } }}>
            {/* HELLO CARD - CONNECT WALLET - CARD GENERIC REF AND ETH */}
            <Grid item xs={12} md={6} lg={6}>
                <HelloCard type={props.section} colorDark={props.colorDark} colorPass={props.colorPass} image={props.image}/>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <ReferralProgramStatus colorDark={props.colorDark} colorPass={props.colorPass}/>
            </Grid>
            {/* MY PASS - NEWS */}
            <Grid item xs={12} md={6} lg={6}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={12} lg={12} className='!pt-0'>
                        <BenefitsStatus colorDark={props.colorDark} colorPass={props.colorPass} bgColor={props.bgColor} colorTooltip={props.color}/>
                    </Grid>
                </Grid>
            </Grid>
            {/* STATISTICS - BUY PASS */}
            <Grid item xs={12} md={6} lg={6} sx={{ mb: { xs: 5, md: 0 } }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={12} lg={12} className='text-right !pt-6'>
                        <Statistics colorDark={props.colorDark} colorLine={props.color}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Passes;
