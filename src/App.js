import "./App.css";
import Home from "./components/Home/Home/Home";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/Shared/NotFound/NotFound";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Register/Register";
import ItemDetail from "./components/ItemDetail/ItemDetail";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/item/:itemId" element={<ItemDetail></ItemDetail>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
