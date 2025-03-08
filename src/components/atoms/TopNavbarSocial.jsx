import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function TopNavbarSocial() {
    return (
        <ul className='py-3 px-4 hidden xl:flex items-center gap-5'>
            <li className='hover:text-[#ee4a62]'>
                <Link to='https://www.facebook.com'>
                    <FaFacebookF />
                </Link>
            </li>
            <li className='hover:text-[#ee4a62]'>
                <Link to='https://www.twitter.com'>
                    <FaTwitter />
                </Link>
            </li>
            <li className='hover:text-[#ee4a62]'>
                <Link to='https://www.linkedin.com'>
                    <FaLinkedin />
                </Link>
            </li>
            <li className='hover:text-[#ee4a62]'>
                <Link to='https://www.instagram.com'>
                    <FaInstagram />
                </Link>
            </li>
            
        </ul>
    )
}
