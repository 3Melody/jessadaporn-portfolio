import { useState } from 'react';
import Bar from '../assets/navbar/bar.png'; // Keep the hamburger icon
import Logo from '../assets/logo.jpg'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className='navbar z-20 w-full '>
            <div>
                <div className='container mx-auto'>
                    <div className='flex justify-between items-center px-4 py-3 '>
                        <a href='#home'>
                            <div className='text-white text-2xl font-bold'><img src={Logo} className='w-10' alt="" /></div>
                        </a>
                        <div className='xl:hidden'>
                            <img src={Bar} alt="Menu" onClick={toggleMenu} />
                        </div>
                        <div className='gap-20 text-white items-center hidden xl:flex'>
                            <a href='#about'><div>About</div></a>
                            <a href='#skill'><div>Skill</div></a>
                            <a href='#project'><div>Project</div></a>
                            {/* <a href='#contact'>
                                <div>
                                    <button className='bg-primary text-black rounded-md py-3 px-8'>
                                        Contact me
                                    </button>
                                </div>
                            </a> */}
                        </div>
                    </div>
                </div>
                {menuOpen && (
                    <div className='xl:hidden animate__fadeInDown text-center bg-black w-full absolute top-0 py-10 z-30'>
                        <div className="flex justify-end px-6">
                            <div className="text-white text-2xl font-bold cursor-pointer" onClick={closeMenu}>X</div>
                        </div>
                        <a href='#about' className='block py-2 text-white' onClick={closeMenu}>About</a>
                        <a href='#skill' className='block py-2 text-white' onClick={closeMenu}>Skill</a>
                        <a href='#project' className='block py-2 text-white' onClick={closeMenu}>Project</a>
                        {/* <a href='#contact' className='block py-2 text-white' onClick={closeMenu}>Contact Me</a> */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
