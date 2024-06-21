import React from 'react';

const ContactMe = () => {
    return (
        <section id="contact" className="p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form className="flex flex-col">
          <input type="text" placeholder="Name" className="mb-4 p-2 border"/>
          <input type="email" placeholder="Email" className="mb-4 p-2 border"/>
          <textarea placeholder="Message" className="mb-4 p-2 border h-32"/>
          <button type="submit" className="bg-blue-500 text-white p-2">Send</button>
        </form>
      </div>
    </section>
    );
};

export default ContactMe;