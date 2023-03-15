'use client'
import Link from 'next/link';
import DatalistInput from 'react-datalist-input';

import styles from '@/styles/Home.module.scss'


export default function Home() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles.title}>SmartStore</div>
        <DatalistInput
          className={styles.search}
          placeholder='Введите запрос'
          // onSelect={(item) => console.log(item.value)}
          items={[
            { id: 'Chocolate', value: 'Chocolate' },
            { id: 'Coconut', value: 'Coconut' },
            { id: 'Mint', value: 'Mint' },
            { id: 'Strawberry', value: 'Strawberry' },
            { id: 'Vanilla', value: 'Vanilla' },
          ]}
        />

        {/* <div className={styles.search}>
          <input type='search' list="browsers" name="browser" id="browser" placeholder='Введите запрос'/>

          <datalist id="browsers" className={styles.search_datalist}>
            <option value="Edge"/>
            <option value="Firefox"/>
            <option value="Chrome"/>
            <option value="Opera"/>
            <option value="Safari"/>
          </datalist>
        </div> */}
      </main>
    </div>
  )
}
