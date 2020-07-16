import styles from '../styles/components/loadingBar.module.scss';
import { useState, useEffect } from 'react';

const LoadingBar = ({ loading }) => {
  const [ending, setEnding] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let interval;
    if (loading || ending && progress < 1) {
      interval = setInterval(() => {
        setProgress(progress + (loading && progress < 0.8 ? 0.001 : ending ? 0.04 : 0));
      }, 10);
    } else if (!loading && !ending && progress > 0 && progress < 1) {
      setEnding(true);
    } else {
      setProgress(0);
      setEnding(false);
    }
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [loading, ending, progress, setProgress])

  return (
    <>
      {
        loading || ending ?
          <div className={styles.bar
          } >
            <span className={styles['bar__loader']} style={{ width: progress * 100 + '%' }}></span>
          </div >
          : ''
      }
    </>
  )
}

export default LoadingBar;
