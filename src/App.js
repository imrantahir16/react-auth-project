import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";
// import NotFoundPage from './pages/NotFoundPage';

function App() {
  const authctx = useContext(AuthContext);
  const isLoggedIn = authctx.isLoggedIn;
  return (
    <Layout>
      <Routes>
        <Route path="/" end element={<HomePage />} />
        {!isLoggedIn && <Route path="/auth" element={<AuthPage />} />}
        <Route
          path="/profile"
          element={
            (isLoggedIn && <UserProfile />) ||
            (!isLoggedIn && <Navigate to="/auth" replace />)
          }
        />
        <Route path="*" element={<HomePage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> we could use 404 page here */}
      </Routes>
    </Layout>
  );
}

export default App;
