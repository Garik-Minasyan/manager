import { useState } from "react";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Engineer from './components/Engineer';
import { Route, Switch } from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs";
import Header from "./components/Header.js";
import './App.css'
import CreateFolder from "./components/createFolder/CreateFolder.js";
import CreateFile from './components/createFile/CreateFile';

export default function App() {
  const [openCreateFolder, setOpenCreateFolder] = useState(true);

  return (
    <div className="app">
      <Breadcrumbs />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/jobs" render={props => <Jobs {...props} />} />
        <Route
          exact
          path="/jobs/engineer"
          render={props => <Engineer {...props} />}
        />
      </Switch>
      <Header setOpenCreateFolder={setOpenCreateFolder} />
      {openCreateFolder ? <CreateFolder /> : <CreateFile />}
    </div>
  );
}
