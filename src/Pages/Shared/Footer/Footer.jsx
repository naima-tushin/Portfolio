import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="bg-stone-500 text-gray-200 py-10">
            <div className="container w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-60">
                {/* Contact Information */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Contact Me</h2>
                    <ul>
                        <li className="mb-2"><i className="fas fa-envelope mr-2"></i> naimatushin21@gmail.com</li>
                        <li className="mb-2"><i className="fas fa-phone mr-2"></i> +880 1828 011 277</li>
                        <li className="mb-2"><i className="fas fa-map-marker-alt mr-2"></i> House #15, Road #2, Hillview Housing Society, Chattagram, Bangladesh</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                    <ul>
                        <li className="mb-2"><a href="#about" className="hover:underline">About Me</a></li>
                        <li className="mb-2"><a href="#projects" className="hover:underline">Projects</a></li>
                        <li className="mb-2"><a href="#blog" className="hover:underline">Blog</a></li>
                        <li className="mb-2"><a href="#contact" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Follow Me</h2>
                    <div className="flex space-x-4">
                        <a href="https://github.com/naima-tushin" className="text-gray-400 hover:text-white"><i className="fab fa-github fa-2x"></i></a>
                        <a href="https://linkedin.com/in/naima-tushin" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin fa-2x"></i></a>
                    </div>
                </div>
            </div>
            <div className="border-t border-white mt-8 pt-6 text-center text-black">
                &copy; 2024 Naima Akther Tushin. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;