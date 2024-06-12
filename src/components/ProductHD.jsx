import {TbArrowRight} from 'react-icons/tb'

const ProductHD = (props) => {
     
    const {product} = props;

  return (
    <div>
        Home <TbArrowRight/> Shop <TbArrowRight/> {product.category} <TbArrowRight/>
    </div>

  )
}

export default ProductHD
