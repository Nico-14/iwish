import Header from '../components/Header';
import { useState, useEffect, useRef } from 'react';
import Wish from '../components/Wish';
import styles from '../styles/pages/wishes.module.scss';
import Link from 'next/link';
import LoadingBar from '../components/LoadingBar';

const Wishes = ({ data }) => {
  const [wishes, setWishes] = useState(data?.wishes || []);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(data?.wishes.length || 0);
  const [order, setOrder] = useState(true);
  const mount = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    if (!mount.current) {
      mount.current = true;
      return;
    }
    const loadWishes = async () => {
      const res = await fetch(`/api/wishes/12?offset=${offset}&order=${order ? 'desc' : 'asc'}`)
      const result = await res.json();
      setWishes(wishes => [...wishes, ...result.wishes]);
      setOffset(offset => offset + 12);
      setLoading(false);
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting && !loading && offset == wishes.length) {
        setLoading(true);
        loadWishes();
      }
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    }
  }, [ref, loading, setLoading, setWishes, offset, setOffset, wishes, order])

  const handleSortOrderClick = () => {
    setOrder(!order);
    setWishes([]);
    setOffset(0);
  }

  return (
    <>
      <LoadingBar loading={loading} />
      <Header />
      <main className="main">
        <div className={styles.sort}>
          <Link href="/">
            <a className={styles.link}>Home</a>
          </Link>
          <button className={styles['sort__order']} onClick={handleSortOrderClick}>Order: {order ? 'Descending' : 'Ascending'}</button>
        </div>
        <div className={styles.wishes}>
          {
            wishes.map((wish, i) => <Wish key={i} wish={wish} />)
          }
          <div ref={ref} />
        </div>
      </main>
      {/* <ul style={{ overflowY: 'auto', padding: '50px' }}>

        <li ref={ref}></li>
      </ul> */}
      <style jsx global>{
        `
        body {
          overflow-y: scroll;
        }
        `
      }</style>
    </>
  )
}

export default Wishes;

export async function getServerSideProps(context) {
  const url = 'http://' + context.req.headers.host;
  const res = await fetch(url + '/api/wishes/12');
  const data = await res.json();
  return { props: { data } }
}
