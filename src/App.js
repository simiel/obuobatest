import About from "./pages/about/About"
import Blog from "./pages/blog/Blog"
import Contact from "./pages/contact/Contact"
import ForSale from "./pages/forSale/ForSale"
import Home from "./pages/home/Home"
import Projects from "./pages/projects/Projects"

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"



function App() {
    return (
        <Router>
            <Header/>
            <Navbar/>


            <Switch>
          <Route path='/home'>
              <Home/>
          </Route>
          <Route path='/about'>
              <About/>
          </Route>
          <Route path='/blog'>
              <Blog/>
          </Route>
          <Route path='/contact'>
              <Contact/>
          </Route>
          <Route path='/forsale'>
              <ForSale/>
          </Route>
          <Route path='/projects'>
              <Projects/>
          </Route>
        </Switch>
        </Router>
    )
}

export default App
