import React, { useState, useEffect } from 'react';
import LayOut from '../../components/layout';
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import {ReactComponent as CartTab} from '../../assets/icons/shopping-cart.svg'

import { addProductInCart, calcTotalCount } from "../../features/cart/cartSlice";

import './product.css';

const Product = () => {
  const [isAdded, setIsAdded] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { cartProducts } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const data = location.state;

  useEffect(() => {
    setIsAdded(cartProducts.some(itm => itm.id === data.id));
  }, [data]);

  const handleAddToCart = () => {
    if (!isAdded) {
      dispatch(addProductInCart(data));
      dispatch(calcTotalCount());
      setIsAdded(true);
    } else {
      navigate('/fleabot/cart');
    }
  };

  return (
    <LayOut>
      <div className='product'>
        <section className='product-section'>
          <div className='product-img'>
            <img src={data.image}/>
          </div>
          <div className='product-block'>
            <div className='product-text'>
              {data.description}
            </div>
            <div className='product-price'>
              <b>{data.price} <span>₽</span></b>
            </div>
            <div className='product-description'></div>
            <div className='product-button'>
              <div
                className={`product-button__cart ${isAdded ? 'product-button__active' : ''}`}
                onClick={handleAddToCart}
              >
                <CartTab width={'20px'} height={'20px'} className='product-button__icon'/>
                <div className='product-button__info'>
                  <span className='product-button__text'>{isAdded ? 'Перейти' : 'Добавить'} в корзину</span>
                  <span className='product-button__price'>{data.price} ₽</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayOut>
  )
};

export default Product;