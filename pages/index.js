import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/pages/index.module.scss';
import Header from '../components/Header';
import LoadingBar from '../components/LoadingBar';

export default function Home({ data }) {
  const [inputValue, setInputValue] = useState('');
  const [wishes, setWishes] = useState(data?.wishes || []);
  const [loading, setLoading] = useState(false);
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim().length < 6) {
      setInputMessage('El deseo tiene que tener más de 5 carácteres');
    } else if (inputValue.length > 160) {
      setInputMessage('El deseo no puede tener más de 160 carácteres');
    } else {
      setLoading(true);
      try {
        const res = await fetch('/api/wishes/add', {
          method: 'POST',
          body: JSON.stringify({
            wish: inputValue,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (res.status == 200) {
          const result = await res.json();
          if ('wish' in result) {
            setWishes([{ wish: result.wish }, ...wishes].slice(0, 6));
            setInputValue('');
          }
        }
      } catch { }
      setInputMessage('');
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>I wish...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoadingBar loading={loading} />
      <Header />
      <main className="main">
        <form className={styles.form} onSubmit={handleSubmit}>
          <input className={styles['form__input']} placeholder="I wish..." value={inputValue} onChange={
            ({ currentTarget }) => {
              setInputValue(currentTarget.value);
              setInputMessage('');
            }}
            disabled={loading} maxLength="160"></input>
          <button className={styles['form__button'] + ' button'} disabled={loading}>Send</button>
          <span className={styles['form__message']}>{inputMessage}</span>
          <span className={styles['form__character-count']}>{inputValue.length}/160</span>
        </form>
        <article className={styles.latest}>
          <header>
            <h2 className={styles['latest__title']}>Latest wishes</h2>
          </header>
          <section className={styles.wishes}>
            <ul className={styles['wishes__list']}>
              {
                wishes.map((wish, i) => <li className={styles['wishes__item']} key={i}>{wish.wish}</li>)
              }
            </ul>
            <Link href="/wishes">
              <a className={styles['wishes__seemore']}>See more</a>
            </Link>
          </section>
        </article>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const url = 'http://' + context.req.headers.host;
  const res = await fetch(url + '/api/wishes/5');
  const data = await res.json();
  return { props: { data } }
}
