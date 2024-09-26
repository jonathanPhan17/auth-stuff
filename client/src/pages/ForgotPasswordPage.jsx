import { motion } from 'framer-motion';
import { useState } from 'react';
import { useAuthStore } from '../store/AuthStore'

const ForgotPasswordPage = () => {

  const [email, setEmail] = useState("");
  const [isSubmited, setIsSubmitted] = useState("");

  const { isLoading, forogotPassword } = useAuthStore();

  return (
    <div>ForgotPasswordPage</div>
  )
}

export default ForgotPasswordPage