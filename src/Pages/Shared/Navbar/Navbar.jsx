import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaTasks, FaCode } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="navbar bg-stone-500 p-4 fixed">
            <div className="flex-1 text-white">
                <a className="btn btn-ghost normal-case text-2xl font-bold">My Portfolio</a>
            </div>
            <div className="flex-none hidden lg:flex text-white">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a className="flex items-center">
                            <FaHome className="mr-1" /> Home
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center">
                            <FaUser className="mr-1" /> About
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center">
                            <FaProjectDiagram className="mr-1" /> Projects
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center">
                            <FaEnvelope className="mr-1" /> Contact
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center">
                            <FaCode className="mr-1" /> Skills
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center">
                            <FaTasks className="mr-1" /> Services
                        </a>
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
                            <a className="flex items-center">
                                <FaHome className="mr-1" /> Home
                            </a>
                        </li>
                        <li>
                            <a className="flex items-center">
                                <FaUser className="mr-1" /> About
                            </a>
                        </li>
                        <li>
                            <a className="flex items-center">
                                <FaProjectDiagram className="mr-1" /> Projects
                            </a>
                        </li>
                        <li>
                            <a className="flex items-center">
                                <FaEnvelope className="mr-1" /> Contact
                            </a>
                        </li>
                        <li>
                            <a className="flex items-center">
                                <FaCode className="mr-1" /> Skills
                            </a>
                        </li>
                        <li>
                            <a className="flex items-center">
                                <FaTasks className="mr-1" /> Services
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
