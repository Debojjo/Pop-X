import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [agency, setAgency] = useState("yes");
  const [error, setError] = useState("");
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const isFormValid =
    name.trim() && phone.trim() && email.trim() && password.trim();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    try {
      const user = await signUp({
        name,
        email,
        password,
        phone,
        company,
        agency,
      });
      console.log("Signed up user:", user.displayName);
      navigate("/profile");
    } catch (err) {
      setError(err.message || "Failed to create account");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="w-full px-6 pt-6 
                  md:max-w-md md:mx-auto md:my-20 md:bg-gray-100 md:shadow-lg md:rounded-xl md:p-8"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Create your <br /> PopX account
        </h2>

        {error && (
          <p className="mb-3 text-sm text-red-600 bg-red-50 px-3 py-2 rounded">
            {error}
          </p>
        )}

        <form className="space-y-4" onSubmit={handleSignUp}>
          <div>
            <label className="block text-sm font-medium text-[#8B5CF6]">
              Full Name<span className="text-[#753df7]">*</span>
            </label>
            <input
              type="text"
              placeholder="Marry Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#753df7]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#8B5CF6]">
              Phone number<span className="text-[#753df7]">*</span>
            </label>
            <input
              type="text"
              placeholder="1234567890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#753df7]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#8B5CF6]">
              Email address<span className="text-[#753df7]">*</span>
            </label>
            <input
              type="email"
              placeholder="marry@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#753df7]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#8B5CF6]">
              Password<span className="text-[#753df7]">*</span>
            </label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#753df7]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#8B5CF6]">
              Company name
            </label>
            <input
              type="text"
              placeholder="Optional"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#753df7]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#8B5CF6] mb-2">
              Are you an Agency?<span className="text-[#753df7]">*</span>
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center text-sm text-gray-900">
                <input
                  type="radio"
                  name="agency"
                  checked={agency === "yes"}
                  onChange={() => setAgency("yes")}
                  className="text-[#753df7] focus:ring-[#753df7]"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center text-sm text-gray-900">
                <input
                  type="radio"
                  name="agency"
                  checked={agency === "no"}
                  onChange={() => setAgency("no")}
                  className="text-[#753df7] focus:ring-[#753df7]"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full block text-center text-sm py-3 mt-10 rounded-md font-medium shadow-md transition-colors
          ${
            isFormValid
              ? "bg-[#753df7] hover:bg-[#7C3AED] text-white cursor-pointer"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
