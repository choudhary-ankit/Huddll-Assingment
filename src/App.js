import React, { Component } from 'react'
import NavApp from './Component/NavBar/NavApp'
import HomePage from './Component/HomePage/HomePage'
import Authing from './Component/SigninSingup/Authing'
import News from './Component/HackerNews/News'
import {Route} from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <div>
           <NavApp/>
           <Route path ="/" exact component={HomePage}></Route>
           <Route path ="/singin" exact component={Authing}></Route>
           <Route path ="/news" exact component={News}></Route>
      </div>
    )
  }
}
