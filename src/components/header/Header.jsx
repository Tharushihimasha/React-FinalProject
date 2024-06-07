import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpg'
import Navbar from "./Navbar";
import { useState } from "react";
import { MdMenu,MdClose} from "react-icons/md"
import { FaOpenCart} from "react-icons/fa"

function Header() {
   
     const [menuOpened,setmenuOpened] = useState(false);
     const toggleMenu = () => setmenuOpened(!menuOpened);
  return (
    <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5
    z-10">
      <div className=" flexBetween  ">
        {/* logo */}
        <div className="">
           <Link><img src={ logo } alt="" width={120} height={70}/></Link>
        </div>
        {/* Navbar DesktopSize */}
        <Navbar containStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-10"}/>
        {/* Navbar MobileSize */}
        <Navbar containStyles={`${menuOpened ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transitaion-all duration-300" 
          : "flex item-start flex-col gap-y-12 fixed top-20  p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transitaion-all duration-300 -right-[100%]"}`}/>
        {/* button */}
        <div className="flexBetween sm:gap-x-6 bold-16">
          {!menuOpened? (
            <MdMenu className="md:hidden cursor-pointer hover:text-secondary
            mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full" onClick={toggleMenu}/>
          ) : (
           <MdClose  className="md:hidden cursor-pointer hover:text-secondary
           mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full" onClick={toggleMenu}/> )}
           <div className="flexBetween sm:gap-x-6">
               <NavLink to={'/cart-page'} className={flex}></NavLink>
           </div>
        </div>
      </div>
    </header>
  )
}

export default Header