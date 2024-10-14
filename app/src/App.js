import './images/background.jpg';
import './App.css';
import Header from './components/header/header';
import CardGrid from './components/main/cardGrid';
import Footer from './components/footer/footer';
function App() {
  return (
    <div>
      <Header />

      <div>
        <CardGrid />
      </div>

      <div className="fullscreen-background" />

      <Footer />
    </div>
  );
}

export default App;
