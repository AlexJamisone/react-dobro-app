import React, { useRef } from 'react'
import { motion, useCycle } from "framer-motion";

//NavItem ~ Desktop
import Logo from './Logo/Logo';
import Tasty from './Tasty/Tasty';
import Yandex from './Yandex/Yandex';

//NavItem ~ Mobile
import BurgerNav from './BurgerNav/BurgerNav';
import { MenuToggle } from './BurgerNav/MenuToggle/MenuToggle';

import './Navigation.scss'

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
			<Tasty/>
			<Logo/>
			<Yandex/>
		
			<BurgerNav />
			<MenuToggle toggle={() => toggleOpen()} />
		</motion.nav>
	)
} 

export default NavBar