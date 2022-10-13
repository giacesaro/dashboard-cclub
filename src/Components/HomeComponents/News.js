import React, { Fragment } from 'react';
import { Box, Button, Card, Grid, Typography } from '@mui/material';
import '../../CSS/Home.css';
import '../../CSS/Dashboard.css';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { useSelector } from 'react-redux';

function News(props) {
    const listNews = useSelector(state => state.news.listNews);

    const handleOpenModal = (id) => {
        let news = listNews.find(element => element.id === id);
        props.setTitle(news.title);
        props.setContent(news.content);
        props.setOpenNews(true);
    }

    return (
        <Fragment>
            <Typography variant='h2' className='text-left !text-4xl h-6 !font-normal !leading-9 font-openSans-extrabold colore-titoli ' sx={{ mt: { xs: 0, md: 2 } }}>
                News
            </Typography>
            <Typography variant='h3' className='text-left !text-xl h-10 !font-normal line-57p !mt-4 font-openSans-extrabold colore-titoli '>
                All News
            </Typography>
            {listNews.map((news, index) => {
                if (index < 3) { //MOSTRO SOLO LE ULTIME 3 NOTIZIE
                    return (
                        <Card className='box-border !rounded-2xl bg-card !shadow-none !mb-4' sx={{ height: { xs: 'initial', md: 75 } }} key={index}>
                            <Grid container>
                                <Grid item xs={2} md={2} lg={2} className='mt-10n'>
                                    <Box
                                        component="img"
                                        alt="Type"
                                        src="/images/btc.png"
                                        sx={{ height: { xs: 'initial', md: 112 }, mt: { xs: 2.5, md: 0 }, ml: { xs: 1, md: 0 } }}
                                    />
                                </Grid>
                                <Grid item xs={4} md={6} lg={4} className='text-left !mt-6 ' sx={{ ml: { xs: 2, md: 0 } }}>
                                    <Typography variant='h5' className='text-left font-openSans-extrabold text-ellipsis ' sx={{ lineHeight: { xs: 0.8, md: 0.9 } }}>
                                        {news.title}
                                    </Typography>
                                    <Typography variant='body2' className='text-left font-openSans-light !leading-4 !text-xs pt-1'>
                                        by C-Club
                                    </Typography>
                                </Grid>
                                <Grid item xs={2} md={6} lg={2} className='text-center ' sx={{ mt: { xs: 2, md: 3 } }}>
                                    <AccessTimeFilledIcon />
                                    <Typography variant='overline' className='text-left font-openSans-extrabold !text-sm !mt-2' sx={{ ml: { xs: 0, md: 0.5 } }}>
                                        3min
                                    </Typography>
                                </Grid>
                                <Grid item xs={3} md={6} lg={4} className='text-right' sx={{ mt: { xs: 2, md: 3 }, pr: { xs: 0, md: 5 } }}>
                                    <Button variant='outlined' className='!rounded-md font-openSans-extrabold !text-sm border-my-black color-my-black !border-2 !font-bold' onClick={() => handleOpenModal(news.id)}>
                                        READ
                                    </Button>
                                </Grid>
                            </Grid>
                        </Card>
                    )
                }
            }
            )}
        </Fragment>
    );
}

export default News;
