import { MdStar } from 'react-icons/md'

function Hero() {
  return (
     <section>
        <div>
            <h1>Digital Shopping Hub Juntion</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem alias laudantium tempora porro sapiente repudiandae neque eos pariatur quo ea ab, impedit ducimus. Veniam modi officiis iste voluptatibus quidem aspernatur!
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, eaque sit provident nam harum quis dolorem, alias nulla exercitationem sunt rem sequi, distinctio illum. Aperiam voluptatibus repellendus id asperiores numquam.
            </p>
            <div>
                <div>
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                </div>
                <div className='bold-16 sm:bold-20'>176k <span className='regular-16 sm:regular-20'>Excellent Reviews</span>

                </div>
            </div>
        </div>
     </section>
  )
}

export default Hero