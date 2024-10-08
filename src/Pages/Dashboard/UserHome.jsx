import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import useAxiousSecure from "../../hooks/useAxiousSecure";

const UserHome = () => {
    const { user } = useAuth();
    const [cart] = useCart();
    const axiosSecure = useAxiousSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    const { data: reservation = [] } = useQuery({
        queryKey: ['reservation', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/reservation`)
            return res.data;
        }
    })
    return (
        <div>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={user.photoURL || 'hhttps://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp'}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h2 className="text-5xl font-bold">
                            <span>Hi, Welcome Back </span>
                            {
                                user?.displayName ? user.displayName : 'Back'
                            }
                        </h2>
                        <h4 className="my-2">
                            #  Your Total order in Cart: {cart.length}
                        </h4>
                        <h4>
                            #  Your Total Transaction: {payments.length}
                        </h4>
                        <h4>
                            #  Your Total Reservation: {reservation.length}
                        </h4>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;