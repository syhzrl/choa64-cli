import React, { FunctionComponent } from 'react';
import BongoCat from './components/BongoCat';

const HomeScreen: FunctionComponent = () => {
    return (
        <div className='bg-slate-900 text-white h-screen flex items-center justify-center flex-col gap-4'>
            <h1 className='text-6xl'>
                Bongo CLI Front End Template
            </h1>

            <BongoCat />
        </div>
    )
}

export default HomeScreen;