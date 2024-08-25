import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SectionTitle from "../Components/SectionTitle";

const AddReview = () => {
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [rating, setRating] = useState(0);
    const axiosPublic = useAxiosPublic();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reviewData = {
            name,
            details,
            rating,
        };

        try {
            const response = await axiosPublic.post('/review', reviewData);
            console.log(response.data);

            // Reset form fields
            setName('');
            setDetails('');
            setRating(0);
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    return (
        <div>
            <SectionTitle
                subHeading="it's important for us"
                heading={'give us a feedback'}
            ></SectionTitle>
            <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="details">
                            Details
                        </label>
                        <textarea
                            id="details"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="rating">
                            Rating
                        </label>
                        <select
                            id="rating"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={rating}
                            onChange={(e) => setRating(Number(e.target.value))}
                            required
                        >
                            <option value={0}>Select Rating</option>
                            <option value={1}>1</option>
                            <option value={2}>2 </option>
                            <option value={3}>3 </option>
                            <option value={4}>4 </option>
                            <option value={5}>5 </option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Submit Review
                    </button>
                </form>
            </div>

        </div>
    );
};

export default AddReview;