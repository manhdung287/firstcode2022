
import Button from 'lib/Button';
import React, { useEffect, useState } from 'react';

import Header from './Header';
import SideBar from './SideBar';


function Home() {

    return (
        <div className={'home pt-14  text-white'}>
            <div />
            <div className='border-l border-gray-700 border-solid'>
                <div className='w-full h-screen -mt-14 flex items-center justify-center flex-col max-w-lg m-auto text-left'>
                    <p className='extrabold text-7xl uppercase mr-auto mb-12 '>Hello,</p>
                    <p className='text-xl mr-auto'>I am Ngu Manh Dung, web developer from Nghe An, Viet Nam. I have rich experience in web site  building and customization .</p>
                    <div className='mt-8 mr-auto'>
                        <Button text={'Portfolio'} className={'mr-4 border-purple-base bg-purple-base hover:text-purple-base text-white'} bgAnimation='bg-black'/>
                        <Button text={'hire me'} className={'hover:text-purple-base'} bgAnimation='bg-white'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;