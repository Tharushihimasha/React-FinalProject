import React from 'react'
import POPULAR from '../../assets/popular'
import Item from './Item'

function Popular() {
  return (
    <section>
        <div>
            <h3>Popular Products</h3>
            <hr />
            {/* container */}
            <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
                {POPULAR.map((item) => (
                    <Item  key={item.id} id={item.id} image={item.image} name={item.name} 
                    new_price={item.new_price} old_price={item.old_price}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Popular