import { motion } from "framer-motion"

function CTASection() {

  return (

    <section className="relative py-28 bg-[#030712] overflow-hidden text-white">



      {/* SUBTLE BACKGROUND GLOW */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />



      <div className="max-w-5xl mx-auto px-8 relative z-10">



        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-white/10 bg-white/5 backdrop-blur-2xl rounded-[40px] px-10 py-20 md:px-20 text-center shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
        >



          {/* SMALL LABEL */}

          <p className="text-indigo-400 uppercase tracking-[4px] text-sm font-semibold">

            Ready To Begin?

          </p>



          {/* CLEAN TITLE */}

          <h2 className="text-[56px] md:text-[72px] leading-[0.95] font-black tracking-[-4px] mt-8">

            Start Learning
            <br />

            Smarter Today

          </h2>



          {/* DESCRIPTION */}

          <p className="text-gray-400 text-xl md:text-2xl leading-relaxed mt-8 max-w-3xl mx-auto">

            Join a premium AI-powered learning platform
            designed to help developers, creators,
            and future innovators grow faster.

          </p>



          {/* BUTTONS */}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-14">



            <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-lg font-semibold shadow-[0_10px_40px_rgba(99,102,241,0.35)] hover:scale-105 transition duration-300">

              Get Started →

            </button>



            <button className="px-10 py-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-lg">

              Explore Courses

            </button>

          </div>

        </motion.div>

      </div>

    </section>

  )
}

export default CTASection