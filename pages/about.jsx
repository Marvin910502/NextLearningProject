import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About Page" />
        <meta name="viewport" content="width=device-width, initial-scale=5" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <h1>Ir a<Link href="/">Home</Link></h1>      
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      </main>
    </>
  )
}
