import "./App.css";
import Header from "./components/Header/Header";
import BestComponent from "./pages/LandingPage/BestSeller/BestComponent";
import HeroPage from "./pages/LandingPage/HeroPage/HeroPage";
import ProductCard from "./pages/LandingPage/Product/ProductCard";

function App() {
  return (
    <>
      <Header />
      <HeroPage />
      <ProductCard />
      <BestComponent />
    </>
  );
}

export default App;
