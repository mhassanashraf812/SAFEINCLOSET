import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
	const currency = 'PKR   ';
	const delivery_fee = 250;
	const backendUrl = import.meta.env.VITE_BACKEND_URL;
	const [ search, setSearch ] = useState('');
	const [ showSearch, setShowSearch ] = useState(false);
	const [ cartItems, setCartItems ] = useState([]);
    console.log(cartItems, "cartItemms")
	const [ products, setProducts ] = useState([]);
	const [ token, setToken ] = useState('');
	const navigate = useNavigate();
	const addToCart = async (itemId, size, color) => {
        console.log(itemId, size, color, "jhfskldfhdsjks")
        if (!size) {
            toast.error('Select Product Size');
            return;
        }
    
        if (!color) {
            toast.error('Select Product Color');
            return;
        }
    
        let cartData = [...cartItems];
    
        // Try to find if this item with same size and color already exists
        const existingItem = cartData.find(
            item => item._id === itemId && item.size === size && item.color === color
        );
    
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartData.push({
                _id: itemId,
                size,
                color,
                quantity: 1
            });
        }
    
        setCartItems(cartData);
    
        // Send to backend
        if (token) {
            try {
                await axios.post(
                    backendUrl + '/api/cart/add',
                    { itemId, size, color },
                    { headers: { token } }
                );
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    };

	// const getCartCount = () => {
	// 	let totalCount = 0;
	// 	for (const items in cartItems) {
	// 		for (const item in cartItems[items]) {
	// 			try {
	// 				if (cartItems[items][item] > 0) {
	// 					totalCount += cartItems[items][item];
	// 				}
	// 			} catch (error) {}
	// 		}
	// 	}
	// 	return totalCount;
	// };
    const getCartCount = () => {
        let totalCount = 0;
        for (const item of cartItems) {
            totalCount += item.quantity;
        }
        return totalCount;
    };
	

    const updateQuantity = async (itemId, size, color, quantity) => {
        let cartData = structuredClone(cartItems);
    
        const existingItem = cartData.find(
            item => item._id === itemId && item.size === size && item.color === color
        );
    
        if (existingItem) {
            existingItem.quantity = quantity;
            setCartItems(cartData);
    
            if (token) {
                try {
                    await axios.post(
                        backendUrl + '/api/cart/update',
                        { itemId, size, color, quantity },
                        { headers: { token } }
                    );
                } catch (error) {
                    console.log(error);
                    toast.error(error.message);
                }
            }
        } else {
            toast.error('Item not found in cart');
        }
    };
    

	// const getCartAmount = () => {
	// 	let totalAmount = 0;
	// 	for (const items in cartItems) {
	// 		let itemInfo = products.find((product) => product._id === items);
	// 		for (const item in cartItems[items]) {
	// 			try {
	// 				if (cartItems[items][item] > 0) {
	// 					totalAmount += itemInfo.price * cartItems[items][item];
	// 				}
	// 			} catch (error) {}
	// 		}
	// 	}
	// 	return totalAmount;
	// };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const item of cartItems) {
            const itemInfo = products.find(product => product._id === item._id);
            if (itemInfo) {
                totalAmount += itemInfo.price * item.quantity;
            }
        }
        return totalAmount;
    };
	const getProductsData = async () => {
		try {
			const response = await axios.get(backendUrl + '/api/product/list');
			if (response.data.success) {
				setProducts(response.data.products.reverse());
			} else {
				toast.error(response.data.message);
			}
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		}
	};

	const getUserCart = async (token) => {
		try {
			const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } });
			if (response.data.success) {
				setCartItems(response.data.cartData);
			}
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		}
	};

	useEffect(() => {
		getProductsData();
	}, []);

	useEffect(
		() => {
			if (!token && localStorage.getItem('token')) {
				setToken(localStorage.getItem('token'));
				getUserCart(localStorage.getItem('token'));
			}
			if (token) {
				getUserCart(token);
			}
		},
		[ token ]
	);

	const value = {
		products,
		currency,
		delivery_fee,
		search,
		setSearch,
		showSearch,
		setShowSearch,
		cartItems,
		addToCart,
		setCartItems,
		getCartCount,
		updateQuantity,
		getCartAmount,
		navigate,
		backendUrl,
		setToken,
		token
	};

	return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
