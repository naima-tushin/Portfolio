import { Link } from 'react-scroll';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaTasks, FaCode } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="navbar bg-stone-500 p-4 fixed z-10 w-full">
            <div className="flex-1 text-white">
                <a className="btn btn-ghost normal-case text-2xl font-bold">My Portfolio</a>
            </div>
            <div className="flex-none hidden lg:flex text-white">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="home" smooth={true} duration={500} className="flex items-center cursor-pointer">
                            <FaHome className="mr-1" /> Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500} className="flex items-center cursor-pointer">
                            <FaUser className="mr-1" /> About
                        </Link>
                    </li>
                    <li>
                        <Link to="services" smooth={true} duration={500} className="flex items-center cursor-pointer">
                            <FaTasks className="mr-1" /> Services
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500} className="flex items-center cursor-pointer">
                            <FaCode className="mr-1" /> Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500} className="flex items-center cursor-pointer">
                            <FaProjectDiagram className="mr-1" /> Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="experience" smooth={true} duration={500} className="flex items-center cursor-pointer">
                            <FaProjectDiagram className="mr-1" /> Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500} className="flex items-center cursor-pointer">
                            <FaEnvelope className="mr-1" /> Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex-none lg:hidden">
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to="home" smooth={true} duration={500} className="flex items-center cursor-pointer">
                                <FaHome className="mr-1" /> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500} className="flex items-center cursor-pointer">
                                <FaUser className="mr-1" /> About
                            </Link>
                        </li>
                        <li>
                            <Link to="services" smooth={true} duration={500} className="flex items-center cursor-pointer">
                                <FaTasks className="mr-1" /> Services
                            </Link>
                        </li>
                        <li>
                            <Link to="skills" smooth={true} duration={500} className="flex items-center cursor-pointer">
                                <FaCode className="mr-1" /> Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} duration={500} className="flex items-center cursor-pointer">
                                <FaProjectDiagram className="mr-1" /> Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500} className="flex items-center cursor-pointer">
                                <FaEnvelope className="mr-1" /> Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
