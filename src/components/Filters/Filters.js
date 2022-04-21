import React, {useState} from 'react';
import data from '../../data';

import styles from './Filters.module.css';

const Filters = (props) => {

    const [fixedFilters, setFixedFilters] = useState(false);

    let dataFilters = ['All'];

    data.map(item => {
        if(!dataFilters.includes(item.type)) {
            return dataFilters.push(item.type);
        }
    })

    const filterHandler = (e) => {
      props.onFilterItems(e.target.outerText);
    }

    window.addEventListener('scroll', () => {
      if(window.scrollY > 100) {
        setFixedFilters(true);
      } else {
        setFixedFilters(false);
      }
    })

  return (
    <div className={fixedFilters ? `${styles.filters} ${styles['fixed-filters']}` : styles.filters }>
    {dataFilters.map((filter, index) => <button key={'buttonKey-' + index} onClick={filterHandler} className={styles['filter-button']}>{filter}</button>)}
    </div>
  )
}

export default Filters