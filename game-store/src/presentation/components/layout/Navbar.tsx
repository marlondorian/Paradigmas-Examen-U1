import {Book, Home, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "./NavLink";
import { MobileNavLink } from "./MobileNavLink";

export const Navbar = () => {

    const [isMenuOpen, setisMenuOpen] = useState(false);
    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen)
    }
  return (
   <>
        <nav className="bg-blue-600 text-white shadow-md">
            <div className=" max-w-7xl mx-auto px-4 ">
               <div className="flex justify-between h-16">
                    {/* Inicio Logo y titulo */}
                    <div className="flex items-center">
                        <span className="font-bold text-xl">
                              GameStore
                         </span>
                    </div>
               
                    {/* Fin Logo y titulo */}
                    {/* Inicio Navegación en escritorio */}
                    <div className="hidden md:flex space-x-4 items-center">
                        <NavLink icon={<Home size={18}></Home>} text="Inicio" to="/" />
                        <NavLink icon={<Book size={18}></Book>} text="Catalogo" to="/catalog" />
                    </div>
                    {/* Fin Navegación en escritorio */}
                    {/* Inicio boton menu movil */}
                    <div className="md:hidden flex items-center">
                        <button className="text-white hover:text-blue-200 focus:outline-none"
                        onClick={toggleMenu}
                        >
                            {isMenuOpen? <X />: <Menu />}
                        </button>
                    </div>
                    {/* Fin boton menu movil */}
                    
               </div> 
           </div>
     </nav>
     {/* Inicio menu movil */}
                    {isMenuOpen && (
                        <div className="md:hidden bg-blue-600 text-white">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <MobileNavLink icon={<Home size={18}></Home>} text="Inicio" active to="/" />
                            <MobileNavLink icon={<Book size={18}></Book>} text="Catalogo" to="/catalog" />
                            </div>
                        </div>
                    )}
                    {/* Fin menu movil */}
   </>
    );
}