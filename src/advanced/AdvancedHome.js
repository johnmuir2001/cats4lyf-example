import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { faker } from '@faker-js/faker';
import AllCatsPage from "./components/AllCatsPage";
import CatPage from "./components/CatPage";
import Checkout from "./components/Checkout";
import ShoppingCart from "./components/ShoppingCart";


const AdvancedHome = () => {
    const [allCats, setAllCats] = useState([]);
    const [cart, setCart] = useState([]);
    const [errorMessage, setErrorMessage] = useState(false);
    const [currentCat, setCurrentCat] = useState({});
    const [showCart, setShowCart] = useState(false);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const fetchCatData = async () => {
            try {
                const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=20");
                if(!response.ok){
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                const catData = data.map((cat, index) => {
                return {
                    inCart: false,
                    catId: index,
                    catImage: cat.url,
                    name: faker.name.findName(),
                    breed: faker.animal.cat(),
                    price: faker.finance.amount(200, 800),
                    gender: faker.name.gender(),
                    age: Math.ceil(Math.random() * 6),
                    location: faker.address.country(),
                    ownerDetails: {
                        phoneNumber: faker.phone.phoneNumber(),
                        email: faker.internet.email(),
                    }
                }
            })
            setAllCats(catData);
            } catch (err){
                setErrorMessage(err.message);
            }
        }
        fetchCatData()
    }, []);
    
    return (
        <>
            <Routes>
                <Route path="/" element={ <AllCatsPage cart={cart} allCats={allCats} errorMessage={errorMessage} setCurrentCat={setCurrentCat} showCart={showCart} setShowCart={setShowCart} /> }></Route>
                <Route path="cat" element={ <CatPage currentCat={currentCat} cart={cart} allCats={allCats} setAllCats={setAllCats} setCart={setCart} showCart={showCart} setShowCart={setShowCart}/> }></Route>
                <Route path="cart" element={ <Checkout cartTotal={cartTotal} cart={cart} setCart={setCart} allCats={allCats} setAllCats={setAllCats} /> }></Route>
            </Routes>
            <ShoppingCart cartTotal={cartTotal} setCartTotal={setCartTotal} showCart={showCart} setShowCart={setShowCart} cart={cart} />
        </>
    )
}

export default AdvancedHome;