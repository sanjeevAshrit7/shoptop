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

function Categories() {
    const [categories, setCategories] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        SanityClient.fetch(
            `*[_type == "categories"]{
                title,
                slug,
                description,
                image{
                    asset->{
                        _id,
                        url
                    }
                },
                hexCode
            }`
        ).then((data) => {
            setCategories(data)
            // console.log('data', data)
        }).catch((error) => {
            console.log('error while fetching categories')
        })
    }, [])
    return (
        <main className='bg-green-100 min-h-screen p-12'>
            <section className='container mx-auto '>
                <h1 className='text-5xl flex justify-center cursive'>Categories</h1>
                <h2 className='text-lg text-gray-600 flex justify-center mb-12 my-3'>categories that we currently support</h2>
                <div className='grid md:grid-cols-2 lg:gid-cols-3 gap-6'>
                    {categories?.map((category, index) => {
                        return (
                            <Card
                                className={'container mx-auto bg-red-700 border-l-8 border-blue-900 hover:drop-shadow-xl hover:border-red-800'}
                                sx={{ }}
                                key={index}
                            >
                                <Link to={"/category/"+category?.title} key={category?.slug?.current}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={category?.image?.asset?.url}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant='h5' component="h2">
                                                {category?.title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {category?.description}
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

export default Categories;
