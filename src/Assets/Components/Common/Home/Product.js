import React,{useState} from 'react';
import { products } from '../../../Data/data';
import ProductItem from './ProductItem';
import Heading from '../Heading';
const Product = () => {
    const[data,setData]=useState(products);
  return (
    <div className='Trending_Products_section'>
      <div className='product_Section'>
                  <Heading title="Trending Products" desc="Check the hottest designs of the week. These rising stars are worth your attention." />
                  <ProductItem  data={data}/>
      </div>
    </div>
  )
}

export default Product