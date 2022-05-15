import DocumentHead from '../components/document-head'
import ExtLink from '../components/ext-link'
import styles from '../styles/page.module.css'

const RenderPage = () => (
  <div className={styles.container}>
    <DocumentHead />

    <div>
      <h2>Welcome!</h2>
      <p>1coinが日々あったことを雑に記録していくブログです。</p>
      <p>エンジニアリングを中心に日常生活や趣味についても書いていきます。</p>
      <ul>
        <li>
          <ExtLink href="https://twitter.com/01en__">Twitter</ExtLink>
        </li>
      </ul>
    </div>
  </div>
)

export default RenderPage
