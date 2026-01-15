import { Routes, Route } from "react-router-dom";
import { MoviesPage } from "@/features/movies/pages/MoviesPage";
import { MovieDetailPage } from "@/features/movies/pages/MovieDetailPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MoviesPage />} />
      <Route path="/movies/:id" element={<MovieDetailPage />} />
    </Routes>
  );
};
export default App;
