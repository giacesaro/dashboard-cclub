import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../../CSS/Dashboard.css';
import '../../CSS/Passes.css';
import { Fade } from 'react-reveal';
import { Button, Grid, TextField } from '@mui/material';
import { createStyles, styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { useWeb3React } from '@web3-react/core';
import { CssTextFieldElite, CssTextFieldPartner, CssTextFieldPremium } from '../../Utils/Constants';
import { connectWallet, mint } from '../../Redux/Blockchain/BlockchainAction';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    //width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalCustom(props) {
    const dispatch = useDispatch();
    const { active, account, activate } = useWeb3React();
    const [referral, setReferral] = React.useState('');
    const handleClose = () => props.setOpen(false);

    const handleChange = (event) => {
        setReferral(event.target.value);
    };

    const mintPass = () => {
        let idPass = props.type === 'partner' ? 1 : props.type === 'elite' ? 2 : 3;
        if (active) {
            dispatch(mint(1, account, referral, idPass))
        } else {
            props.setOpen(false);
            dispatch(connectWallet(activate).then(result => {
                props.setOpen(true);
            })
            );
            //TODO attendere che si connetta e poi rifare mint?
        }
    }
    var bgColor = '';
    var borderColor = '';
    var colorPass = '';
    var color = '';
    var labelColor = '';
    switch (props.type) {
        case 'home':
            colorPass = 'black';
            bgColor = 'bg-my-black';
            borderColor = 'border-my-black';
            color = 'black';
            labelColor = 'color-label-input-partner-pass'
            break;
        case 'partner':
            colorPass = 'color-dark-partner-pass';
            bgColor = 'bg-partner-pass';
            borderColor = 'border-partner-pass';
            color = '#153633';
            labelColor = 'color-label-input-partner-pass'
            break;
        case 'elite':
            colorPass = 'color-dark-elite-pass';
            bgColor = 'bg-elite-pass';
            borderColor = 'border-elite-pass';
            color = '#821218';
            labelColor = 'color-label-input-elite-pass'
            break;
        case 'premium':
            colorPass = 'color-dark-premium-pass';
            bgColor = 'bg-premium-pass';
            borderColor = 'border-premium-pass';
            color = '#424141';
            labelColor = 'color-label-input-premium-pass'
            break;
        default:
            break;
    }



    return (
        <Modal
            open={props.open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div>
                <Fade right>
                    <Grid container>
                        <Box sx={style} className='mt-80 rounded-2xl text-center'>
                            <Grid item xs={12} md={12} lg={12}>
                                <Typography id="modal-modal-title" className={'font-openSans-extrabold ' + colorPass} variant="h5" >
                                    {props.title}
                                </Typography>
                                <Typography id="modal-modal-description" className={'font-openSans-light !font-semibold ' + colorPass} sx={{ mt: 2 }}>
                                    {props.content}
                                </Typography>
                            </Grid>
                            {props.type !== 'news' &&
                                <React.Fragment>
                                    <Grid item xs={12} md={12} lg={12} className='text-left !mt-2'>
                                        <Typography id="modal-modal-description" className={'font-openSans-light !font-semibold ' + colorPass}>
                                            Insert Referral Code:
                                        </Typography>
                                        {props.type === 'partner' ?
                                            <CssTextFieldPartner
                                                label="Referral Code"
                                                id="custom-css-outlined-input"
                                                className={'font-openSans-light !mt-2 !w-full ' + labelColor}
                                                onChange={handleChange}
                                                value={referral}
                                            />
                                            : props.type === 'elite' ?
                                                <CssTextFieldElite
                                                    label="Referral Code"
                                                    id="custom-css-outlined-input"
                                                    className={'font-openSans-light !mt-2 !w-full ' + labelColor}
                                                    onChange={handleChange}
                                                    value={referral}
                                                />
                                                :
                                                <CssTextFieldPremium
                                                    label="Referral Code"
                                                    id="custom-css-outlined-input"
                                                    className={'font-openSans-light !mt-2 !w-full ' + labelColor}
                                                    onChange={handleChange}
                                                    value={referral}
                                                />
                                        }
                                    </Grid>
                                    <Grid item xs={12} md={12} lg={12} className='!mt-6'>
                                        <Button
                                            className={'font-openSans-light !mr-4 !font-semibold ' + borderColor + ' ' + colorPass}
                                            variant='outlined'
                                            onClick={handleClose}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            className={'font-openSans-light !text-white !font-semibold ' + bgColor + ' ' + borderColor}
                                            variant='outlined'
                                            onClick={mintPass}
                                        >
                                            Confirm
                                        </Button>
                                    </Grid>
                                </React.Fragment>
                            }
                        </Box>
                    </Grid>
                </Fade>
            </div>
        </Modal>
    );
}
