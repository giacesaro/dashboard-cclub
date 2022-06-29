import React from 'react';
import { Grid } from '@mui/material';
import HelloCard from '../Components/HomeComponents/HelloCard';
import Statistics from '../Components/HomeComponents/Statistics';
import ReferralProgramStatus from '../Components/PassesComponents/ReferralProgramStatus';
import { useSelector } from 'react-redux';
import BenefitsStatus from '../Components/PassesComponents/BenefitsStatus';

function Passes() {
    const section = useSelector(state => state.sidebar.section);
    var colorDark = '';
    var colorPass = '';
    var bgColor = '';
    var color = '';
    switch (section) {
        case 'home':
            colorDark = 'black';
            colorPass = 'black';
            bgColor = 'bg-my-black';
            color = '#0C0B0B';
            break;
        case 'member':
            colorDark = 'color-dark-member-pass';
            colorPass = 'color-member-pass';
            bgColor = 'bg-member-pass';
            color = '#956b08';
            break;
        case 'partner':
            colorDark = 'color-dark-partner-pass';
            colorPass = 'color-partner-pass';
            bgColor = 'bg-partner-pass';
            color = '#153633';
            break;
        case 'elite':
            colorDark = 'color-dark-elite-pass';
            colorPass = 'color-elite-pass';
            bgColor = 'bg-elite-pass';
            color = '#821218';
            break;
        default:
            break;
    }
    return (
        <Grid container spacing={5} sx={{ pl: { xs: 1, md: 6 }, pr: { xs: 1, md: 0 }, mt: { xs: 1, md: 3 } }}>
            {/* HELLO CARD - CONNECT WALLET - CARD GENERIC REF AND ETH */}
            <Grid item xs={12} md={6} lg={6}>
                <HelloCard type={section} colorDark={colorDark} colorPass={colorPass}/>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <ReferralProgramStatus colorDark={colorDark} colorPass={colorPass}/>
            </Grid>
            {/* MY PASS - NEWS */}
            <Grid item xs={12} md={6} lg={6}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={12} lg={12} className='!pt-0'>
                        <BenefitsStatus colorDark={colorDark} colorPass={colorPass} bgColor={bgColor} colorTooltip={color}/>
                    </Grid>
                </Grid>
            </Grid>
            {/* STATISTICS - BUY PASS */}
            <Grid item xs={12} md={6} lg={6} sx={{ mb: { xs: 5, md: 0 } }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={12} lg={12} className='text-right !pt-6'>
                        <Statistics colorDark={colorDark} colorLine={color}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Passes;
