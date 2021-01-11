import React, { useState, useEffect } from 'react'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import TodoAppPages from './pages/TodoAppPages'
import Home from './pages/Home'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import Profile from './pages/Profile'
import About from './pages/About'
import Products from './pages/Products'
import NotFoundPage from './pages/NotFoundPage'
import Counter from './pages/Counter'
import Cart from './pages/Cart'
import ProductList from './pages/ProductList'
import UserList from './pages/UserList'
import UserEdit from './pages/UserEdit'
import UserAdd from './pages/UserAdd'
function App() {
  const [todos, setTodos] = useState([])
  const [isAuth, setIsAuth] = useState('')
  const [account, setAccount] = useState('')
  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          {/* <Link to="/">Home</Link>
          <Link to="/about">About</Link> */}
          {/* 路由表 */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Route path="/login">
              <Login
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                setAccount={setAccount}
              />
            </Route> */}
            {/* <Route path="/register">
              <Register isAuth={isAuth} setIsAuth={setIsAuth} />
            </Route>
            <Route path="/profile">
              <Profile isAuth={isAuth} account={account} />
            </Route> */}
            <Route path="/todo">
              <TodoAppPages todos={todos} setTodos={setTodos} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            {/* 注意：要加上網址參數 */}
            <Route exact path="/user-edit/:userid?">
              <UserEdit />
            </Route>
            <Route exact path="/user-add">
              <UserAdd />
            </Route>
            <Route path="/products/:id?">
              <Products isAuth={isAuth} setIsAuth={setIsAuth} />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/productList">
              <ProductList />
            </Route>
            <Route path="/counter">
              <Counter />
            </Route>
            {/* 404找不到網頁，需要放在switch路由表最後一個 */}
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}

export default App
