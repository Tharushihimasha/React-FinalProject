import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpg'
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="fixed top-0 left-0 m-auto max_padd_container">
      <div className="">
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