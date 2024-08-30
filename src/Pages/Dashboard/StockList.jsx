
import useAxiousSecure from "../../hooks/useAxiousSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

import SectionTitle from "../Components/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";

const StockList = () => {
    const axiosSecure = useAxiousSecure();

    const { refetch, data: stock = [] } = useQuery({
        queryFn: async () => {
            const res = await axiosSecure.get(`/stock`);
            return res.data;
        }
    })

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/stock/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    }
    return (
        <div>
            <SectionTitle heading="Manage All stock" subHeading="Hurry up"></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>

                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Details</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                stock.map((stock, index) => <tr key={stock._id}>
                                    <td>
                                        {index + 1}
                                    </td>

                                    <td>
                                        {stock.name}
                                    </td>
                                    <td className="text-right">{stock.quantity}</td>
                                    <td className="text-right">{stock.details}</td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(stock)}
                                            className="btn btn-ghost btn-lg">
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default StockList;