import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />}></Route>
        <Route path="/new-meetup" element={<NewMeetupsPage />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </div>
  );
}

export default App;
