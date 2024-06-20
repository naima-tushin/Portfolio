import React from 'react';

const Services = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend Development */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Frontend Development</h3>
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
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Backend Development</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Server-Side Programming</li>
              <li>Database Management</li>
              <li>API Development</li>
              <li>Authentication & Security</li>
              <li>Content Management Systems</li>
            </ul>
          </div>

          {/* Full-Stack Development */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Full-Stack Development</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>End-to-End Solutions</li>
              <li>E-commerce Solutions</li>
              <li>Third-Party Integrations</li>
              <li>Maintenance & Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
