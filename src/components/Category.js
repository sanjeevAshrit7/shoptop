import { Avatar, Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SanityClient from '../client';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

function Category() {
    const [category, setCategory] = useState([]);
    const { slug } = useParams();
    const classes = useStyles();

    useEffect(() =>{
        SanityClient.fetch(`*[_type == "product" && category._ref in *[_type=="categories" && title=="${slug}"]._id ]{
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
                title,
                image{
                    asset->{
                        _id,
                        url
                    }
                },
            },
            vendor->{
                vendorName,
                image{
                    asset->{
                        _id,
                        url
                    }
                },
            }
        }`
        ).then((data) => {
            // console.log('data', data)
            setCategory(data)
        }).catch((error) => {
            console.log('error', error)
        })
    },[slug])
    // console.log('slug', slug)

    return (
        <main className='bg-gray-100 min-h-screen p-12'>
            <section className='container mx-auto '>
                <h1 className='text-5xl flex justify-center cursive'>{slug}</h1>
                <h2 className='text-lg text-gray-600 flex justify-center mb-12 my-3'>Product list</h2>
                <div className='grid md:grid-cols-4 lg:gid-cols-4 mx-2 gap-6'>
                    {category?.map((item, index) => {
                        return (
                            <Card
                                className={
                                    'w-72 hover:w-80 hover:z-50 mx-auto hover:drop-shadow-lg hover:border-red-200 border-2'
                                }
                                sx={{}}
                                key={index}
                            >
                                <Link key={index}>
                                    <CardActionArea>
                                        <CardMedia
                                            style={{}}
                                            className={classes.media}
                                            image={item?.prodImage?.asset?.url}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant='h5' component="h2">
                                                {item?.productName}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {item?.prodDesc}
                                            </Typography>
                                            <div className='flex flex-col my-3'>
                                                <h2 className='font-bold'>Category</h2>
                                                <div className='flex flex-row items-center justify-center my-1'>
                                                    <Avatar className='border-2 border-red-400'>
                                                        <img src={item?.category?.image?.asset?.url} className={'h-full w-full self-center'} alt={'category'}/>
                                                    </Avatar>
                                                    <h3 className='text-purple-800 font-bold'>
                                                        &nbsp;{item?.category?.title}
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className='flex flex-col my-3'>
                                                <h2 className='font-bold'>Vendor</h2>
                                                <div className='flex flex-row items-center justify-center my-1'>
                                                    <Avatar className='border-2 border-red-400'>
                                                        <img src={item?.vendor?.image?.asset?.url} className={'h-full w-full self-center'} alt={'vendor'}/>
                                                    </Avatar>
                                                    <h3 className='text-purple-800 font-bold'>
                                                        &nbsp;{item?.vendor?.vendorName}
                                                    </h3>
                                                </div>
                                            </div>
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

export default Category;