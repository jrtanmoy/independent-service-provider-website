import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import FrequentlyAsked from './components/FrequentlyAsked/FrequentlyAsked';
import Header from './components/Header/Header';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <FrequentlyAsked></FrequentlyAsked>
      <Footer></Footer>
    </div>
  );
}

export default App;
