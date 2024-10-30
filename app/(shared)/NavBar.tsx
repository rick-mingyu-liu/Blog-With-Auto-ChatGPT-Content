import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import SocialLinks from './socialLinks';

type Props = {};

const NavBar = (props: Props) => {
    return (
        <header className='mb-5'>
            <nav className='flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4'>
                <div className='hidden sm:block'>
                    <SocialLinks />
                </div>
                <div className='flex justify-between items-center gap-10'>
                    <Link href="/">Home</Link>
                    <Link href="/">Trending</Link>
                    <Link href="/">About</Link>
                </div>
                <div>
                    Sign In
                </div>
            </nav>
            <div className='flex justify-between gap-8 mt-5 mb-4 mx-10'>
                <div className='basis-2/3 md:mt-3'>
                    <h1 className='font-bold text-3xl md:text-5xl'>
                        BLOG OF THE FUTURE
                    </h1>
                    <p className='text-sm mt-3'>
                        Blog dedicated towards AI and generation and job automation
                    </p>
                </div>
                <div className='basis-full relative w-auto h-32 bg-wh-500'>
                    image right here
                </div>
            </div>
            <hr className='border-1 mx-10' />
        </header>
    );
};

export default NavBar;