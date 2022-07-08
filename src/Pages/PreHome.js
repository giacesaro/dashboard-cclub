import { Button } from '@mui/material';
import React from 'react';
import '../CSS/PreHome.css';
import { useDispatch } from 'react-redux';
import { setSection } from '../Redux/Sidebar/SidebarAction';

function PreHome() {
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(setSection('home'));
    }
  return (
    <Button id="circle-container" onClick={handleClick}>
		<div id="cc">
		<div class="circle" id="five"></div>
		<div class="circle" id="four"></div>
		<div class="circle" id="three"></div>
		<div class="circle" id="two"></div>
		<div class="circle" id="one"></div>
		</div>
	</Button>
  );
}

export default PreHome;
