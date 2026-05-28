
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

function Register() {

  /* FORM STATE */

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    password: "",
    interests: [],

  })



  /* LOADING */

  const [loading, setLoading] = useState(false)



  /* NAVIGATION */

  const navigate = useNavigate()



  /* HANDLE INPUT */

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value,

    })

  }



  /* HANDLE INTERESTS */

  const handleInterest = (interest) => {

    if (formData.interests.includes(interest)) {

      setFormData({

        ...formData,
        interests: formData.interests.filter(
          (item) => item !== interest
        ),

      })

    } else {

      setFormData({

        ...formData,
        interests: [
          ...formData.interests,
          interest,
        ],

      })

    }

  }



  /* REGISTER */

  const handleRegister = async (e) => {

    e.preventDefault()



    try {

      setLoading(true)



      const res = await axios.post(

        "http://localhost:5000/api/auth/register",

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

      alert("Registration Failed")

    } finally {

      setLoading(false)

    }

  }



  /* INTEREST OPTIONS */

  const interestOptions = [

    "Web Development",
    "Artificial Intelligence",
    "Cloud Computing",
    "Cyber Security",
    "Data Science",
    "UI/UX Design",

  ]



  return (

    <div className="min-h-screen bg-[#030712] text-white flex items-center justify-center px-6 py-20">

      <div className="w-full max-w-2xl border border-white/10 bg-white/5 backdrop-blur-2xl rounded-[40px] p-12">



        {/* TITLE */}

        <div className="mb-10 text-center">

          <p className="uppercase tracking-[4px] text-indigo-400 text-sm">

            Join LearnX

          </p>



          <h1 className="text-5xl font-black mt-5">

            Create Account

          </h1>

        </div>



        {/* FORM */}

        <form
          onSubmit={handleRegister}
          className="space-y-7"
        >



          {/* NAME */}

          <div>

            <label className="text-gray-300">

              Full Name

            </label>



            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-3 bg-[#111827] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500"
            />

          </div>



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
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full mt-3 bg-[#111827] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500"
            />

          </div>



          {/* INTERESTS */}

          <div>

            <label className="text-gray-300 block mb-5">

              Select Interests

            </label>



            <div className="flex flex-wrap gap-4">

              {interestOptions.map((interest) => (

                <button
                  type="button"
                  key={interest}
                  onClick={() => handleInterest(interest)}
                  className={`px-5 py-3 rounded-2xl border transition duration-300 ${
                    formData.interests.includes(interest)

                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 border-transparent"

                      : "border-white/10 bg-white/5"
                  }`}
                >

                  {interest}

                </button>

              ))}

            </div>

          </div>



          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold text-lg hover:scale-[1.02] transition duration-300"
          >

            {loading
              ? "Creating Account..."
              : "Create Account"}

          </button>

        </form>



        {/* LOGIN */}

        <p className="text-center text-gray-400 mt-10">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-indigo-400"
          >

            Login

          </Link>

        </p>

      </div>

    </div>

  )
}

export default Register
