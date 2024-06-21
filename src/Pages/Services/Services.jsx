import React from 'react';

const Services = () => {
  return (
    <section className="bg-gradient-to-r from-gray-500 via-stone-700 to-black pb-10 pt-10">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-white mb-10 uppercase">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-[75%] lg:mx-auto">
          {/* Frontend Development */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Frontend Development</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Custom Website Design</li>
              <li>Responsive Development</li>
              <li>Interactive UI/UX Design</li>
              <li>Performance Optimization</li>
              <li>Cross-Browser Compatibility</li>
            </ul>
          </div>

          {/* Backend Development */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Backend Development</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Server-Side Programming</li>
              <li>Database Management</li>
              <li>API Development</li>
              <li>Authentication & Security</li>
              <li>Content Management Systems</li>
            </ul>
          </div>
        </div>

        {/* Full-Stack Development */}
        <div className="bg-white p-6 rounded-lg shadow-lg lg:w-[45%] mx-auto mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Full-Stack Development</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>End-to-End Solutions</li>
            <li>E-commerce Solutions</li>
            <li>Third-Party Integrations</li>
            <li>Maintenance & Support</li>
          </ul>
        </div>
        
      </div>
    </section>
  );
};

export default Services;
