import { motion } from "framer-motion"

function RecommendationSection() {

  const recommendations = [
    {
      title: "Advanced React Architecture",
      category: "Frontend Engineering",
      reason: "Because you completed Full Stack Development",
    },

    {
      title: "Machine Learning Foundations",
      category: "Artificial Intelligence",
      reason: "Matches your AI learning interests",
    },

    {
      title: "Cloud & DevOps Systems",
      category: "Cloud Computing",
      reason: "Recommended for scalable backend skills",
    },
  ]

  return (

    <section className="relative py-36 bg-[#030712] overflow-hidden text-white">



      {/* BACKGROUND LIGHT */}

      <div className="absolute left-0 bottom-0 w-[700px] h-[700px] bg-indigo-500/10 blur-[180px]" />



      <div className="max-w-7xl mx-auto px-8 relative z-10">



        {/* TOP */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >

          {/* LEFT */}

          <div>

            <p className="text-indigo-400 uppercase tracking-[4px] text-sm font-semibold">

              AI Recommendation Engine

            </p>



            <h2 className="text-[72px] leading-[0.95] font-black tracking-[-4px] mt-8">

              Personalized
              <br />

              Learning Paths

            </h2>



            <p className="text-gray-400 text-2xl leading-relaxed mt-10 max-w-2xl">

              Intelligent recommendation systems analyze
              learner behavior, skills, progress,
              and engagement patterns to create
              adaptive learning experiences.

            </p>



            {/* FEATURE STRIPS */}

            <div className="space-y-5 mt-14">



              <div className="border border-white/10 bg-white/5 backdrop-blur-2xl rounded-[24px] px-6 py-5">

                <p className="text-gray-500 text-sm">
                  Recommendation Accuracy
                </p>

                <h3 className="text-4xl font-black mt-3">
                  98%
                </h3>

              </div>



              <div className="border border-white/10 bg-white/5 backdrop-blur-2xl rounded-[24px] px-6 py-5">

                <p className="text-gray-500 text-sm">
                  AI Skill Matching
                </p>

                <h3 className="text-4xl font-black mt-3">
                  Smart Adaptive Learning
                </h3>

              </div>

            </div>

          </div>



          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="border border-white/10 bg-white/5 backdrop-blur-2xl rounded-[40px] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
          >

            {/* TOP */}

            <div className="flex items-center justify-between">

              <div>

                <p className="text-indigo-400 uppercase tracking-[3px] text-sm">

                  Recommended For You

                </p>

                <h2 className="text-4xl font-black mt-4">

                  AI Suggestions

                </h2>

              </div>



              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-2xl">

                ✦

              </div>

            </div>



            {/* RECOMMENDATION CARDS */}

            <div className="space-y-6 mt-12">

              {recommendations.map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="border border-white/10 bg-white/5 rounded-[28px] p-6"
                >

                  <div className="flex items-start justify-between gap-5">

                    <div>

                      <p className="text-indigo-400 text-sm uppercase tracking-[3px]">

                        {item.category}

                      </p>

                      <h3 className="text-3xl font-black mt-4 leading-tight">

                        {item.title}

                      </h3>

                      <p className="text-gray-400 mt-5 leading-relaxed">

                        {item.reason}

                      </p>

                    </div>



                    <button className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-2xl hover:bg-white/10 transition">

                      →

                    </button>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>

  )
}

export default RecommendationSection