import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ResultSearchPage from "./pages/ResultSearchPage";
import ShceduleAnimePage from "./pages/ScheduleAnimePage";
import DetailAnimePage from "./pages/DetailAnimePage";
import GenresPage from "./pages/GenresPage";
import DetailGenresPage from "./pages/DetailGenresAnimePage";
import AnimePopularPage from "./pages/AnimePopularPage";
import DetailAnimeOngoingPage from "./pages/DetailAnimeOngoingPage";
import ListAnimePage from "./pages/ListAnimePage";
import BookMarkPage from "./pages/BookMarkPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/result" element={<ResultSearchPage />} />
        <Route path="/result/:name" element={<ResultSearchPage />} />
        <Route path="/ongoing/:day" element={<ShceduleAnimePage />} />
        <Route path="/allOngoing" element={<DetailAnimeOngoingPage />} />
        <Route path="/detailAnime/:id" element={<DetailAnimePage />} />
        <Route path="/genres" element={<GenresPage />} />
        <Route path="/genres/:id/:name" element={<DetailGenresPage />} />
        <Route path="/popular" element={<AnimePopularPage />} />
        <Route path="/listAnime" element={<ListAnimePage />} />
        <Route path="/bookmark" element={<BookMarkPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
