import {TbArrowRight} from 'react-icons/tb'

const ProductHD = (props) => {
     
    const {product} = props;

  return (
    <div className='flex items-center flex-wrap gap-x-2 medium-16 capitalize'>
        Home <TbArrowRight/> Shop <TbArrowRight/> {product.category} <TbArrowRight/>
    </div>

  )
}

export default ProductHD
