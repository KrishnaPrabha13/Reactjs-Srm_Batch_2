import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from "react-router";
import Std from './component/Std';
import Dashboard from './component/Dashboard';
import View from './component/View';
import {useMediaQuery} from "@material-ui/core";


function App() {
  const a = useMediaQuery("max-width:300px");
  return (
    <div className="App">
      <Switch>
        <Route exact path = "/" component= {Dashboard}/>
        <Route path  = "/Studentedit" component = {Std}/>
        <Route path = "/Studentview" component={View}/>
      </Switch>
      {a && <div style={{backgroundColor: "blueviolet"}}>MobileView</div>}
    </div>

  );
}

export default App;
