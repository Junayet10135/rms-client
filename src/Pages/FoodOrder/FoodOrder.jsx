import { Helmet } from 'react-helmet-async';
import banner from '../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import FoodTabs from './FoodTabs';

const FoodOrder = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Minimalist Cafe | Order Food</title>
            </Helmet>
            <Cover img={banner} title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} >
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <FoodTabs items={salad} ></FoodTabs>
                </TabPanel>
                <TabPanel>
                    <FoodTabs items={pizza} ></FoodTabs>
                </TabPanel>
                <TabPanel>
                    <FoodTabs items={soup} ></FoodTabs>
                </TabPanel>
                <TabPanel>
                    <FoodTabs items={desserts} ></FoodTabs>
                </TabPanel>
                <TabPanel>
                    <FoodTabs items={drinks} ></FoodTabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default FoodOrder;