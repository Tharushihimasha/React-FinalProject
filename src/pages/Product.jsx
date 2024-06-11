import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductHd from '../components/body/ProductHd';

const Product = () => {

  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  if(!product){
    return <div>Product not Found!</div>
  }
  return (
    <section>
      <div>
        <ProductHd product={product}/>
        <ProductDisplay product={product} />
      </div>
    </section>
  )
}

export default Product
