import React, { FunctionComponent } from 'react';

const HomeScreen: FunctionComponent = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen gap-4 text-white bg-slate-900'>
            <h1 className='text-6xl'>
                Bongo CLI React Vite Template
            </h1>
        </div>
    )
}

export default HomeScreen;