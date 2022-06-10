import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
    let links = [
        { name: 'HOME', link: '/' },
        { name: 'ABOUT', link: '/about' },
        { name: 'SERVICE', link: '/service' },
        { name: 'BLOGS', link: '/blogs' },
        { name: 'CONTACT', link: '/contact' }
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='md:shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex flex-row-reverse items-center justify-between md:py-4 py-2 md:px-10 px-7'>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute md:right-8 left-8 top-6 cursor-pointer md:hidden'>
                    {
                        open ? <i className='fa-solid fa-xmark absolute left-40 duration-500 ease-in-out '></i> : <i className='fa-solid fa-bars'></i>
                    }

                </div>
                <ul className={`h-screen md:h-0 md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-white shadow-xl md:z-auto z-[-1] left-0 w-64 md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'pl-8 opacity-100' : 'left-[-490px] opacity-0'} md:opacity-100`}>
                    {
                        links.map(link => <li
                            onClick={() => setOpen(!open)}
                            className='md:ml-8 text-lg font-semibold md:my-0 my-5'
                            key={link.name}>
                            <Link className='text-black hover:text-gray-500 duration-500' to={link.link}>{link.name}</Link>
                        </li>)
                    }
                    <Button>Get Started</Button>
                </ul>
                <div className='flex font-bold cursor-pointer text-2xl items-center text-gray-800 absolute right-8 md:left-8 md:static'>
                    <span className='text-4xl mr-1 pt-2 '>
                        <i className="fa-brands fa-apple"></i>
                    </span>
                    Apple
                </div>

            </div>
        </div>
    );
};

export default Navbar;