import styles from '../styles/components/header.module.scss';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappIcon, WhatsappShareButton, TelegramShareButton, RedditIcon, RedditShareButton, TelegramIcon } from 'react-share';
import { useState } from 'react';

const URL = 'https://iwish.vercel.app/'
const Header = () => {
  const [showShare, setShowShare] = useState(true);
  return (
    <>
      <header className={styles.header}>
        <h1>
          I wish...
      </h1>
        <svg width="80" height="80" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg" className={styles['header__star']}>
          <path d="M32.3349 41.2083C32.4999 40.9606 32.7816 40.812 33.0831 40.8138H39.5689L42.0151 34.4076C42.1863 33.9566 42.6976 33.7273 43.1569 33.8955C43.3982 33.9838 43.5886 34.1706 43.6785 34.4076L46.1247 40.8138H52.6104C53.1006 40.8137 53.4981 41.2037 53.4982 41.685C53.4983 41.9764 53.35 42.2486 53.103 42.4103L47.7774 45.8953L49.8979 51.8553C50.0602 52.3095 49.8168 52.8069 49.3542 52.9661C49.0905 53.057 48.7987 53.0206 48.5664 52.868L42.8467 49.1233L37.126 52.8706C36.7188 53.1386 36.1675 53.0318 35.8945 52.632C35.7385 52.4036 35.7015 52.1164 35.7946 51.8571L37.9178 45.9006L32.5921 42.4147C32.1818 42.1513 32.0667 41.6112 32.3349 41.2083ZM39.4738 44.8224C39.8111 45.0428 39.9534 45.4595 39.8199 45.8351L38.3447 49.9728L42.3541 47.3497C42.6523 47.1543 43.0411 47.1543 43.3393 47.3497L47.346 49.9728L45.8708 45.8342C45.7382 45.4583 45.8818 45.042 46.2196 44.8224L49.6813 42.5566H45.5095C45.1393 42.5568 44.8077 42.3314 44.6778 41.991L42.8467 37.1953L41.0155 41.9884C40.8865 42.3298 40.5548 42.5564 40.1839 42.5566H36.0121L39.4738 44.8224Z" />
          <path d="M8.85858 7.95323L33.7115 32.3543L32.4563 33.5867L7.60332 9.18567L8.85858 7.95323Z" />
          <path d="M9.74701 17.5409L29.2726 36.7115L28.0174 37.9439L8.49175 18.7733L9.74701 17.5409Z" />
          <path d="M29.2743 12.3117L48.7999 31.4823L47.5447 32.7147L28.019 13.5441L29.2743 12.3117Z" />
          <path d="M25.7225 8.82281L27.4974 10.5655L26.2422 11.7979L24.4673 10.0552L25.7225 8.82281Z" />
          <path d="M32.3793 21.4607L39.0365 27.9969L37.7813 29.2293L31.124 22.6931L32.3793 21.4607Z" />
          <path d="M24.8361 40.199L33.7109 48.9124L32.4556 50.1448L23.5809 41.4314L24.8361 40.199Z" />
          <path d="M16.8468 32.3584L23.0598 38.4583L21.8045 39.6907L15.5916 33.5908L16.8468 32.3584Z" />
          <path d="M13.2961 28.8683L15.071 30.6109L13.8158 31.8434L12.0408 30.1007L13.2961 28.8683Z" />
          <path d="M1.75741 0.982189L7.08284 6.2108L5.82758 7.44323L0.502151 2.21462L1.75741 0.982189Z" />
          <path d="M6.19515 14.0571L7.9701 15.7998L6.71483 17.0322L4.93989 15.2895L6.19515 14.0571Z" />
          <path d="M29.2732 18.4112L31.0481 20.1539L29.7929 21.3863L28.0179 19.6437L29.2732 18.4112Z" />
          <path d="M25.7227 14.923L27.4976 16.6656L26.2424 17.898L24.4674 16.1554L25.7227 14.923Z" />
        </svg>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className={styles['paypal-donate']}>
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="U565KVVK6M7F6" />
          <input type="submit" value="Help with a donation" className="button"></input>
        </form>
        <button className={'button ' + styles['share-button']} onClick={() => setShowShare(true)}>Share</button>
      </header>
      {showShare ?
        <div className={styles['share']}>
          <div className={styles['share__modal']}>
            <div className={styles['share__modal-header']}>
              <h2 className={styles['share__modal-title']}>Share</h2>
              <button className={styles['share__modal-close']} onClick={() => setShowShare(false)}>
                <svg width="12" height="12" viewBox="0 0 64 64" fill="#313131" xmlns="http://www.w3.org/2000/svg">
                  <path d="M37.8634 32.0524L62.7837 7.1313C64.4055 5.51029 64.4055 2.88933 62.7837 1.26832C61.1627 -0.352698 58.5418 -0.352698 56.9208 1.26832L31.9997 26.1894L7.07931 1.26832C5.45754 -0.352698 2.83734 -0.352698 1.21633 1.26832C-0.405443 2.88933 -0.405443 5.51029 1.21633 7.1313L26.1367 32.0524L1.21633 56.9735C-0.405443 58.5945 -0.405443 61.2155 1.21633 62.8365C2.02418 63.6451 3.08638 64.0513 4.14782 64.0513C5.20926 64.0513 6.27071 63.6451 7.07931 62.8365L31.9997 37.9154L56.9208 62.8365C57.7294 63.6451 58.7908 64.0513 59.8522 64.0513C60.9137 64.0513 61.9751 63.6451 62.7837 62.8365C64.4055 61.2155 64.4055 58.5945 62.7837 56.9735L37.8634 32.0524Z" />
                </svg>
              </button>
            </div>
            <div className={styles['share__modal-body']}>
              <FacebookShareButton url={URL}>
                <FacebookIcon size={48} round={true} />
              </FacebookShareButton>
              <TwitterShareButton url={URL}>
                <TwitterIcon size={48} round={true} />
              </TwitterShareButton>
              <RedditShareButton url={URL}>
                <RedditIcon size={48} round={true} />
              </RedditShareButton>
              <WhatsappShareButton url={URL}>
                <WhatsappIcon size={48} round={true} />
              </WhatsappShareButton>
              <TelegramShareButton url={URL}>
                <TelegramIcon size={48} round={true} />
              </TelegramShareButton>
            </div>
          </div>
        </div>
        : ''}
    </>
  )
}
export default Header;