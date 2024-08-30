import { useForm } from "react-hook-form";

import useAxiousSecure from "../../hooks/useAxiousSecure";
import Swal from "sweetalert2";
import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../Components/SectionTitle";



const StockItem = () => {
    const { register, handleSubmit, reset } = useForm();

    const axiosSecure = useAxiousSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url

        // now send the menu item data to the server with the image url
        const menuItem = {
            name: data.name,
            category: data.category,
            quantity: parseFloat(data.quantity),
            details: data.details,

        }
        // post data in database
        const menuRes = await axiosSecure.post('/stock', menuItem);
        console.log(menuRes.data)
        if (menuRes.data.insertedId) {
            // show success popup
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is added to the stock.`,
                showConfirmButton: false,
                timer: 1500
            });
        }


    };
    return (
        <div>
            <SectionTitle subHeading="What's new?" heading="ADD AN STOCK" ></SectionTitle>
            <div>
                <form className="bg-base-200 p-5 rounded" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Stock Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Stock Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Stock category"
                                {...register('category', { required: true })}
                                required
                                className="input input-bordered w-full" />

                        </div>

                        {/* Quantity */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Quantity*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Quantity (KG)"
                                {...register('quantity', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* stock details */}
                    <div className="form-control my-6">
                        <label className="label">
                            <span className="label-text">Stock Details*</span>
                        </label>
                        <textarea {...register('details', { required: true })} className="textarea textarea-bordered h-24" placeholder="Details"></textarea>
                    </div>



                    <button className="btn">
                        Add Item <FaUtensils className="ml-4"></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default StockItem;