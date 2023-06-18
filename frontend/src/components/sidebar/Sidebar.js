import React, { Children, useState } from 'react';
import "./Sidebar.scss";
import {HiCurrencyDollar} from "react-icons/hi";
import {FiMenu} from "react-icons/fi";
import menu from  "../../data/sidebar"
import SidebarItem from './SidebarItem';
import { useNavigate } from 'react-router-dom';


const Sidebar = ({Children}) => {

    const [isOpen , setIsOpen] = useState(true)
    const toggle = () => setIsOpen(!isOpen);
    const navigate = useNavigate();

    const goHome = ()=>{
        navigate("/")
    };

  return (
    <div className='layout'>
        <div className='sidebar' style={{width: isOpen ? "230px" : "60px"}}>

            <div className='top_section'>
                <div className="logo" style={{ display: isOpen ? "block" : "none" }}>
                    <HiCurrencyDollar size={30} style={{cursor:'pointer'}} onClick={goHome}/>
                </div>

                <div className='bars' style={{marginLeft: isOpen ? "100px" : "0px"}}>
                   <FiMenu onClick={toggle}/>
                </div>
            </div>
            {menu.map((item, index) => {
                return <SidebarItem key={index} item={item} isOpen={isOpen}/>
            })}
        </div>
        <main style={{paddingLeft: isOpen? "230px" : "60px" , transition:"all .5s"}}>{Children}</main>
    </div>
  );
};

export default Sidebar;