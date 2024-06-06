import { NavLink } from "react-router-dom"
import { MdHomeFilled } from "react-icons/md"

function Navbar({containStyles}) {
  return (
    <nav className={`${containStyles}`}>
      <NavLink to={'/'}><div className="flex items-center gap-x-1"><MdHomeFilled/>Home</div></NavLink>
      <NavLink to={'/mens'}><div className="flex items-center gap-x-1"><MdHomeFilled/>Men's</div></NavLink>
      <NavLink to={'/womens'}><div className="flex items-center gap-x-1"><MdHomeFilled/>Women's</div></NavLink>
      <NavLink to={'/kids'}><div className="flex items-center gap-x-1"><MdHomeFilled/>Kid's</div></NavLink>
    </nav>
  )
}

export default Navbar