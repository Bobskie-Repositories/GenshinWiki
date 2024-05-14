import { Route, Routes, Router } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import WeaponsPage from "./pages/WeaponsPage";
import ArtifactsPage from "./pages/ArtifactsPage";
import S_CharacterPage from "./pages/S_CharacterPage";
import AddCharacterPage from "./pages/AddCharacterPage";
import NotFoundPage from "./pages/NotFoundPage";
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

          <Route element={<CharactersPage />} />
          <Route path="characters">
            <Route index element={<CharactersPage />} />
            <Route path=":id" element={<S_CharacterPage />} />
            <Route path="add" element={<AddCharacterPage />} />
          </Route>

          <Route path="weapons" index element={<WeaponsPage />} />

          <Route path="artifacts" element={<ArtifactsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
