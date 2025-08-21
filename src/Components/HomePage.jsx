import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-end items-center min-h-screen bg-white px-6 py-8 ">
      <div className="flex flex-col w-full max-w-sm mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Welcome to PopX</h1>
        <p className="text-gray-500 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
      </div>

      <div className="flex flex-col w-full max-w-sm mt-4 mb-10 gap-4">
        <NavLink to="/signup">
          <button className="bg-[#753df7] text-white py-3.5 px-6 rounded-lg font-medium text-base shadow-sm 
                             hover:bg-[#600bf3] transition-colors cursor-pointer w-full">
            Create Account
          </button>
        </NavLink>

        <NavLink to="/login">
          <button className="bg-[#DDD6FE] text-[#8B5CF6] py-3.5 px-6 rounded-lg font-medium text-base 
                             hover:bg-[#C4B5FD] transition-colors cursor-pointer w-full">
            Already Registered? Login
          </button>
        </NavLink>
      </div>
    </div>
  );
}

