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
import PlayerCompare from "./components/PlayerCompare";

function App() {

  return (
    <BrowserRouter>
    
      <MyNavbar/> 
      <Routes>
        <Route path="/" exact element={<Login/>} />
        <Route path="/search" exact element={<Search />} />
        <Route path="/search-club-player" exact element={<Search />} />
        <Route path="/search-compare-player1" exact element={<Search />} />
        <Route path="/search-compare-player2" exact element={<Search />} />
        <Route path="/search-result" exact element={<SearchResult />} />
        <Route path="/search-club-result" exact element={<SearchResult />} />
        <Route path="/search-compare-result1" exact element={<SearchResult />} />
        <Route path="/search-compare-result2" exact element={<SearchResult />} />
        <Route path="/player" exact element={<PlayerProfile />} />
        <Route path="/me" exact element={<FanProfile />} />
        <Route path="/club" exact element={<ClubProfile />} />
        <Route path="/player-create" exact element={<PlayerDetailsCreation />} />
        <Route path="/club-create" exact element={<ClubDetailsCreation />} />
        <Route path="/player-compare" exact element={<PlayerCompare />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
