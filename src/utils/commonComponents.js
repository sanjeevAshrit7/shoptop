import { Backdrop } from '@material-ui/core';
import React from 'react';
import Lottie from "lottie-react";
import cycler from '../cycler.json'

export const  Loader = (props) => {
    const  {open} = props;
    return(
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <div className='flex flex-col items-center'>
                    {/* <CircularProgress color='secondary' className='my-10' /> */}
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
