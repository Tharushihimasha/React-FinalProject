import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpg'
import Navbar from "./Navbar";
import { useState } from "react";
import { MdMenu,MdClose} from "react-icons/md"

function Header() {
   
     const [menuOpened,setmenuOpened] = useState(false)
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
        <div >
          {!menuOpened? (
            <MdMenu />
          ) : (
           <MdClose /> )}
        </div>
      </div>
    </header>
  )
}

export default Header