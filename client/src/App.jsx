import { useEffect } from 'react';
import FloatinStuff from './components/FloatinStuff';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthStore } from './store/AuthStore';


// Pages
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import EmailVerificationPage from './pages/EmailVerificationPage'; 
import DashBoardPage from './pages/DashBoardPage';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if(!user.isVerified) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/" replace />
  }

  return children;
}

function App() {

  const { isCheckingAuth, checkAuth, isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    checkAuth()
  }, [checkAuth]);


  return (
    <>
      <div
        className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-sky-900
 flex items-center justify-center relative overflow-hidden"
      >
        <FloatinStuff
          color="bg-blue-500"
          size="w-64 h-64"
          top="-5%"
          left="10%"
          delay={0}
        />
        <FloatinStuff
          color="bg-sky-500"
          size="w-48 h-48"
          top="50%"
          left="80%"
          delay={4}
        />
        <FloatinStuff
          color="bg-blue-500"
          size="w-48 h-48"
          top="40%"
          left="-10%"
          delay={2}
        />
        <FloatinStuff
          color="bg-blue-500"
          size="w-48 h-48"
          top="-10%"
          left="50%"
          delay={2}
        />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashBoardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <RedirectAuthenticatedUser>
                <SignUpPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/login"
            element={
              <RedirectAuthenticatedUser>
                <LoginPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route path="/verify-email" element={<EmailVerificationPage />} />
        </Routes>
        <Toaster position="bottom-center" />
      </div>
    </>
  );
}

export default App;
