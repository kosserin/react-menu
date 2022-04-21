import React from 'react';
import MenuItem from './MenuItem';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './MenuList.module.css';

const MenuList = (props) => {
  return (
    <motion.ul layout className={styles['menu-list']}>
    <AnimatePresence>
    {props.data.map(item => <MenuItem key={item.id} id={item.id} name={item.name} desc={item.desc} price={item.price} image={item.image} />)}
    </AnimatePresence>
    </motion.ul>
  )
}

export default MenuList