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
				<div className="circle" id="five"></div>
				<div className="circle" id="four"></div>
				<div className="circle" id="three"></div>
				<div className="circle" id="two"></div>
				<div className="circle" id="one"></div>
			</div>
		</Button>
	);
}

export default PreHome;
