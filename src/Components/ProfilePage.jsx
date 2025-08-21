import { useAuth } from "../context/AuthContext";

export default function ProfilePage() {
  const { user } = useAuth();

  const name = user?.displayName || "Default User";

  const email = user?.email || "default@example.com";

  return (
    <div className="bg-gray-50 min-h-screen px-6">
      <h2 className="text-lg font-semibold text-gray-900 pt-6 pb-6">
        Account Settings
      </h2>

      <div className="bg-white rounded-xl p-4 mb-6">
        <div className="flex items-center">
          <div className="relative">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 011.414 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{email}</p>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-600 leading-relaxed px-1">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
        Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
        Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        Voluptua.
      </div>
    </div>
  );
}
