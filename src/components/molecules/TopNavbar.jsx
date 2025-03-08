import React from 'react'
import { Link } from 'react-router-dom'
import TopNavbarList from '../atoms/TopNavbarList'
import { FaPhone } from "react-icons/fa6";
import TopNavbarSocial from '../atoms/TopNavbarSocial'
import { FaEnvelope } from 'react-icons/fa';

export default function TopNavbar() {
    return (
        <div className='bg-[#1f2432] px-5 text-white hidden  lg:flex items-center justify-between'>
            <p className="text-lg">
                First 20 students get 50% discount. <Link to='/' className='text-[#ee4a62] underline'>Hurry up!</Link>
            </p>
            <ul className='flex items-center '>
                <TopNavbarList link='/login'>
                    Login
                </TopNavbarList>
                <TopNavbarList link='/register'>
                    Register
                </TopNavbarList>
                <TopNavbarList link='tel:123 456 7899'>
                    <div className='flex items-center gap-2'>
                        <FaPhone className=' text-[#EE4A62]' />
                        <span>Call: 123 456 7899</span>
                    </div>
                </TopNavbarList>
                <TopNavbarList link='mail:info@education.com'>
                    <div className='flex items-center gap-2'>
                        <FaEnvelope className=' text-[#EE4A62]' />
                        <span>Email: info@education.com</span>
                    </div>
                </TopNavbarList>
                <TopNavbarSocial />
            </ul>
        </div>
    )
}
