import { NavLink } from "react-router-dom"

function Navbar({containStyles}) {
  return (
    <nav className={`${containStyles}`}>
      <NavLink><div>Home</div></NavLink>
    </nav>
  )
}

export default Navbar