
import { motion } from "framer-motion"

import Navbar from "../components/Navbar"

import TrustedSection from "../components/home/TrustedSection"
import FeaturesSection from "../components/home/FeaturesSection"
import ProductShowcase from "../components/home/ProductShowcase"
import RecommendationSection from "../components/home/RecommendationSection"
import TestimonialsSection from "../components/home/TestimonialsSection"
import CTASection from "../components/home/CTASection"
import Footer from "../components/home/Footer"

function Home() {

  return (

    <>

      {/* NAVBAR */}

      <Navbar />



      <div className="relative min-h-screen overflow-hidden bg-[#030712] text-white">



        {/* BACKGROUND LIGHTING */}

        <div className="absolute top-[-300px] left-[-200px] w-[700px] h-[700px] bg-indigo-600/20 blur-[180px] rounded-full" />

        <div className="absolute bottom-[-300px] right-[-200px] w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full" />



        {/* HERO SECTION */}

        <section className="relative max-w-7xl mx-auto px-8 pt-28 pb-20">



          <div className="grid lg:grid-cols-2 gap-24 items-center">



            {/* LEFT SIDE */}

            <div>



              {/* BADGE */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-3 rounded-full"
              >

                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />

                <p className="text-sm text-gray-300 tracking-wide">

                  AI-Powered Learning Intelligence

                </p>

              </motion.div>



              {/* HERO HEADING */}

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-[96px] leading-[0.9] font-black tracking-[-6px] mt-10"
              >

                Learn
                <br />

                Smarter
                <br />

                with
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">

                  {" "}AI

                </span>

              </motion.h1>



              {/* DESCRIPTION */}

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 text-2xl leading-relaxed mt-10 max-w-xl"
              >

                Discover immersive AI-powered learning
                experiences, intelligent recommendations,
                modern dashboards, and premium upskilling
                journeys built for the future.

              </motion.p>



              {/* BUTTONS */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-5 mt-14"
              >

                <button className="bg-gradient-to-r from-indigo-500 to-purple-500 px-10 py-5 rounded-2xl text-lg font-semibold shadow-[0_10px_40px_rgba(99,102,241,0.45)] hover:scale-105 transition duration-300">

                  Start Learning →

                </button>



                <button className="border border-white/10 bg-white/5 backdrop-blur-xl px-10 py-5 rounded-2xl text-lg hover:bg-white/10 transition">

                  Watch Demo

                </button>

              </motion.div>



              {/* STATS */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-14 mt-20"
              >

                <div>

                  <h2 className="text-5xl font-bold">
                    50K+
                  </h2>

                  <p className="text-gray-400 mt-3">
                    Active Learners
                  </p>

                </div>



                <div className="w-px h-20 bg-white/10" />



                <div>

                  <h2 className="text-5xl font-bold">
                    1.2K+
                  </h2>

                  <p className="text-gray-400 mt-3">
                    Premium Courses
                  </p>

                </div>



                <div className="w-px h-20 bg-white/10" />



                <div>

                  <h2 className="text-5xl font-bold">
                    98%
                  </h2>

                  <p className="text-gray-400 mt-3">
                    AI Match Accuracy
                  </p>

                </div>

              </motion.div>

            </div>



            {/* RIGHT SIDE */}

            <div className="relative flex items-center justify-center">



              {/* MAIN DASHBOARD */}

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative w-[560px] rounded-[42px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
              >

                {/* INNER GLOW */}

                <div className="absolute inset-0 rounded-[42px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />



                {/* TOP */}

                <div className="relative flex items-start justify-between">

                  <div>

                    <p className="text-gray-400 text-xl">
                      Learning Progress
                    </p>

                    <h2 className="text-7xl font-bold mt-4">
                      78%
                    </h2>



                    <div className="inline-flex items-center gap-2 mt-6 border border-white/10 bg-white/5 px-4 py-2 rounded-xl text-gray-300">

                      ↗ +12% this week

                    </div>

                  </div>



                  <div className="w-24 h-24 rounded-[30px] bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-4xl font-bold shadow-[0_10px_40px_rgba(99,102,241,0.45)]">

                    AI

                  </div>

                </div>



                {/* CHART */}

                <div className="relative flex items-end justify-between mt-20 h-72">

                  {[
                    ["Mon", "h-24"],
                    ["Tue", "h-40"],
                    ["Wed", "h-32"],
                    ["Thu", "h-48"],
                    ["Fri", "h-64"],
                    ["Sat", "h-44"],
                  ].map(([day, height]) => (

                    <div
                      key={day}
                      className="flex flex-col items-center"
                    >

                      <div
                        className={`w-14 ${height} rounded-t-[24px] bg-gradient-to-t from-indigo-600 to-indigo-400`}
                      />

                      <p className="text-gray-500 mt-4">
                        {day}
                      </p>

                    </div>

                  ))}

                </div>



                {/* RECOMMENDATION */}

                <div className="relative mt-16 border border-white/10 bg-white/5 backdrop-blur-xl rounded-[30px] px-7 py-6 flex items-center justify-between">

                  <div className="flex items-start gap-5">

                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-2xl">

                      ✦

                    </div>



                    <div>

                      <p className="text-indigo-400 text-sm">
                        AI Recommendation
                      </p>

                      <h3 className="text-3xl font-bold mt-2">
                        Advanced System Design
                      </h3>

                      <p className="text-gray-400 mt-3">

                        Based on your full stack learning path.

                      </p>

                    </div>

                  </div>



                  <button className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-2xl hover:bg-white/10 transition">

                    →

                  </button>

                </div>

              </motion.div>

            </div>

          </div>

        </section>

      </div>



      {/* OTHER SECTIONS */}

      <TrustedSection />
      <FeaturesSection />
      <ProductShowcase />
      <RecommendationSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />

    </>

  )
}

export default Home
