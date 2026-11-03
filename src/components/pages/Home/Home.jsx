
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../Header/Header';
import AppDownload from '../../AppDownload/AppDownload';
import FoodItems from '../../FoodItems/FoodItems';
import { StoreContext } from '../../Context/StoreContext';

import './Home.css';

const restaurants = [
    {
        name: 'Food Paradise',
        cuisine: 'North Indian • Chinese',
        rating: '4.5',
        time: '20–30 min',
        offer: '20% OFF'
    },
    {
        name: 'Spice Garden',
        cuisine: 'Indian • Biryani',
        rating: '4.3',
        time: '25–35 min',
        offer: '30% OFF'
    },
    {
        name: 'Pizza Corner',
        cuisine: 'Pizza • Italian',
        rating: '4.6',
        time: '20–25 min',
        offer: 'FREE DELIVERY'
    },
    {
        name: 'Sweet Treats',
        cuisine: 'Desserts • Bakery',
        rating: '4.4',
        time: '15–25 min',
        offer: '15% OFF'
    }
];

const Home = () => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className="home">

            {/* Existing Header */}
            <Header />

            {/* Welcome Section */}
            <section className="home-welcome">
                <div className="welcome-content">
                    <span className="welcome-tag">
                        GOOD FOOD, GOOD MOOD ❤️
                    </span>

                    <h1>
                        Delicious food,
                        <span> delivered to you.</span>
                    </h1>

                    <p>
                        Discover amazing dishes, explore popular restaurants
                        and enjoy your favourite meals at your doorstep.
                    </p>

                    <Link
                        to="/menu"
                        onClick={() => setMenu('menu')}
                        className="home-explore-btn"
                    >
                        Explore Menu →
                    </Link>
                </div>

                <div className="welcome-decoration">
                    <span>🍕</span>
                    <span>🍔</span>
                    <span>🍜</span>
                    <span>🍰</span>
                </div>
            </section>

            {/* Benefits */}
            <section className="home-benefits">
                <div className="benefit-item">
                    <span>🚀</span>
                    <div>
                        <h3>Fast Delivery</h3>
                        <p>Food delivered to your door</p>
                    </div>
                </div>

                <div className="benefit-item">
                    <span>🥗</span>
                    <div>
                        <h3>Fresh Food</h3>
                        <p>Fresh and delicious meals</p>
                    </div>
                </div>

                <div className="benefit-item">
                    <span>💯</span>
                    <div>
                        <h3>Quality Food</h3>
                        <p>Great taste and quality</p>
                    </div>
                </div>
            </section>

            {/* Popular Food */}
            <section className="home-section">
                <div className="home-section-heading">
                    <div>
                        <span className="section-label">OUR FAVOURITES</span>
                        <h2>Popular Dishes</h2>
                        <p>Some delicious choices you should try.</p>
                    </div>

                    <Link to="/menu" className="view-all-link">
                        View all →
                    </Link>
                </div>

                <div className="home-food-grid">
                    {food_list.slice(0, 4).map((item) => (
                        <FoodItems
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            image={item.image}
                            description={item.description}
                            price={item.price}
                        />
                    ))}
                </div>
            </section>

            {/* Popular Restaurants */}
            <section className="home-restaurants">
                <div className="home-section-heading">
                    <div>
                        <span className="section-label">DISCOVER PLACES</span>
                        <h2>Popular Restaurants</h2>
                        <p>Explore some of our featured restaurant picks.</p>
                    </div>

                    <Link to="/menu" className="view-all-link">
                        Explore food →
                    </Link>
                </div>

                <div className="restaurant-grid">
                    {restaurants.map((restaurant, index) => {
                        const food = food_list[index % Math.max(food_list.length, 1)];

                        if (!food) return null;

                        return (
                            <Link
                                to="/menu"
                                className="restaurant-card"
                                key={restaurant.name}
                            >
                                <div className="restaurant-image">
                                    <img src={food.image} alt={restaurant.name} />
                                    <span className="restaurant-offer">
                                        {restaurant.offer}
                                    </span>
                                </div>

                                <div className="restaurant-details">
                                    <h3>{restaurant.name}</h3>

                                    <div className="restaurant-meta">
                                        <span>⭐ {restaurant.rating}</span>
                                        <span>🕒 {restaurant.time}</span>
                                    </div>

                                    <p>{restaurant.cuisine}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* Special Offer */}
            <section className="home-offer">
                <div>
                    <span> SPECIAL OFFER </span>
                    <h2>Good food makes every day better!</h2>
                    <p>Explore our menu and find something delicious today.</p>

                    <Link to="/menu">
                        Order Now →
                    </Link>
                </div>

                <div className="offer-emoji">🍔</div>
            </section>

            {/* Existing App Download Section */}
            <AppDownload />

        </div>
    );
};

export default Home;
