import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconMenuDeep, IconDashboard, IconUser, IconSearch, IconUsers,IconLayoutDashboard,IconDeviceImacQuestion } from '@tabler/icons-react';

function Sidebar() {
    const [open, setOpen] = useState(true);
    const [activeItem, setActiveItem] = useState('dashboard'); // Set initial active item to 'dashboard'

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        <div className="lg:relative relative">
            <div className={`${open ? "lg:w-[220px] w-[150px] h-screen lg:static absolute" : "lg:w-[50px] w-[0px] h-[0px] "} duration-300 lg:bg-green-700 bg-green-700 lg:h-screen sidebar-text`} >
                <div className='flex justify-between relative'>
                    <h1 className={`ml-16 pt-3 ${open ? 'lg:text-[40px] hidden' : 'lg:text-[0px] hidden'} sm:block`}>Logo</h1>
                    <IconMenuDeep stroke={2} className={`absolute ${open ? "lg:left-56 lg:top-2 lg:text-black text-black" : "lg:top-2 lg:text-white lg:left-2 "} left-2 top-2`} onClick={() => setOpen(!open)} />
                </div>
                <div className='flex lg:justify-center'>
                    <ul className='lg:pt-9 lg:pl-2 pt-11 pl-2 flex flex-col lg:gap-9 gap-4 text-white justify-items-center'>
                        <div className='flex justify-between'>
                            <li className={`${activeItem === 'dashboard' ? 'text-white' : 'text-opacity-40'} ${open ? 'lg:text-[20px] text-[14px]' : 'hidden lg:text-[14px]'} font-[Century Gothic] font-medium opacity-[1]`}>
                                <Link to="/" onClick={() => handleItemClick('dashboard')}>Dashboard</Link>
                            </li>
                            <IconLayoutDashboard stroke={1} className={` ${open ? 'hidden' : 'lg:w-[30px] lg:h-[30px] lg:mr-3 h-[0px] w-[0px]'}`} />
                        </div>
                        <div className='flex justify-between'>
                            <li className={`${activeItem === 'customer' ? 'text-white' : 'text-opacity-40'} ${open ? 'lg:text-[20px] text-[14px]' : 'hidden lg:text-[14px]'} font-[Century Gothic] font-medium opacity-[1]`}>
                                <Link to="/customer" onClick={() => handleItemClick('customer')}>Customer</Link>
                            </li>
                            <IconUser stroke={1} className={` ${open ? 'hidden' : 'lg:w-[30px] lg:h-[30px] lg:mr-3 h-[0px] w-[0px]'}`} />
                        </div>
                        <div className='flex justify-between'>
                            <li className={`${activeItem === 'search' ? 'text-white' : 'text-opacity-40'} ${open ? 'lg:text-[20px] text-[14px]' : 'hidden lg:text-[14px]'} font-[Century Gothic] font-medium opacity-[1]`}>
                                <Link to="/search" onClick={() => handleItemClick('search')}>Search</Link>
                            </li>
                            <IconSearch stroke={1}className={` ${open ? 'hidden' : 'lg:w-[30px] lg:h-[30px] lg:mr-3 h-[0px] w-[0px]'}`} />
                        </div>
                        <div className='flex justify-between'>
                            <li className={`${activeItem === 'solution' ? 'text-white' : 'text-opacity-40'} ${open ? 'lg:text-[20px] text-[14px]' : 'hidden lg:text-[14px]'} font-[Century Gothic] font-medium opacity-[1]`}>
                                <Link to="/solution" onClick={() => handleItemClick('solution')}>Solution</Link>
                            </li>
                            <IconDeviceImacQuestion stroke={1} className={` ${open ? 'hidden' : 'lg:w-[30px] lg:h-[30px] lg:mr-3 h-[0px] w-[0px]'}`} />
                        </div>
                        <div className='flex justify-between'>
                            <li className={`${activeItem === 'admin' ? 'text-white' : 'text-opacity-40'} ${open ? 'lg:text-[20px] text-[14px]' : 'hidden lg:text-[14px]'} font-[Century Gothic] font-medium opacity-[1]`}>
                                <Link to="/admin" onClick={() => handleItemClick('admin')}>Admin</Link>
                            </li>
                            <IconUsers stroke={1} className={` ${open ? 'hidden' : 'lg:w-[30px] lg:h-[30px] lg:mr-3 h-[0px] w-[0px]'}`} />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
