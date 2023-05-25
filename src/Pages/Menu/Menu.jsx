
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladsImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import drinkImg from '../../assets/menu/soup-bg.jpg'

import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle';
import MenuCategory from './MenuCategory';



const Menu = () => {

    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
    const pizza = menu.filter(item => item.category === 'pizza');
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');

    return (
        <div>

            <Helmet>
                <title>Bistro | Menu</title>

            </Helmet>

            <Cover img={menuImg} title="our menu"></Cover>

            <SectionTitle
                heading={"Today's offer"}
                subHeading={"Don't Miss"}
            ></SectionTitle>

            <MenuCategory items={offered}
            ></MenuCategory>
            <MenuCategory items={salad} title="salad" img={saladsImg}></MenuCategory>
            <MenuCategory items={drinks} title="drink" img={soupImg}></MenuCategory>
            <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
            <MenuCategory items={dessert} title="dessert" img={dessertImg}
            ></MenuCategory>
            <MenuCategory items={soup} title="soup" img={soupImg}
            ></MenuCategory>

        </div>
    );
};

export default Menu;