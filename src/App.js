import React from "react"
import { Routes, Route, BrowserRouter} from "react-router-dom"
import Search from "./components/Search";
import SearchResult from "./components/SearchResult";
import PlayerProfile from "./components/PlayerProfile";
import "./App.css"
import MyNavbar from "./components/MyNavbar";
import Login from "./components/Login";
import FanProfile from "./components/FanProfile";
import ClubProfile from "./components/ClubProfile";
import PlayerDetailsCreation from "./components/PlayerDetailsCreation";
import ClubDetailsCreation from "./components/ClubDetailsCreation";

function App() {

  const location = window.location.pathname

  return (
    <BrowserRouter>
    { location !== "/" ?
      <MyNavbar/> : <></>}
      <Routes>
        <Route path="/" exact element={<Login/>} />
        <Route path="/search" exact element={<Search />} />
        <Route path="/search-result" exact element={<SearchResult />} />
        <Route path="/player" exact element={<PlayerProfile />} />
        <Route path="/me" exact element={<FanProfile />} />
        <Route path="/club" exact element={<ClubProfile />} />
        <Route path="/player-create" exact element={<PlayerDetailsCreation />} />
        <Route path="/club-create" exact element={<ClubDetailsCreation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
