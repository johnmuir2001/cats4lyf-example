import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const ShoppingCart = ({cartTotal, setCartTotal, showCart, setShowCart, cart}) => {
    

    const navigate = useNavigate();

    useEffect(() => {
        let totalCost = 0
        for (let i = 0; i < cart.length; i++) {
            totalCost += Number(cart[i].price)
        }
        setCartTotal(totalCost.toFixed(2))
    }, [cart, setCartTotal])

    const handleCloseCart = () => {
        setShowCart(false)
        navigate("cart")
    }

    return (
        <CartWrapper showCart={showCart}>
            <h1>Your Cart:</h1>
            {cart.map((cat, index) => {
                return (
                    <CartItem key={index}>
                        <img src={cat.catImage} alt={cat.name} />
                        <CartItemText>
                            <h4>{cat.name}</h4>
                            <p>£{cat.price}</p>
                        </CartItemText>
                    </CartItem>
                )
            })}
            <TotalWrap showCart={showCart}>
                <p>Total:</p>
                <h4>£{cartTotal}</h4>
            </TotalWrap>
            <CheckoutLink showCart={showCart} onClick={handleCloseCart}>CHECKOUT</CheckoutLink>
        </CartWrapper>
    )
}

export default ShoppingCart;

const CartWrapper = styled.div`
    position: fixed;
    overflow: scroll;
    top: 70px;
    right: ${props => (props.showCart ? '0px' : '-350px')};
    width: 350px;
    height: calc(100vh - 192px);
    background-color: #ededed;
    transition: right 0.2s;

    h1 {
        font-size: 18px;
        margin: 10px;
    }
`;

const CartItem = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0 20px 0;
    margin: 10px;
    border-bottom: 1px solid black;

    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
    }
`;

const CartItemText = styled.div`
    margin: 0 0 0 15px;

    h4 {
        letter-spacing: 2px;
        margin: 5px;
    }
    
    p {
        margin: 5px;
        letter-spacing: 4px;
        font-size: 12px;
    }
`;

const TotalWrap = styled.div`
    background-color: #DEDEDE;
    position: fixed;
    width: 350px;
    height: 65px;
    bottom: 65px; 
    right: ${props => (props.showCart ? '0px' : '-350px')};
    transition: right 0.2s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 10px;
    box-sizing: border-box;

    h4 {
        letter-spacing: 2px;
        margin: 5px;
    }
    
    p {
        margin: 5px;
        letter-spacing: 4px;
        font-size: 12px;
    }
`;

const CheckoutLink = styled.button`
    position: fixed;
    width: 350px;
    height: 65px;
    bottom: 0; 
    right: ${props => (props.showCart ? '0px' : '-350px')};
    transition: right 0.2s;
    cursor: pointer;
    border: none;

    background-color: #2BA95A;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    letter-spacing: 4px;

    &:hover {
        background-color: #23c25d;
    }
`;