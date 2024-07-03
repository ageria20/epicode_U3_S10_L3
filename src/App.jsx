import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNav from "./component/MyNav";
import Home from "./component/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import TvShows from "./component/TvShows";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvShows" element={<TvShows />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
