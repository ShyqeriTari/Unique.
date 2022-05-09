import React from "react"
import Card from "./components/Card";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Search from "./components/Search";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Card />} />
        <Route path="/search" exact element={<Search />} />
        <Route path="/search-result" exact element={<SearchResult />} />
      </Routes>
    </Router>
  );
}

export default App;
