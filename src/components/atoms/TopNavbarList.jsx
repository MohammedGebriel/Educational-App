import React from 'react'
import { Link } from 'react-router-dom'

export default function TopNavbarList({link,children}) {
    return (
        <Link to={link} className='  hover:text-[#ee4a62] py-3 px-6  not-last:border-r border-[#363A47]'>{children}</Link>
    )
}
