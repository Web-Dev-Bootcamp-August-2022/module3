import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Headline from "./components/Headline/Headline";
import Button from "./components/Button/Button";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Headline />

      <Button />
      <Button />

      <Gallery />
    </div>
  );
}

export default App;
