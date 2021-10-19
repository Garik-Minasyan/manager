import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs";
import Header from "./components/Header.js";
import './App.css';
import CreateFolder from "./components/createFolder/CreateFolder.js";
import CreateFile from './components/createFile/CreateFile';
import { useSelector } from 'react-redux';
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
          <Route exact path="/:folder">
            <Folder />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
