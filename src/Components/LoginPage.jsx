import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const isFormValid = email.trim() && password.trim();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    try {
      await signIn(email, password);
      navigate("/profile");
    } catch (err) {
      setError(err.message || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full md:max-w-md md:mx-auto md:my-20 md:bg-gray-100 md:shadow-lg md:rounded-xl p-6 sm:p-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">
          Sign in to your <br /> PopX account
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {error && (
          <p className="mb-4 text-sm text-red-600 bg-red-50 px-3 py-2 rounded">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-[#8B5CF6]">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-[#8B5CF6]">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full mt-4 py-2 rounded-md font-semibold text-sm transition-all duration-200
          ${
            isFormValid
              ? "bg-[#753df7] hover:bg-[#5B24C9] text-white shadow-md hover:shadow-lg cursor-pointer"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
