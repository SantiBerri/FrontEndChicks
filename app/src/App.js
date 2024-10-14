import './images/background.jpg';
import './App.css';
import Header from './components/header/header';
import Cards from './components/cards/cards';
function App() {
  return (
    <div>
      <Header/>

    <div>
      <Cards/>
    </div>
    <div className="fullscreen-background" />
      
    </div>
  );
}

export default App;
