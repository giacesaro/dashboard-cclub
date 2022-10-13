import React from 'react';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import '../../CSS/Home.css';
import '../../CSS/Dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import CopyToClipboard from 'react-copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import LinkIcon from '@mui/icons-material/Link';
import { apiRoot } from '../../Utils/config';
import { setSection } from '../../Redux/Sidebar/SidebarAction';


function ButtonBuyPass() {
    const dispatch = useDispatch();

    const handleChangeSection = (type) => {
        dispatch(setSection(type));
    }

    return (
        <Grid container>
            <Grid item xs={12} md={10} lg={11} xl={10}>
                <Typography variant='body1' className='text-center font-openSans-light !font-normal !text-base !leading-6'>
                    <Button variant='contained' className='bg-my-yellow !rounded-md font-openSans-sanserif !text-xl !text-left !text-black' onClick={() => handleChangeSection('buying')} sx={{ mt: { xs: 1, md: 2 } }}>
                        BUY YOUR PASS
                    </Button>
                </Typography>
            </Grid>
        </Grid>
    );
}

export default ButtonBuyPass;
