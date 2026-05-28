
import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom"

function CoursePlayer() {

  /* COURSE ID */

  const { id } = useParams()



  /* ENROLLED COURSES */

  const enrolledCourses = JSON.parse(
    localStorage.getItem("enrolledCourses")
  ) || []



  /* FIND CURRENT COURSE */

  const course = enrolledCourses.find(
    (item) => item.id === Number(id)
  )



  /* IF COURSE NOT FOUND */

  if (!course) {

    return (

      <div className="min-h-screen bg-[#030712] text-white flex items-center justify-center">

        <h1 className="text-4xl font-bold">

          Course Not Found

        </h1>

      </div>

    )

  }



  /* DEMO LESSONS */

  const lessons = [

    {
      id: 1,
      title: "Introduction",
      duration: "12 mins",
      completed: true,
    },

    {
      id: 2,
      title: "Core Concepts",
      duration: "18 mins",
      completed: true,
    },

    {
      id: 3,
      title: "Advanced Learning",
      duration: "24 mins",
      completed: false,
    },

    {
      id: 4,
      title: "Project Architecture",
      duration: "20 mins",
      completed: false,
    },

  ]



  return (

    <div className="min-h-screen bg-[#030712] text-white">

      {/* NAVBAR */}

      <Navbar />



      {/* MAIN CONTENT */}

      <div className="max-w-7xl mx-auto px-8 pt-40 pb-20">



        {/* HEADER */}

        <div className="mb-12">

          <p className="uppercase tracking-[4px] text-indigo-400 text-sm">

            Continue Learning

          </p>



          <h1 className="text-5xl font-black mt-5">

            {course.title}

          </h1>



          <p className="text-gray-400 text-lg mt-5">

            {course.category}

          </p>

        </div>



        {/* LAYOUT */}

        <div className="grid lg:grid-cols-[1.6fr_0.8fr] gap-10">



          {/* LEFT SIDE */}

          <div>



            {/* COURSE THUMBNAIL */}

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
            >

              <div className="relative rounded-[30px] overflow-hidden border border-white/10 group cursor-pointer">

                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-500"
                />



                {/* OVERLAY */}

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-5xl">

                    ▶

                  </div>

                </div>

              </div>

            </a>



            {/* DESCRIPTION */}

            <div className="mt-10 bg-white/5 border border-white/10 rounded-[30px] p-8">

              <p className="text-indigo-400 text-sm">

                Course Description

              </p>



              <h2 className="text-3xl font-bold mt-4">

                Premium Learning Experience

              </h2>



              <p className="text-gray-400 leading-relaxed mt-6 text-lg">

                Master industry-ready concepts,
                practical workflows,
                modern architecture,
                and immersive learning experiences
                through AI-powered premium education.

              </p>

            </div>

          </div>



          {/* RIGHT SIDE */}

          <div>



            {/* PROGRESS */}

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 mb-8">

              <p className="text-gray-400">

                Overall Progress

              </p>



              <h2 className="text-5xl font-black mt-4">

                {course.progress || 0}%

              </h2>



              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden mt-6">

                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  style={{
                    width: `${course.progress || 0}%`,
                  }}
                />

              </div>

            </div>



            {/* LESSONS */}

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8">

              <h2 className="text-3xl font-bold mb-8">

                Course Modules

              </h2>



              <div className="space-y-5">



                {lessons.map((lesson) => (

                  <div
                    key={lesson.id}
                    className="border border-white/10 bg-[#111827] rounded-[24px] p-5 flex items-center justify-between"
                  >



                    <div>

                      <h3 className="font-semibold text-lg">

                        {lesson.title}

                      </h3>



                      <p className="text-gray-400 text-sm mt-2">

                        {lesson.duration}

                      </p>

                    </div>



                    {/* STATUS */}

                    <div>

                      {lesson.completed ? (

                        <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400">

                          ✓

                        </div>

                      ) : (

                        <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">

                          ▶

                        </div>

                      )}

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default CoursePlayer

