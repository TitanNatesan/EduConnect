import React from 'react';

const Footer = () => {
    return (
        <div className='w-full bg-gray-800 text-white p-4'>
            <div className='container mx-auto flex items-center justify-between'>
                <div>
                    <h1 className='text-xl font-bold'>Developed by</h1>
                    <p className='text-sm'> <a href="https://natesanportfolio.netlify.app">Natesan K,</a> <a href="https://mukilan-portfolio.netlify.app">Mukilan T,</a> <a href="https://lokeshdev.co/">Lokesh P</a></p>
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
