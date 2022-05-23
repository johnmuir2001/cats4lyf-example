import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import arrow from "./images/arrow-icon.png";
import SimplePage from "./simple/SimplePage";
import AdvancedHome from "./advanced/AdvancedHome";
import Home from "./Home";


const App = () => {

  return (
    <>
        <GoHomeWrap>
          <Link to="/">Go Home</Link>
          <img src={arrow} alt="arrow"/>
        </GoHomeWrap>
        
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/simple" element={ <SimplePage/> } />
          <Route path="/advanced/*" element={ <AdvancedHome/> } />
        </Routes>
    </>
  );
}

export default App;

const GoHomeWrap = styled.div`
  position: fixed;
  z-index: 100;
  background-color: #ededed;
  top: 50%;
  transform: translateY(-50%);
  left: -130px;
  height: 100px;
  width: 220px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  transition: left 0.2s;

  img {
    height: 50px;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 20px;
    color: black;
  }

  a:hover {
    color: #6b6b6b;
  }

  &:hover {
    left: 0;
  }
`;