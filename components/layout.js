import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";

const name = "Matthew Brown";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Next.js blog demo"
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/headerImage.jpg"
              alt={name}
              className={styles.headerImage}        
            />
            <h1>{name}'s Blog</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/headerImage.jpg"
                  alt={name}
                  className={styles.headerImage}
                />
              </a>
            </Link>
            <h2>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
