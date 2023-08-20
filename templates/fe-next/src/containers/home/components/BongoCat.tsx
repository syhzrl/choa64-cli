import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import bongo from '../../../../public/bongo-cat.gif';

const BongoCat: FunctionComponent = () => {
    return (
        <div className='text-white flex items-center justify-center w-[300px] h-[300px]'>
            <Image
                src={bongo}
            />
        </div>
    )
}

export default BongoCat;