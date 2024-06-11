import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const Item = ({id, name, image, old_price, new_price}) => {
  return (
    <div className='rounded-xl overflow-hidden shadow-lg'>
        <div className='relative flexCenter group overflow-hidden translate-all duration-100'>
            <Link to={`product/${id}`} className='h-12 w-12 bg-white rounded-full
            flexCenter absolute  top-1/2 bottom-1/2 !py-2 z-20 scale-0 group-hover:scale-100 transition-all duration-700'>
              <FaSearch/> </Link>
            <img src={image} alt="productImage" />
        </div>
        <div>
            <h4>{name}</h4>
            <div>
                <div>{new_price}</div>
                <div>{old_price}</div>
            </div>
        </div>
    </div>
  )
}

export default Item