import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "../../hooks/useAxiousSecure";
import SectionTitle from "../Components/SectionTitle";


const WasteList = () => {
    const axiosSecure = useAxiousSecure();

    const { data: waste = [] } = useQuery({
        queryFn: async () => {
            const res = await axiosSecure.get(`/waste`);
            return res.data;
        }
    })

    return (
        <div>
            <SectionTitle heading="list of waste" subHeading="Hurry up"></SectionTitle>
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

                            </tr>
                        </thead>
                        <tbody>
                            {
                                waste.map((waste, index) => <tr key={waste._id}>
                                    <td>
                                        {index + 1}
                                    </td>

                                    <td>
                                        {waste.name}
                                    </td>
                                    <td className="text-right">{waste.quantity}</td>
                                    <td className="text-right">{waste.details}</td>

                                </tr>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default WasteList;