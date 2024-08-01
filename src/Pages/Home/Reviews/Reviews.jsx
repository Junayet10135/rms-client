
import SectionTitle from "../../Components/SectionTitle";
import { useEffect, useState } from "react";
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20">
            <SectionTitle
                subHeading="What Our Client Say"
                heading={'Reviews'}
            ></SectionTitle>
            <div>
                {
                    reviews.map(review => <div
                        key={review._id}
                    >
                        <div className="flex flex-col items-center mx-24 my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </div>)
                }


            </div>

        </section>
    );
};

export default Reviews;