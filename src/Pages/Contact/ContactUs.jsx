import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Pages/Components/SectionTitle";
import Cover from "../Shared/Cover/Cover";
import CoverContact from '../../assets/contact/contactUs.jpg'
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaClock, FaLocationArrow, FaPhone } from "react-icons/fa";

const ContactUs = () => {
    const axiosPublic = useAxiosPublic();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setError('');

        try {
            const response = await axiosPublic.post('/email-send', formData);
            if (response.status === 200) {
                setSuccess(true);
                setFormData({ name: '', email: '', message: '' }); // Reset form
            } else {
                setError('Failed to send message.');
            }
        } catch (error) {
            setError('An error occurred while sending your message.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full mt-8">
            <Helmet>
                <title>Minimalist Cafe | Contact Us</title>
            </Helmet>
            <Cover img={CoverContact} title="CONTACT US"></Cover>
            <SectionTitle subHeading="Visit Us" heading="our location" ></SectionTitle>

            <div className="stats shadow flex content-center bg-slate-600 text-white">

                <div className="stat" >
                    <div className="stat-figure text-secondary">
                        <FaLocationArrow className='text-3xl'></FaLocationArrow>
                    </div>
                    <div className="stat-value">LOCATION</div>
                    <div className="stat-desc text-white">
                        Minimalist Cafe <br></br>
                        M60 XYZ
                    </div>
                </div>

                <div className="stat">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaPhone className='text-3xl'></FaPhone>
                        </div>

                        <div className="stat-value">PHONE</div>
                        <div className="stat-desc text-white">078673527</div>
                    </div>
                </div>


                <div className="stat">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaClock className='text-3xl'></FaClock>
                        </div>

                        <div className="stat-value">WORKING TIME</div>
                        <div className="stat-desc text-white">
                            11 AM to 11 PM
                        </div>
                    </div>
                </div>


            </div>

            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-900">Contact Us</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>

                        {success && <p className="text-green-500">Message sent successfully!</p>}
                        {error && <p className="text-red-500">{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;