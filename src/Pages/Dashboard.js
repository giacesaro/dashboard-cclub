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
import { getParamByKey } from '../Redux/Application';
import { balanceOf, connectAbi } from '../Redux/Blockchain/BlockchainAction';
import { contractTest } from '../Utils/config';
import PreHome from './PreHome';

function Dashboard() {
  const dispatch = useDispatch();
  dispatch(getAllNews());
  dispatch(getParamByKey('PASSES'));
  dispatch(balanceOf(contractTest))
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
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2&display=swap" rel="stylesheet"></link>
      {section === 'prehome' &&
            <PreHome/>
      }
      {
        section !== 'prehome' && 
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
            <Passes section={section} colorDark={colorDark} colorPass={colorPass} bgColor={bgColor} color={color} image={image}/>
          }
          {section === 'buying' &&
            <BuyPasses bgColor={bgColor}/>
          }
          {section === 'prehome' &&
            <PreHome/>
          }
        </Grid>
      </Grid>
      }
    </div>
  );
}

export default Dashboard;
