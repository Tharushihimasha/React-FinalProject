import React from 'react'
import POPULAR from '../../assets/popular'

function Popular() {
  return (
    <section>
        <div>
            <h3>Popular Products</h3>
            <hr />
            {/* container */}
            <div>
                {POPULAR.map((item) => (
                    <Item />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Popular