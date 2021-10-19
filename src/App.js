// import Home from "./components/Home";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs";
import Header from "./components/Header.js";
import './App.css';
import CreateFolder from "./components/createFolder/CreateFolder.js";
import CreateFile from './components/createFile/CreateFile';
import { useSelector } from 'react-redux';
import Main from './pages/Main';
import Folder from "./components/createFolder/Folder";
// import File from './components/createFile/File';

export default function App() {
  const isOpened = useSelector(state => state.toolkit.isOpened)
  return (
    <div className="app">
      <Router>
        <Header />
        {isOpened ? <CreateFolder /> : <CreateFile />}
        <Breadcrumbs />
        <Switch>
          {/*           
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/fo">
            <h1>foooooooooooooooo</h1>
          </Route>
          <Route exact path="/fo/oo">
            <h1>rrrrrrrrrrrrrrrrrrrrr</h1>
          </Route> */}


          <Route exact path="/:folder">
            <Folder />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}
