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
            <div>
                {POPULAR.map((item) => (
                    <Item  key={item.id} id={item.id} image={item.image} name={item.name} 
                    new_price={item_new_price} old_price={item_old_price}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Popular