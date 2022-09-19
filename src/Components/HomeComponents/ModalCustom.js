import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../../CSS/Dashboard.css';
import '../../CSS/Passes.css';
import { Fade } from 'react-reveal';
import { Button, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useWeb3React } from '@web3-react/core';
import { CssTextFieldElite, CssTextFieldPartner, CssTextFieldPremium } from '../../Utils/Constants';
import { connectWallet, mint, setErrorBoolean } from '../../Redux/Blockchain/BlockchainAction';
import { setLoading } from '../../Redux/Application/ApplicationAction';
import { contractPartner } from '../../Utils/config';


export default function ModalCustom(props) {
    const dispatch = useDispatch();
    //VARIABILI REDUX
    const referralFromLink = useSelector(state => state.user.referralFromLink);
    const userLogged = useSelector(state => state.user.userLogged);
    //VARIABILI WEB3
    const { active, account, activate } = useWeb3React();
    const [referral, setReferral] = React.useState(referralFromLink);
    //VARIABILI DI STATO
    const [disableConfirm, setDisableConfirm] = React.useState(referral === userLogged.referralCode ? true : false);

    //UNMOUNT DELL'ERRORE QUANDO CHIUDO MODALE PER IL MINT
    React.useEffect(() => {
        if (referral === userLogged.referralCode && props.type !== 'news') {
            dispatch(setErrorBoolean(true, 'You cannot use your referral code!'));
        }
        return () => {
            dispatch(setErrorBoolean(false, ''))
        };
    }, [referral]);


    //FUNCTION
    const handleClose = () => props.setOpen(false);

    const handleChange = (event) => {
        if (event.target.value === userLogged.referralCode) {
            setDisableConfirm(true)
            dispatch(setErrorBoolean(true, 'You cannot use your referral code!'))
        } else {
            setDisableConfirm(false)
            dispatch(setErrorBoolean())
        }
        setReferral(event.target.value);
    };

    const mintPass = () => {
        let idPass = props.type === 'partner' ? 1 : props.type === 'elite' ? 2 : 3;
        if (active) {
            dispatch(mint(1, account, referral, idPass, userLogged));
            props.setOpen(false);
            let message = 'Processing...'
            dispatch(setLoading(true, message, true))
        } else {
            props.setOpen(false);
            dispatch(connectWallet(activate, contractPartner).then(result => {
                props.setOpen(true);
            })
            );
        }
    }

    //SWITCH COLORI
    var bgColor = '';
    var borderColor = '';
    var colorPass = '';
    var labelColor = '';
    switch (props.type) {
        case 'home':
            colorPass = 'black';
            bgColor = 'bg-my-black';
            borderColor = 'border-my-black';
            labelColor = 'color-label-input-partner-pass'
            break;
        case 'partner':
            colorPass = 'color-dark-partner-pass';
            bgColor = 'bg-partner-pass';
            borderColor = 'border-partner-pass';
            labelColor = 'color-label-input-partner-pass'
            break;
        case 'elite':
            colorPass = 'color-dark-elite-pass';
            bgColor = 'bg-elite-pass';
            borderColor = 'border-elite-pass';
            labelColor = 'color-label-input-elite-pass'
            break;
        case 'premium':
            colorPass = 'color-dark-premium-pass';
            bgColor = 'bg-premium-pass';
            borderColor = 'border-premium-pass';
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
                        <Box className='mt-80 rounded-2xl text-center modal-custom' sx={{ width: { xs: '90%', md: 'initial' } }}>
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
                                            Insert Referral Code (Optional):
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
                                            className={'font-openSans-light !text-white !font-semibold ' + (disableConfirm ? 'bg-color-disable' : bgColor + ' ' + borderColor)}
                                            variant='outlined'
                                            onClick={mintPass}
                                            disabled={disableConfirm}
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
