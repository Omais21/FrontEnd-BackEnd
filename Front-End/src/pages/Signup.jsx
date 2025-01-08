// import React from "react";

// function SignupPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
//         <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
//         <p className="text-center text-gray-500 text-sm mb-6">
//           Create your account to get started
//         </p>
//         <form className="space-y-4">
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Your Full Name"
//               className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Your Email"
//               className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               placeholder="••••••••"
//               className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="text-sm text-center text-gray-500 mt-4">
//           Already have an account?{" "}
//           <a
//             href="#"
//             className="text-primary hover:underline"
//           >
//             Log in
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default SignupPage;




// import axios from "axios";
// import React from "react";

// function LoginPage() {
//   const formSubmitHua = async (event) => {
//     try {
//       event.preventDefault();

//       const formData = new FormData(event.target);

//       const email = formData.get("email");
//       const password = formData.get("password");

//       console.log("email: ", email);
//       console.log("password: ", password);

//       const response = await axios.post(
//         "https://dummyjson.com/auth/login",
//         {
//           username: "emilys",
//           password: "emilyspass",
//         },
//         { withCredentials: true }
//       );

//       console.log("response ", response);
//     } catch (error) {
//       console.log("error ", error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form onSubmit={formSubmitHua} className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
//         <h2 className="text-2xl font-bold text-center text-primary">Login</h2>
//         <p className="text-center text-gray-500 text-sm mb-6">
//           Access your account
//         </p>
//         <div className="space-y-4">
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter Your Email"
//               className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 text-gray-700"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="••••••••"
//               className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 text-gray-700"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//           >
//             Log In
//           </button>
//         </div>
//         <p className="text-sm text-center text-gray-500 mt-4">
//           Don't have an account?{" "}
//           <a
//             href="#"
//             className="text-primary hover:underline"
//           >
//             Sign Up
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default LoginPage;



import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";


function LoginPage() {
  const [errorMessage, setErrorMessage] = useState("");

  const formSubmitHua = async (event) => {
    event.preventDefault();
    setErrorMessage(""); // Clear previous errors

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        {
          username: email,
          password: password,
        },
        { withCredentials: true }
      );

      console.log("response ", response);
      // Perform success actions, e.g., navigate to another page
    } catch (error) {
      console.error("Login error: ", error);
      setErrorMessage("Invalid login credentials. Please try again.");
    }
  };
       const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-100  ${darkMode ? "bg-slate-900 text-white" : ""}`}>   
      <form
        onSubmit={formSubmitHua}
        className={`w-full max-w-md bg-white rounded-lg shadow-lg p-6 ${darkMode ? "bg-slate-900 text-white" : ""}`}>
        <h2 className="text-2xl font-bold text-center text-primary">Login</h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Access your account
        </p>
        {errorMessage && (
          <div className="text-red-500 text-sm text-center mb-4">
            {errorMessage}
          </div>
        )}
        <div className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 text-gray-700"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 text-gray-700"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Log In
          </button>
        </div>
        <p className="text-sm text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-primary hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
