import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiousSecure from "../../hooks/useAxiousSecure";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../Components/SectionTitle";

const ManageBooking = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiousSecure();
    const [refetch] = useCart();

    const { data: reservation = [] } = useQuery({
        queryKey: ['reservation', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`reservation`)
            return res.data;
        }
    })
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/reservation/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <SectionTitle
                subHeading="<manage bookings"
                heading={'Reservation'}
            ></SectionTitle>
            <div className="flex justify-evenly mb-8">
                <h2 className="text-4xl">Total Booking: {reservation.length}</h2>


            </div>
            <div className="overflow-x-auto">
                <table className="table  w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Time</th>
                            <th>People</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reservation.map((reservation, index) => <tr key={reservation._id}>
                                <th>
                                    {index + 1}
                                </th>

                                <td>
                                    {reservation.name}
                                </td>
                                <td>{reservation.people}</td>
                                <td>{reservation.date}</td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(reservation._id)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default ManageBooking;