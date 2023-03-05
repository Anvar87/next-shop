import Link from 'next/link';
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          Home
          <Link href={'post/1'}>1</Link>
          <Link href={'post/2'}>2</Link>
          <Link href={'post/3'}>3</Link>
        </div>
      </main>
    </>
  )
}
