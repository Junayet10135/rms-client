import { useState } from "react";
import SectionTitle from "../Components/SectionTitle";
import { FaClock, FaLocationArrow, FaPhone } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Reservation = () => {
    const axiosPublic = useAxiosPublic();
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        people: '',
        name: '',
        phone: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosPublic.post('/reservation', formData);
            console.log('Reservation submitted:', response.data);
        } catch (error) {
            console.error('Error submitting reservation:', error);
        }
    };

    return (
        <div>
            <SectionTitle heading="Book a Table" subHeading="Reservation"></SectionTitle>
            <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
                        <input
                            type="time"
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="people" className="block text-sm font-medium text-gray-700">Number of People</label>
                        <input
                            type="number"
                            id="people"
                            name="people"
                            value={formData.people}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            min="1"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Reserve
                        </button>
                    </div>
                </form>
            </div>
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

        </div>
    );
};

export default Reservation;