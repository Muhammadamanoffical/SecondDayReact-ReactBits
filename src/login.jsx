import {  useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./ulthi/firebase";


function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      signInWithEmailAndPassword, (auth, email, password);
      alert("Signed in successfully!");
    
      window.location.replace("/")
      
    } catch (error) {
      console.error("Error signing in:", error);
      alert("Failed to sign in. Please check your credentials and try again.");
    }
  };
  return (
    <section className="text-gray-400 bg-gray-900 body-font relative">
      <div className="absolute inset-0 bg-gray-900">
        <iframe
          title="map"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}
        />
      </div>
      <div className="container px-5 py-24 mx-auto flex ">
        <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
          <h2 className="text-white text-lg mb-1 font-medium title-font">
            Login
          </h2>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              password
            </label>
            <input
              type="password"
              id="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            onClick={handlelogin}
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Login
          </button>
          <p className="text-xs text-gray-400 text-opacity-90 mt-3">
            Create a new account
          </p>
        </div>
      </div>
    </section>
  );
}
export default LogIn;
