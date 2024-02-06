import React from 'react';

const Footer = () => {
    return (
        <div className='w-full bg-gray-800 text-white p-4'>
            <div className='container mx-auto flex items-center justify-between'>
                <div>
                    <h1 className='text-xl font-bold'>Developed by</h1>
                    <p className='text-sm'>Mukilan T, Lokesh P, Natesan K</p>
                </div>
                <div>
                    <p className='text-sm'>
                        <span  className='font-bold'>Karpagam Academy of Higher Education - Metaverse Club</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
