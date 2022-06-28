import React from 'react';
import { Grid } from '@mui/material';
import HelloCard from './HomeComponents/HelloCard';
import ButtonConnect from './ButtonConnect';
import SimpleNumberTextCard from './HomeComponents/SimpleNumberTextCard';
import MyPassCard from './HomeComponents/MyPassCard';
import News from './HomeComponents/News';
import Statistics from './HomeComponents/Statistics';
import FindOutMore from './HomeComponents/FindOutMore';
import ModalNews from './HomeComponents/ModalNews';
import { useSelector } from 'react-redux';

function Home() {
    const [openNews, setOpenNews] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const section = useSelector(state => state.sidebar.section);
    return (
        <Grid container spacing={5} sx={{ pl: { xs: 1, md: 6 }, pr: { xs: 1, md: 0 }, mt: { xs: 1, md: 3 } }}>
            {/* HELLO CARD - CONNECT WALLET - CARD GENERIC REF AND ETH */}
            <Grid item xs={12} md={6} lg={6}>
                <HelloCard type={section}/>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={12} lg={12} className='!mr-20 text-right' sx={{ display: { xs: 'none', md: 'initial' } }}>
                        <ButtonConnect />
                    </Grid>
                    <Grid item xs={6} md={6} lg={5.5} className='!pt-6'>
                        <SimpleNumberTextCard number={11} text={'Referral Used'} />
                    </Grid>
                    <Grid item xs={6} md={6} lg={5.5} className='!pt-6'>
                        <SimpleNumberTextCard number={25} text={'ETH Earned'} />
                    </Grid>
                </Grid>
            </Grid>
            {/* MY PASS - NEWS */}
            <Grid item xs={12} md={6} lg={6}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={12} lg={12} className='text-right !pt-6'>
                        <MyPassCard />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} className='!pt-6'>
                        <News setTitle={setTitle} setContent={setContent} setOpenNews={setOpenNews} />
                    </Grid>
                </Grid>
            </Grid>
            {/* STATISTICS - BUY PASS */}
            <Grid item xs={12} md={6} lg={6} sx={{ mb: { xs: 5, md: 0 } }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={12} lg={12} className='text-right !pt-6'>
                        <Statistics />
                    </Grid>
                    <Grid item xs={12} md={9} lg={9} className='!pt-6'>
                        <FindOutMore />
                    </Grid>
                </Grid>
            </Grid>
            {/* MODALS */}
            <ModalNews open={openNews} setOpen={setOpenNews} title={title} content={content} />
        </Grid>
    );
}

export default Home;
