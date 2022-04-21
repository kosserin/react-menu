import React, {useState} from 'react';
import Filters from '../Filters/Filters';
import MenuList from './MenuList';
import data from '../../data';
import { motion } from 'framer-motion';
import {container, item} from '../../framer-variable';

import styles from './Menu.module.css';

const Menu = () => {
  
  const [filteredItems, setFilteredItems] = useState(data);
  
  const filterItemsHandler = (typeOfItem) => {
    if(typeOfItem === "All") {
      setFilteredItems(data)
    } else {
      setFilteredItems(prevItems => {
        return data.filter(d => d.type === typeOfItem);
      })
    }
  }

  return (
    <motion.main variants={container} initial="hidden" animate="show">
        <motion.h1 variants={item}>Our menu</motion.h1>
        <motion.div variants={item} className={styles.line}></motion.div>
        <motion.div variants={item}>
          <Filters onFilterItems={filterItemsHandler} />
        </motion.div>
        <motion.div variants={item}>
          <MenuList data={filteredItems} />
        </motion.div>
    </motion.main>
  )
}

export default Menu