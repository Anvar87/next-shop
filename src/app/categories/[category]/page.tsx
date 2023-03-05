// import { useLocation } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux';

// import LayOut from '@/components/layout';

// import { addToFavoriteList } from "../../features/products/productsSlice";
import { useRouter } from 'next/router';
import Item from '@/components/item/page';

import PurplePhone from "@/assets/images/18503-63Deeppurple.jpg";
import PinkPhone from "@/assets/images/14677-597Pink.jpg";
import GreyPhone from "@/assets/images/12454-787bigeek_image1.jpeg";

const products = [
  {
    id: 1,
    name: 'Apple iPhone 14 Pro Max',
    image: PurplePhone,
    price: 114990,
    description: 'Apple iPhone 14 Pro Max 128GB (Тёмно-фиолетовый | Deep Purple)',
    link: '/apple-iphone-14-pro-max-128gb-deep-purple',
    isFavorite: false,
  },
  {
    id: 2,
    name: 'Apple iPhone 13 mini',
    image: PinkPhone,
    price: 70990,
    description: 'Apple iPhone 13 mini 128GB (Розовый | Pink)',
    link: '/apple-iphone-13-mini-128gb-pink',
    isFavorite: false,
  },
  {
    id: 3,
    name: 'Apple iPhone 12 Pro',
    image: GreyPhone,
    price: 78990,
    description: 'Apple iPhone 12 Pro Max 128GB (Графитовый | Graphite)',
    link: '/apple-iphone-12-pro-max-128gb-graphite',
    isFavorite: false,
  },
  {
    id: 4,
    name: 'Apple iPhone 14 Pro Max',
    image: PurplePhone,
    price: 114990,
    description: 'Apple iPhone 14 Pro Max 128GB (Тёмно-фиолетовый | Deep Purple)',
    link: '/apple-iphone-14-pro-max-128gb-deep-purple',
    isFavorite: false,
  },
  {
    id: 5,
    name: 'Apple iPhone 13 mini',
    image: PinkPhone,
    price: 70990,
    description: 'Apple iPhone 13 mini 128GB (Розовый | Pink)',
    link: '/apple-iphone-13-mini-128gb-pink',
    isFavorite: false,
  },
  {
    id: 6,
    name: 'Apple iPhone 12 Pro',
    image: GreyPhone,
    price: 78990,
    description: 'Apple iPhone 12 Pro Max 128GB (Графитовый | Graphite)',
    link: '/apple-iphone-12-pro-max-128gb-graphite',
    isFavorite: false,
  }
];

type Params = {
  params: {
    category: string
  }
}


export default function Category({ ...params }: any) {
  // const location = useLocation();
  // const { products } = useSelector(state => state.products);
  // const dispatch = useDispatch();



  const addToFavorite = (id: string) => {
    // dispatch(addToFavoriteList(id))
  };

  console.log(params, 'params')

  return (
    // <LayOut>
      <div className='products'>
        <h1 className='products-title'>{''}</h1>
        <div className='products-list'>
          {products.map((product: any, i: number) => (
            <Item
              key={product.name + i}
              link={``}
              data={product}
              handler={addToFavorite}
            />
          ))}
        </div>
      </div>
    // </LayOut>
  )
};

