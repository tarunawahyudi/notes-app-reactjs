import React, {useContext, useMemo, useState} from 'react';
import Header from './templates/Header.jsx';
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import AddPage from "./pages/AddPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import AuthContext, {AuthProvider} from "./context/AuthContext.js";
import {getUserLogged, putAccessToken} from "./utils/network-data.js";

function App() {

  const [authedUser, setAuthedUser] = useState(null);
  const [theme, setTheme] = useState('light');
  const [locale, setLocale] = useState('id');

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  }

  const contextValue = useMemo(() => {
      return {
          authedUser,
      };
  }, [authedUser]);

  if (authedUser === null) {
      return (
          <AuthProvider value={contextValue}>
              <div className="app-container">
                  <main>
                      <Routes>
                          <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />}/>
                          <Route path="/register" element={<RegisterPage />}/>
                      </Routes>
                  </main>
              </div>
          </AuthProvider>
      )
  }

  if (authedUser) {
      return (
          <AuthProvider value={contextValue}>
              <div className="app-container">
                  <Header title="Mynotes" />
                  <main>
                      <Routes>
                          <Route path="/" element={<Homepage />}/>
                          <Route path="/notes/new" element={<AddPage />}/>
                          <Route path="/notes/:id" element={<DetailPage />}/>
                      </Routes>
                  </main>
              </div>
          </AuthProvider>
      );
  }
}

export default App;
