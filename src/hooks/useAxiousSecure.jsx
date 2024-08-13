import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiousSecure = () => {
    return axiosSecure;
};

export default useAxiousSecure;