import React from "react"
import Card from "./components/Card";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Search from "./components/Search";
import SearchResult from "./components/SearchResult";
import PlayerProfile from "./components/PlayerProfile";
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Card />} />
        <Route path="/search" exact element={<Search />} />
        <Route path="/search-result" exact element={<SearchResult />} />
        <Route path="/player" exact element={<PlayerProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
