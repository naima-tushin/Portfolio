import React, { useState } from 'react';
import axios from 'axios';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitting: false,
        submitted: false,
        error: null
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ submitting: true, submitted: false, error: null });

        try {
            const response = await axios.post('https://portfolio-backend-gamma-coral.vercel.app/api/contact', formData);
            console.log('Form submission response:', response.data);
            setFormStatus({ submitting: false, submitted: true, error: null });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            setFormStatus({ submitting: false, submitted: false, error: error.message });
        }
    };

    return (
        <section className="bg-gray-100 lg:py-20 py-10">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="lg:text-5xl text-4xl font-extrabold text-stone-500 uppercase text-center mb-8">Contact Me</h2>
                <form className="max-w-3xl mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-lg font-medium text-stone-500">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-lg font-medium text-stone-500">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-lg font-medium text-stone-500">Message</label>
                        <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"></textarea>
                    </div>
                    <div>
                        <button type="submit" disabled={formStatus.submitting} className={`w-full py-3 px-4 border border-transparent text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm ${formStatus.submitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-gray-500 via-stone-700 to-black'}`}>
                            {formStatus.submitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
                {formStatus.submitted && (
                    <p className="mt-4 text-green-600">Message sent successfully!</p>
                )}
                {formStatus.error && (
                    <p className="mt-4 text-red-600">Error: {formStatus.error}</p>
                )}
            </div>
        </section>
    );
}

export default ContactMe;
