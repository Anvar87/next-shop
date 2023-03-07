import Link from 'next/link';

import styles from '@/styles/Categories.module.scss';

const s = {
  phone: 'data:image/png;base64,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',
  headphone: 'data:image/png;base64,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',
  smartwatch: 'data:image/png;base64,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',
  photo:'data:image/png;base64,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'
};

const data = [
  {
    name: 'Смартфоны',
    src: s.phone,
    link: 'phones'
  },
  {
    name: 'Наушники',
    src: s.headphone,
    link: 'headphones'
  },
  {
    name: 'Умные Часы',
    src: s.smartwatch,
    link: 'smartwatches'
  },
  {
    name: 'Фото техника',
    src: s.photo,
    link: 'photos'
  }
];


export default function Categories() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Категории</h1>
      <div className={styles.list}>

        {data.map(item => (
          <Link key={item.name} href={`/category/${item.link}`} className={styles.list_link}>
            <div>
              <h2 className={styles.list_name}>{item.name}</h2>
              <img src={item.src}/>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
