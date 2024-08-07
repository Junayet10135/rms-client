import Menu from "../Shared/Items/Menu";

const MenuTypes = ({ items }) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    items.map(item => <Menu
                        key={item._id}
                        item={item}
                    ></Menu>)
                }
            </div>
        </div>
    );
};

export default MenuTypes;