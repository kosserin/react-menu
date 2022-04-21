import React from 'react';
import { motion } from 'framer-motion';

import styles from './MenuItem.module.css';

const MenuItem = (props) => {
  return (
      <motion.li layout initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .25}} id={'menu-item-' + props.id} className={styles['menu-item']}>
    <div className={styles['image-holder']}>
      <img src={props.image} alt={props.name} />
    </div>
    <div className={styles['menu-item__text']}>
      <div className={styles['menu-item__header']}>
        <h2>{props.name}</h2>
        <h3>${props.price}</h3>
      </div>
      <p>{props.desc}</p>
    </div>
    </motion.li>
  )
}

export default MenuItem