import { NavLink } from "react-router-dom"
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from "react-icons/md"

function Navbar({containStyles}) {
  return (
    <nav className={`${containStyles}`}>
      <NavLink to={'/'}><div className=""><MdHomeFilled/>Home</div></NavLink>
      <NavLink to={'/mens'}><div className=""><MdCategory/>Men's</div></NavLink>
      <NavLink to={'/womens'}><div className=""><MdShop2/>Women's</div></NavLink>
      <NavLink to={'/kids'}><div className=""><MdContacts/>Kid's</div></NavLink>
    </nav>
  )
}

export default Navbar