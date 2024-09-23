import FloatinStuff from './components/FloatinStuff';
import { Routes, Route } from 'react-router-dom';


// Pages
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import EmailVerificationPage from './pages/EmailVerificationPage';

function App() {
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
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/verify-email' element={<EmailVerificationPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
