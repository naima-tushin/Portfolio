import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import img from '../../../src/assets/images/Profile_Picture.jpg';
import ResumePDF from '../../../src/assets/pdf/Frontend_Developer_Resume.pdf';
import CVPDF from '../../../src/assets/pdf/CV.pdf';

const Banner = () => {
    return (
        <div className="pb-12 pt-16 lg:pt-32 bg-gradient-to-r from-gray-500 via-stone-700 to-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center">
                    {/* Left Column */}
                    <div className="text-white p-4 lg:p-10 flex flex-col items-center lg:items-center justify-center">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">Naima Akther Tushin</h1>
                        <p className="text-lg md:text-xl lg:text-2xl mb-4 lg:mb-6 text-center">Web Developer | React Frontend Developer | Backend Developer | Junior MERN Stack Developer</p>
                        <div className="flex flex-wrap justify-center lg:justify-start space-x-2 md:space-x-4 mb-4 md:mb-6">
                            <a
                                href={ResumePDF}
                                download="Resume.pdf"
                                className="bg-gradient-to-r from-black to-stone-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-center transition duration-300 text-sm md:text-base flex items-center space-x-2"
                            >
                                <FontAwesomeIcon icon={faDownload} className="text-white" />
                                <span>Download Resume</span>
                            </a>
                            <a
                                href={CVPDF}
                                download="CV.pdf"
                                className="bg-gradient-to-r from-black to-stone-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-center transition duration-300 text-sm md:text-base flex items-center space-x-2"
                            >
                                <FontAwesomeIcon icon={faDownload} className="text-white" />
                                <span>Download CV</span>
                            </a>
                        </div>
                    </div>
                    {/* Right Column */}
                    <div className="mb-4 lg:mb-0 flex justify-center lg:justify-end">
                        <img
                            className="rounded-lg shadow-lg max-h-40 sm:max-h-60 md:max-h-72 lg:max-h-96"
                            src={img}
                            alt="Banner Image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
