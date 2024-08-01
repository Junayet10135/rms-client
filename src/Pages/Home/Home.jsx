import Banner from "./Banner";
import BestSell from "./BestSell/BestSell";
import Featured from "./Featured/Featured";
import Category from "./FoodType/Category";
import ChefChoice from "./FoodType/ChefChoice";
import Reviews from "./Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BestSell></BestSell>
            <ChefChoice></ChefChoice>
            <Featured></Featured>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;