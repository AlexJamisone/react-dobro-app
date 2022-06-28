import React from 'react'
import { motion } from 'framer-motion'
import { MenuItem } from '../MenuItem/MenuItem';



const Navigation = () => {
    const itemIds = ['Кофе', 'Яндекс']  
    const variants = {
        open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    };


    return (
    <motion.ul variants={variants} className='burger'>
        {itemIds.map(i => (
            <MenuItem i={i} key={i} />
        ))}
    </motion.ul>
    )
}

export default Navigation