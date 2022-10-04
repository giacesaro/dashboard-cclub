import React from 'react';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import '../../CSS/Home.css';
import '../../CSS/Dashboard.css';
import { useSelector } from 'react-redux';
import CopyToClipboard from 'react-copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import LinkIcon from '@mui/icons-material/Link';
import { apiRoot } from '../../Utils/config';


function ReferralCard() {
    const [copied, setCopied] = React.useState(false);
    const [copiedLink, setCopiedLink] = React.useState(false);
    const [refCode, setRefCode] = React.useState("");
    const referralCode = useSelector(state => state.user.referralCode);

    const onCopyLink = () => {
        setCopiedLink(true);
        setTimeout(() => {
            setCopiedLink(false);
        }, 1500);
    }

    const onCopy = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    }

    React.useEffect(() => {
        setRefCode(referralCode)
    }, [referralCode]);

    return (
        <Grid container>
            <Grid item xs={12} md={10} lg={11} xl={10}>
                <Card className='box-border !rounded-2xl bg-card !shadow-none' sx={{ height: { xs: 'initial', md: 80 } }}>
                    <CardContent sx={{ display: {xs: 'initial', md: 'block'} }}>
                        <Grid container className='items-center'>
                            <Grid item xs={12} md={6} lg={8} xl={8}>
                                <Typography variant='body1' className='text-left !text-3xl h-10 line-57p font-openSans-light !mt-2 !ml-2 !font-extrabold'>
                                    Your referral: <span className='font-openSans-extrabold'>{refCode}</span>
                                </Typography>
                                {/* <TextField hiddenLabel id="myReferral" variant="outlined" defaultValue={refCode} value={refCode} disabled={true} className='w-full' sx={{ ml: { xs: 0, md: 3 } }} /> */}
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} xl={4} sx={{ mt: { xs: 1, md: 0 }, textAlign: {xs: 'center', md: 'initial'}, placeContent: {xs: 'center', md: 'initial'}  }} display={'flex'}>
                                <CopyToClipboard text={refCode} onCopy={onCopy} >
                                    <Button variant="outlined" className='bg-my-black !text-white !rounded-md font-openSans-light !text-sm !mr-4 !ml-1.5'>
                                        {copied &&
                                            <CheckIcon />
                                        }
                                        {!copied &&
                                            <ContentCopyIcon />
                                        }
                                    </Button>
                                </CopyToClipboard>
                                <CopyToClipboard text={apiRoot.local + refCode} onCopy={onCopyLink} >
                                    <Button variant="outlined" className='bg-my-black !text-white !rounded-md font-openSans-light !text-sm !mr-5'>
                                        {copiedLink &&
                                            <CheckIcon />
                                        }
                                        {!copiedLink &&
                                            <LinkIcon />
                                        }
                                    </Button>
                                </CopyToClipboard>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default ReferralCard;
