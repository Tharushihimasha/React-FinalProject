import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpg'
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5
    z-10">
      <div className=" flexBetween  ">
        {/* logo */}
        <div className="">
           <Link><img src={ logo } alt="" width={120} height={70}/></Link>
        </div>
        {/* Navbar */}
        <Navbar containStyles={""}/>
        {/* button */}
        <div className="">button</div>
      </div>
    </header>
  )
}

export default Header