import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import 'globals.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <>
            <Head>
                <title>INSERT TITLE HERE</title>
                <meta name='description' content={'INSERT DESC HERE'} />
                <link rel='icon' href='/port-icon.ico' />
            </Head>

            <Component {...pageProps} />
        </>
    );
};

export default App;
