import SectionTitle from "../../Components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="check it out" heading="Featured Item" ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <h3>AUG 20, 2024</h3>
                    <h4 className="uppercase">Where can i get some?</h4>
                    <p> it’s a classic dish reimagined with a modern twist or a seasonal ingredient celebrated in its peak form, our featured food promises to deliver an unforgettable gastronomic experience. Dive into a journey of taste and discover why this dish has been chosen as the highlight of our culinary offerings.</p>

                </div>
            </div>
        </div>
    );
};

export default Featured;