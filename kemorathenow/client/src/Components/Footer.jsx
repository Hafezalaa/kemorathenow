import {NavLink} from "react-router-dom"

const Footer = () => {
  return (
    

      


      <div className="h-20 bg-secondary w-full flex flex-col md:flex-row place-content-between text-slate-900 md:place-items-center px-6 md:px-16">
        <div>
          &copy; {new Date().getFullYear()} KEMO-Rathenow. Alle
          Rechte vorbehalten.
        </div>
        <div className="w-[30%] flex place-content-around">
          <NavLink to="imprint" className="hover:text-sky-900 hover:scale-110 mr-5">
            Impressum
          </NavLink>
          <NavLink to="data" className="hover:text-sky-900 hover:scale-110 mr-5">
            DatenSchutz
          </NavLink>
          <NavLink to="agb" className="hover:text-sky-900 hover:scale-110 mr-5">AGB</NavLink>
        </div>
      </div>
    
  )
}

export default Footer