import React, {useContext, useMemo, useState} from 'react';
import Header from './templates/Header.jsx';
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import AddPage from "./pages/AddPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import AuthContext, {AuthProvider} from "./context/AuthContext.js";

function App() {

  const [auth, setAuth] = useState(false);
  const [theme, setTheme] = useState('light');
  const [locale, setLocale] = useState('id');

  const authentication = () => {
      setAuth((prevAuth) => (!prevAuth));
  }

  const contextValue = useMemo(() => {
      return {
          auth,
          authentication
      };
  }, [auth]);

  return (
      <AuthProvider value={contextValue}>
        <div className="app-container">
          <Header title="Mynotes" />
          <main>
            <Routes>
              <Route path="/" element={<Homepage />}/>
              <Route path="/login" element={<LoginPage />}/>
              <Route path="/register" element={<RegisterPage />}/>
              <Route path="/notes/new" element={<AddPage />}/>
              <Route path="/notes/:id" element={<DetailPage />}/>
            </Routes>
          </main>
        </div>
      </AuthProvider>
  );
}

export default App;
