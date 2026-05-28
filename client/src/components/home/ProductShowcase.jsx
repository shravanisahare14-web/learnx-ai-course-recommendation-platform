import { motion } from "framer-motion"

function ProductShowcase() {

  return (

    <section className="relative py-36 bg-[#030712] overflow-hidden text-white">



      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-purple-500/10 blur-[180px]" />



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

            Product Experience

          </p>



          <h2 className="text-[72px] leading-[0.95] font-black tracking-[-4px] mt-8">

            Built Like a
            <br />

            Modern AI Platform

          </h2>



          <p className="text-gray-400 text-2xl leading-relaxed mt-10">

            Experience immersive dashboards,
            intelligent analytics, AI recommendations,
            and premium learning workflows.

          </p>

        </motion.div>



        {/* MAIN SHOWCASE */}

        <div className="relative mt-24">



          {/* MAIN DASHBOARD */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative border border-white/10 bg-white/5 backdrop-blur-2xl rounded-[48px] p-10 overflow-hidden shadow-[0_20px_100px_rgba(0,0,0,0.45)]"
          >

            {/* INNER GLOW */}

            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />



            {/* DASHBOARD TOP */}

            <div className="relative flex items-center justify-between">

              <div>

                <p className="text-indigo-400 uppercase tracking-[3px] text-sm">

                  Learning Intelligence

                </p>

                <h3 className="text-5xl font-black mt-5">

                  AI Analytics Dashboard

                </h3>

              </div>



              <button className="border border-white/10 bg-white/5 px-6 py-3 rounded-2xl hover:bg-white/10 transition">

                Export Insights

              </button>

            </div>



            {/* ANALYTICS GRID */}

            <div className="grid md:grid-cols-3 gap-8 mt-16">



              <div className="border border-white/10 bg-white/5 rounded-[28px] p-8">

                <p className="text-gray-400">
                  AI Match Score
                </p>

                <h2 className="text-6xl font-black mt-6">
                  98%
                </h2>

              </div>



              <div className="border border-white/10 bg-white/5 rounded-[28px] p-8">

                <p className="text-gray-400">
                  Course Completion
                </p>

                <h2 className="text-6xl font-black mt-6">
                  94%
                </h2>

              </div>



              <div className="border border-white/10 bg-white/5 rounded-[28px] p-8">

                <p className="text-gray-400">
                  Learning Hours
                </p>

                <h2 className="text-6xl font-black mt-6">
                  850K+
                </h2>

              </div>

            </div>



            {/* GRAPH */}

            <div className="flex items-end justify-between mt-20 h-80">

              {[
                ["Mon", "h-28"],
                ["Tue", "h-44"],
                ["Wed", "h-36"],
                ["Thu", "h-60"],
                ["Fri", "h-72"],
                ["Sat", "h-56"],
                ["Sun", "h-40"],
              ].map(([day, height]) => (

                <div
                  key={day}
                  className="flex flex-col items-center"
                >

                  <div
                    className={`w-16 ${height} rounded-t-[24px] bg-gradient-to-t from-indigo-600 to-indigo-400`}
                  />

                  <p className="text-gray-500 mt-5">
                    {day}
                  </p>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  )
}

export default ProductShowcase