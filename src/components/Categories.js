import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import Tooltip from '@mui/joy/Tooltip';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import addData from '../api';
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

function Categories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const classes = useStyles();

    // const addDat = async () => {
    //     const res = await fetch('../api/addData', {
    //         method: 'POST',
    //         body: JSON.stringify({ _id: recipe?._id })
    //     }
    //     ).catch((error) => console.log(error))

    //     const data = await res.json();

    //     setLikes(data?.likes);
    // }

    useEffect(() => {
        setLoading(true)
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
            setLoading(false);
        }).catch((error) => {
            console.log('error while fetching categories')
            setLoading(false);
        })
    }, [])
    if (loading) {
        return (
            <Loader open={loading}/>
        )
    } else {
        return (
            <main className='bg-green-100 min-h-screen p-12'>
                <section className='container mx-auto '>
                    <h1 className='text-5xl flex justify-center cursive'>Categories</h1>
                    <h2 className='text-lg text-gray-600 flex justify-center mb-12 my-3'>categories that we currently support</h2>
                    <div className='grid md:grid-cols-2 lg:gid-cols-3 gap-6'>
                        {categories?.map((category, index) => {
                            return (
                                <Tooltip
                                    title={`click this see all ${category.title}`}
                                    placement="top"
                                >
                                    <Card
                                        className={'container mx-auto bg-red-700 border-l-8 border-blue-900 hover:drop-shadow-xl hover:border-red-800 my-4'}
                                        key={index}
                                    >
                                        <Link to={"/category/" + category?.title} key={category?.slug?.current}>
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
                                </Tooltip>
                            )
                        })}
                    </div>
                </section>
            </main>
        )
    }
}

export default Categories;
