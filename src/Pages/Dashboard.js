import React from 'react';
import '../App.css';
import { Grid } from '@mui/material';
import Sidebar from '../Components/Sidebar';
import Home from '../Components/Home';
import SidebarMobile from '../Components/MobileComponents/SidebarMobile';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews } from '../Redux/News/NewsAction';
import Passes from './Passes';
import BuyPasses from './BuyPasses';
import '../CSS/Dashboard.css'

function Dashboard() {
  const dispatch = useDispatch();
  dispatch(getAllNews());
  const section = useSelector(state => state.sidebar.section);
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2&display=swap" rel="stylesheet"></link>
      <Grid container>
        <Grid item xs={1} md={1} lg={1} sx={{ display: { xs: 'none', md: 'initial' } }}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={1} lg={1} sx={{ display: { xs: 'initial', md: 'none' } }}>
          <SidebarMobile />
        </Grid>
        <Grid item xs={12} md={11} lg={11}>
          {section === 'home' &&
            <Home />
          }
          {section !== 'home' && section !== 'buying' &&
            <Passes />
          }
          {section === 'buying' &&
            <BuyPasses />
          }
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
