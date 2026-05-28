
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

function Login() {

  /* FORM STATE */

  const [formData, setFormData] = useState({

    email: "",
    password: "",

  })



  /* LOADING */

  const [loading, setLoading] = useState(false)



  /* NAVIGATION */

  const navigate = useNavigate()



  /* HANDLE CHANGE */

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value,

    })

  }



  /* LOGIN */

  const handleLogin = async (e) => {

    e.preventDefault()



    try {

      setLoading(true)



      const res = await axios.post(

        "http://localhost:5000/api/auth/login",

        formData

      )



      localStorage.setItem(

        "token",
        res.data.token
      )



      localStorage.setItem(

        "user",
        JSON.stringify(res.data.user)
      )



      navigate("/dashboard")

    } catch (error) {

      alert("Invalid Credentials")

    } finally {

      setLoading(false)

    }

  }



  return (

    <div className="min-h-screen bg-[#030712] text-white flex items-center justify-center px-6">

      <div className="w-full max-w-xl border border-white/10 bg-white/5 backdrop-blur-2xl rounded-[40px] p-12">



        {/* HEADER */}

        <div className="mb-10 text-center">

          <p className="uppercase tracking-[4px] text-indigo-400 text-sm">

            Welcome Back

          </p>



          <h1 className="text-5xl font-black mt-5">

            Login

          </h1>

        </div>



        {/* FORM */}

        <form
          onSubmit={handleLogin}
          className="space-y-7"
        >



          {/* EMAIL */}

          <div>

            <label className="text-gray-300">

              Email Address

            </label>



            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-3 bg-[#111827] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500"
            />

          </div>



          {/* PASSWORD */}

          <div>

            <label className="text-gray-300">

              Password

            </label>



            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full mt-3 bg-[#111827] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500"
            />

          </div>



          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold text-2xl hover:scale-[1.02] transition duration-300"
          >

            {loading
              ? "Logging In..."
              : "Login →"}

          </button>

        </form>



        {/* REGISTER */}

        <p className="text-center text-gray-400 mt-10 text-lg">

          Don’t have an account?{" "}

          <Link
            to="/register"
            className="text-indigo-400 hover:text-indigo-300 transition"
          >

            Register

          </Link>

        </p>

      </div>

    </div>

  )
}

export default Login
