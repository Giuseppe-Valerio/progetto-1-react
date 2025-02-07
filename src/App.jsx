import "./App.css";
import FilmGallery from "./components/FilmGallery";
import FilmGallerySecondo from "./components/FilmGallerySecondo";
import FilmGalleryTerzo from "./components/FilmGalleryTerzo";
import Footer from "./components/footer";
import TopBar from "./components/TopBar";
import TvShows from "./components/TVShows";

function App() {
  return (
    <>
      <TopBar />
      <TvShows />
      <FilmGallery />
      <FilmGallerySecondo />
      <FilmGalleryTerzo />
      <Footer />
    </>
  );
}

export default App;
