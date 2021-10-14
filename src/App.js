import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs";
import Header from "./components/Header.js";
import './App.css';
import CreateFolder from "./components/createFolder/CreateFolder.js";
import CreateFile from './components/createFile/CreateFile';
import Folder from "./components/createFolder/Folder";
import File from "./components/createFile/File";
import { useSelector } from 'react-redux';

export default function App() {
  const isOpened = useSelector(state => state.toolkit.isOpened)
  return (
    <div className="app">
      <Breadcrumbs />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
      </Switch>
      <Header />
      {isOpened ? <CreateFolder />
        : <CreateFile />
      }
      <Folder />
      <File />
    </div>
  );
}
