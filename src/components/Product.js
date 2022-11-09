import React, { useEffect, useState } from 'react';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    makeStyles, 
    Typography
} from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import SanityClient from '../client';
import { Loader } from '../utils/commonComponents';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

function Product() {
    const [prods, setProds] = useState([]);
    const [loading, setLoading] = useState(false);
    const classes = useStyles();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    useEffect(() => {
        setLoading(true);
        SanityClient.fetch(`*[_type == 'product']{
            _id,
            productName,
            prodDesc,
            prodImage{
                asset->{
                _id,
                url
                },
            },
            category->{
                title
            }
        }`
        ).then((data) => {
            setProds(data)
            setLoading(false);
        }).catch((error) => {
            console.log('error', error);
            setLoading(false);
        })
    }, [])

    if(loading) {
        return(
            <Loader open={loading}/>
        );
    } else {
        return (
            <main className='bg-purple-100 min-h-screen p-12'>
                <section className='container mx-auto '>
                    <h1 className='text-5xl flex justify-center cursive'>All Products🥗</h1>
                    <h2 className='text-lg text-gray-600 flex justify-center mb-12 my-3'>Products that we currently support</h2>
                    <div className='grid md:grid-cols-4 lg:gid-cols-4 mx-2 gap-4'>
                        {prods.map((prod, index) => {
                            return (
                                <Card
                                    className={
                                        isTabletOrMobile ?
                                        'w-60 hover:z-50 mx-auto bg-red-700 border-l-8 border-blue-400 hover:border-l-8 hover:border-blue-800 hover:drop-shadow-lg relative my-3':
                                        'w-72 hover:z-50 mx-auto bg-red-700 border-l-8 border-blue-400 hover:border-l-8 hover:border-blue-800 hover:drop-shadow-lg relative my-3'
                                    }
                                    sx={{}}
                                    key={index}
                                    >
                                    <Link key={index}>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={prod?.prodImage?.asset?.url}
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant='h5' component="h2">
                                                    {prod?.productName}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {prod?.prodDesc}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Link>
                                </Card>
                            )
                        })}
                    </div>
                </section>
            </main>
        )
    }
}

export default Product;
