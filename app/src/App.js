import './images/background.jpg';
import './App.css';
import Header from './components/header/header';
import CardGrid from './components/main/cardGrid';
function App() {
  return (
    <div>
      <Header />

      <div>
        <CardGrid />
      </div>

      <div className="fullscreen-background" />
    </div>
  );
}

export default App;
