import { Link } from "react-router-dom";
import styled from "styled-components";
import catLogo from "../../images/cat-logo.png";
import cartIcon from "../../images/shopping-cart.png";

const CatPage = ({currentCat, cart, allCats, setAllCats, setCart, showCart, setShowCart}) => {

    const handleAddToCart = () => {
        if(!currentCat.inCart){
            let updatedCats = [...allCats];
            updatedCats[currentCat.catId].inCart = true;
            setAllCats(updatedCats);
        
            let updatedCart = [...cart];
            updatedCart.push(currentCat);
            setCart(updatedCart)
        } else {
            for (let i = 0; i < cart.length; i++) {
                if(cart[i].catId === currentCat.catId){
                    let removeCatFromCart = [...cart];
                    removeCatFromCart.splice(i, 1)
                    setCart(removeCatFromCart)
            
                    let updatedAllCats = [...allCats];
                    updatedAllCats[currentCat.catId].inCart = false;
                    setAllCats(updatedAllCats);
                }
            }
        }
    }

    return (
        <>
            <NavBar>
                <LeftSection to="/advanced">
                    <img src={catLogo} alt="cat logo" />
                    <h1>Cats4Lyf</h1>
                </LeftSection>
                <CartButton value={cart.length} onClick={() => setShowCart(!showCart)}></CartButton>
            </NavBar>
            <CatInfo iscartvisible={showCart}>
                <img src={currentCat.catImage} alt={currentCat.name} />
                <RightSection>
                    <h1>{currentCat.name}</h1>
                    <p>Breed: {currentCat.breed}</p>
                    <p>Gender: {currentCat.gender}</p>
                    <p>Born in: {currentCat.location}</p>
                    <h4>Owner Contact Information:</h4>
                    <p>Mobile Number: {currentCat.ownerDetails.phoneNumber}</p>
                    <p>Email: {currentCat.ownerDetails.email}</p>
                    <h2>£{currentCat.price}</h2>
                    <button onClick={handleAddToCart}>{currentCat.inCart ? "Remove from Cart" : "Add to Cart"}</button>
                </RightSection>
            </CatInfo>
        </>
    )
}

export default CatPage;

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

const LeftSection =styled(Link)`
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

const CartButton = styled.button`
    height: 40px;
    width: 40px;
    padding: 0;
    margin: 0 50px 0 0;
    cursor: pointer;
    background-image: url(${cartIcon});
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
    filter: invert(100%);
    background-color: rgba(0,0,0,0);

    &:hover {
        transform: scale(1.1);
    }

    &:after{
        content: attr(value);
        font-family: avenir;
        background-color: rgb(0, 255, 255);
        border-radius: 50%;
        position: relative;
        padding: 0px 5px;
        box-sizing: border-box;
        left: 15px;
        top: 13px;
        opacity: 0.9;
    }
`;

const CatInfo = styled.div`
    margin: ${props => (props.iscartvisible ? '130px 400px 50px 50px' : '130px 50px 50px 50px')};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    transition: margin 0.2s;
    background-color: #ededed;
    height: calc(100vh - 180px);

    img {
        height: 100%;
        width: 50%;
        object-fit: cover;
    }
`;

const RightSection =styled.div`
    padding: 50px;
    box-sizing: border-box;
    height: 100%;
    width: 50%;

    p {
        margin: 5px 0;
    }
    h4 {
        margin: 15px 0 5px 0;
    }
    h2 {
        letter-spacing: 4px;
    }
    button {
        background-color: #2BA95A;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        letter-spacing: 4px;
        cursor: pointer;
        border: none; 
        padding: 20px 50px;
    
        &:hover {
            background-color: #23c25d;
        }
    }
`;