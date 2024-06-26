import { MdOutlineLocalOffer } from 'react-icons/md'
import { FaStar } from 'react-icons/fa'

function Hero() {
  return (
     <section className=' bg-hero  bg-cover relative bg-center bg-no-repeat h-screen w-full'>
        <div className='max_padd_container relative top-32 xs:top-52'>
            <h1 className='h1 capitalize max-w-[37rem]'>Digital Shopping Hub Juntion</h1>
            <p className='text-gray-50 regular-16 mt-6 max-w-[33rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem alias laudantium tempora porro sapiente repudiandae neque eos pariatur quo ea ab, impedit ducimus. Veniam modi officiis iste voluptatibus quidem aspernatur!
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, eaque sit provident nam harum quis dolorem, alias nulla exercitationem sunt rem sequi, distinctio illum. Aperiam voluptatibus repellendus id asperiores numquam.
            </p>
            <div className='flexStart !items-center gap-x-4 my-5'>
                <div className='!regular-24 flexCenter gap-x-3'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div className='bold-16 sm:bold-20'>176k <span 
                className='regular-16 sm:regular-20'>Excellent Reviews</span>
                </div>
            </div>
            <div className='max-xs:flex-col flex gap-2'>
                <div className={"btn_dark_rounded flexCenter"}>Shop now</div>
                <div  className={"btn_dark_rounded flexCenter gap-x-2"}>
                    <MdOutlineLocalOffer className="text-2xl"/>Offer</div>
            </div>
        </div>
        
     </section>
  )
}

export default Hero