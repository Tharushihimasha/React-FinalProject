import { NavLink } from "react-router-dom"
import { MdHomeFilled } from "react-icons/md"

function Navbar({containStyles}) {
  return (
    <nav className={`${containStyles}`}>
      <NavLink to={'/'}><div className="flex"><MdHomeFilled/>Home</div></NavLink>
    </nav>
  )
}

export default Navbar