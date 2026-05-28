
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function Navbar() {

  /* USER STATE */

  const [user, setUser] = useState(null)



  /* NAVIGATION */

  const navigate = useNavigate()



  /* LOAD USER */

  useEffect(() => {

    const storedUser = JSON.parse(
      localStorage.getItem("user")
    )

    setUser(storedUser)

  }, [])



  /* LOGOUT */

  const handleLogout = () => {

    localStorage.removeItem("token")

    localStorage.removeItem("user")

    localStorage.removeItem("enrolledCourses")



    /* UPDATE STATE IMMEDIATELY */

    setUser(null)



    /* REDIRECT */

    navigate("/")

  }



  return (

    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 px-8 pt-6"
    >



      {/* NAV CONTAINER */}

      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between border border-white/10 bg-white/5 backdrop-blur-2xl rounded-[24px] px-8 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">



          {/* LOGO */}

          <Link to="/">

            <h1 className="text-3xl font-black tracking-[-2px] text-white">

              Learn
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">

                X

              </span>

            </h1>

          </Link>



          {/* NAV LINKS */}

          <div className="hidden lg:flex items-center gap-10">

            <Link
              to="/"
              className="text-gray-300 hover:text-white transition text-lg"
            >
              Home
            </Link>



            <Link
              to="/courses"
              className="text-gray-300 hover:text-white transition text-lg"
            >
              Courses
            </Link>



            {user && (

              <Link
                to="/dashboard"
                className="text-gray-300 hover:text-white transition text-lg"
              >
                Dashboard
              </Link>

            )}



            {user && (

              <Link
                to="/learning"
                className="text-gray-300 hover:text-white transition text-lg"
              >
                Learning
              </Link>

            )}

          </div>



          {/* RIGHT SIDE */}

          <div className="flex items-center gap-4">



            {/* BEFORE LOGIN */}

            {!user && (

              <>

                <Link to="/login">

                  <button className="border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-2xl hover:bg-white/10 transition text-sm font-medium text-white">

                    Login

                  </button>

                </Link>



                <Link to="/register">

                  <button className="bg-gradient-to-r from-indigo-500 to-purple-500 px-7 py-3 rounded-2xl text-sm font-semibold shadow-[0_10px_30px_rgba(99,102,241,0.4)] hover:scale-105 transition duration-300 text-white">

                    Get Started

                  </button>

                </Link>

              </>

            )}



            {/* AFTER LOGIN */}

            {user && (

              <div className="flex items-center gap-4">



                {/* USER NAME */}

                <p className="text-gray-300 text-sm">

                  {user.name}

                </p>



                {/* PROFILE */}

                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">

                  {user.name?.charAt(0)}

                </div>



                {/* LOGOUT */}

                <button
                  onClick={handleLogout}
                  className="px-5 py-3 rounded-2xl border border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20 transition"
                >

                  Logout

                </button>

              </div>

            )}

          </div>

        </div>

      </div>

    </motion.header>

  )
}

export default Navbar
