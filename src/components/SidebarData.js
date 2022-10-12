import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';

export const SidebarData=[
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Pay',
        path:'/pay',
        icon:<BsIcons.BsFillFileTextFill/>,
        
        cName:'nav-text'
    },
    {
        title:'Products',
        path:'/products',
        icon:<FaIcons.FaCartPlus/>,
        cName:'nav-text'
    },
    {
        title:'Team',
        path:'/dash',
        icon:<RiIcons.RiTeamFill/>,

        cName:'nav-text'
    },
    {
        title:'Messages',
        path:'/About',
        icon:<FaIcons.FaEnvelopeOpenText/>,
        cName:'nav-text'
    },
    {
        title:'Support',
        path:'/support',
        icon:<IoIcons.IoMdHelpCircle/>,
        cName:'nav-text'
    },
]