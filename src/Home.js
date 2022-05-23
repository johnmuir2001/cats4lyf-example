import { Link } from "react-router-dom";
import styled from "styled-components";
import curvedArrow from "./images/curved-arrow.png";

const Home = () => {

    return (
        <PageWrap>
            <h1>Cats4Lyf Example Projects</h1>
            <div>
                <h3>Simplest Version - <StyledLink to="/simple">Go to Simple Version</StyledLink></h3>
                <p>This version covers the basic requirements stated in the brief. You display images from the cat API, as well as display names and prices that have been produced by faker. You can add cats to you shopping cart which can be hidden or visible depending on a button click. The shopping cart then keeps a total cost of all items currently in you cart. You can also remove cats from the cart by selecting them again when the say 'Remove from Basket'.</p>
                
            </div>
            <div>
                <h3>Advanced Version - <StyledLink to="/advanced">Go to Advanced Version</StyledLink></h3>
                <p>The advanced version makes use of the react router to spread the apps functionality over multiple pages. The shopping cart is its own page as well as each cat having its own page which contains mor einformation about the cat.</p>
            </div>
            <HomeButtonWrap>
                <p>Use this to get back to this page</p>
                <img src={curvedArrow} alt="curved arrow" />
            </HomeButtonWrap>
            
        </PageWrap>
    )
}

export default Home;

const PageWrap = styled.div`
    margin: 50px 150px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    background-color: #2BA95A;
    color: white;
    font-weight: 400;
    letter-spacing: 4px;
    padding: 10px 30px;
    &:hover {
        background-color: #23c25d;
    }
`;

const HomeButtonWrap = styled.div`
    height: 120px;
    width: 120px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-145%);

    p {
        margin: 0 0 0 10px;
    }
    img {
        height: 70px;
        float: right;
        transform: translateY(-10px) rotate(-40deg);
    }
`;