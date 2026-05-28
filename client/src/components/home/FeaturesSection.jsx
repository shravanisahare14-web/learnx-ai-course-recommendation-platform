import { motion } from "framer-motion"

function FeaturesSection() {

  return (

    <section className="relative py-36 bg-[#030712] overflow-hidden text-white">



      {/* BACKGROUND LIGHT */}

      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 blur-[160px]" />



      <div className="max-w-7xl mx-auto px-8 relative z-10">



        {/* TOP */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >

          <p className="text-indigo-400 uppercase tracking-[4px] text-sm font-semibold">

            Platform Features

          </p>



          <h2 className="text-[72px] leading-[0.95] font-black tracking-[-4px] mt-8">

            AI Learning
            <br />

            Reimagined

          </h2>



          <p className="text-gray-400 text-2xl leading-relaxed mt-10">

            Experience intelligent recommendations,
            immersive dashboards, adaptive learning paths,
            and modern analytics designed for the future.

          </p>

        </motion.div>



        {/* BENTO GRID */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-24">



          {/* LARGE CARD */}

          <motion.div
            whileHover={{ y: -10 }}
            className="lg:col-span-2 border border-white/10 bg-white/5 backdrop-blur-2xl rounded-[40px] p-10 overflow-hidden relative"
          >

            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/10 blur-[120px]" />



            <div className="relative z-10">

              <p className="text-indigo-400 uppercase tracking-[3px] text-sm">

                AI Recommendations

              </p>



              <h3 className="text-5xl font-black mt-6 leading-tight">

                Personalized Course
                <br />

                Discovery Engine

              </h3>



              <p className="text-gray-400 text-xl leading-relaxed mt-8 max-w-2xl">

                Advanced AI recommendation systems
                analyze learner behavior, skills,
                interests, and engagement patterns
                to create adaptive learning journeys.

              </p>



              {/* MOCK UI */}

              <div className="grid grid-cols-3 gap-5 mt-16">

                <div className="border border-white/10 bg-white/5 rounded-[24px] p-6">

                  <p className="text-gray-400">
                    Match Score
                  </p>

                  <h4 className="text-4xl font-bold mt-4">
                    98%
                  </h4>

                </div>



                <div className="border border-white/10 bg-white/5 rounded-[24px] p-6">

                  <p className="text-gray-400">
                    AI Accuracy
                  </p>

                  <h4 className="text-4xl font-bold mt-4">
                    94%
                  </h4>

                </div>



                <div className="border border-white/10 bg-white/5 rounded-[24px] p-6">

                  <p className="text-gray-400">
                    Learning Growth
                  </p>

                  <h4 className="text-4xl font-bold mt-4">
                    +67%
                  </h4>

                </div>

              </div>

            </div>

          </motion.div>



          {/* RIGHT TOP */}

          <motion.div
            whileHover={{ y: -10 }}
            className="border border-white/10 bg-white/5 backdrop-blur-2xl rounded-[40px] p-8"
          >

            <p className="text-indigo-400 uppercase tracking-[3px] text-sm">

              Analytics

            </p>



            <h3 className="text-4xl font-black mt-6">

              Real-Time
              Learning Insights

            </h3>



            {/* CHART */}

            <div className="flex items-end gap-4 mt-14 h-52">

              <div className="w-10 h-20 rounded-t-[20px] bg-gradient-to-t from-indigo-600 to-indigo-400" />

              <div className="w-10 h-40 rounded-t-[20px] bg-gradient-to-t from-indigo-600 to-indigo-400" />

              <div className="w-10 h-28 rounded-t-[20px] bg-gradient-to-t from-indigo-600 to-indigo-400" />

              <div className="w-10 h-48 rounded-t-[20px] bg-gradient-to-t from-indigo-600 to-indigo-400" />

            </div>

          </motion.div>



          {/* BOTTOM LEFT */}

          <motion.div
            whileHover={{ y: -10 }}
            className="border border-white/10 bg-white/5 backdrop-blur-2xl rounded-[40px] p-8"
          >

            <p className="text-indigo-400 uppercase tracking-[3px] text-sm">

              Smart Progress

            </p>



            <h3 className="text-4xl font-black mt-6">

              Adaptive
              Learning Paths

            </h3>



            <div className="mt-12">

              <div className="w-full h-5 bg-white/10 rounded-full overflow-hidden">

                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full w-[78%]" />

              </div>



              <p className="text-gray-400 mt-5 text-lg">

                AI-generated personalized progression tracking.

              </p>

            </div>

          </motion.div>



          {/* BOTTOM RIGHT */}

          <motion.div
            whileHover={{ y: -10 }}
            className="border border-white/10 bg-white/5 backdrop-blur-2xl rounded-[40px] p-8"
          >

            <p className="text-indigo-400 uppercase tracking-[3px] text-sm">

              Immersive Learning

            </p>



            <h3 className="text-4xl font-black mt-6">

              Premium Course Experience

            </h3>



            <div className="space-y-5 mt-12">

              <div className="border border-white/10 bg-white/5 rounded-2xl px-5 py-4">

                AI System Design

              </div>



              <div className="border border-white/10 bg-white/5 rounded-2xl px-5 py-4">

                Advanced Full Stack

              </div>



              <div className="border border-white/10 bg-white/5 rounded-2xl px-5 py-4">

                Machine Learning Mastery

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  )
}

export default FeaturesSection