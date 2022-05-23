import { Link } from "react-router-dom";
import styled from "styled-components";
import catLogo from "../../images/cat-logo.png";

const Checkout = ({ cartTotal, cart, setCart, allCats, setAllCats }) => {

    const handleRemoveFromCart = (index) => {
        const updateAllCatArr = [...allCats];
        updateAllCatArr[cart[index].catId].inCart = false
        setAllCats(updateAllCatArr)

        const removeItemArr = [...cart];
        removeItemArr.splice(index, 1);
        setCart(removeItemArr)
    }

    return (
        <>
            <NavBar>
                <LeftSection to="/advanced">
                    <img src={catLogo} alt="cat logo" />
                    <h1>Cats4Lyf</h1>
                </LeftSection>
            </NavBar>
            
            <CartItemsWrap>
                <h1>Checkout Page - {cart.length} Item(s)</h1>
                {cart.map((cat, index) => {
                    return (
                        <CartItem key={index}>
                            <LeftCartSection>
                                <img src={cat.catImage} alt={cat.name}/>
                                <div>
                                    <h3>{cat.name}</h3>
                                    <p>£{cat.price}</p>
                                </div>
                            </LeftCartSection>
                            <button onClick={() => handleRemoveFromCart(index)}>Remove from Cart</button>
                        </CartItem>
                    )
                })}
                <TotalCheckoutWrap>
                    <p>Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>£{cartTotal}</span></p>
                </TotalCheckoutWrap>
                <BuyCatButton>Buy Cats</BuyCatButton>
            </CartItemsWrap>
        </>
    )
}

export default Checkout;

const NavBar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: #1a1a1a;
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LeftSection = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;

    h1 {
        color: white;
        margin: 0 10px;
    }
    img {
        margin: 0 0 0 50px;
        height: 40px;
    }
`;

const CartItemsWrap = styled.div`
    margin: 130px 150px 50px 150px;
`;

const CartItem = styled.div`
    background-color: #ededed;
    margin: 5px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        background-color: #ededed;
        color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        letter-spacing: 4px;
        cursor: pointer;
        border: 1px solid #ededed;
        padding: 20px 50px;
        margin: 0 20px;
        transition: all 0.1s;
    
        &:hover {
            border: 1px solid red; 
            padding: 20px 42px;
            letter-spacing: 5px;
        }
    }
`;

const LeftCartSection = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 200px;
        height: 200px;
        object-fit: cover;
    }

    div {
        margin: 0 50px;
        h3 {
            letter-spacing: 2px;
            margin: 5px;
        }
        
        p {
            margin: 5px;
            letter-spacing: 4px;
            font-size: 12px;
        }
    }
`;

const TotalCheckoutWrap = styled.div`
    background-color: #dbdbdb;
    display: flex;
    justify-content: flex-end;
    letter-spacing: 4px;
    p {
        margin: 20px 20px;
    }
    span {
        font-weight: 700;
        font-size: 25px;
    }
`;

const BuyCatButton = styled.button`
    width: 100%;
    border: none;
    background-color: #2BA95A;
    color: white;
    cursor: pointer;
    padding: 20px 50px;
    letter-spacing: 4px;

    &:hover {
        background-color: #23c25d;
    }
`;