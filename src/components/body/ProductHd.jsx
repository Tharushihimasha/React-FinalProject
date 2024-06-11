import React from 'react'
import {TbArrowRight} from 'react-icons/tb'

const ProductHd = (props) => {

  const { product } =props;
  return (
    <div>
      Home <TbArrowRight /> Shop <TbArrowRight /> {product.category}
      <TbArrowRight /> {product.name}
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iusto doloremque dolores laboriosam libero repellat quod harum fuga ullam provident eius, mollitia in unde quidem impedit animi natus, error ad.</div>
    </div>
   
  )
}

export default ProductHd
