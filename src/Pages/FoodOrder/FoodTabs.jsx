import Card from "../Components/Card";


const FoodTabs = ({ items }) => {
    return (
        <div className='grid md:grid-cols-3 gap-10' >
            {

                items.map(item => <Card
                    key={item._id}
                    item={item}
                > </Card>)

            }

        </div>
    );
};

export default FoodTabs;