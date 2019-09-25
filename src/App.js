import React from 'react';
import './App.css';
import {Home,List,Detail,Login,Buycar,Center} from "./components"
import {Route,Switch,Redirect,withRouter} from "react-router-dom"

const NotFound = ()=><div>not found 404</div>

class App extends React.Component{
  render(){
    return (
      <div className="App">
          <Switch>
            <Route path="/home" component={Home}/>
            <Redirect from="/" to="/home" exact/>
            <Route path="/list/:type" component={List} />
            <Route path="/list/1" component={List} exact />
            <Redirect from="/list" to="/list/1" exact/>
            <Route path="/detail" component={Detail}/>
            <Redirect from="/detail" to="/detail/1/5" exact/>
            <Route path="/login" component={Login}/>
            <Route path="/buycar" component={Buycar}/>
            <Route path="/center" component={Center}/>
            <Route component={NotFound}/>
          </Switch>
      </div>
    )
  }
}
export default withRouter(App)