import { motion } from "framer-motion"

function TrustedSection() {

  return (

    <section className="relative py-32 overflow-hidden bg-[#030712] text-white">



      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-indigo-500/10 blur-[160px]" />



      <div className="max-w-7xl mx-auto px-8 relative z-10">



        {/* TOP SECTION */}

        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-20 items-center">



          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-indigo-400 uppercase tracking-[4px] text-sm font-semibold">

              Trusted Worldwide

            </p>



            <h2 className="text-[72px] leading-[0.95] font-black tracking-[-4px] mt-8">

              Built for the
              <br />

              Future of
              <br />

              Learning

            </h2>



            <p className="text-gray-400 text-2xl leading-relaxed mt-10 max-w-2xl">

              Empowering developers, students,
              creators, and AI learners through
              immersive personalized education experiences.

            </p>



            {/* LOGOS */}

            <div className="flex flex-wrap gap-5 mt-14">

              {[
                "Google",
                "Microsoft",
                "Netflix",
                "OpenAI",
                "Spotify",
                "Amazon"
              ].map((company) => (

                <div
                  key={company}
                  className="border border-white/10 bg-white/5 backdrop-blur-2xl px-6 py-4 rounded-2xl"
                >

                  <h3 className="text-lg font-semibold text-gray-300">

                    {company}

                  </h3>

                </div>

              ))}

            </div>

          </motion.div>



          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >



            {/* MAIN METRIC CARD */}

            <div className="relative border border-white/10 bg-white/5 backdrop-blur-2xl rounded-[40px] p-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] overflow-hidden">

              {/* INNER GLOW */}

              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />



              <div className="relative">

                <p className="text-gray-400 text-xl">
                  AI Recommendations Delivered
                </p>

                <h2 className="text-[110px] leading-none font-black mt-8">

                  12M+

                </h2>

                <p className="text-indigo-400 text-xl mt-6">

                  Personalized learning intelligence

                </p>



                {/* MINI METRICS */}

                <div className="grid grid-cols-2 gap-5 mt-14">

                  <div className="border border-white/10 bg-white/5 rounded-[24px] p-6">

                    <p className="text-gray-400">
                      Completion Rate
                    </p>

                    <h3 className="text-5xl font-bold mt-4">
                      94%
                    </h3>

                  </div>



                  <div className="border border-white/10 bg-white/5 rounded-[24px] p-6">

                    <p className="text-gray-400">
                      Learning Hours
                    </p>

                    <h3 className="text-5xl font-bold mt-4">
                      850K+
                    </h3>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  )
}

export default TrustedSection