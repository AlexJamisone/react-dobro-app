import React, { useRef } from 'react'
import {ReactComponent as TastyLogo } from '../../assets/navigation/tasty.svg'
import {ReactComponent as YandexLogo } from '../../assets/navigation/yandex.svg'
import {ReactComponent as MainLogo } from '../../assets/navigation/logo.svg'
import { motion, useCycle } from "framer-motion";


import './NavBar.scss'
import Navigation from '../Menu/Navigation/Navigation';
import { MenuToggle } from '../Menu/MenuToggle/MenuToggle';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const NavBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <motion.nav 
      className='nav'
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
    >
      <TastyLogo className='nav-logo-tasty'/>
      <MainLogo className='nav-logo'/>
      <YandexLogo className='nav-logo-yandex'/>
      
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}

export default NavBar