import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BecomeHost from './pages/BecomeHost';
import PropertyDetails from './pages/PropertyDetails';
import CategoryPage from './pages/CategoryPage';
import DestinationPage from './pages/DestinationPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/become-host" element={<BecomeHost />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/destination/:city" element={<DestinationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;