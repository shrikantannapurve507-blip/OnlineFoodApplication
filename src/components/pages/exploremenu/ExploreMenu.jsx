
import React from 'react';
import { menu_list } from '../../../assets/assets';
import './exploremenu.css';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>What's on your mind?</h1>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? 'All' : item.menu_name
                )
              }
              className="explore-menu-list-item"
            >
              <img
                className={
                  category === item.menu_name ? 'active' : ''
                }
                src={item.menu_image}
                alt={item.menu_name}
              />

              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
