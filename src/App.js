// import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs";
import Header from "./components/Header.js";
import './App.css';
import CreateFolder from "./components/createFolder/CreateFolder.js";
import CreateFile from './components/createFile/CreateFile';
import { useSelector } from 'react-redux';
import Main from './pages/Main';

export default function App() {
  const isOpened = useSelector(state => state.toolkit.isOpened)
  return (
    <div className="app">
      <Header />
      {isOpened ? <CreateFolder /> : <CreateFile />}
      <Breadcrumbs />
      <Switch>
        <Route from="/:folderId">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}
