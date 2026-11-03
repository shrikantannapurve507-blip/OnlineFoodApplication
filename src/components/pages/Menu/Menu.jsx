import React, { useState } from 'react';
import ExploreMenu from '../exploremenu/ExploreMenu';
import FoodDisplay from '../../FoodDisplay/FoodDisplay';

const Menu = () => {
    const [category, setCategory] = useState('All');

    return (
        <div className="menu-page">

            <ExploreMenu
                category={category}
                setCategory={setCategory}
            />

            <FoodDisplay
                category={category}
            />

        </div>
    );
};

export default Menu;