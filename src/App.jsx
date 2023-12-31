import { useState, useMemo, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LocaleProvider } from './contexts/LocaleContext';
import NotesHeader from './components/NotesHeader';
import NotesFooter from './components/NotesFooter';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import EditPage from './pages/EditPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { getUserLogged, putAccessToken } from './utils/network-data';

function App() {
  const [authedUser, setAuthedUser] = useState('');
  const [loading, setLoading] = useState(true);
  const [locale, setLocale] = useState('id');

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      return prevLocale === 'id' ? 'en' : 'id';
    });
  };

  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale
    };
  }, [locale]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getUserLogged();
      setAuthedUser(data)
      setLoading(false)
    }

    fetchData();
    return () => {
      setAuthedUser(null);
      setLoading(true);
    };
  }, []);

  const onLogout = () => {
    setAuthedUser(null);

    putAccessToken('');
  }

  const onLoginSuccess = async ({ token }) => {
    putAccessToken(token);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  if (loading) {
    return (
      null
    );
  }

  if (authedUser === null) {
    return (
      <LocaleProvider value={localeContextValue}>
        <header className="mb-5">
          <nav className="navbar fixed-top navbar-expand-sm navbar-light" id="neubar">
            <div className="container">
              <a className="navbar-brand lh-lg fs-3" href="/"><b>Notes App</b></a>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
            <Route path="/register" element={<RegisterPage />} />/
          </Routes>
        </main>
        <NotesFooter />
      </LocaleProvider>
    )
  }

  return (
    <LocaleProvider value={localeContextValue}>
      <NotesHeader logout={onLogout} name={authedUser.name} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <NotesFooter />
    </LocaleProvider>
  );
}

export default App;