import React from 'react';
import { Link } from "react-router-dom";
import {ReactComponent as HomeTab} from '../../assets/icons/home-filled.svg';
// import {ReactComponent as HomeTab} from '../../assets/icons/home.svg';
import {ReactComponent as DeliveryTab} from '../../assets/icons/delivery-fast-solid.svg';
// import {ReactComponent as DeliveryTab} from '../../assets/icons/delivery-fast.svg';
import {ReactComponent as FavoriteTab} from '../../assets/icons/favorite-like-love.svg';
import {ReactComponent as CartTab} from '../../assets/icons/shopping-cart.svg';
// import {ReactComponent as CartTab} from '../../assets/icons/shoppingCart.svg';
import {ReactComponent as PersonTab} from '../../assets/icons/person-fill.svg';
import { useSelector } from 'react-redux';


import './tabbar.css';

const home = [
  {
    name: 'Home',
    icon: <HomeTab className='tabbar-svg'/>,
    link: 'fleabot',
  },
  {
    name: 'Delivery',
    icon: <DeliveryTab className='tabbar-svg'/>,
    link: 'fleabot',
  },
  {
    name: 'Favorite',
    icon: <FavoriteTab className='tabbar-svg'/>,
    link: 'fleabot/favorites',
  },
  {
    name: 'Cart',
    icon: <CartTab className='tabbar-svg'/>,
    link: 'fleabot/cart',
  },
  {
    name: 'Cabinet',
    icon: <PersonTab className='tabbar-svg'/>,
    link: 'fleabot',
  }
]

const TabBar = () => {
  const { totalCount } = useSelector(state => state.cart);

  const countWidget = () => (
    <div className='tabbar-icon__total-block'>
      <div className='tabbar-icon__total-count'>{totalCount}</div>
    </div>
  )
  return (
    <div className='tabbar'>
      <div className='tabbar-wrap'>
        {home.map((item, idx) => (
          <Link className='tabbar-link' to={item.link} key={item.name + idx}>
            <div className='tabbar-icon'>
              {item.name === 'Cart' && totalCount !== 0 && countWidget()}
              {item.icon}
            </div>
            <p className='tabbar-name'>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
};

export default TabBar;