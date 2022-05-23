import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import catLogo from "../../images/cat-logo.png";
import cartIcon from "../../images/shopping-cart.png";

const AllCatsPage = ({ cart, allCats, errorMessage, setCurrentCat, showCart, setShowCart }) => {

    const navigate = useNavigate();

    const handleMovePage = (index) => {
      setCurrentCat(allCats[index])
      navigate('cat')
    }

    return (
      <>
        <NavBar>
          <LeftSection>
            <img src={catLogo} alt="cat logo" />
            <h1>Cats4Lyf</h1>
          </LeftSection>
          <CartButton value={cart.length} onClick={() => setShowCart(!showCart)}></CartButton>
        </NavBar>
        <h2>{errorMessage}</h2>
        <AllCats iscartvisible={showCart}>
          {allCats.map((cat, index) => {
            return (
              <CatCard key={index} isCatInCart={cat.inCart} onClick={()=> handleMovePage(index)}>
                {cat.inCart ? <h3>Already In Cart</h3> : <h3>Learn More</h3>}
                <img src={cat.catImage} alt={cat.name}/>
                <h4>{cat.name}</h4>
                <p>£{cat.price}</p>
              </CatCard>
            )
          })}
        </AllCats>
      </>
    )
} 

export default AllCatsPage;

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

const LeftSection =styled.div`
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

const AllCats = styled.div`
    margin: ${props => (props.iscartvisible ? '130px 400px 50px 50px' : '130px 50px 50px 50px')};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    transition: margin 0.2s;
`;

const CatCard = styled.div`
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
        background-color: #ededed;
    }

    h3 {
        position: absolute;
        background-color: #ededed;
        width: 250px;
        height: 50px;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: ${props => props.isCatInCart ? '0.8' : '0'};
    }

    &:hover h3 {
        opacity: 0.8;
    }

    img {
        height: 250px;
        width: 250px;
        object-fit: cover;
    }

    h4 {
        letter-spacing: 2px;
        margin: 10px 0;;
    }

    p {
        margin: 0;
        letter-spacing: 4px;
        font-size: 12px;
    }
`;