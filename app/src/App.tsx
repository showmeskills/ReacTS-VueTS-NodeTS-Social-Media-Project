import {Switch,Route,Redirect} from"react-router-dom";
import {Home,Login,Profile,Register} from "@/pages";
function App() {
  return (
    <Switch>
      <Route path="/" exact render={()=><Home/>}/>
      <Route path="/login" exact render={()=><Login/>}/>
      <Route path="/register" exact render={()=><Register/>}/>
      <Route path="/profile/:username"  render={()=><Profile/>}/>
      <Redirect from="*" to="/login"/>
    </Switch>
  )
}

export default App;
