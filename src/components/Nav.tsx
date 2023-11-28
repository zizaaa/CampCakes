import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link, NavLink } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function Nav(){
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
  
    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Check if the click is outside the menu
            const menuButton = document.getElementById('menu-button');
            if (menuButton && !menuButton.contains(event.target)) {
            setMenuVisible(false);
            }
        };
    
        // Add the event listener
        document.addEventListener('click', handleOutsideClick);
    
        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return(
        <motion.nav 
            initial={{ y: -50 }}
            whileInView={{
                y: 0,
                transition: {
                    duration: 0.5,
                    delay: 0.3,
                },
            }}
            viewport={{
                once: true,
            }}
            className="border-b-[1px] py-2 flex px-10 fixed left-0 top-0 right-0 z-10 bg-white"
        >
                <div className="flex w-[30rem]">
                    <Link to='/' className="flex flex-row items-center gap-2">
                        <img 
                            src="/logo/logo.png"
                            className="h-10 w-10"
                        />
                        <p className="font-bold text-lg text-pink max-[800px]:hidden">
                            Camp Cakes
                        </p>
                    </Link>
                    <div className="flex flex-row items-center gap-5 ms-14 max-[800px]:hidden">
                        <NavLink 
                            to='/'
                            className={({isActive})=> 
                                isActive ? "text-pink font-semibold":"font-semibold"
                            }
                        >
                            Home
                        </NavLink>
                        <div className="relative inline-block text-left">
                        <div>
                            <button
                                type="button"
                                className="font-semibold flex items-center gap-1 text-gray-800"
                                id="menu-button"
                                aria-expanded={menuVisible}
                                aria-haspopup="true"
                                onClick={toggleMenu}
                            >
                            Cakes
                            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                            </button>
                        </div>

                        {menuVisible && (
                            <div
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="menu-button"
                                tabIndex="-1"
                            >
                            <div className="flex flex-col p-2 gap-2" role="none">
                                    <NavLink 
                                        onClick={toggleMenu}
                                        to='/OurMenu'
                                        className={({isActive})=> 
                                            isActive ? "text-pink font-semibold":"font-semibold text-gray-800"
                                        }
                                    >
                                        Our Menu
                                    </NavLink>
                                    <NavLink 
                                        onClick={toggleMenu}
                                        to='/CustomCakes'
                                        className={({isActive})=> 
                                            isActive ? "text-pink font-semibold":"font-semibold text-gray-800"
                                        }
                                    >
                                        Customize Cakes
                                    </NavLink>
                            </div>
                            </div>
                        )}
                        </div>

                        <NavLink 
                            to='/ContacUs'
                            className={({isActive})=> 
                                isActive ? "text-pink font-semibold":"font-semibold text-gray-800"
                            }
                        >
                            Contact Us
                        </NavLink>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-5 flex-1 px-2">
                    <input
                        className="p-1 min-w-[10rem] rounded-s-sm border-b-2 outline-none focus:border-pink max-[450px]:hidden"
                        type="text" 
                        placeholder="Search for cakes"
                    />
                    <button
                        className="hidden text-xl text-pink max-[450px]:block"
                    >
                        <CiSearch/>
                    </button>
                    <button
                        className="text-xl text-pink"
                    >
                        <FaUser/>
                    </button>
                    {/* <button
                        className="text-xl text-pink"
                    >
                        <FaShoppingCart />
                    </button> */}
                    <button
                        className="hidden text-xl text-pink max-[800px]:block"
                    >
                        <RxHamburgerMenu/>
                    </button>
                </div>
        </motion.nav>
    )
}

export default Nav;