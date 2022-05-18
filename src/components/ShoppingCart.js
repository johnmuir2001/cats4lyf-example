import { useState, useEffect } from 'react';
import styled from "styled-components";

const ShoppingCart = (props) => {
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        let totalCost = 0
        for (let i = 0; i < props.itemsInCart.length; i++) {
            totalCost += Number(props.itemsInCart[i].price)
        }
        setCartTotal(totalCost)
    }, [props.itemsInCart])

    return (
        <CartWrapper isCartVisible={props.isCartVisible}>
            <h1>Your Cart:</h1>
            {props.itemsInCart.map((cat, index) => {
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
            <TotalWrap isCartVisible={props.isCartVisible}>
                <p>Total:</p>
                <h4>£{cartTotal.toFixed(2)}</h4>
            </TotalWrap>
        </CartWrapper>
    )
}

export default ShoppingCart;

const CartWrapper = styled.div`
    position: fixed;
    overflow: scroll;
    top: 70px;
    right: ${props => (props.isCartVisible ? '0px' : '-350px')};
    width: 350px;
    height: calc(100vh - 127px);
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
    bottom: 0; 
    right: ${props => (props.isCartVisible ? '0px' : '-350px')};
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