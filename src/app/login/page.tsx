"use client";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function AuthForm() {
  const { login, register, resetPassword } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [forgotPassword, setForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      isLogin
        ? await login(email, password)
        : await register(name, email, password);
      router.push("/");
    } catch (err) {
      alert((err as Error).message);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await resetPassword(resetEmail);
      setResetMessage("Reset email sent! Check your inbox.");
      setResetEmail("");
    } catch (err) {
      setResetMessage((err as Error).message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-lg p-8 bg-black text-white">
        {forgotPassword ? (
          <>
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Reset Password
            </h2>
            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
              />
            </div>
            <button
              onClick={handleResetPassword}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg mb-4"
            >
              Send Reset Link
            </button>
            <p className="text-sm text-green-400 mb-3">{resetMessage}</p>
            <button
              onClick={() => setForgotPassword(false)}
              className="text-sm text-blue-400 underline hover:text-white transition"
            >
              Back to Login
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              {isLogin ? "Log In" : "Create your account"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-white rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              )}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 bg-white rounded-lg text-black placeholder-gray-500 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-4 flex items-center text-gray-400"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              {!isLogin && (
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className="w-full px-4 py-3 bg-white rounded-lg text-black placeholder-gray-500 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      className="absolute inset-y-0 right-4 flex items-center text-gray-400"
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
              )}
              <button className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold py-3 rounded-lg">
                {isLogin ? "Log In" : "Sign Up"}
              </button>
            </form>

            <div className="flex justify-between items-center mt-6 text-sm">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-gray-400 underline hover:text-white transition"
              >
                {isLogin
                  ? "Don't have an account? Sign up"
                  : "Already have an account? Sign In"}
              </button>
              {isLogin && (
                <button
                  onClick={() => setForgotPassword(true)}
                  className="text-gray-400 underline hover:text-white transition"
                >
                  Forgot password?
                </button>
              )}
            </div>

            <div className="mt-8 text-center">
              <span className="text-gray-500 text-sm">Or</span>
            </div>

            <div className="flex mt-6 space-y-3 gap-4">
              <button className="w-full h-12 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Continue with Google
              </button>
              <button className="w-full h-12 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Continue with Microsoft
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
