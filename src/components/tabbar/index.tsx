
import  Link  from 'next/link';
import Image from 'next/image';
import Icon from "@/helpers/iconRequest";
// import { useSelector } from 'react-redux';

// import HomeTab from '@/assets/icons/home-filled.svg';
// import DeliveryTab from '@/assets/icons/delivery-fast-solid.svg';
// import FavoriteTab from '@/assets/icons/favorite-like-love.svg';
// import CartTab from '@/assets/icons/shopping-cart.svg';
// import PersonTab from '@/assets/icons/person-fill.svg';


import styles from '@/styles/TabBar.module.scss';

const home = [
  {
    name: 'Home',
    icon: 'icons/home-filled.svg',
    link: '/',
  },
  {
    name: 'Delivery',
    icon: 'icons/delivery-fast-solid.svg',
    link: '/categories',
  },
  {
    name: 'Favorite',
    icon: 'icons/favorite-like-love.svg',
    link: '/favorites',
  },
  {
    name: 'Cart',
    icon: 'icons/shopping-cart.svg',
    link: '/cart',
  },
  {
    name: 'Cabinet',
    icon: 'icons/person-fill.svg',
    link: '/',
  }
]

const TabBar = () => {
  // const { totalCount } = useSelector(state => state.cart);

  // const countWidget = () => (
  //   <div className='tabbar-icon__total-block'>
  //     <div className='tabbar-icon__total-count'>{totalCount}</div>
  //   </div>
  // )
  return (
    <div className={styles.main}>
      <div className={styles.wrap}>
        {home.map((item, idx) => (
          <Link className={styles.link} href={item.link} key={item.name + idx}>
            <div className={styles.icon}>
              {/* {item.name === 'Cart' && totalCount !== 0 && countWidget()} */}
              <Icon path={item.icon} alt='Tab icon' className={styles.svg}  />
            </div>
            <p className={styles.name}>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
};

export default TabBar;