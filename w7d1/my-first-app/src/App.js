import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Button from './components/Button/Button';
import './App.css';

function App() {
  const buttonsContent = ["Save", "Add", "Update", "Delete"];
  return (
    <div className="App">
      <Header />
        {buttonsContent.map((buttonContent) =>{
          const id = uuidv4();
          return <Button key={id} content={buttonContent} />
        })}
      <Footer />
    </div>
  );
}

export default App;
