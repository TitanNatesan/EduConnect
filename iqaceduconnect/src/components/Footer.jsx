import React from 'react';

const Footer = () => {
    return (
        <div className='w-full fixed bottom-0 bg-gray-800 text-white p-4'>
            <div className='container mx-auto flex items-center justify-between'>
                <div>
                    <h1 className='text-xl font-bold'>Developed by</h1>
                    <p className='text-sm'> <a href="https://titan-portfolio.netlify.app/">Natesan K,</a> <a href="https://mukilan.co">Mukilan T,</a> <a href="https://lokeshdev.co/">Lokesh P</a></p>
                </div>
                <div>
                    <p className='text-sm'>
                        <span  className='font-bold'>Karpagam Academy of Higher Education - Metaverse Association</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
