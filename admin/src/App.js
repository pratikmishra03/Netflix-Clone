import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";

import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import MovieList from "./pages/movieList/MovieList";
import { Movie } from "@mui/icons-material";
import NewMovie from "./pages/newMovie/NewMovie";
import NewUser from "./pages/newUserPage/NewUser";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        {user && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/movies">
                <MovieList />
              </Route>
              <Route path="/movie/:movieId">
                <Movie />
              </Route>
              <Route path="/newMovie">
                <NewMovie />
              </Route>
              <Route path="/lists">
                <ListList />
              </Route>
              <Route path="/list/:listId">
                <List />
              </Route>
              <Route path="/newlist">
                <NewList />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;



// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
// import "./app.css"
// import Home from "./components/pages/home/Home";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
// import UserList from "./components/pages/userList/UserList";
// import User from "./components/pages/user/User";
// import NewUser from "./components/pages/newUserPage/NewUser";
// import ProductList from "./components/pages/productList/ProductList";
// import Product from "./components/pages/product/Product";
// import NewProduct from "./components/pages/newProduct/NewProduct";
// import { useState,useEffect, useMemo } from "react";
// import axios from "axios";

// function App() {

//   return (
//      <Router>
//       <Topbar/>
//       <div className="continer">
//       <Sidebar/>
//       <Routes>
//       <Route path="/" element={<Home/>} />
//       <Route path="/users" element={<UserList/>} />
//       <Route path="/user/:userId" element={<User/>} />
//       <Route path="/newUser" element={<NewUser/>} />
//       <Route path="/products" element={<ProductList/>} />
//       <Route path="/product/:productId" element={<Product/>} />
//       <Route path="/newproduct" element={<NewProduct/>} />
//       </Routes>
//       </div>

//      </Router>
   
      
    
//   );
// }

// export default App;
