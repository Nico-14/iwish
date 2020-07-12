import styles from '../styles/components/select.module.scss';
import { useState } from 'react';

const Select = ({ items, selected = 0, onSelect }) => {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelected] = useState(selected);

  const handleClickItem = (index) => {
    setSelected(index);
    if (onSelect) onSelect(index);
  }

  return (
    <div className={styles.select + (show ? ' ' + styles.selected : '')} onClick={() => setShow(!show)}>
      {items?.length > 0 ? items[selectedItem] : ''}
      <svg className={styles['select__icon']} width="16" height="16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.9845 48.9369C31.6184 48.9375 31.2671 48.7894 31.008 48.5249L0.663836 17.4911C0.134582 16.9308 0.14984 16.0378 0.697715 15.4965C1.23227 14.9686 2.07962 14.9686 2.61405 15.4965L31.9844 45.5315L61.352 15.4937C61.8813 14.9334 62.7543 14.9179 63.3023 15.4591C63.8502 16.0003 63.8653 16.8933 63.3362 17.4537C63.3251 17.4655 63.3139 17.477 63.3023 17.4884L32.9583 48.5222C32.7002 48.7869 32.3499 48.936 31.9845 48.9369Z" fill="black" />
      </svg>
      {
        show ?
          <ul className={styles['select__items']}>
            {items?.map((item, i) => <li className={styles['select__item'] + (i === selectedItem ? ' ' + styles.selected : '')} key={i} onClick={() => handleClickItem(i)}>{item}</li>)}
          </ul> : ''
      }
    </div >
  )
}

export default Select;
