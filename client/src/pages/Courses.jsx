
import Navbar from "../components/Navbar"

function Courses() {

  /* COURSES DATA */

  const courses = [

    {
      id: 1,
      title: "Advanced React Mastery",
      category: "Web Development",
      students: "12K+ Students",
      progress: 0,
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 2,
      title: "AI & Machine Learning Bootcamp",
      category: "Artificial Intelligence",
      students: "18K+ Students",
      progress: 0,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 3,
      title: "Cloud Computing Essentials",
      category: "Cloud Computing",
      students: "9K+ Students",
      progress: 0,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      category: "UI/UX Design",
      students: "15K+ Students",
      progress: 0,
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 5,
      title: "Cyber Security Professional",
      category: "Cyber Security",
      students: "11K+ Students",
      progress: 0,
      image:
        "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 6,
      title: "Data Science & Analytics",
      category: "Data Science",
      students: "21K+ Students",
      progress: 0,
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop",
    },

  ]



  /* ENROLL FUNCTION */

  const handleEnroll = (course) => {

    const existingCourses = JSON.parse(
      localStorage.getItem("enrolledCourses")
    ) || []



    const alreadyEnrolled = existingCourses.find(
      (item) => item.id === course.id
    )



    if (alreadyEnrolled) {

      alert("Already Enrolled")

      return

    }



    const updatedCourses = [
      ...existingCourses,
      course,
    ]



    localStorage.setItem(
      "enrolledCourses",
      JSON.stringify(updatedCourses)
    )



    alert("Course Enrolled Successfully")

  }



  return (

    <div className="min-h-screen bg-[#030712] text-white">

      {/* NAVBAR */}

      <Navbar />



      {/* PAGE CONTENT */}

      <div className="max-w-7xl mx-auto px-8 pt-40 pb-20">



        {/* HEADER */}

        <div className="mb-16">

          <p className="uppercase tracking-[4px] text-indigo-400 text-sm">

            Premium Learning

          </p>



          <h1 className="text-6xl font-black mt-6">

            Explore Courses

          </h1>



          <p className="text-gray-400 text-xl mt-6 max-w-3xl leading-relaxed">

            Discover AI-powered premium learning experiences,
            industry-ready skills,
            and immersive courses designed for future innovators.

          </p>

        </div>



        {/* COURSES GRID */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">



          {courses.map((course) => (

            <div
              key={course.id}
              className="bg-white/5 border border-white/10 rounded-[30px] overflow-hidden hover:scale-[1.02] transition duration-300"
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



                <p className="text-gray-400 mt-5">

                  {course.students}

                </p>



                {/* BUTTON */}

                <button
                  onClick={() => handleEnroll(course)}
                  className="mt-8 w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold hover:scale-[1.02] transition duration-300"
                >

                  Enroll Now

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  )
}

export default Courses
