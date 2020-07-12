import TimeAgo from 'timeago-react';
import styles from '../styles/components/wish.module.scss';

const Wish = ({ wish }) => {
  return (
    <div className={styles.wish}>
      {wish.wish}
      <span className={styles['wish__date']}><TimeAgo datetime={wish.date}></TimeAgo></span>
    </div>
  )
}
export default Wish;
