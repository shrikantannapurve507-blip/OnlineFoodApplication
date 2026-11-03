import React, { useContext } from 'react';
import { StoreContext } from '../Context/StoreContext';
import FoodItems from '../FoodItems/FoodItems';
import './fooddisplay.css';

const FoodDisplay = ({ category = 'All' }) => {

    const { food_list, searchText } = useContext(StoreContext);

    const filteredFood = food_list.filter((item) => {
        const name = (item.name || '').toLowerCase();
        const search = (searchText || '').toLowerCase();

        const matchesCategory =
            category === 'All' || category === item.category;

        const matchesSearch = name.includes(search);

        return matchesCategory && matchesSearch;
    });

    return (
        <div className="food-display" id="food-display">
            <h2>Top restaurant chains</h2>

            <div className="food-display-list">
                {filteredFood.length > 0 ? (
                    filteredFood.map((item) => (
                        <FoodItems
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            image={item.image}
                            description={item.description}
                            price={item.price}
                        />
                    ))
                ) : (
                    <p className="no-food-found">No food found!</p>
                )}
            </div>
        </div>
    );
};

export default FoodDisplay;