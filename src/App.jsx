import React, {useContext, useEffect, useMemo, useState} from 'react';
import Header from './templates/Header.jsx';
import {Route, Routes, useNavigate} from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import AddPage from "./pages/AddPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import {AuthProvider} from "./context/AuthContext.js";
import {getAuthedUser, getUserLogged, putAccessToken, putAuthedUser, removeAuthedUser} from "./utils/network-data.js";
import LoginHeader from "./templates/LoginHeader.jsx";

function App() {

  const [authedUser, setAuthedUser] = useState(getAuthedUser());
  const [theme, setTheme] = useState('light');
  const [locale, setLocale] = useState('id');

  const redirect = useNavigate();

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
    const saveToStorage = JSON.stringify(data);
    putAuthedUser(saveToStorage);
    redirect('/');
  }

  const onLogout = () => {
      setAuthedUser(null);
      putAccessToken('');
      removeAuthedUser();
      redirect('/login');
  }

  const contextValue = useMemo(() => {
      return {
          authedUser,
      };
  }, [authedUser]);

    return (
        <AuthProvider value={contextValue}>
            <div className="app-container">
                {authedUser === null ? (
                    <>
                        <LoginHeader title="Mynotes" />
                        <main>
                            <Routes>
                                <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                                <Route path="/register" element={<RegisterPage />} />
                            </Routes>
                        </main>
                    </>
                ) : (
                    <>
                        <Header title="Mynotes" logout={onLogout} />
                        <main>
                            <Routes>
                                <Route path="/" element={<Homepage />} />
                                <Route path="/*" element={<Homepage />} />
                                <Route path="/notes/new" element={<AddPage />} />
                                <Route path="/notes/:id" element={<DetailPage />} />
                            </Routes>
                        </main>
                    </>
                )}
            </div>
        </AuthProvider>
    );

}

export default App;
