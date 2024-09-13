import Navbar from "./Navbar";
import HeroSlider from "./HeroSlider";
import CarProductGrid from "./AutosSection";

function App() {
  return (
    <div className="App w-full md:w-5/6 mx-auto bg-white dark:bg-neutral-600">
      <Navbar />
      <HeroSlider />
      <CarProductGrid />
    </div>
  );
}

export default App;
