
const ChefMenu = ({ item }) => {
    const { name, image, recipe } = item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="food"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>

            </div>
        </div>
    );
};

export default ChefMenu;