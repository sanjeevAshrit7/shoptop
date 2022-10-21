import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SanityClient from '../client';

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
    const classes = useStyles();

    useEffect(() => {
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
        }).catch((error) => {
            console.log('error', error)
        })
    }, [])

    // console.log('product', prods)
    return (
        <main className='bg-purple-100 min-h-screen p-12'>
            <section className='container mx-auto '>
                <h1 className='text-5xl flex justify-center cursive'>All Products🥗</h1>
                <h2 className='text-lg text-gray-600 flex justify-center mb-12 my-3'>Products that we currently support</h2>
                <div className='grid md:grid-cols-3 lg:gid-cols-3 mx-2 gap-6'>
                    {prods.map((prod, index) => {
                        return (
                            <Card
                                className={
                                    'w-72 hover:w-80 hover:z-50 mx-auto bg-red-700 border-l-8 border-blue-400 hover:border-l-8 hover:border-blue-800 hover:drop-shadow-lg relative'
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

export default Product;