import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.jpg'
import Navbar from "./Navbar";
import { useState } from "react";
import { MdMenu,MdClose} from "react-icons/md"
import { FaOpencart, FaUser} from "react-icons/fa"
import { RiLogoutCircleLine } from "react-icons/ri";


function Header() {
   
     const [menuOpened,setmenuOpened] = useState(false);
     const toggleMenu = () => setmenuOpened(!menuOpened);
  return (
    <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5
    z-10">
      <div className=" flexBetween t-1 ">
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
        <div className="flexBetween sm:gap-x-2 bold-16">
          {!menuOpened? (
            <MdMenu className="md:hidden cursor-pointer hover:text-secondary
            mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full" onClick={toggleMenu}/>
          ) : (
           <MdClose  className="md:hidden cursor-pointer hover:text-secondary
           mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full" onClick={toggleMenu}/> )}  
           <div className="flexBetween sm:gap-x-6">
             <NavLink to={'cart-page'} className={"flex"}><FaOpencart className="p-1 h-8 w-8 ring-state-900/30 ring-1
             rounded-full"/><span className="relative flexCenter w-5 h-5
              rounded-full bg-secondary text-white medium-14 -top-1.5">0</span></NavLink>
             {/* <NavLink to={'logout'} className={"btn_secondary_rounded flexCenter"} ><RiLogoutCircleLine className="w-7 h-5 mr-1" />Logout</NavLink> */}
             <NavLink to={'login'} className={"btn_secondary_rounded flexCenter"} ><FaUser className="w-7 h-4 mr-1" />Login</NavLink>
           </div>
        </div>

      </div>
    </header>
  )
}

export default Header