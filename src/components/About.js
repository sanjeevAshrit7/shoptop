import React from 'react';
import { Carousel } from 'antd';
// import 'antd/dist/antd.less'; // or 'antd/dist/antd.css'
import 'antd/dist/antd.min.css'

import foodsAboutImg from '../fg.jpg';
import { useMediaQuery } from 'react-responsive';

function About() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const afterChange = (current) => {
        console.log('current', current)
    }

    return (
        <section className="container w-full lg:px-0 px-5 lg:w-3/4 mx-auto min-h-screen">
            <div className="mt-16">
                <h3 className="text-3xl font-bold text-center my-10 lg:my-5">
                    About Us🦻
                </h3>
                <div className="flex gap-10 justify-center items-center flex-col lg:flex-row mt-10">
                    <div className="">
                        <img
                            src={foodsAboutImg}
                            className="w-96 rounded-xl lg:rounded-l-xl"
                            alt="food"
                        />
                    </div>
                    <div className="w-full lg:w-1/3 flex gap-5 mb-10 lg:mb-0 flex-col">
                        ⭐⭐⭐
                        <p>
                            A healthy diet rich in fruits, vegetables, whole grains and
                            low-fat dairy can help to reduce your risk of heart disease by
                            maintaining blood pressure and cholesterol levels. High blood
                            pressure and cholesterol can be a symptom of too much salt and
                            saturated fats in your diet.
                        </p>
                        <p>
                            Many healthful foods, including vegetables, fruits, and beans, are
                            lower in calories than most processed foods.
                        </p>
                        <p>
                            Children learn most health-related behaviors from the adults
                            around them, and parents who model healthful eating and exercise
                            habits tend to pass these on.
                        </p>
                        ⭐⭐⭐
                    </div>
                </div>
                {!isTabletOrMobile &&
                    <Carousel
                        afterChange={afterChange}
                        autoplay
                        className={isTabletOrMobile ?
                            'flex w-60 container rounded-full my-10' :
                            'flex flex-wrap rounded-full items-stretch my-10 '
                        }
                    >
                        <div className='text-justify h-40 bg-purple-200 rounded-3xl px-10 py-10'>
                            <span className='text-justify text-sm font-bold'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </span>
                        </div>
                        <div className='text-justify h-40 bg-green-200 rounded-3xl px-10 py-10'>
                            <span className='text-justify text-sm font-bold'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </span>
                        </div>
                        <div className='text-justify h-40 bg-pink-200 rounded-3xl px-10 py-10'>
                            <span className='text-justify text-sm font-bold'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </span>
                        </div>
                        <div className='text-justify h-40 bg-blue-200 rounded-3xl px-10 py-10'>
                            <span className='text-justify text-sm font-bold'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </span>
                        </div>
                    </Carousel>
                }
            </div>
        </section>
    )
}

export default About;
