
import { Link } from "react-router-dom";
function Header(){
return(
    <>
 <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <div>
                  <Link
                    to={"/"}
                    className="flex items-center py-5 px-2 text-gray-700"
                  >
                    <span className="font-bold text-xl">ShopName</span>
                  </Link>
                </div>
                <div className="hidden md:flex items-center space-x-1">
                 
                  <Link 
                  to={"/shop"}
                  
                    className="py-5 px-3 text-gray-700 hover:text-gray-900"
                  >
                    Shop
                  </Link>
                  <Link
                   to={"/about"}
                    className="py-5 px-3 text-gray-700 hover:text-gray-900"
                  >
                    About
                  </Link>
                  <Link
                    to={"/contact"}
                    className="py-5 px-3 text-gray-700 hover:text-gray-900"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div  className="hidden md:flex items-center space-x-1">
                <Link
                to={"/login"}
                 className="py-5 px-3" id="login">
                  Login
                </Link>
                <Link
                to={"/signin"}
                  id="sign" className="py-2 px-3 bg-yellow-400 text-yellow-900 rounded hover:bg-yellow-300"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </nav>

    </>
)

}
export default Header;