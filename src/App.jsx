import "./App.css";
import Header from "./components/Header/Header";
import HeroPage from "./pages/LandingPage/HeroPage/HeroPage";
import ProductCard from "./pages/LandingPage/Product/ProductCard";

function App() {
  return (
    <>
      <Header />
      <HeroPage />
      <ProductCard />
    </>
  );
}

export default App;
