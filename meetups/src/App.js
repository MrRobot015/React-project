import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import ResponsiveAppBar from "./components/layout/ResponsiveAppBar";

import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";

export default function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <CssBaseline />
      <Container maxWidth="sm">
        <Routes>
          <Route path="home" element={<AllMeetupsPage />}></Route>
          <Route path="new-meetup" element={<NewMeetupsPage />}></Route>
          <Route path="favorites" element={<Favorites />}></Route>
        </Routes>
      </Container>
    </div>
  );
}


