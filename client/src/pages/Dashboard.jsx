
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"

function Dashboard() {

  /* NAVIGATION */

  const navigate = useNavigate()



  /* USER */

  const user = JSON.parse(
    localStorage.getItem("user")
  )



  /* ENROLLED COURSES */

  const enrolledCourses = JSON.parse(
    localStorage.getItem("enrolledCourses")
  ) || []



  /* ALL COURSES */

  const allCourses = [

    {
      id: 1,
      title: "Advanced React Mastery",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 2,
      title: "AI & Machine Learning Bootcamp",
      category: "Artificial Intelligence",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 3,
      title: "Cloud Computing Essentials",
      category: "Cloud Computing",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 4,
      title: "Cyber Security Professional",
      category: "Cyber Security",
      image:
        "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 5,
      title: "Data Science & Analytics",
      category: "Data Science",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop",
    },

  ]



  /* AI RECOMMENDATIONS */

  const recommendedCourses = allCourses.filter((course) =>

    user?.interests?.includes(course.category)

  )



  return (

    <div className="min-h-screen bg-[#030712] text-white">

      {/* NAVBAR */}

      <Navbar />



      {/* MAIN CONTENT */}

      <div className="max-w-7xl mx-auto px-8 pt-40 pb-20">



        {/* HERO */}

        <div className="mb-16">

          <p className="uppercase tracking-[4px] text-indigo-400 text-sm">

            AI Learning Dashboard

          </p>



          <h1 className="text-6xl font-black mt-6">

            Welcome back,
            <span className="text-indigo-400">

              {" "}{user?.name}

            </span>

          </h1>



          <p className="text-gray-400 text-xl mt-6 max-w-3xl leading-relaxed">

            Personalized AI recommendations,
            enrolled courses,
            and immersive premium learning experiences.

          </p>

        </div>



        {/* STATS */}

        <div className="grid md:grid-cols-3 gap-8 mb-20">



          <div className="bg-white/5 border border-white/10 rounded-[30px] p-8">

            <p className="text-gray-400">

              Enrolled Courses

            </p>



            <h2 className="text-6xl font-black mt-4">

              {enrolledCourses.length}

            </h2>

          </div>



          <div className="bg-white/5 border border-white/10 rounded-[30px] p-8">

            <p className="text-gray-400">

              Learning Interests

            </p>



            <h2 className="text-4xl font-black mt-4 leading-snug">

              {user?.interests?.length || 0}

            </h2>

          </div>



          <div className="bg-white/5 border border-white/10 rounded-[30px] p-8">

            <p className="text-gray-400">

              AI Recommendations

            </p>



            <h2 className="text-6xl font-black mt-4">

              {recommendedCourses.length}

            </h2>

          </div>

        </div>



        {/* AI RECOMMENDATIONS */}

        <div className="mb-20">

          <div className="flex items-center justify-between mb-10">

            <h2 className="text-4xl font-black">

              Recommended For You

            </h2>



            <p className="text-indigo-400">

              AI Powered

            </p>

          </div>



          {recommendedCourses.length === 0 ? (

            <div className="border border-white/10 bg-white/5 rounded-[32px] p-12 text-center">

              <h2 className="text-3xl font-bold">

                No Recommendations Yet

              </h2>



              <p className="text-gray-400 mt-5">

                Update interests to unlock AI recommendations.

              </p>

            </div>

          ) : (

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">



              {recommendedCourses.map((course) => (

                <div
                  key={course.id}
                  className="bg-white/5 border border-white/10 rounded-[30px] overflow-hidden"
                >



                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-56 object-cover"
                  />



                  <div className="p-7">



                    <p className="text-indigo-400 text-sm">

                      {course.category}

                    </p>



                    <h2 className="text-3xl font-bold mt-4 leading-snug">

                      {course.title}

                    </h2>



                    <button
                      onClick={() => navigate("/courses")}
                      className="mt-8 w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold"
                    >

                      Explore Course

                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>



        {/* ENROLLED COURSES */}

        <div>

          <div className="flex items-center justify-between mb-10">

            <h2 className="text-4xl font-black">

              Continue Learning

            </h2>

          </div>



          {enrolledCourses.length === 0 ? (

            <div className="border border-white/10 bg-white/5 rounded-[32px] p-12 text-center">

              <h2 className="text-3xl font-bold">

                No Enrolled Courses

              </h2>

            </div>

          ) : (

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">



              {enrolledCourses.map((course) => (

                <div
                  key={course.id}
                  className="bg-white/5 border border-white/10 rounded-[30px] overflow-hidden"
                >



                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-56 object-cover"
                  />



                  <div className="p-7">



                    <p className="text-indigo-400 text-sm">

                      {course.category}

                    </p>



                    <h2 className="text-3xl font-bold mt-4 leading-snug">

                      {course.title}

                    </h2>



                    <button
                      onClick={() =>
                        navigate(`/course-player/${course.id}`)
                      }
                      className="mt-8 w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold"
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

    </div>

  )
}

export default Dashboard
