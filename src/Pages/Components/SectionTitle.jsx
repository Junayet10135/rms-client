
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md:w-3/12 mx-auto text-center my-7">
            <p className="text-yellow-600 mb-2">---{subHeading}---</p>
            <p className="text-4xl uppercase border-y-4 py-4">{heading}</p>
        </div>
    );
};

export default SectionTitle;