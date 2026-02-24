import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <div className=" h-20  pl-32 flex items-center justify-between">
        {/* Logo */}
       

        {/* Navigation */}
        <nav className="space-x-4 md:space-x-6 font-medium  w-[40%] flex items-center justify-between">
          <NavLink
            to="/"
            className="text-danger1 hover:text-danger2 hover:scale-125 transition-colors"
          >
      Home
          </NavLink>
          <NavLink
            to="/shop"
            className="text-danger1 hover:text-danger2 hover:scale-125 transition-colors"
          >
      Shop
          </NavLink>
          <NavLink
            to="/contact"
            className="text-danger1 hover:text-danger2 hover:scale-125 transition-colors"
          >
      Kontakt
          </NavLink>
          <NavLink
            to="/cart"
            className="text-danger1 hover:text-danger2 hover:scale-125 transition-colors"
          >
      Warenkorb
          </NavLink>
        </nav>
      </div>
  )
}

export default Header