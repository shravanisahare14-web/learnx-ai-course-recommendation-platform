
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"

function Learning() {

  /* NAVIGATION */

  const navigate = useNavigate()



  /* ENROLLED COURSES */

  const enrolledCourses = JSON.parse(
    localStorage.getItem("enrolledCourses")
  ) || []



  return (

    <div className="min-h-screen bg-[#030712] text-white">

      {/* NAVBAR */}

      <Navbar />



      {/* MAIN CONTENT */}

      <div className="max-w-7xl mx-auto px-8 pt-40 pb-20">



        {/* HEADER */}

        <div className="mb-16">

          <p className="uppercase tracking-[4px] text-indigo-400 text-sm">

            Your Learning Space

          </p>



          <h1 className="text-6xl font-black mt-6">

            Continue Learning

          </h1>



          <p className="text-gray-400 text-xl mt-6 max-w-3xl leading-relaxed">

            Access your enrolled courses,
            track your progress,
            and continue your premium AI-powered learning journey.

          </p>

        </div>



        {/* EMPTY STATE */}

        {enrolledCourses.length === 0 ? (

          <div className="border border-white/10 bg-white/5 rounded-[32px] p-16 text-center">

            <h2 className="text-4xl font-bold">

              No Courses Enrolled Yet

            </h2>



            <p className="text-gray-400 text-lg mt-6">

              Explore premium courses
              and begin your learning journey.

            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">



            {enrolledCourses.map((course) => (

              <div
                key={course.id}
                className="bg-white/5 border border-white/10 rounded-[30px] overflow-hidden"
              >



                {/* IMAGE */}

                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-56 object-cover"
                />



                {/* CONTENT */}

                <div className="p-7">



                  <p className="text-indigo-400 text-sm">

                    {course.category}

                  </p>



                  <h2 className="text-3xl font-bold mt-4 leading-snug">

                    {course.title}

                  </h2>



                  {/* PROGRESS */}

                  <div className="mt-8">

                    <div className="flex items-center justify-between mb-3">

                      <p className="text-gray-400">

                        Progress

                      </p>



                      <p className="text-indigo-400 font-semibold">

                        {course.progress || 0}%

                      </p>

                    </div>



                    <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">

                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                        style={{
                          width: `${course.progress || 0}%`,
                        }}
                      />

                    </div>

                  </div>



                  {/* BUTTON */}

                  <button
                    onClick={() =>
                      navigate(`/course-player/${course.id}`)
                    }
                    className="mt-8 w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold hover:scale-[1.02] transition duration-300"
                  >

                    Continue Learning

                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  )
}

export default Learning