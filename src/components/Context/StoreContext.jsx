
import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const [searchText, setSearchText] = useState('');

    // Add item to cart
    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({
                ...prev,
                [itemId]: 1
            }));
        }
        else {
            setCartItems((prev) => ({
                ...prev,
                [itemId]: prev[itemId] + 1
            }));
        }
    };

    // Remove item from cart
    const removeFromcart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };

            if (updatedCart[itemId] > 1) {
                updatedCart[itemId] -= 1;
            }
            else {
                delete updatedCart[itemId];
            }

            return updatedCart;
        });
    };

    // Calculate total cart amount
    const getTotalCartAmount = () => {
        let totalamount = 0;

        for (const item in cartItems) {
            if (cartItems[item] > 0) {

                let itemInfo = food_list.find(
                    (product) => product._id === item
                );

                if (itemInfo) {
                    totalamount += itemInfo.price * cartItems[item];
                }
            }
        }

        return totalamount;
    };

    // Calculate total cart items
    const getTotalCartItems = () => {
        let totalItems = 0;

        for (const item in cartItems) {
            totalItems += cartItems[item];
        }

        return totalItems;
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const contextValue = {
        food_list,
        addToCart,
        removeFromcart,
        cartItems,
        setCartItems,
        getTotalCartAmount,
        getTotalCartItems,

        searchText,
        setSearchText
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
