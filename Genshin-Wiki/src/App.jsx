import { Route, Routes, Router } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import WeaponsPage from "./pages/WeaponsPage";
import ArtifactPage from "./pages/ArtifactPage";
import backgroundImage from "/genshinBG.jpg";

function App() {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="characters" element={<CharactersPage />} />
          <Route path="weapons" element={<WeaponsPage />} />
          <Route path="artifacts" element={<ArtifactPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
