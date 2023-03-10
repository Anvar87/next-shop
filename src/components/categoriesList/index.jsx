import Link from 'next/link';

import styles from '@/styles/Categories.module.scss';

const CategoriesList = ({ data }) => {
  return (
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
  )
}

export default CategoriesList