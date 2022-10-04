import React from 'react';
import '../App.css';
import '../CSS/Dashboard.css'
import Sidebar from '../Components/Sidebar';
import Home from '../Components/Home';
import SidebarMobile from '../Components/MobileComponents/SidebarMobile';
import SnackbarCustom from '../Components/SnackbarCustom';
import Passes from './Passes';
import BuyPasses from './BuyPasses';
import PreHome from './PreHome';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews } from '../Redux/News/NewsAction';
import { getAllPassConfig, getParamByKey } from '../Redux/Application';
import { getUserByWallet, setReferralByLink } from '../Redux/Users/UserAction';
import { useWeb3React } from '@web3-react/core';
import { CONFIG_PASS } from '../Redux/Application/types';
import { useParams } from 'react-router-dom';
import { setSection } from '../Redux/Sidebar/SidebarAction';
import SnackbarWarning from '../Components/SnackbarWarning';

function Dashboard() {
  const dispatch = useDispatch();
  //SE HO UN REFERRAL NEL ROUTING, ALLORA VADO ALLA SEZIONE DI 
  //ACQUISTO PASS E SETTO IL REFERRAL PRESO DALLA ROUTE
  let { referral } = useParams();
  if (referral !== undefined) {
    dispatch(setSection('buying'));
    dispatch(setReferralByLink(referral));
  }

  //VARIABILI WEB3
  const { account } = useWeb3React();

  //CHIAMO FUNCTION DI NEWS E CONFIGURATION
  dispatch(getAllNews());
  dispatch(getAllPassConfig())
  dispatch(getParamByKey(CONFIG_PASS))
  if (account)
    dispatch(getUserByWallet(account));
  //dispatch(balanceOf(contractTest));

  //VARIABILI REDUX
  const section = useSelector(state => state.sidebar.section);

  //SWITCH COLORI
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
      image = '/images/MrCapital_Green.png';
      break;
    case 'elite':
      colorDark = 'color-dark-elite-pass';
      colorPass = 'color-elite-pass';
      bgColor = 'bg-elite-pass';
      color = '#821218';
      image = '/images/MrCapital_Red.png';
      break;
    case 'premium':
      colorDark = 'color-dark-premium-pass';
      colorPass = 'color-premium-pass';
      bgColor = 'bg-premium-pass';
      color = '#424141';
      image = '/images/MrCapital_Black.png';
      break;
    default:
      break;
  }

  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2&display=swap" rel="stylesheet"></link>
      {section === 'prehome' &&
        <PreHome />
      }
      {
        section !== 'prehome' &&
        <Grid container>
          <Grid item xs={1} md={1} lg={1} sx={{ display: { xs: 'none', md: 'initial' } }}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={1} lg={1} display={{ xs: 'initial', md: 'none' }} className={'max-h-14'}>
            <SidebarMobile />
          </Grid>
          <Grid item xs={12} md={11} lg={11}>
            {section === 'home' &&
              <Home />
            }
            {section !== 'home' && section !== 'buying' &&
              <Passes section={section} colorDark={colorDark} colorPass={colorPass} bgColor={bgColor} color={color} image={image} />
            }
            {section === 'buying' &&
              <BuyPasses bgColor={bgColor} />
            }
            {section === 'prehome' &&
              <PreHome />
            }
          </Grid>
            {/* <div class="d-flex flex-column justify-content-center w-100 h-100">

              <div class="d-flex flex-column justify-content-center align-items-center">
                
              </div>
            </div> */}

        </Grid>
      }
      <SnackbarCustom />
      <SnackbarWarning />
    </div>
  );
}

export default Dashboard;
