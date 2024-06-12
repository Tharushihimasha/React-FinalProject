import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductHD from '../components/ProductHD';


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
       <ProductHD product={product}/>
      
      </div>
    </section>

  )
}

export default Product
