import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import SanityBlockContent from '@sanity/block-content-to-react';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import SanityClient from '../client';
import { Loader } from '../utils/commonComponents';


function Vendors() {
    const [vendors, setVendors] = useState([]);
    const [loading, setLoading] = useState(false);

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    useEffect(() => {
        setLoading(true);
        SanityClient.fetch(`*[_type == "vendors"]{
            vendorName,
            slug,
            image{
                asset->{
                    _id,
                    url
                }
            },
            bio
        }`).then((data) => {
            setVendors(data);
            setLoading(false);
            // console.log('vendors', vendors)
        }).catch((error) => {
            console.log('error', error)
            setLoading(false);
        })
    }, [])

    if (loading) {
        return (
            <Loader open={loading} />
        )
    } else {
        return (
            <main className='bg-red-100 min-h-screen p-12'>
                <section className='container mx-auto '>
                    <h1 className='text-5xl flex justify-center cursive'>Our vendors🥗</h1>
                    <h2 className='text-lg text-gray-600 flex justify-center mb-12 my-3'>Products that we currently support</h2>
                    <div className='mx-2'>
                        {isTabletOrMobile ?
                            <React.Fragment>
                                {vendors.map((item, index) => {
                                    return(
                                        <List
                                            key={index}
                                            sx={{}}
                                            className={'bg-purple-900 w-full rounded-xl hover:border-4 hover:border-yellow-200 my-8 hover:bg-purple-800'}
                                            style={
                                                {
                                                    marginTop: '30px'
                                                }
                                            }>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar className='border-white border-2'>
                                                        <img
                                                            src={item?.image?.asset.url}
                                                            alt='company'
                                                        />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    className='text-white font-bold'
                                                    primary={item?.vendorName}
                                                />
                                            </ListItem>
                                            <ListItem>
                                                <div className='text-self-center flex-1'>
                                                    <SanityBlockContent blocks={item?.bio} projectId={"opfu2gs4"} dataset={"production"} className={'text-white cursive'} />
                                                </div>
                                            </ListItem>
                                        </List> 
                                    );
                                })
                                }
                            </React.Fragment> :
                            <React.Fragment>
                                {vendors.map((item, index) => {
                                    return (
                                        <List
                                            key={index}
                                            sx={{}}
                                            className={'bg-purple-900 w-full rounded-xl hover:border-4 hover:border-yellow-200 my-8 hover:bg-purple-800'}
                                            style={
                                                {
                                                    marginTop: '30px'
                                                }
                                            }>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar className='border-white border-2'>
                                                        <img
                                                            src={item?.image?.asset.url}
                                                            alt='company'
                                                        />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    className='text-white font-bold'
                                                    primary={item?.vendorName}
                                                />
                                                <div className='text-self-center flex-1'>
                                                    <SanityBlockContent blocks={item?.bio} projectId={"opfu2gs4"} dataset={"production"} className={'text-white cursive'} />
                                                </div>
                                            </ListItem>
                                        </List>
                                    );
                                })}
                            </React.Fragment>
                        }
                    </div>
                </section>
            </main>
        )
    }
}

export default Vendors;
