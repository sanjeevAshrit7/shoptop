import { Backdrop } from '@material-ui/core';
import React from 'react';
import Lottie from "lottie-react";

import cycler from '../cycler.json'

const customStyles = {
    navItem1: 'inflex-flex items-center py-3 px-3 my-6 rounded text-red-600 hover:text-yellow-200 hover:bg-purple-400 hover:rounded-xl font-bold cursive',
    navItem2: 'inflex-flex items-center py-3  my-3 rounded text-red-600 hover:text-yellow-200 hover:bg-purple-400 hover:rounded-xl font-bold cursive text-center'
};

export const  Loader = (props) => {
    const  {open} = props;
    return(
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <div className='flex flex-col items-center'>
                    <Lottie
                        animationData={cycler}
                        loop={true} 
                    />
                    <h1 className='text-3xl flex justify-center cursive text-white'>Loading Data</h1>
                </div>
            </Backdrop>
        </div>
    )
};

export const navData = [
    {
        id: 1,
        name: 'ShopTop',
        style: 'inflex-flex items-center py-6 px-3 mr-4 text-red-600 hover:text-white text-4xl font-bold tracking-widest',
        to: '/',
    },
    {
        id: 2,
        name: 'Categories',
        style: customStyles.navItem1,
        to: '/categories',
    },
    {
        id: 3,
        name: 'Products',
        style: customStyles.navItem1,
        to: '/Product',
    },
    {
        id: 4,
        name: 'vendors',
        style: customStyles.navItem1,
        to: '/vendors',
    },
    {
        id: 5,
        name: 'About Us',
        style: customStyles.navItem1,
        to: '/About',
    },
    {
        id:6,
        name: 'contact Us',
        style: customStyles.navItem1,
        to: '',
    }
];

export const navDataMini = [
    {
        id: 1,
        name: 'ShopTop',
        style: 'inflex-flex items-center py-3 text-red-600 hover:text-white text-4xl font-bold tracking-widest text-center',
        to: '/',
    },
    {
        id: 2,
        name: 'Categories',
        style: customStyles?.navItem2,
        to: '/Categories',
    },
    {
        id: 3,
        name: 'Products',
        style: customStyles?.navItem2,
        to: '/Product',
    },
    {
        id: 4,
        name: 'vendors',
        style: customStyles?.navItem2,
        to: '/vendors',
    },
    {
        id: 5,
        name: 'About Us',
        style: customStyles?.navItem2,
        to: '/About',
    },
    {
        id: 6,
        name: 'contact Us @',
        style: customStyles?.navItem2,
        to: '',
    }
];

export const contacts =  [
    {
        id: 1,
        name: 'ShopTop@Bangalore.com',
        style: 'text-white cursive text-center my-1',
        style2: '',
    },
    {
        id: 2,
        name: 'ShopTop@Mumbai.com',
        style: 'text-white cursive text-center my-1',
        style2: '',
    },
    {
        id: 3,
        name: '8904616217',
        style: 'text-white cursive text-center my-1',
        style2: '',
    }
];
