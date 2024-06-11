import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Category = ({Category,banner}) => {
  return (
    <section className='max_padd_container py-12 xl:py-28'>
      <div>
        <div>
          <img src={banner} alt="" className='block my-7 mx-auto' />
        </div>
        <div>
          <h5><span>Showing 1-12</span>Out Of 36 Products</h5>
          <div>Sort by<MdOutlineKeyboardArrowDown/></div>
        </div>
      </div>
    </section>
  )
}

export default Category
