import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../components/Input"
import { useAuthStore } from "../store/AuthStore";

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-sky-500 text-transparent bg-clip-text">
          Log In Account
        </h2>
        <form onSubmit={handleLogin}>
          <Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center mb-6">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-400 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          {error && <p className="text-red-500 text-center font-semibold mb-2">{error}</p>}
          <motion.button
            className="mt-5 w-full py-3 px-4 bg-sky-600 text-white font-bold rounded-lg shadow-lg 
            hover:bg-blue-700 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 
            focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-100 ease-linear"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Loader className="w-6 h-6 animate-spin mx-auto" /> : "Login"}
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-400">
          Don't have an account? {" "}
          <Link to="/signup" className="text-blue-400 hover:underline">Sign up</Link>
        </p>
      </div>
    </motion.div>
  );
};

export default LoginPage;
