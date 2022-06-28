import React from 'react';
import { Grid } from '@mui/material';
import HelloCard from '../Components/HomeComponents/HelloCard';
import ButtonConnect from '../Components/ButtonConnect';
import SimpleNumberTextCard from '../Components/HomeComponents/SimpleNumberTextCard';
import MyPassCard from '../Components/HomeComponents/MyPassCard';
import News from '../Components/HomeComponents/News';
import Statistics from '../Components/HomeComponents/Statistics';
import FindOutMore from '../Components/HomeComponents/FindOutMore';
import ModalNews from '../Components/HomeComponents/ModalNews';
import ReferralProgramStatus from '../Components/PassesComponents/ReferralProgramStatus';
import { useSelector } from 'react-redux';
import BenefitsStatus from '../Components/PassesComponents/BenefitsStatus';

function Passes() {
    const [openNews, setOpenNews] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const section = useSelector(state => state.sidebar.section);
    var colorDark = '';
    var colorPass = '';
    switch (section) {
        case 'home':
            colorDark = 'black';
            colorPass = 'black'
            break;
        case 'member':
            colorDark = 'color-dark-member-pass';
            colorPass = 'color-member-pass';
            break;
        case 'partner':
            colorDark = 'color-dark-partner-pass';
            colorPass = 'color-partner-pass';
            break;
        case 'elite':
            colorDark = 'color-dark-elite-pass';
            colorPass = 'color-elite-pass';
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
                        <BenefitsStatus  colorDark={colorDark} colorPass={colorPass} />
                    </Grid>
                </Grid>
            </Grid>
            {/* STATISTICS - BUY PASS */}
            <Grid item xs={12} md={6} lg={6} sx={{ mb: { xs: 5, md: 0 } }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={12} lg={12} className='text-right !pt-6'>
                        <Statistics colorDark={colorDark} colorPass={colorPass}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Passes;
