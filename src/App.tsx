import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import Home from './pages/home/Home';
import Loader from './ui/Loader';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={
                <>
                  <Header />
                  <Home />
                  <Footer />
                </>
              }
            />
          </Routes>
        </React.Fragment>
      )}
    </div>
  );
};

export default App;
